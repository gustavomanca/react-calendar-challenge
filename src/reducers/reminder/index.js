import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  current: null,
  showModal: false,
};

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
    edit: (state, action) => {
      const foundIndex = state.data.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.data.splice(foundIndex, 1, action.payload);
      state.current = null;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    toggleModal: (state, action) => {
      state.showModal = action.payload || !state.showModal;
    },
  },
});

export const { add, edit, setCurrent, toggleModal } = reminderSlice.actions;

export default reminderSlice.reducer;
