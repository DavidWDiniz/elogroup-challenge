import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
    }

    body {
        color: #FFF;
        background: #14222B;
    }

    body, input, button, textarea {
        font: 600 18px "Open Sans", sans-serif;
    }
`;
