import styled from "styled-components";

export const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  padding: 4em 0;
  margin: 0 auto;
  max-width: 52rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    min-width: 52rem;
  }
`;
