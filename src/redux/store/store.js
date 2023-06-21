import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../reducers/todoListReducer";

const reducer = {
  taskStore: taskReducer,
};

const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;