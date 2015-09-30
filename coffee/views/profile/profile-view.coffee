define [
  'views/base/view'
  'text!templates/profile/profile-view.hbs'
], (BaseView, template) ->
  'use strict'

  class HomeView extends BaseView
    initialize: ->
      @delegateEvents 'click #form-opener': @formOpening
      $(@el).hide()
      $(@el).fadeIn('5000')

    animationDuration: 20000
    autoRender: true
    className: 'home-container'

    regions:
      list: '#list-container'
      form: '#form-container'

    formOpening: (e)->
      $('#form-opener').fadeOut('fast', () ->
        $('#form-user').slideDown('fast')
      )


    # Save the template string in a prototype property.
    # This is overwritten with the compiled template function.
    # In the end you might want to used precompiled templates.
    template: template
    template = null

