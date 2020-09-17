import React, { useCallback ,useEffect} from 'react';
import { Row, Column } from 'components/Grid';
import TodoForm from 'components/TodoForm';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo, initTodosFromLocal } from './TodoList.slice';
import List from './List';
import Search from './Search';

function TodoList() {
    const dispatch = useDispatch()
    const onAddTodo = useCallback((todo) => {
        dispatch(addTodo(todo))
    },[dispatch])
    useEffect(() => {
        dispatch(initTodosFromLocal())
    }, [])

    return (
        <Container>
            <Column md={5}>
                <Title>New Task</Title>
                <TodoForm 
                    onSubmit={onAddTodo}
                />
            </Column>
            <Right md={7}>
                <Title>To Do List</Title>
                <Search />
                <List />
            </Right>
        </Container>
    );
}

const Title = styled.h3`
    text-align: center;
`

const Container = styled(Row)`
    height: 100vh;
`

const Right = styled(Column)`
    display: flex;
    flex-direction: column;
    height: 100%;
`


export default TodoList;
