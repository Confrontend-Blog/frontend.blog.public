import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
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
  total: number;
  isLoading: boolean;
}

const Pagination = ({ total, isLoading }: PaginationProps) => {
  const router = useRouter();

  const { page = "1" } = router.query;
  const queryParamPage = parseInt(page as string, 10);

  const [currentPage, setCurrentPage] = useState(queryParamPage);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(total / 5) || 0);
  }, [total]);

  const onPreviousPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);

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
        Page {currentPage} of {totalPages}
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
