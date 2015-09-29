var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'text!templates/profile/profile-item-view.hbs'], function(View, template) {
  'use strict';
  var ProfileItemView;
  return ProfileItemView = (function(superClass) {
    extend(ProfileItemView, superClass);

    function ProfileItemView() {
      return ProfileItemView.__super__.constructor.apply(this, arguments);
    }

    ProfileItemView.prototype.autoRender = true;

    ProfileItemView.prototype.template = template;

    template = null;

    return ProfileItemView;

  })(View);
});

//# sourceMappingURL=../../maps/views/profile/profile-item-view.js.map