import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

     > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 350px;
            margin: 32px 0;
        }

        h1 {
            margin-bottom: 64px;
        }
     }

     @media(min-width: 1028px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;
