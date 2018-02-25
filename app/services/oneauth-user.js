import Ember from 'ember';

const { $, inject: { service }, isNone } = Ember;

export default Ember.Service.extend({
  localStorageKeyName: "oneauth-user",
  cacheInvalidationPeriod: 2*60*60*1000,

  // returns a Promise which resolve oneauth's user obj
  // a request is made if the user not available in the localStorage or is stale
  getUser () {
    return this._getUserFromStore()
  },
  _load () {
    return new Promise( (resolve, reject) => {
        $.ajax ({
            url: 'https://account.codingblocks.com/api/users/me',
            xhrFields: {
                withCredentials: true
            }
        }).done ( data => {
            this.set('user', data)
            this._saveUserToStore()
            resolve(data)
        })
    })
  },
  _saveUserToStore () {
      const user = this.get('user')
      const obj = {user, timestamp: Date.now()}
      window.localStorage.setItem(this.get('localStorageKeyName'), JSON.stringify(obj))
  },
  _getUserFromStore () {
    const {user, timestamp} = JSON.parse(window.localStorage.getItem(this.get('localStorageKeyName'))) || {}
    if ( isNone(user) || isNone(timestamp) || Date.now() - timestamp > this.get('cacheInvalidationPeriod')) {
        return this._load()
    } else {
        this.set('user', user);
        return Promise.resolve(user)
    }
  }
});
