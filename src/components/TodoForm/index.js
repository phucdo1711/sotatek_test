import React from 'react'
import { useForm , Controller} from "react-hook-form";
import Textfield from 'components/Textfield';
import TextArea from 'components/TextArea';
import Label from 'components/Label';
import { Row, Column } from 'components/Grid';
import Select from 'components/Select';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import styled from "styled-components";

const TodoForm = ({onSubmit, defaultTodo}) => {
    const { handleSubmit, register, errors, control, reset} = useForm();

    const submit = values => {
        onSubmit(values);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Textfield
                name="title"
                placeholder="Add a new task"
                ref={register({
                    required: "This field is required!",
                })}
                defaultValue={defaultTodo?.title || ""}
            />
            {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
            <Label>Description</Label>
            <TextArea
                name="desc"
                ref={register()}
                defaultValue={defaultTodo?.desc || ""}
            />
            <Row>
                <Column md={6}>
                    <Label>Due Date</Label>
                    <Controller
                        as={<DatePicker />}
                        control={control}
                        name="dueDate"
                        defaultValue={defaultTodo?.dueDate || (new Date()).getTime()}
                    />
                </Column>
                <Column md={6}>
                    <Label>Prioriy</Label>
                    <Select     
                        name="priority"
                        defaultValue={defaultTodo?.priority || "normal"}
                        ref={register()}
                    >
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                    </Select>
                </Column>
            </Row>
            <AddBtn
                color="success"
                type="submit"
                fitContainer
            >{defaultTodo ?"Update": "Add"}</AddBtn>
        </form>
    )
}

const AddBtn = styled(Button)`
    margin-top: 24px;
`

const ErrorText = styled.div`
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
`

export default TodoForm;