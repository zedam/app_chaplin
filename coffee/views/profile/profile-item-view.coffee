define [
  'views/base/view'
  'text!templates/profile/profile-item-view.hbs'
], (View, template) ->
  'use strict'

  class ProfileItemView extends View
    initialize: ->

      $(@el).hide()
      $(@el).fadeIn('5000')

    autoRender: true

    template: template
    template = null
