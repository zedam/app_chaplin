define [
  'views/base/view'
  'text!templates/layout/footer-view.hbs'
], (BaseView, template) ->
  'use strict'

  class FooterView extends BaseView
    className: 'footer'
    tagName: 'footer'

    template: template
    template = null