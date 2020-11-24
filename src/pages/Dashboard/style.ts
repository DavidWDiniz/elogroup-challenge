import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 275px;
        margin: 32px 0;
    }

    button {
        width: 300px;
        height: 64px;
        border: none;
        cursor: pointer;
        background: #B14A3B;
        border-radius: 8px;
        color: #FFFFFF;
        font-weight: 800;
        margin-bottom: 8px;
        transition: background-color 0.2s;

        &:hover {
            background: #d55342;
        }
    }

    @media(min-width: 1028px) {

         img {
              margin-bottom: 64px;
         }

          h1 {
              margin-bottom: 64px;
          }

          button {
              margin-top: 32px;
              margin-right: 675px;
          }
    }
`;

export const Button = styled.button`
    margin-top: 32px;
    width: 100%;
    height: 64px;
    border: none;
    cursor: pointer;
    background: #B14A3B;
    border-radius: 8px;
    color: #FFFFFF;
    font-weight: 800;
    transition: background-color 0.2s;

    &:hover {
        background: #d55342;
    }

`;
