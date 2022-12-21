import styled, { keyframes } from "styled-components";

export const Div = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;

const typing = keyframes`
    from {
        width: 0;
    }
`;

const blink = keyframes`
50% {
    border-color: transparent;
}
`;

export const Huno = styled.h1`
color: #fff;
`;

export const Span = styled.span`
color: #fff;
display: block;
font-family: monospace;
white-space: nowrap;
border-right: 4px solid;
width: 49ch;
text-align: center;
margin: 0 auto;
animation: ${typing} 2s steps(49),
${blink} .5s infinite step-end alternate;
overflow: hidden;
@media (max-width: 350px) {
    font-size: 10px;
}
`;

export const P = styled.p`
color: #fff;
text-align: center;
margin: 20px;
font-size: 22px;
@media (max-width: 350px) {
    font-size: 13px;
}
`;
