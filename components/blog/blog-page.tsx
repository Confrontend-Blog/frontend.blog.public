import { useState } from "react";

import * as S from "./blog-page.styled";
// import { ArticleCreate } from "../article/article-create/article-create";
import { ArticleTeasersList } from "../article/article-teaser-list/article-teasers-list";
import dynamic from "next/dynamic";

const CuiButton = dynamic(() => import("../shared/button/cui-button"), {
  ssr: false,
  loading: () => <span style={{ backgroundColor: "red" }}>Loading...</span>,
});

/**
 * Blog Page
 */
export default function Blog(): JSX.Element {
  return (
    <S.BlogContainer>
      <ArticleTeasersList />
    </S.BlogContainer>
  );
}
