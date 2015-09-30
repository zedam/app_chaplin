var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['module', 'models/base/collection', 'models/profile/profile-model'], function(module, BaseCollection, ProfileModel) {
  'use strict';
  var ProfileCollection;
  return ProfileCollection = (function(superClass) {
    extend(ProfileCollection, superClass);

    function ProfileCollection() {
      return ProfileCollection.__super__.constructor.apply(this, arguments);
    }

    ProfileCollection.prototype.model = ProfileModel;

    ProfileCollection.prototype.url = 'http://thuisbar.stage.codedazur.nl/fridges';

    return ProfileCollection;

  })(BaseCollection);
});

//# sourceMappingURL=../../maps/models/profile/profile-collection.js.map