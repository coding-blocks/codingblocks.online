import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
  },
  setNavColor(pathName) {
    var navbar = Ember.$('.custom-nav');
    var navLink = Ember.$('.custom-nav-link');

    if (pathName !== 'index') {
      // Set White
      navbar.removeClass('nav-transparent')
        .addClass('nav-white');
      navLink.css('color','black');

    } else {
      // Set Transparent
      navbar.removeClass('nav-white')
        .addClass('nav-transparent')
      navLink.css('color','white')
    }
  },
  scrollTop() {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    var navbar = Ember.$('.custom-nav');
    var navLink = Ember.$('.custom-nav-link');
    if (Ember.$('#main-start').offset() != null) {
      var mainSection = Ember.$('#main-start').offset().top;

      if (top >= (mainSection - 54) )  {
        navbar.removeClass('nav-transparent').addClass('nav-white');
        navLink.css('color','black')
      }
      else {
        navbar.removeClass('nav-white').addClass('nav-transparent');
        navLink.css('color','white');
      }
    }
  },
  scrollHomepage() {
    $(window).scroll(this.scrollTop);
  }
});
