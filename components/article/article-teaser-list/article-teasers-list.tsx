import ArticleTeaser from "../article-teaser/article-teaser";

import * as S from "./article-teasers-list.styled";
import Pagination from "../../shared/pagination/pagination";
import { ArticleSummaryDto } from "@/api/openapi/generated-clients";
import { useContext } from "react";
import { DataContext } from "@/providers/data-provider";

function ArticleTeasersList() {
  const { articleSummaries } = useContext(DataContext);

  const { data, error } = articleSummaries;

  return (
    <>
      {error ? (
        <S.TeaserListWrapper />
      ) : (
        <>
          {data &&
            data.summaries.map(
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
                    loading={false}
                  />
                  <S.TeaserDivider />
                </span>
              )
            )}
          <Pagination isLoading={false} total={(data && data.count) || 1} />
        </>
      )}
    </>
  );
}

export { ArticleTeasersList };
