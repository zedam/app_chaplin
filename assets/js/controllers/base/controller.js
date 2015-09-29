var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['chaplin', 'views/layout/site-view', 'views/layout/header-view', 'views/layout/footer-view'], function(Chaplin, SiteView, HeaderView, FooterView) {
  'use strict';
  var Controller;
  return Controller = (function(superClass) {
    extend(Controller, superClass);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.beforeAction = function() {
      this.reuse('site', SiteView);
      this.reuse('header', HeaderView, {
        region: 'header'
      });
      return this.reuse('footer', FooterView, {
        region: 'footer'
      });
    };

    return Controller;

  })(Chaplin.Controller);
});

//# sourceMappingURL=../../maps/controllers/base/controller.js.map