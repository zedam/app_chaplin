define [
  'views/base/view'
  'models/profile/profile-model'
  'text!templates/profile/profile-item-list-view.hbs'
], (BaseView, EventModel, template) ->
  'use strict'

  class EventItemView extends BaseView

    model: EventModel

    tagName: 'li'

    className: 'profile-item-list__container'

    autoRender: true

    template: template

    template = null