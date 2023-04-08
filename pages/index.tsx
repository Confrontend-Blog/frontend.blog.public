import { getSummaries } from "@/api/clients/get-article-summaries";
import { DataState } from "@/api/context/data.types";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Blog from "../components/blog/blog-page";

const PAGINATION_LIMIT = 5;

type HomeProps = {
  summaries: DataState["summaries"];
};

// Frontend
export default function Home({ summaries }: HomeProps) {
  return <Blog />;
}

// Server
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const page = context?.params?.page || 1;

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
