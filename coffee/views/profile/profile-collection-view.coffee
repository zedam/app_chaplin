define [
  'views/base/collection-view'
  'views/profile/profile-item-list-view'
], (BaseCollectionView, ProfileItemListView) ->
  'use strict'

  class ProfileCollectionView extends BaseCollectionView

    initialize: ->
      super
      @listenTo @collection, 'add change', @render
      @subscribeEvent 'updateProfiles',  @addProfile

    tagName: 'ul'

    className: 'profile-collection-view'

    autoRender: true

    renderItems: true

    itemView: ProfileItemListView

    addProfile: (profile) ->
      @collection.add(profile)



