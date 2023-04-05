import { ArticleContent } from "@/components/article/article-content/article-content";
import { GetServerSideProps } from "next";

interface SlugPageProps {
  data: string;
}

export default function SlugPage({ data }: SlugPageProps) {
  // You can use the fetched data to render the page
  // ...

  return (
    <div>
      <ArticleContent
        title={"title"}
        author={"Hamed Fatehi"}
        category={"Frontend"}
        date={"2022-10-15"}
      >
        {
          "MDN Web Docs is an open-source, collaborative project documenting Web platform technologies, including CSS, HTML, JavaScript, and Web APIs. We also provide an extensive set of learning resources for beginning developers and students. MDN's mission is to provide a blueprint for a better internet and empower a new generation of developers and content creators to build it. We're always striving to connect developers more seamlessly with the tools and information they need to easily build projects on the open Web. Since our beginnings in 2005, Mozilla and the community have amassed around 45,000 pages of free, open-source content. Independent and unbiased - across browsers and technologies"
        }
      </ArticleContent>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<SlugPageProps> = async (
  context
) => {
  const { slug } = context.params!;

  const data = slug?.toString() || "";

  return {
    props: {
      data,
    },
  };
};
