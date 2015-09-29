define [
  'chaplin'
  'views/layout/site-view'
  'views/layout/header-view'
  'views/layout/footer-view'
], (Chaplin, SiteView, HeaderView, FooterView) ->
  'use strict'

  class Controller extends Chaplin.Controller

    beforeAction: ->
      @reuse 'site', SiteView
      @reuse 'header', HeaderView, region: 'header'
      @reuse 'footer', FooterView, region: 'footer'
