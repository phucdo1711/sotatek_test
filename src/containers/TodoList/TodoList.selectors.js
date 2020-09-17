import { createSelector } from "@reduxjs/toolkit";


const selectTodoList = state => state.todoList;

export const selectFilteredTodos = createSelector(selectTodoList, state => {
    let todos = state.todos;
    const searchValue = state.searchValue;
    if (searchValue) {
        todos = todos.filter(t => {
            let bool = false;
            for (let str of t.keywords) {
                if (str.includes(searchValue)) {
                    bool = true;
                    break;
                }
            }
            return bool;
        })
    }

    const checkedIds = state.checkedIds;
    return todos.map(t => {
        return { isChecked: !!checkedIds[t.id], ...t }
    });
})

export const selectTodos = createSelector(selectTodoList, state => state.todos)