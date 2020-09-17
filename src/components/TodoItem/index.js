import React, { useState } from 'react'
import { Wrapper, Title, FormWrapper, DetailButton } from './styled';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import TodoForm from 'components/TodoForm';

const TodoItem = ({ todo, onRemove, onUpdate, onToggleChecked}) => {
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const onSubmitUpdate = (data) => {
        onUpdate({ data, id: todo.id })
        setIsOpenDetail(false)
    }
    return (
        <div>
            <Wrapper >
                <Checkbox 
                    checked={todo.isChecked}
                    onChange={onToggleChecked}
                />
                <Title>{todo.title}</Title>
                <DetailButton
                    onClick={() => setIsOpenDetail(b => !b)}
                    color="info">Detail</DetailButton>
                <Button
                    color="danger"
                    onClick={onRemove}
                >Remove</Button>
            </Wrapper>
            <FormWrapper isOpen={isOpenDetail}>
                {isOpenDetail && (
                    <TodoForm
                        defaultTodo={todo}
                        onSubmit={onSubmitUpdate}
                    />
                )}
            </FormWrapper>
        </div>
    )
}


export default TodoItem