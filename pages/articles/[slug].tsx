import { getArticleBySlug } from "@/api/clients/get-article-by-slug";
import { useData } from "@/api/context/data.context";
import { ArticleDto } from "@/api/openapi/generated-clients";
import { ArticleContent } from "@/components/article/article-content/article-content";
import { GetServerSideProps } from "next";

interface SlugPageProps {
  data: ArticleDto | null;
}

export default function SlugPage({ data }: SlugPageProps) {
  return (
    data && (
      <ArticleContent
        title={data.title}
        author={data.author}
        category={data.category}
        date={data.date}
      >
        {data.content}
      </ArticleContent>
    )
  );
}

export const getServerSideProps: GetServerSideProps<SlugPageProps> = async (
  context
) => {
  const { slug } = context.params!;

  console.log("slugslugslugslugslugslugslugslug", slug);

  const data = slug ? await getArticleBySlug(slug as string) : null;

  return {
    props: {
      data,
    },
  };
};
