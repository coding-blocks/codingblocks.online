/**
 * Created by abhishek on 26/07/17.
 */
'use strict';
import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  score: DS.attr(),
  code: DS.attr(),
  lang: DS.attr(),
  langName: Ember.computed('lang', function () {
    switch (this.get('lang')) {
      case 'c': return 'C';
      case 'cpp': return 'C++';
      case 'py2': return 'Python 2.7';
      case 'js': return 'Node Js';
      case 'java': return 'Java';
    }
    return 'Unknown Language'
  })
})
