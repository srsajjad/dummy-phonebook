import * as types from './PhoneType.js'

export const setNewItem = payload => ({
  type: types.SET_NEW_ITEM,
  payload
})

export const deleteItem = payload => ({
  type: types.DELETE_ITEM,
  payload
})

export const updateItem = payload => ({
  type: types.UPDATE_ITEM,
  payload
})

export const deleteSelectedItems = payload => ({
  type: types.DELETE_SELECTED_ITEMS,
  payload
})

export const toggleChecked = payload => ({
  type: types.TOGGLE_CHECKED,
  payload
})

export const setActiveId = payload => ({
  type: types.SET_ACTIVE_ID,
  payload
})
