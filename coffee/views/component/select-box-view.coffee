define [
  'views/base/view'
  'text!templates/layout/select-box-view.hbs'
], (BaseView, template) ->
  'use strict'

  class SelectBox extends BaseView
    autoRender: true

    template: template
    template = null