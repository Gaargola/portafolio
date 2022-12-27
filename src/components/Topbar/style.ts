import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    justify-content: end;
    margin-right: 50px;
    gap: 30px;
`;

export const  Li = styled.li`
    list-style-type: none;
`;

export const A = styled.a`
    text-decoration: none;
    color: #fff;
    &:hover{
        color: red;
      };
`;
