import Head from "next/head";
import { getArticleBySlug } from "@/api/clients/get-article-by-slug";
import { ArticleDto } from "@/api/openapi/generated-clients";
import { ArticleContent } from "@/components/article/article-content/article-content";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ArticleHead } from "@/components/seo/article-head";

interface SlugPageProps {
  data: ArticleDto | null;
}

export default function SlugPage({ data }: SlugPageProps) {
  const router = useRouter();
  const { asPath } = router;
  const fullUrl = process.env.BASE_URL + asPath;
  return (
    data && (
      <>
        <ArticleHead data={data} fullUrl={fullUrl} />
        <ArticleContent
          title={data.title}
          author={data.author}
          category={data.category}
          date={data.date}
        >
          {data.content}
        </ArticleContent>
      </>
    )
  );
}

export const getServerSideProps: GetServerSideProps<SlugPageProps> = async (
  context
) => {
  const { slug } = context.params!;

  const data = slug ? await getArticleBySlug(slug as string) : null;

  return {
    props: {
      data,
    },
  };
};
