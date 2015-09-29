var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/collection-view', 'views/profile/profile-item-list-view'], function(BaseCollectionView, ProfileItemListView) {
  'use strict';
  var ProfileCollectionView;
  return ProfileCollectionView = (function(superClass) {
    extend(ProfileCollectionView, superClass);

    function ProfileCollectionView() {
      return ProfileCollectionView.__super__.constructor.apply(this, arguments);
    }

    ProfileCollectionView.prototype.initialize = function() {
      ProfileCollectionView.__super__.initialize.apply(this, arguments);
      this.listenTo(this.collection, 'add change', this.render);
      return this.subscribeEvent('updateProfiles', this.addProfile);
    };

    ProfileCollectionView.prototype.tagName = 'ul';

    ProfileCollectionView.prototype.className = 'profile-collection-view';

    ProfileCollectionView.prototype.autoRender = true;

    ProfileCollectionView.prototype.renderItems = true;

    ProfileCollectionView.prototype.itemView = ProfileItemListView;

    ProfileCollectionView.prototype.addProfile = function(profile) {
      return this.collection.add(profile);
    };

    return ProfileCollectionView;

  })(BaseCollectionView);
});

//# sourceMappingURL=../../maps/views/profile/profile-collection-view.js.map