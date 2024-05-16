import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: JSON.parse(localStorage.getItem("watchLaterItemList")) || [],
}

export const watchLaterItemList = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addWatchId: (state, action) => {
      const existingItem = state.value.find(item => item.id === action.payload);
      if (existingItem) {
        state.value = state.value.filter(item => item.id !== action.payload);
      } else {
        state.value = [{ id: action.payload },...state.value];
      }
      localStorage.setItem("watchLaterItemList", JSON.stringify(state.value));
    },
    removeWatchId:(state,action) => {
      state.value = action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { addWatchId,removeWatchId } = watchLaterItemList.actions

export default watchLaterItemList.reducer