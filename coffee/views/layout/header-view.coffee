define [
  'views/base/view'
  'text!templates/layout/header-view.hbs'
], (BaseView, template) ->
  'use strict'

  class HeaderView extends BaseView

    animationDuration: 2000

    template: template
    template = null