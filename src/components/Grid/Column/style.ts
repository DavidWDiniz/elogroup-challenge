import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    height: available;
    min-height: 150px;
    width: 110px;
    margin: 2px;
    border-radius: 10px;
    background: #1d313e;
    font-size: 11px;
    line-height: 64px;

     @media(min-width: 1028px) {
        width: 300px;
        margin: 20px;
        font-size: 18px;
    }
`;
