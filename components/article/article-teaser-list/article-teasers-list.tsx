import { useState } from "react";
import ArticleTeaser from "../article-teaser/article-teaser";

import * as S from "./article-teasers-list.styled";
import { Pagination } from "../../shared/pagination/pagination";
import { useSummaries } from "@/hooks/use-summaries";

function ArticleTeasersList() {
  const [page, setPage] = useState(1);
  const { data, api } = useSummaries(page, 5);

  return (
    <>
      {api && api.status === "loading" ? (
        <S.TeaserListWrapper />
      ) : (
        <>
          {data &&
            data.summaries.map(
              ({ title, summary, category, date, id, slug, author }) => (
                <span key={id}>
                  <ArticleTeaser
                    title={title}
                    summary={summary}
                    category={category}
                    date={date}
                    slug={slug}
                    author={author}
                    loading={api && api.status === "loading"}
                  />
                  <S.TeaserDivider />
                </span>
              )
            )}
          <Pagination
            page={page}
            setPage={setPage}
            isLoading={api && api.status === "loading"}
            total={(data && data.count) || 1}
          />
        </>
      )}
    </>
  );
}

export { ArticleTeasersList };
