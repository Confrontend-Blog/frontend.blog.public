import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as S from "./article-teaser.styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ArticleSummaryDto } from "../../../api/openapi/generated-clients";
import ArticleTeaserSkeleton from "./article-teaser-skeleton";
import { IconTwoLetter } from "@/components/icon-tech-categories/icon-tech-categories";
import short from "short-uuid";

export default function ArticleTeaser({
  id,
  title,
  summary,
  category,
  date,
  slug,
  author,
  loading,
}: ArticleSummaryDto & { loading: boolean }) {
  const translator = short();

  // Convert UUID to a shorter form
  const shortId = translator.fromUUID(id);

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
            </h5>
            <S.StyledLink
              href={`/articles/${slug}-${shortId}`}
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
