define [
  'chaplin'
  'controllers/base/controller'
  'views/profile/profile-view'
  'views/profile/profile-form-view'
  'models/profile/profile-collection'
  'models/profile/profile-model'
  'views/profile/profile-collection-view',
  'views/profile/profile-item-view'
  'models/component/select-box-model'
  'views/component/select-box-view'
], (Chaplin, Controller, ProfileView, ProfileFormView, ProfileCollection, ProfileModel, ProfileCollectionView, ProfileItemView, SelectBoxModel, SelectBoxView) ->
  'use strict'

  class ProfileController extends Controller

    beforeAction: ->
      super
      @reuse 'collection',
        compose: ->
          @item = new ProfileCollection
          @item.fetch()

    list: (params) ->
      ### Reuses teh collection to avoid an unnecesarry call to server ###
      @Profileview = new ProfileView collection: @reuse('collection'), region: 'main'
      @formView = new ProfileFormView region: 'form'

      @model1 = new SelectBoxModel
        name: 'color'
        id: 'form-color'
        placeholder: 'Kleur'
        values: [
          {
            content: 'orange',
            value: 'orange'
          },
          {
            content: 'black',
            value: 'black'
          }
          {
            content: 'red',
            value: 'red'
          }
        ]

      @model2 = new SelectBoxModel
        name: 'image'
        id: 'form-image'
        placeholder: 'Foto'
        values: [
          {
            content: '3.jpg',
            value: '3'
          },
          {
            content: '4.jpg',
            value: '4'
          },
          {
            content: '5.jpg',
            value: '5'
          },
          {
            content: '6.jpg',
            value: '6'
          }
        ]

      @selectBoxView = new SelectBoxView model: @model1, region: 'color'
      @selectBoxView2 = new SelectBoxView model: @model2, region: 'image_container'

      @collectionView = new ProfileCollectionView collection: @reuse('collection'), region: 'list'

    show: (params) ->
      ### Reuses teh collection to avoid an unnecesarry call to server ###
      @showView = new ProfileItemView model: @reuse('collection').get(params.id), region: 'main'

