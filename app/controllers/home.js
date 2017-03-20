import Ember from 'ember';


export default Ember.Controller.extend({
  ajax: Ember.inject.service('ajax'),

  actions: {
    displayapi(username) {
        this.get('ajax').request('users/'+username).then((data) => {
          this.set('user', data);
        });


        this.get('ajax').request('users/'+username+'/repos').then((data) => {
          this.set('repo', data);
        });


    }


  }

});


