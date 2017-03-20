import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service('ajax'),

  model(params) {
    return this.get('ajax').request('repos/' + params.username + '/' + params.repo_name + '/commits');
  }

});




