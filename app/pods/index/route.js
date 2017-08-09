import Ember from 'ember';


export default Ember.Route.extend({
    model () {
      "use strict";

      const customParams = { ext: 'url', url: 'all' }

      return Ember.RSVP.hash ({
        allCourses: this.store.query ('course', { custom: customParams }),
        recommendedCourses: this.store.query ('course', {
          custom: customParams,
          recommended: true
        })
      })
    }

});



/*
 $(window).scroll(function(e){
 var doc = document.documentElement;
 var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
 var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

 $('.img-main').css('background-position-y', -top+$('.img-main').offset().top  )


 })
 */
