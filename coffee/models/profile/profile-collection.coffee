define [
  'module'
  'models/base/collection'
  'models/profile/profile-model'
], (module, BaseCollection, ProfileModel) ->
  'use strict'

  class ProfileCollection extends BaseCollection

    model: ProfileModel

    url: 'http://thuisbar.stage.codedazur.nl/fridges'

