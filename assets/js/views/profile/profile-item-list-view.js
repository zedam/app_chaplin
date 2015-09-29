var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'models/profile/profile-model', 'text!templates/profile/profile-item-list-view.hbs'], function(BaseView, EventModel, template) {
  'use strict';
  var EventItemView;
  return EventItemView = (function(superClass) {
    extend(EventItemView, superClass);

    function EventItemView() {
      return EventItemView.__super__.constructor.apply(this, arguments);
    }

    EventItemView.prototype.model = EventModel;

    EventItemView.prototype.tagName = 'li';

    EventItemView.prototype.className = 'profile-item-list__container';

    EventItemView.prototype.autoRender = true;

    EventItemView.prototype.template = template;

    template = null;

    return EventItemView;

  })(BaseView);
});

//# sourceMappingURL=../../maps/views/profile/profile-item-list-view.js.map