import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from 'containers/TodoList/TodoList.slice';

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
