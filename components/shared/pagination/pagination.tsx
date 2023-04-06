import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
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
  setPage: (page: number) => void;
}

const Pagination = ({ page, total, isLoading, setPage }: PaginationProps) => {
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(total / 5) || 0);
  }, [total]);

  const handlePreviousPage = () => setPage(page - 1);
  const handleNextPage = () => setPage(page + 1);

  return (
    <PaginationContainer>
      <Button onClick={handlePreviousPage} disabled={page === 1}>
        <ChevronLeft color="warning" fontSize="large" />
      </Button>
      <div>
        Page {page} of {totalPages}
      </div>
      <Button onClick={handleNextPage} disabled={isLoading || page === total}>
        <ChevronRight color="primary" fontSize="large" />
      </Button>
    </PaginationContainer>
  );
};

export { Pagination };
