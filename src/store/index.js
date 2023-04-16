import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  todoData: [],
  menuItem: [],
  isLoading: false,
  error: null,
  filteredData: [],
  resetData: [],
  clickedMenuItem: false,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoData: (state, action) => {
      state.todoData = action.payload;
      state.resetData = state.todoData;
      state.menuItem = state.todoData;
      state.filteredData = state.todoData;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSearchText: (state, action) => {
      const searchTitle = action.payload.toLowerCase();
      state.filteredData = state.todoData.filter((item) =>
        item.title.toLowerCase().includes(searchTitle)
      );
    },
    setItemCategory: (state, action) => {
      const category = action.payload.toLowerCase();
      if (action.payload === "") {
        state.filteredData = state.resetData;
        state.todoData = state.filteredData;
        state.clickedMenuItem = !state.clickedMenuItem;
      } else {
        state.filteredData = state.menuItem.filter(
          (item) => item.category.toLowerCase() === category
        );
        state.clickedMenuItem = !state.clickedMenuItem;
        state.todoData = state.filteredData;
      }
    },
  },
});

const store = configureStore({ reducer: { todo: todoSlice.reducer } });

export const todoActions = todoSlice.actions;

export default store;
