import React, {useEffect}from 'react'
import styled from "styled-components";
import TodoItem from 'components/TodoItem';
import { selectFilteredTodos, selectTodos } from './TodoList.selectors';
import {useSelector, useDispatch}from "react-redux";
import { removeTodo, updateTodo, toggleTodo, deleteBulk, saveToLocal } from './TodoList.slice';
import Button from 'components/Button';

const List = () => {
    const todos = useSelector(selectFilteredTodos)
    const allTodos = useSelector(selectTodos);

    useEffect(() => {
        if(allTodos.length > 0)
            saveToLocal(allTodos)
    }, [allTodos])
    const dispatch = useDispatch();

    return (
        <>
            <ListWrapper>
                {todos.map(todo => (
                    <TodoItem 
                        todo={todo}
                        key={todo.id}
                        onRemove={() => dispatch(removeTodo(todo.id))}
                        onToggleChecked={() => dispatch(toggleTodo(todo.id))}
                        onUpdate={(payload) => dispatch(updateTodo(payload))}
                    />
                ))}
            </ListWrapper>
            <Footer>
                <span>Bulk Action:</span>
                <Button 
                    onClick={() => dispatch(deleteBulk())}
                    color="danger">Remove</Button>
            </Footer>   
        </>
    )
}

const ListWrapper = styled.div`
    &>div:not(:last-child) {
        margin-bottom: 8px;   
    }
    flex: auto;
    overflow-y: auto;
`

const Footer = styled.div`
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid #000;
    background: #cecece;
    margin-top: 16px;
    margin-bottom: 16px;
`

export default List;