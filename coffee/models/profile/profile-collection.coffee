define [
  'models/base/collection'
  'models/profile/profile-model'
], (BaseCollection, ProfileModel) ->
  'use strict'

  class ProfileCollection extends BaseCollection

    model: ProfileModel

    url: 'http://thuisbar.stage.codedazur.nl/fridges'

