import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
        --webkit-font-smoothing: antialiased;        
    }

    body,
    input,
    textarea,
    button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
