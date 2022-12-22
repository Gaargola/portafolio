import styled from "styled-components";

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 30px;
@media (max-width: 360px) {
    font-size: 22px;
}
`;

export const Div = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`;

export const Img = styled.img`
    height: 600px;
    margin: 5px;
    border-radius: 20px;
@media (max-width: 600px) {
    height: 450px;
}
@media (max-width: 450px) {
    height: 350px;
}
`;

export const Div2 = styled.div`
background-color: #ECECEC;
border-radius: 25px;
`;


