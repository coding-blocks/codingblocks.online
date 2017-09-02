import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  didInsertElement() {
    var $ = Ember.$;

    function setBackground() {
      var img = $('.img-main');
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

      if(img !== 'undefined' && img.offset() != null) {
        img.css('background-position-y', -top - img.offset().top);
      }
    }

    //$(window).scroll(setBackground);
  },
  actions: {
    login() {
            var redirectionPath = window.location.pathname;
            redirectionPath = redirectionPath.replace(/^\/|\/$/g, '');
            localStorage.setItem('redirection-path', redirectionPath);
            window.location = "https://account.codingblocks.com/oauth/authorize?" +
                "response_type=code" +
                "&client_id=2146237097" +
                "&redirect_uri=" + config.publicUrl
    }
  }
});
