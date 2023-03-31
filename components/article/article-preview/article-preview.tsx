import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as S from "./article-preview.styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface ArticlePreviewProps {
  content: string;
}

export default function ArticlePreview({ content }: ArticlePreviewProps) {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ children }) {
          return (
            <SyntaxHighlighter
              children={String(children)}
              language={"tsx"}
              style={dracula}
            />
          );
        },
      }}
    />
  );
}
