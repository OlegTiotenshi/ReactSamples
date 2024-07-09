import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // can mutate state thanks to Immer library
      state.title = action.payload
    },
    resetFilters: (state) => {
      return initialState
    },
  },
})

export const { setTitleFilter, resetFilters } = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export default filterSlice.reducer
