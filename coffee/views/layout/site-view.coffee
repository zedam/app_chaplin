define [
  'views/base/view'
  'text!templates/layout/site.hbs'
], (View, template) ->
  'use strict'

  class SiteView extends View
    initialize: ->
      ### handler to hide any open select box ###
      @delegateEvents 'click': @selectable_hidden

    container: 'body'
    tagName: 'section'

    regions:
      main: '#main-container'
      header: '#header-container'
      footer: '#footer-container'

    selectable_hidden: (e) ->
      @publishEvent 'hideSelectBox', e

    template: template
    template = null
