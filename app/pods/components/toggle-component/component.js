import Ember from 'ember';

export default Ember.Component.extend({
  titleText: Ember.computed('title', function () {
    const title = this.get('title')
    if (Ember.isNone(title) || title === '')
      return 'Video';
    else
      return this.get('title')
  }),
  toggle: true,
  hidePlaylist(playlist,video) {
    playlist.css({transform: 'translateX(1800px)',
      transition: '.5s'
    });
    video.css({width: '100vw',
      transition: '.4s'}
    );
  },
  showPlaylist(playlist,video) {
    playlist.css({transform: 'translateX(0px)',
      transition: '.5s'
    });
    video.css({width: '75vw',
      transition: '.5s'}
    );
  },

    actions: {

      togglePlaylist() {
        console.log("main");
        const playlist = Ember.$('.sections');
        const video    = Ember.$('.video-container');

        if(this.toggle) {
          this.hidePlaylist(playlist,video);
        }
        else {
          this.showPlaylist(playlist,video);
        }
        console.log(this.toggle);
        this.toggle = !this.toggle;
      }

    }


});
