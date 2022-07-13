import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lists: [],
}

export const secondSlice = createSlice({
  name: 'second',
  initialState,
  reducers: {
    addTodoList: (state, action) => {
      state.lists = [...state.lists, action.payload]
    },
    deleteTodoList: (state, action) => {
      state.lists = state.lists.filter((item) => item.id !== action.payload.id)
    },
    editTodoList: (state, action) => {
      state.lists = [...state.lists.filter((item) => item.id !== action.payload.id), action.payload].sort((a,b) => a.id-b.id)
    },
    doneTodoList: (state, action) => {
      state.lists = [...state.lists.filter((item) => item.id !== action.payload.id), action.payload].sort((a,b) => a.id-b.id)
    },
  },
})

export const { addTodoList, deleteTodoList, editTodoList, doneTodoList } = secondSlice.actions

export default secondSlice.reducer