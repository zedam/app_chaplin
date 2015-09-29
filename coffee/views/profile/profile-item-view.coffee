define [
  'views/base/view'
  'text!templates/profile/profile-item-view.hbs'
], (View, template) ->
  'use strict'

  class ProfileItemView extends View
    autoRender: true

    template: template
    template = null
