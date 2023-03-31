import { AxiosRequestConfig } from "axios";
import { config } from "./openapi/config";
import {
  ArticleSummariesResponse,
  DefaultApiFp as ArticlesApi,
} from "./openapi/generated-clients/api";

// TODO Pagination
export const getSummaries = async (
  page: number = 1,
  limit: number = 10
): Promise<ArticleSummariesResponse | void> => {
  const options: AxiosRequestConfig = {
    params: {
      page,
      limit,
    },
  };

  const { apiConfig } = config;
  console.log("api");

  try {
    const res = await ArticlesApi(apiConfig).articlesControllerFindAllSummaries(
      options
    );
    const data = (await res()).data;
    return data;
  } catch (error) {
    console.error("api error", error);
    return Promise.resolve();
  }
};
