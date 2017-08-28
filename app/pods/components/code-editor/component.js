import Ember from 'ember';
import {task, timeout} from 'ember-concurrency';
import getSnippet from '../../../utils/get-snippet';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  api: Ember.inject.service(),
  notify: Ember.inject.service('notify'),
  lang: 'c',
  onceEdit: false,
  customInput: '',
  theme: 'ace/theme/chaos',
  runOutput: null,
  submitOutput:null,
  editor: null,
  editorMode: Ember.computed('lang', function () {
    ace.require("ace/src/snippets");
    const lang = this.get('lang')
    if (['c','cpp'].includes(lang) )
      return `ace/mode/c_cpp`
    else if (lang === 'js')
      return `ace/mode/javascript`
    else
      return `ace/mode/${this.get('lang')}`
  }),
  langName: Ember.computed('lang', function () {
    switch(this.get('lang')) {
      case 'c' : return 'C';
      case 'cpp': return 'C++';
      case 'js': return 'Node Js';
      case 'java': return 'Java'
    }
  }),
  runCodeTask: task(function * () {
    const ajax = this.get('ajax'),
       code = this.get('editor').getSession().getValue()

    const res = yield ajax.request('https://judge.cb.lk/api/submission', {
      method: 'POST',
      data: {
        lang: this.get('lang'),
        source: window.btoa(code),
        test_count: 1,
        input: [window.btoa(this.get('customInput'))],
        expected_output: [''],
        get_output: true,
        wait: true
      },
      headers: {
        'Access-Token': '79f3c2f8301fc60565de003f4ac76a1d4e5242cb0836995ec2bd28fd083ce86g'
      }
    }).catch(err=>{
      this.get('notify').alert('Some error occurred.Please try again later');
    })

    if (res.error) {
      this.set('runOutput', window.atob(res.error) )
    } else {
      this.set('runOutput', window.atob(res.data.testcases[0].output) )
    }

  }).drop(),
  didInsertElement () {
    this._super(...arguments)
    ace.require("ace/src/ext-language_tools");
    ace.require("ace/src/snippets");
    ace.config.set('basePath', '/assets/ace');
    this._super(...arguments);
    let editor = ace.edit("editor");
    let self = this;
    editor.textInput.getElement().onkeyup = function (event) {
	   self.set("onceEdit",true);
    }; 
    //editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/c_cpp");
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    });
    editor.session.setValue(getSnippet('c'));
    this.set('editor', editor)
  },
  actions: {
    changeLanguage (newLang) {
      this.set('lang', newLang)
      const editor = this.get('editor')
      editor.session.setMode(this.get('editorMode'))
      if(this.get("onceEdit") == false)
          editor.session.setValue(getSnippet(this.get('lang')));
    },
    runCode () {
      this.get('runCodeTask').perform()
    },
    submitCode () {
      const code = window.btoa(this.get('editor').getSession().getValue()),
        lang = this.get('lang')

      this.get('onSubmitTask').perform({code, lang}).then(res => {
	      if(res.result =="compile_error") {
		      res.data = window.atob(res.error);
	      }
	      else if(res.result == "success") {
		      res.data = res.data.testcases
	      }
	      this.set("submitOutput",res);
      })
    }
  }
});
