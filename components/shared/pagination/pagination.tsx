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

  const [currentPage, setCurrentPage] = useState(
    parseInt(router.query.page as string) || 1
  );

  const totalPages = Math.ceil(total / 5) || 1;

  const onPreviousPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);

  useEffect(() => {
    router.push(`/?page=${currentPage}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  /* If a user clicks on site logo, they will be redirected to home page (page 1)
   * But this won't be picked up buy Pagination component unless it listens to it.
   */
  useEffect(() => {
    const handleRouteChange = () => {
      const { page } = router.query;
      // user is redirected to home page via clicking on site logo
      page === undefined && setCurrentPage(1);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, router.query]);

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
        disabled={isLoading || currentPage === totalPages}
      >
        <ChevronRight color="primary" fontSize="large" />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
