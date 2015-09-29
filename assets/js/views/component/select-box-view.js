var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'text!templates/layout/select-box-view.hbs'], function(BaseView, template) {
  'use strict';
  var SelectBox;
  return SelectBox = (function(superClass) {
    extend(SelectBox, superClass);

    function SelectBox() {
      return SelectBox.__super__.constructor.apply(this, arguments);
    }

    SelectBox.prototype.autoRender = true;

    SelectBox.prototype.template = template;

    template = null;

    return SelectBox;

  })(BaseView);
});

//# sourceMappingURL=../../maps/views/component/select-box-view.js.map