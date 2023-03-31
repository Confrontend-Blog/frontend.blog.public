import { dark, onDarkText } from "./styles/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${onDarkText};
    background-color: ${dark};
  }

  p {
    font-family: "Source Sans Pro", sans-serif;
  }

  a {
    //fixme: make it customizable in external ui package
    color: ${onDarkText};
    text-decoration: none;
    color: unset;
  }

`;
