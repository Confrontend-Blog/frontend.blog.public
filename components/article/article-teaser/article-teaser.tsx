import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as S from "./article-teaser.styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ArticleSummaryDto } from "../../../api/openapi/generated-clients";
import ArticleTeaserSkeleton from "./article-teaser-skeleton";
import { articlesEndpoint } from "@/api/openapi/config";
import { IconTwoLetter } from "@/components/icon-tech-categories/icon-tech-categories";

export default function ArticleTeaser({
  title,
  summary,
  category,
  date,
  slug,
  author,
  loading,
}: Omit<ArticleSummaryDto, "id"> & { loading: boolean }) {
  const isAdmin = true;

  return (
    <S.TeaserContainer>
      {loading ? (
        <S.SkeletonContainer>
          <ArticleTeaserSkeleton />
        </S.SkeletonContainer>
      ) : (
        <>
          <header>
            <h5 className="above-title">
              <span>
                {category} | {date}
              </span>
              {isAdmin && (
                <a href="#" className="edit">
                  <span>✎ Edit</span>
                </a>
              )}
            </h5>
            <S.StyledLink
              href={`/${articlesEndpoint}/${slug}`}
              className="title"
            >
              <h1>{title}</h1>
            </S.StyledLink>
          </header>
          <S.Summary>
            <ReactMarkdown
              // eslint-disable-next-line react/no-children-prop
              children={summary}
              remarkPlugins={[remarkGfm]}
              components={{
                code({ children }) {
                  return (
                    <SyntaxHighlighter
                      // eslint-disable-next-line react/no-children-prop
                      children={String(children)}
                      language={"tsx"}
                      style={dracula}
                    />
                  );
                },
              }}
            />
          </S.Summary>
        </>
      )}
    </S.TeaserContainer>
  );
}
