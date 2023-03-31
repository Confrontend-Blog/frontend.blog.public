import { useState, useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import { ArticleSummaryDto } from "../../../api/openapi/generated-clients";
import { getSummaries } from "../../../api/get-article-summaries";
import ArticleTeaser from "../article-teaser/article-teaser";

import * as S from "./article-teasers-list.styled";
import { Pagination } from "../../shared/pagination/pagination";

function ArticleTeasersList() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // TODO add feature for "Show x article in each page"
  const [limit, setLimit] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [articleSummaries, setArticleSummaries] = useState<ArticleSummaryDto[]>(
    []
  );

  useEffect(() => {
    setIsLoading(true);
    const fetchArticleSummaries = async () => {
      const data = await getSummaries(page, limit);
      setArticleSummaries(data?.summaries || []);
      if (data?.count) {
        setTotalPages(Math.ceil(data.count / 5) || 0);
      }
      setIsLoading(false);
    };
    fetchArticleSummaries();
  }, [page, limit]);

  const handlePreviousPage = () => setPage(page - 1);
  const handleNextPage = () => setPage(page + 1);

  return (
    <>
      {articleSummaries.map(
        ({ title, summary, category, date, id, slug, author }) => (
          <span key={id}>
            <ArticleTeaser
              title={title}
              summary={summary}
              category={category}
              date={date}
              slug={slug}
              author={author}
              loading={isLoading}
            />
            <S.TeaserDivider />
          </span>
        )
      )}
      <Pagination
        page={page}
        isLoading={isLoading}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        total={totalPages}
      />
    </>
  );
}

export { ArticleTeasersList };
