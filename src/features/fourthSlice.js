import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lists: [],
}

export const fourthSlice = createSlice({
  name: 'fourth',
  initialState,
  reducers: {
    addDiaryList: (state, action) => {
      state.lists = [...state.lists, action.payload]
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter((item) => item.id !== action.payload.id)
    },
    doneEditList:(state, action) => {
      state.lists = [...state.lists.filter((item) => item.id !== action.payload.id), action.payload].sort((a,b) => a.id-b.id)
    }
  },
})

export const { addDiaryList, deleteList, doneEditList } = fourthSlice.actions

export default fourthSlice.reducer