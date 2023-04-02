import React, { ReactNode } from "react";
import * as S from "./article-content.styled";

interface ArticleContentProps {
  title: string;
  author: string;
  category: string;
  date: string;
  children: ReactNode;
}

const ArticleContent = ({
  title,
  author,
  category,
  date,
  children,
}: ArticleContentProps) => {
  return (
    <S.ArticleWrapper>
      <S.Title>{title}</S.Title>
      <S.Author>By {author}</S.Author>
      <S.Category>{category}</S.Category>
      <S.Date>{date}</S.Date>
      <S.Content>{children}</S.Content>
    </S.ArticleWrapper>
  );
};

export { ArticleContent };
