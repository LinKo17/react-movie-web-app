import { createSlice } from '@reduxjs/toolkit'

// function setLocalFavListItem() {
//   if (!localStorage.getItem("favItemList")) {
//     localStorage.setItem("favItemList", JSON.stringify([]))
//     return JSON.parse(localStorage.getItem("favItemList"))
//   } else {
//     return JSON.parse(localStorage.getItem("favItemList"))
//   }
// }

const initialState = {
  value: JSON.parse(localStorage.getItem("favItemList")) || [],
}

export const favouriteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addId: (state, action) => {
      const existingItem = state.value.find(item => item.id === action.payload);
      if (existingItem) {
        state.value = state.value.filter(item => item.id !== action.payload);
      } else {
        state.value = [{ id: action.payload },...state.value];
      }
      localStorage.setItem("favItemList", JSON.stringify(state.value));
    }

  },
})

// Action creators are generated for each case reducer function
export const { addId, decrement, incrementByAmount } = favouriteSlice.actions

export default favouriteSlice.reducer