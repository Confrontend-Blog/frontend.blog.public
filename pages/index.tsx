import { getSummaries } from "@/api/clients/get-article-summaries";
import { ArticleSummariesResponse } from "@/api/openapi/generated-clients";
import { DataContext } from "@/providers/data-provider";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import Blog from "../components/blog/blog-page";
import { AppApiResponse } from "@/api/app-api";

const PAGINATION_LIMIT = 5;

// Client
export default function Home(res: AppApiResponse<ArticleSummariesResponse>) {
  return (
    <DataContext.Provider value={{ articleSummaries: res }}>
      <Blog />
    </DataContext.Provider>
  );
}

// Server
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const page = context?.query?.page || 1;

  const apiResponse = await getSummaries(
    parseInt(page as string, 10),
    PAGINATION_LIMIT
  );

  return {
    props: apiResponse,
  };
};
