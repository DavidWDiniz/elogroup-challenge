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

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 48px;
        text-decoration: none;
        border: none;
        cursor: pointer;
        background: #B14A3B;
        border-radius: 8px;
        color: #FFFFFF;
        font-weight: 800;
        margin: 32px;
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

          a {
              position: absolute;
              margin: 0;
              top: 32px;
              right: 150px;
          }
    }
`;

export const Button = styled.button`
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

`;
