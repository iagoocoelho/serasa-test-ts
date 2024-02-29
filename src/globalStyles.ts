import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {

        .display {
            font-size: 2.5rem;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 601px) {

    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {}

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {}

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {}
  }
`;

export default GlobalStyle;
