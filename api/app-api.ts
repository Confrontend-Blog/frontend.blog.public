import { AxiosRequestConfig } from "axios";
import {
  Configuration as ApiConfiguration,
  ArticleSummariesResponse,
  DefaultApi as ArticleDefaultApi,
  ArticleDto,
} from "./openapi/generated-clients";

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};

console.log("process.env.BACKEND_URL", process.env.BACKEND_URL);

const apiConfig = new ApiConfiguration({
  baseOptions: {
    headers: { Accept: "application/json" },
    credentials: "include",
  },
  basePath: process.env.BACKEND_URL,
});

const apiClient = new ArticleDefaultApi(apiConfig);

export type AppApiError = { error: string | null };

export type AppApiResponse<T> = AppApiError & {
  data: T | null;
};

const customCatch = (error: any): string => {
  if (error.response) {
    // The server responded with a status code outside of the 2xx range
    console.log("Server responded with error:", error.response.data);
    return error.response.data.message || "Server error";
  } else if (error.request) {
    // The request was made but no response was received
    console.log("No response received:", error.request);
    return "No response from server";
  } else {
    // Some other error occurred in setting up the request
    console.log("Error setting up request:", error.message);
    return error.message;
  }
};

export const getAllSummariesApiFacade = async (
  params: AxiosRequestConfig
): Promise<AppApiResponse<ArticleSummariesResponse>> => {
  try {
    const response = await apiClient.summariesControllerFindAllSummaries(
      params
    );
    return { data: response.data, error: null };
  } catch (error: any) {
    return {
      data: null,
      error: customCatch(error),
    };
  }
};

export const getArticleByIdApiFacade = async (
  id: string
): Promise<AppApiResponse<ArticleDto>> => {
  try {
    const response = await apiClient.articlesControllerFindOne(id);
    return { data: response.data, error: null };
  } catch (error: any) {
    return {
      data: null,
      error: customCatch(error),
    };
  }
};
