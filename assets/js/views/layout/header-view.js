var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'text!templates/layout/header-view.hbs'], function(BaseView, template) {
  'use strict';
  var HeaderView;
  return HeaderView = (function(superClass) {
    extend(HeaderView, superClass);

    function HeaderView() {
      return HeaderView.__super__.constructor.apply(this, arguments);
    }

    HeaderView.prototype.animationDuration = 2000;

    HeaderView.prototype.template = template;

    template = null;

    return HeaderView;

  })(BaseView);
});

//# sourceMappingURL=../../maps/views/layout/header-view.js.map