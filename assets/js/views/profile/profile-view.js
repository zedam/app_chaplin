var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'text!templates/profile/profile-view.hbs'], function(BaseView, template) {
  'use strict';
  var HomeView;
  return HomeView = (function(superClass) {
    extend(HomeView, superClass);

    function HomeView() {
      return HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.initialize = function() {
      return this.delegateEvents({
        'click #form-opener': this.formOpening
      });
    };

    HomeView.prototype.autoRender = true;

    HomeView.prototype.className = 'home-container';

    HomeView.prototype.regions = {
      list: '#list-container',
      form: '#form-container'
    };

    HomeView.prototype.formOpening = function(e) {
      return $('#form-opener').fadeOut('fast', function() {
        return $('#form-user').slideDown('fast');
      });
    };

    HomeView.prototype.template = template;

    template = null;

    return HomeView;

  })(BaseView);
});

//# sourceMappingURL=../../maps/views/profile/profile-view.js.map