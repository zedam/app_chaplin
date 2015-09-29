var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['chaplin', 'controllers/base/controller', 'views/profile/profile-view', 'views/profile/profile-form-view', 'models/profile/profile-collection', 'models/profile/profile-model', 'views/profile/profile-collection-view', 'views/profile/profile-item-view', 'models/component/select-box-model', 'views/component/select-box-view'], function(Chaplin, Controller, ProfileView, ProfileFormView, ProfileCollection, ProfileModel, ProfileCollectionView, ProfileItemView, SelectBoxModel, SelectBoxView) {
  'use strict';
  var ProfileController;
  return ProfileController = (function(superClass) {
    extend(ProfileController, superClass);

    function ProfileController() {
      return ProfileController.__super__.constructor.apply(this, arguments);
    }

    ProfileController.prototype.beforeAction = function() {
      ProfileController.__super__.beforeAction.apply(this, arguments);
      return this.reuse('collection', {
        compose: function() {
          this.item = new ProfileCollection;
          return this.item.fetch();
        }
      });
    };

    ProfileController.prototype.list = function(params) {

      /* Reuses teh collection to avoid an unnecesarry call to server */
      this.Profileview = new ProfileView({
        collection: this.reuse('collection'),
        region: 'main'
      });
      this.formView = new ProfileFormView({
        region: 'form'
      });
      this.model1 = new SelectBoxModel({
        name: 'color',
        id: 'form-color',
        placeholder: 'Kleur',
        values: [
          {
            content: 'orange',
            value: 'orange'
          }, {
            content: 'black',
            value: 'black'
          }, {
            content: 'red',
            value: 'red'
          }
        ]
      });
      this.model2 = new SelectBoxModel({
        name: 'image',
        id: 'form-image',
        placeholder: 'Foto',
        values: [
          {
            content: '3.jpg',
            value: '3'
          }, {
            content: '4.jpg',
            value: '4'
          }, {
            content: '5.jpg',
            value: '5'
          }, {
            content: '6.jpg',
            value: '6'
          }
        ]
      });
      this.selectBoxView = new SelectBoxView({
        model: this.model1,
        region: 'color'
      });
      this.selectBoxView2 = new SelectBoxView({
        model: this.model2,
        region: 'image_container'
      });
      return this.collectionView = new ProfileCollectionView({
        collection: this.reuse('collection'),
        region: 'list'
      });
    };

    ProfileController.prototype.show = function(params) {

      /* Reuses teh collection to avoid an unnecesarry call to server */
      return this.showView = new ProfileItemView({
        model: this.reuse('collection').get(params.id),
        region: 'main'
      });
    };

    return ProfileController;

  })(Controller);
});

//# sourceMappingURL=../maps/controllers/profile-controller.js.map