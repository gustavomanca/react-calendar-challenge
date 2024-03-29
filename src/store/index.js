import { configureStore } from "@reduxjs/toolkit";
import reminderReducer from "reducers/reminder";

export const store = configureStore({
  reducer: { reminders: reminderReducer },
  devTools: process.env.NODE_ENV !== "production",
});
