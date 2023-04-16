import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  todoData: [],
  isLoading: false,
  error: null,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoData: (state, action) => {
      state.todoData = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

const store = configureStore({ reducer: { todo: todoSlice.reducer } });

export const todoActions = todoSlice.actions;

export default store;
