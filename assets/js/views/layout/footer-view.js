var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'text!templates/layout/footer-view.hbs'], function(BaseView, template) {
  'use strict';
  var FooterView;
  return FooterView = (function(superClass) {
    extend(FooterView, superClass);

    function FooterView() {
      return FooterView.__super__.constructor.apply(this, arguments);
    }

    FooterView.prototype.className = 'footer';

    FooterView.prototype.tagName = 'footer';

    FooterView.prototype.template = template;

    template = null;

    return FooterView;

  })(BaseView);
});

//# sourceMappingURL=../../maps/views/layout/footer-view.js.map