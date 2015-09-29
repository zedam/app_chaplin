var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['models/base/model'], function(Model) {
  'use strict';
  var ProfileModel;
  return ProfileModel = (function(superClass) {
    extend(ProfileModel, superClass);

    function ProfileModel() {
      return ProfileModel.__super__.constructor.apply(this, arguments);
    }

    ProfileModel.prototype.urlRoot = 'http://thuisbar.stage.codedazur.nl/fridges';

    ProfileModel.prototype.defaults = {
      name: '',
      color: '',
      image: ''
    };

    return ProfileModel;

  })(Model);
});

//# sourceMappingURL=../../maps/models/profile/profile-model.js.map