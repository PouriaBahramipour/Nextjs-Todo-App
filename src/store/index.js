import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  todoData: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoData: (state, action) => {
      state.todoData = action.payload;
    },
  },
});

const store = configureStore({ reducer: { todo: todoSlice.reducer } });

export const todoActions = todoSlice.actions;

export default store;
