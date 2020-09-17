import React from 'react'
import styled from "styled-components";

const Checkbox = (props: HTMLInputElement) => {
    return (
        <Label>
            <Input type="checkbox" {...props} />
            <Checkmark />
        </Label>
    )
}

const Checkmark = styled.div`
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    border: 1px solid #000;
    transition: all 300ms ease-in;
    ::after {
        content: "";
        position: absolute;
        display: none;
     
        left: 11px;
        top: -6px;
        width: 7px;
        height: 21px;
        border: solid black;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`

const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked + ${Checkmark}::after {
        display: block;    
    }
`

const Label = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
`


export default Checkbox
