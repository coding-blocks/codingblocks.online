import Ember from 'ember'
import config from '../../../config/environment';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),
    routing: Ember.inject.service('-routing'),
    $ : Ember.$,
    img : null,
    navbar: null,
    anchorColor: null,
    mainSection: null,

    init() {
      this._super();
      this.get('routing.currentRouteName');
    },

    setnavWhite: function() {

      this.get('navbar').removeClass('nav-transparent').addClass('nav-white');
      this.get('anchorColor').css({
        'color': 'black'
      });
    },

    setnavTransparent: function() {
      this.get('navbar').removeClass('nav-white').addClass('nav-transparent');

      this.get('anchorColor').css({
        'color': 'white'
      });
    },


    checkRoute: Ember.observer('routing.currentRouteName', function () {

        if (this.get('routing.currentRouteName') === 'index') {
            this.setnavTransparent();
        }
        else {
            this.setnavWhite();
        }

    }),

    actions: {
        login() {
            var redirectionPath = window.location.pathname;
            redirectionPath = redirectionPath.replace(/^\/|\/$/g, '');
            localStorage.setItem('redirection-path', redirectionPath);
            window.location = "https://account.codingblocks.com/oauth/authorize?" +
                "response_type=code" +
                "&client_id=2146237097" +
                "&redirect_uri=" + config.publicUrl
        },
        invalidateSession() {
            this.get('session').invalidate();
        }

    },

   didInsertElement() {

     var self = this;
     this.set('img', $('.img-main'));
     this.set('navbar', $('.custom-nav'));
     this.set('anchorColor', $('.custom-nav-link'));
     if(this.get('img') !== 'undefined') {
       this.set('mainSection', this.get('img').offset().top);
     }


     function scrollTop() {
       var doc = document.documentElement;
       var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

       if(self.get('routing.currentRouteName') === 'index') {
         if (top >= (self.get('mainSection') - 54) )  {
           self.setnavWhite();

         }
         else {

           self.setnavTransparent();

         }
       }
     }

     if(this.get('routing.currentRouteName') === 'index') {
       $(window).scroll(scrollTop);
     }
     else {
       $(window).off(scrollTop);
     }


   }

});
