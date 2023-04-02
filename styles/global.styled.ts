import { createGlobalStyle } from "styled-components";

const AppGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.typography.body1};
    background-color:  ${({ theme }) => theme.palette.background.default};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    min-height: 100vh;
    color:  ${({ theme }) => theme.palette.primary.main};
  }
  p {
    font-family: "Source Sans Pro", sans-serif;
  }

  a {
    color:  ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;
    color: unset;
  }
`;

export { AppGlobalStyle };
