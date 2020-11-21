import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin: 32px 0;
    }

    h1 {
        margin-bottom: 64px;
    }

    button {
        margin-top: 32px;
        margin-right: 675px;
        width: 300px;
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
    }
`;
