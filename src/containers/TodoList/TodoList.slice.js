import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { removeAccents } from 'utils/helpers';
import localForage from "localforage";

const addKeyswords = (todo) => {
    todo.keywords = [removeAccents(todo.title||""), removeAccents(todo.desc|| "")]
}

const TODO_STORE = "TODOS"


export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        todos: [],
        checkedIds: {},
        searchValue: ''
    },
    reducers: {
        
        addTodo: (state, action) => {
            const todo = action.payload;
            todo.id = uuidv4(); 
            addKeyswords(todo)
            state.todos.push(todo);
        },
        updateTodo: (state, action) => {
            const { id, data} = action.payload;
            const foundTodo = state.todos.find(t => t.id === id);
            if(foundTodo) {
                Object.assign(foundTodo, data)
                addKeyswords(foundTodo)
            }
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            const index = state.todos.findIndex(t => t.id === id);
            if(index >= 0) state.todos.splice(index, 1); 
        },
        toggleTodo: (state, action) => {
            const id = action.payload;            
            if(state.checkedIds.hasOwnProperty(id)) 
                delete state.checkedIds[id];
            else 
                state.checkedIds[id] = 1;
        },
        deleteBulk: (state) => {
            const checkedIds = state.checkedIds;
            state.todos = state.todos.filter(t => !checkedIds[t.id]);
            state.checkedIds = {};
        },
        onSearch: (state, action) => {
            state.searchValue = action.payload;
        },
        initTodos: (state, action) => {
            state.todos = action.payload || []
        }
    },
});

export const saveToLocal = async (todos) => {
    try {
        await localForage.setItem(TODO_STORE, todos)
    } catch (error) {
        console.error("Cannot save to localforage", error.message)
    }
}


export const { addTodo, updateTodo, removeTodo, toggleTodo, deleteBulk, onSearch, initTodos} = todoListSlice.actions;

export const initTodosFromLocal =  () => async dispatch => {
    try {
        const todos = await localForage.getItem(TODO_STORE);
        if(todos && Array.isArray(todos))
            dispatch(initTodos(todos))
    } catch (error) {
        console.error(error.message);
    }
}

export default todoListSlice.reducer;
