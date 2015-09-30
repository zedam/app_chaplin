define [
  'views/base/view'
  'text!templates/profile/profile-form-view.hbs'
  'models/profile/profile-model'
], (BaseView, template, ProfileModel) ->
  'use strict'

  class FormView extends BaseView
    initialize: ->
      ### Handles the submit form to create new profiles ###
      @delegateEvents 'submit': @submitForm

      ### Handlers to make the fake select boxes ###
      @delegate 'click', '.selectable', @selectable
      @delegate 'click', '.select_options li > span', @selectable_span

      ### Subscribe to event to hide the Fake Select boxes ###
      @subscribeEvent 'hideSelectBox', @removeActiveSelectBox


    autoRender: true
    className: 'form__container'

    regions:
      color: '#color-container'
      image_container: '#image-container'

    submitForm: (e) ->
      e.preventDefault()

      if $('#form-name').val() != '' && $('#form-color').val() != '' && $('#form-image').val() != ''
        @model = new ProfileModel
          name: $('#form-name').val()
          color: $('#form-color').val()
          image: $('#form-image').val()
        @model.save()

        @closeForm()

      else
        # Method to be improved with any notification system #
        alert('Please fill all the fields')

      @publishEvent 'updateProfiles', @model

    ### Closes the form & cleans it ###
    closeForm: ->
      $('#form-opener').fadeIn('slow');
      $('#form-user').slideUp('fast');
      $('#form-name').val('')
      $('#form-color').val('')
      $('#form-color_shown').val('')
      $('#form-image').val('')
      $('#form-image_shown').val('')

    ### Fake Select box opening/closing ###
    selectable: (e) ->
      e.stopPropagation()
      @removeActiveSelectBox()
      $(e.target).next().slideToggle('fast')
      $(e.target).parents('.form__select-container').toggleClass('active')

    ### Fake Select box selecting the option ###
    selectable_span: (e) ->
      e.preventDefault()
      $select_options = $(e.target).parents('.select_options')
      $('#' + $select_options.data('id')).val($(e.target).data('content'))
      $('#' + $select_options.data('id') + '_shown').val($(e.target).html())
      $select_options .slideUp().prev().change()

    ### Closes the Select boxes ###
    removeActiveSelectBox: (e)->
      $('.form__select-container.active').removeClass('active').find('.select_options').slideUp('slow') if e?

    template: template
    template = null