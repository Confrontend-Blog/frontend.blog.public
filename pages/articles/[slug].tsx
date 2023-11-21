import Head from "next/head";
import { getArticleById } from "@/api/clients/get-article-by-slug";
import { ArticleDto } from "@/api/openapi/generated-clients";
import { ArticleContent } from "@/components/article/article-content/article-content";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ArticleHead } from "@/components/seo/article-head";
import short from "short-uuid";

interface SlugPageProps {
  data: ArticleDto | null;
}

export default function SlugPage({ data }: SlugPageProps) {
  const router = useRouter();
  const { asPath } = router;
  const fullUrl = process.env.BASE_URL + asPath;
  console.log("fullUrl", fullUrl);

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
  const { params } = context;
  const { slug } = params || {};

  const slugStr = String(slug);
  // slug example: the-benefits-of-regular-exercise-bssEn8DQS9PDHVpG64GFiE
  const shortId = slugStr.substring(slugStr.lastIndexOf("-") + 1);

  const translator = short();

  // Convert UUID to a shorter form
  const uuid = translator.toUUID(shortId);

  if (!uuid || Array.isArray(uuid)) {
    return { notFound: true };
  }

  const data = uuid ? await getArticleById(uuid) : null;

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      data,
    },
  };
};
