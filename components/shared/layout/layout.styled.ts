import styled from "styled-components";
import { dark } from "../../../styles/colors";

export const Wrapper = styled.span`
  display: grid;
  min-height: 100%;
  grid-template-areas:
    "nav"
    "main-content";
  grid-template-rows: auto 1fr;
`;

export const Navigation = styled.span`
  grid-area: nav;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${dark};
`;

export const Main = styled.main`
  padding: 4em 8em 4em 8em;

  @media (max-width: 1280px) {
    padding: 4em 0 4em 0;
    word-break: break-word;
  }
`;
