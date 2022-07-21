import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  lists: [],
}

export const seventhSlice = createSlice({
  name: 'seventh',
  initialState,
  reducers: {
    inputValue: (state, action) => {
      state.value = action.payload
    },
    addList: (state, action) => {
      state.lists = [...state.lists, action.payload]
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload)
    },
    editList: (state, action) => {
      state.lists = [...state.lists.filter((list) => list.id !== action.payload.id),
      action.payload].sort((a,b) => a.id-b.id)
    },
    doneEditList: (state, action) => {
      state.lists = [...state.lists.filter((list) => list.id !== action.payload.id),
      action.payload].sort((a,b) => a.id-b.id)
    },
  },
})

export const { inputValue, addList, deleteList, editList, doneEditList } = seventhSlice.actions

export default seventhSlice.reducer