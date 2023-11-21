import { AxiosError, AxiosRequestConfig } from "axios";
import { getAllSummariesApiFacade } from "../openapi/config";
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
): Promise<ArticleSummariesResponse | null> => {
  const options: AxiosRequestConfig = {
    params: {
      page,
      limit,
    },
  };

  try {
    const res = await getAllSummariesApiFacade(options);

    return res.data ?? null;
  } catch (error: any) {
    const typedErr = error as AxiosError;
    console.log(typedErr.message);
    console.log(typedErr.request);
    return null;
  }
};
