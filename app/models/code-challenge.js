/**
 * Created by abhishek on 20/07/17.
 */
'use strict';

import DS from 'ember-data';
import Ember from 'ember';
import env from 'vlyop-frontend/config/environment'

export default DS.Model.extend({
  modelName: Ember.computed.alias('constructor.modelName'),
  name: DS.attr(),
  hbContestId: DS.attr(),
  hbProblemId: DS.attr(),
  hbUrl: Ember.computed ('hbContestId', 'hbProblemId', function () {
    const hbContestId = this.get('hbContestId'),
      hbProblemId = this.get('hbProblemId')

    return `${env.hbBaseUrl}/contests/c/${hbContestId}/${hbProblemId}`
  }),
  parentContent: DS.belongsTo('content')
})
