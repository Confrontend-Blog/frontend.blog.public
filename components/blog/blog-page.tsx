import { useState } from "react";

import { CuiButton } from "../shared/button/cui-button";
import * as S from "./blog-page.styled";
import { ArticleCreate } from "../article/article-create/article-create";
import { ArticleTeasersList } from "../article/article-teaser-list/article-teasers-list";
/**
 * Blog Page
 */
export default function Blog(): JSX.Element {
  const [isNewPostMode, setIsNewPostMode] = useState(false);

  const onPostCreateCancel = () => {
    setIsNewPostMode(false);
  };

  return (
    <S.BlogContainer>
      {isNewPostMode ? (
        <ArticleCreate cancelCb={onPostCreateCancel} />
      ) : (
        <>
          <CuiButton color="#222" bgColor="#eee" onClick={() => setIsNewPostMode(true)}>New</CuiButton>
          <ArticleTeasersList />
        </>
      )}
    </S.BlogContainer>
  );
}
