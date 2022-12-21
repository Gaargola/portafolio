import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    gap: 30px;
`;

export const  Li = styled.li`
    list-style-type: none;
`;

export const A = styled.a`
    text-decoration: none;
    color: #fff;
    border-radius: 12px;
    border:1px solid #fff;
    padding: 12px;
    &:hover{
        padding: 8px;
        border-radius: 10px;
        border:1px solid red;
        color: red;
      };
`;
