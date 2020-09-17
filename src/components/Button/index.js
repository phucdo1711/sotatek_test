import styled from 'styled-components';


const handlePropColor = (color) => {
    switch (color) {
        case "primary":
            return `
                color: #fff;
                background-color: #007bff;
                border-color: #007bff;
                &:hover, &:active{
                    color: #fff;
                    background-color: #0069d9;
                    border-color: #0062cc;
                }
            `
        case 'success':
            return `
                color: #fff;
                background-color: #28a745;
                border-color: #28a745;
                &:hover, &:active{
                    color: #fff;
                    background-color: #218838;
                    border-color: #1e7e34;
                }
            `
        case 'info':
            return `
                color: #fff;
                background-color: #17a2b8;
                border-color: #17a2b8;
                &:hover, &:active{
                    color: #fff;
                    background-color: #117a8b;
                    border-color: #10707f;                
                }
            `
        case 'danger':
            return `
                color: #fff;
                background-color: #dc3545;
                border-color: #dc3545;
                &:hover, &:active{
                    color: #fff;
                    background-color: #bd2130;
                    border-color: #b21f2d;              
                }
            `
            
        default:
            break;
    }
}

const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .275rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    min-width: 100px;
    cursor: pointer;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :hover {
        color: #212529;
        text-decoration: none;
    }

    ${props => handlePropColor(props.color)}
    ${props => props.fitContainer && `
        width: 100%;
    `}
`


export default Button;