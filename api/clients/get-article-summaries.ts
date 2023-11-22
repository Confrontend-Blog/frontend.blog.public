import { AxiosError, AxiosRequestConfig } from "axios";
import {
  AppApiError,
  AppApiResponse,
  getAllSummariesApiFacade,
} from "../app-api";
import {
  ArticleSummariesResponse,
  DefaultApiAxiosParamCreator as ArticleAxiosApi,
} from "../openapi/generated-clients/api";

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};

export const getSummaries = async (
  page: number = 1,
  limit: number = 10
): Promise<AppApiResponse<ArticleSummariesResponse>> => {
  const options: AxiosRequestConfig = {
    params: {
      page,
      limit,
    },
  };

  return await getAllSummariesApiFacade(options);
};
