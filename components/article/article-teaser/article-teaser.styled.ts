import styled from "styled-components";

export const TeaserContainer = styled.article`
  line-height: 1.5em;
  display: flex;
  max-height: 10rem;
  min-height: 10rem;
  flex-direction: column;
  .title {
    flex-shrink: 0;
    h1 {
      /* avoid display block of h1 tag */
      display: unset;
    }
    color: #0384fc;
    :hover {
      color: #46a6ffff;
    }
    :first-letter {
      text-transform: capitalize;
    }
  }

  .edit {
    border-radius: 1em;
    background-color: #ffffff1f;
    padding: 0 2em 0 2em;
    :hover {
      background-color: #46a6ffff;
    }
    :first-letter {
      text-transform: capitalize;
    }
  }
  .above-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
