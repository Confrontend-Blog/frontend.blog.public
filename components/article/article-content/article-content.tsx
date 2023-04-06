import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { ReactElement } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import * as S from "./article-content.styled";

interface ArticleContentProps {
  title: string;
  author: string;
  category: string;
  date: string;
  children: string;
}

// TODO fix flickering non styled on refresh
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
          remarkPlugins={[remarkGfm]}
          components={{
            code({ children }) {
              return (
                <SyntaxHighlighter
                  // eslint-disable-next-line react/no-children-prop
                  children={children[0] ? String(children[0]) : ""}
                  language={"typescript"}
                  // TODO see why adding style leads to errors
                  // style={dark}
                />
              );
            },
          }}
        >
          {children}
        </ReactMarkdown>
      </S.Content>
    </S.ArticleWrapper>
  );
};

export { ArticleContent };
