import styled from "styled-components";

function getWidthString(span){
    if(!span) return;

    const width = span /12  * 100;
    return `width: ${width}%`;
}

const Column = styled.div`  
    float: left;
    padding-left: 12px;
    padding-right: 12px;

    ${({xs}) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 768px) {
        ${({sm}) => sm && getWidthString(sm)}; 
    }

    @media only screen and (min-width: 992px) {
        ${({md}) => md && getWidthString(md)}; 
    }

    @media only screen and (min-width: 1200px) {
        ${({lg}) => lg && getWidthString(lg)}; 
    }
`

export default Column