var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'text!templates/profile/profile-form-view.hbs', 'models/profile/profile-model'], function(BaseView, template, ProfileModel) {
  'use strict';
  var FormView;
  return FormView = (function(superClass) {
    extend(FormView, superClass);

    function FormView() {
      return FormView.__super__.constructor.apply(this, arguments);
    }

    FormView.prototype.initialize = function() {

      /* Handles the submit form to create new profiles */
      this.delegateEvents({
        'submit': this.submitForm

        /* Handlers to make the fake select boxes */
      });
      this.delegate('click', '.selectable', this.selectable);
      this.delegate('click', '.select_options li > span', this.selectable_span);

      /* Subscribe to event to hide the Fake Select boxes */
      return this.subscribeEvent('hideSelectBox', this.removeActiveSelectBox);
    };

    FormView.prototype.autoRender = true;

    FormView.prototype.className = 'form__container';

    FormView.prototype.regions = {
      color: '#color-container',
      image_container: '#image-container'
    };

    FormView.prototype.submitForm = function(e) {
      e.preventDefault();
      if ($('#form-name').val() !== '' && $('#form-color').val() !== '' && $('#form-image').val() !== '') {
        this.model = new ProfileModel({
          name: $('#form-name').val(),
          color: $('#form-color').val(),
          image: $('#form-image').val()
        });
        this.model.save();
        this.closeForm();
      } else {
        alert('Please fill all the fields');
      }
      return this.publishEvent('updateProfiles', this.model);
    };


    /* Closes the form & cleans it */

    FormView.prototype.closeForm = function() {
      $('#form-opener').fadeIn('slow');
      $('#form-user').slideUp('fast');
      $('#form-name').val('');
      $('#form-color').val('');
      $('#form-color_shown').val('');
      $('#form-image').val('');
      return $('#form-image_shown').val('');
    };


    /* Fake Select box opening/closing */

    FormView.prototype.selectable = function(e) {
      e.stopPropagation();
      this.removeActiveSelectBox();
      $(e.target).next().slideToggle('fast');
      return $(e.target).parents('.form__select-container').toggleClass('active');
    };


    /* Fake Select box selecting the option */

    FormView.prototype.selectable_span = function(e) {
      var $select_options;
      e.preventDefault();
      $select_options = $(e.target).parents('.select_options');
      $('#' + $select_options.data('id')).val($(e.target).data('content'));
      $('#' + $select_options.data('id') + '_shown').val($(e.target).html());
      return $select_options.slideUp().prev().change();
    };


    /* Closes the Select boxes */

    FormView.prototype.removeActiveSelectBox = function(e) {
      if (e != null) {
        return $('.form__select-container.active').removeClass('active').find('.select_options').slideUp('slow');
      }
    };

    FormView.prototype.template = template;

    template = null;

    return FormView;

  })(BaseView);
});

//# sourceMappingURL=../../maps/views/profile/profile-form-view.js.map