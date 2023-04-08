import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
  total: number;
  isLoading: boolean;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  total,
  isLoading,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const router = useRouter();

  const onPreviousPage = () => setCurrentPage((prev: number) => prev - 1);
  const handleNextPage = () => setCurrentPage((prev: number) => prev + 1);

  useEffect(() => {
    router.push(`/?page=${currentPage}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <PaginationContainer>
      <Button onClick={onPreviousPage} disabled={currentPage === 1}>
        <ChevronLeft color="warning" fontSize="large" />
      </Button>
      <div>
        Page {currentPage} of {total}
      </div>
      <Button
        onClick={handleNextPage}
        disabled={isLoading || currentPage === total}
      >
        <ChevronRight color="primary" fontSize="large" />
      </Button>
    </PaginationContainer>
  );
};

export { Pagination };
