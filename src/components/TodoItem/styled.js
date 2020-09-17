import styled from "styled-components";
import Button from "components/Button";

export const FormWrapper = styled.div`
    padding: 16px;
    border: 1px solid #000;
    width: 100%;
    border-top: none;
    transition: all 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
    ${props => !props.isOpen ? `
        border: none;
        height: 0;
        padding: 0;
    `: `
        height: auto;
    `}
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: space-between;
    height: 64px;
    align-items: center;
    border: 1px solid #000;
    padding: 12px 16px;
    width: 100%;
`

export const DetailButton = styled(Button)`
    margin-right: 8px;
`

export const Title = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: auto;
    padding: 0 8px;
`

