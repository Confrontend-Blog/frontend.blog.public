import { ArticleDto } from "@/api/openapi/generated-clients";
import { NextSeo } from "next-seo";

interface ArticleHeadProps {
  data: ArticleDto;
  slugUrl: string;
}

export const ArticleHead = ({ data, slugUrl }: ArticleHeadProps) => {
  const fullUrl =
    typeof window !== "undefined" ? `${window.location.origin}${slugUrl}` : "";

  return (
    <NextSeo
      title={data.title}
      description={data.summary}
      canonical={fullUrl}
      openGraph={{
        url: fullUrl,
        title: data.title,
        description: data.summary,
        type: "article",
        // TODO add these later
        //   images: [
        //     {
        //       url: data.image,
        //       alt: data.title,
        //     },
        //   ],
        article: {
          publishedTime: data.date,
          authors: [data.author],
        },
      }}
      twitter={{
        handle: "@",
        site: "@",
        cardType: "summary_large_image",
      }}
    />
  );
};
