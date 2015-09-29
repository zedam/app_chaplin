define [
  'models/base/model'
], (Model) ->
  'use strict'

  class ProfileModel extends Model
    urlRoot: 'http://thuisbar.stage.codedazur.nl/fridges'
    defaults:
      name: ''
      color: ''
      image: ''
