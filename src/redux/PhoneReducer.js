import { createReducer } from '@reduxjs/toolkit'
import * as types from './PhoneType'

const initState = {}

export const PhoneReducer = createReducer(initState, {
  [types.SET_NEW_ITEM]: (state, action) => {
    let { id } = action.payload
    state[id] = { ...action.payload }
  },

  [types.DELETE_ITEM]: (state, action) => {
    let { id } = action.payload
    delete state[id]
  },

  [types.UPDATE_ITEM]: (state, action) => {
    let { id } = action.payload
    state[id] = { ...action.payload }
  },

  DELETE_SELECTED_ITEMS: (state, action) => {
    for (let x in state) {
      if (state[x].checked) {
        delete state[x]
      }
    }
  },

  [types.TOGGLE_CHECKED]: (state, action) => {
    let { id } = action.payload
    let c = state[id].checked
    state[id].checked = !c
  },

  [types.SET_ACTIVE_ID]: (state, action) => {
    let { id } = action.payload
    state.activeId = id
  },

  [types.SET_OPEN_DIALOG]: (state, action) => {
    let { bool } = action.payload
    state.isDialogOpen = bool
  }
})
