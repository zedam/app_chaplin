define [
  'views/base/view'
  'text!templates/layout/header-view.hbs'
], (BaseView, template) ->
  'use strict'

  class HeaderView extends BaseView

    template: template
    template = null