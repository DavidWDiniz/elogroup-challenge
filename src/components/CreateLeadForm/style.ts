import styled from "styled-components";

export const Form = styled.form`
    width: 275px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
        position: relative;

        label {
            font-size: 14px;
            margin-bottom: 8px;
        }

        input {
            width: 100%;
            background: #F5F8FA;
            border: 1px solid #D3E2E5;
            border-radius: 8px;
            color: #1d313e;
            height: 64px;
            padding: 0 16px;
            margin-bottom: 48px;
        }

        p {
            position: absolute;
            color: #ff3216;
            font-size: 14px;
            bottom: 12px;
        }
    }

    @media(min-width: 1028px) {
        width: 350px;
        background: #1d313e;
        padding: 24px;
        border-radius: 8px;
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
