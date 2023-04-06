import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";
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
      <S.Content>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={String(children)}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ children }) {
              return (
                <SyntaxHighlighter
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children)}
                  language={"typescript"}
                  style={dracula}
                />
              );
            },
          }}
        />

        {children}
      </S.Content>
    </S.ArticleWrapper>
  );
};

export { ArticleContent };
