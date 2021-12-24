import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Open Sans Condensed', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 20px 60px;


        @media screen and (max-width: 800px) {
            padding: 10px 20px;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }
`;

