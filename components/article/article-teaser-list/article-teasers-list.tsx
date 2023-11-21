import { useEffect, useState } from "react";
import ArticleTeaser from "../article-teaser/article-teaser";

import * as S from "./article-teasers-list.styled";
import Pagination from "../../shared/pagination/pagination";
import { useData } from "@/hooks/use-data";
import { ArticleSummaryDto } from "@/api/openapi/generated-clients";

function ArticleTeasersList() {
  const summaries = useData();

  return (
    <>
      {summaries.api && summaries.api.status === "loading" ? (
        <S.TeaserListWrapper />
      ) : (
        <>
          {summaries.data &&
            summaries.data.summaries.map(
              ({
                title,
                summary,
                category,
                date,
                id,
                slug,
                author,
              }: ArticleSummaryDto) => (
                <span key={id}>
                  <ArticleTeaser
                    id={id}
                    title={title}
                    summary={summary}
                    category={category}
                    date={date}
                    slug={slug}
                    author={author}
                    loading={
                      summaries.api && summaries.api.status === "loading"
                    }
                  />
                  <S.TeaserDivider />
                </span>
              )
            )}
          <Pagination
            isLoading={summaries.api && summaries.api.status === "loading"}
            total={(summaries.data && summaries.data.count) || 1}
          />
        </>
      )}
    </>
  );
}

export { ArticleTeasersList };
