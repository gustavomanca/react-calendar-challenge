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
    destroy: (state, action) => {
      const foundIndex = state.data.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.data.splice(foundIndex, 1);
    },
    edit: (state, action) => {
      const foundIndex = state.data.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.data.splice(foundIndex, 1, action.payload);
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    toggleModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { add, destroy, edit, setCurrent, toggleModal } =
  reminderSlice.actions;

export default reminderSlice.reducer;
