import { getSummaries } from "@/api/clients/get-article-summaries";
import { ArticleSummariesResponse } from "@/api/openapi/generated-clients";
import { DataContext } from "@/hooks/use-data";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import Blog from "../components/blog/blog-page";

const PAGINATION_LIMIT = 5;

type HomeProps = {
  summaries: {
    data: ArticleSummariesResponse;
    api: { status: string; error: null; timestamp: null };
  };
};

// Frontend
export default function Home({ summaries }: HomeProps) {
  return (
    <DataContext.Provider value={summaries}>
      <Blog />
    </DataContext.Provider>
  );
}

// Server
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const page = context?.query?.page || 1;

  try {
    const apiResponse = await getSummaries(
      parseInt(page as string, 10),
      PAGINATION_LIMIT
    );

    return {
      props: {
        summaries: {
          data: apiResponse ?? null,
          api: { status: "succeeded", error: null, timestamp: null },
        },
      },
    };
  } catch (error) {
    return {
      props: {
        summaries: {
          data: null,
          api: {
            status: "failed",
            error: JSON.stringify(error),
            timestamp: null,
          },
        },
      },
    };
  }
};
