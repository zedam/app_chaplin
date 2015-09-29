var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['models/base/model'], function(BaseModel) {
  'use strict';
  var SelectBox;
  return SelectBox = (function(superClass) {
    var defaults;

    extend(SelectBox, superClass);

    function SelectBox() {
      return SelectBox.__super__.constructor.apply(this, arguments);
    }

    defaults = {
      name: '',
      id: '',
      value: '',
      placeholder: '',
      values: ''
    };

    return SelectBox;

  })(BaseModel);
});

//# sourceMappingURL=../../maps/models/component/select-box-model.js.map