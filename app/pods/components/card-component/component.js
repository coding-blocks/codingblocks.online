import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    var $ = Ember.$;
    $(window).scroll(function(e){
      var img = $('.img-main');
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        img.css('background-position-y', -top - img.offset().top)
    })
  }

});
