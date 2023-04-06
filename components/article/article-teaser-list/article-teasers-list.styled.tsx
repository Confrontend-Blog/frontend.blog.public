import styled from "styled-components";

export const TeaserDivider = styled.hr`
  border: 0.1em solid #ffffff1f;
  margin-block-start: 4em;
  margin-block-end: 4em;
`;

export const TeaserListWrapper = styled.span`
  display: flex;
  flex-direction: column;
  /* TODO find a better solution for layout shift */
  min-height: 100vh;
`;
