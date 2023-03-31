import { Skeleton } from "@mui/material";
import styled from "styled-components";

const StyledSkeleton = styled(Skeleton)`
  && {
    background-color: #333;
  }
`;

export default function ArticleTeaserSkeleton() {
  return (
    <>
      <StyledSkeleton variant="text" height={'3em'} width={"25%"} />
      <StyledSkeleton variant="text"height={'3em'} width={"50%"} />
      <StyledSkeleton variant="rectangular" height={'3em'} width={"75%"} />
    </>
  );
}
