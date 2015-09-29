define [
	'models/base/model'
	], (BaseModel) ->
	'use strict'

	class SelectBox extends BaseModel
		defaults =
			name: ''
			id: ''
			value: ''
			placeholder: ''
			values: ''