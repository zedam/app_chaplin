var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'text!templates/layout/site.hbs'], function(View, template) {
  'use strict';
  var SiteView;
  return SiteView = (function(superClass) {
    extend(SiteView, superClass);

    function SiteView() {
      return SiteView.__super__.constructor.apply(this, arguments);
    }

    SiteView.prototype.initialize = function() {

      /* handler to hide any open select box */
      return this.delegateEvents({
        'click': this.selectable_hidden
      });
    };

    SiteView.prototype.container = 'body';

    SiteView.prototype.tagName = 'section';

    SiteView.prototype.regions = {
      main: '#main-container',
      header: '#header-container',
      footer: '#footer-container'
    };

    SiteView.prototype.selectable_hidden = function(e) {
      return this.publishEvent('hideSelectBox', e);
    };

    SiteView.prototype.template = template;

    template = null;

    return SiteView;

  })(View);
});

//# sourceMappingURL=../../maps/views/layout/site-view.js.map