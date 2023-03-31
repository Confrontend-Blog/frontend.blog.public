import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 8em;
    text-align: center;
  }
`;

interface PaginationProps {
  page: number;
  total: number;
  isLoading: boolean;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

const Pagination = ({
  page,
  total,
  isLoading,
  handlePreviousPage,
  handleNextPage,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <Button onClick={handlePreviousPage} disabled={page === 1}>
        <ChevronLeft color="warning" fontSize="large" />
      </Button>
      <div>
        Page {page} of {total}
      </div>
      <Button onClick={handleNextPage} disabled={isLoading || page === total}>
        <ChevronRight color="primary" fontSize="large" />
      </Button>
    </PaginationContainer>
  );
};

export { Pagination };
