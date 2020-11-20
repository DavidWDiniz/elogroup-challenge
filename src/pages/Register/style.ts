import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 275px;
        margin-bottom: 32px;
    }

    @media(min-width: 1028px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

