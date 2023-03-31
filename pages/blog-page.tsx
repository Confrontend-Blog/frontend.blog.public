import { useState } from "react";

import { CuiButton } from "../components/shared/button/cui-button";
import * as S from "../styles/blog.styled";
import { ArticleManagementCreate } from "../components/article/article-create/article-create";
import { ArticleTeasersList } from "../components/article/article-teaser-list/article-teasers-list";
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
        <ArticleManagementCreate cancelCb={onPostCreateCancel} />
      ) : (
        <>
          <CuiButton color="#222" bgColor="#eee" onClick={() => setIsNewPostMode(true)}>New</CuiButton>
          <ArticleTeasersList />
        </>
      )}
    </S.BlogContainer>
  );
}
