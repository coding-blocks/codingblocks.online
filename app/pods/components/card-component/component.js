import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    var $ = Ember.$;

    function setBackground() {
      var img = $('.img-main');
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

      if(img !== 'undefined') {
        img.css('background-position-y', -top - img.offset().top);
      }
    }

    $(window).scroll(setBackground);
  }
});
