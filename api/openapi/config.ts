import axios, { AxiosRequestConfig } from "axios";
import {
  Configuration as ApiConfiguration,
  ArticleSummariesResponse,
  DefaultApiAxiosParamCreator as ArticleAxiosApi,
  ArticleDto,
} from "./generated-clients";

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};

// TODO make dynamic based on environment
export const baseUrl = "http://localhost:9000";

console.log("baseUrl baseUrl baseUrl", baseUrl);

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const commonOptions = {
  headers: { Accept: "application/json" },
  withCredentials: true,
};

const apiConfig = new ApiConfiguration({
  baseOptions: {
    credentials: "include",
  },
  basePath: baseUrl,
});

const customCatch = (error: any) => {
  if (error.response) {
    // The server responded with a status code outside of the 2xx range
    console.log("Server responded with error:", error.response.data);
    return { error: error.response.data.message || "Server error" };
  } else if (error.request) {
    // The request was made but no response was received
    console.log("No response received:", error.request);
    return { error: "No response from server" };
  } else {
    // Some other error occurred in setting up the request
    console.log("Error setting up request:", error.message);
    return { error: error.message };
  }
};

async function apiRequest<T>(
  requestConfig: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    const response = await axiosInstance.request<T>(requestConfig);
    return { data: response.data };
  } catch (error: any) {
    return customCatch(error);
  }
}

export const getAllSummariesApiFacade = async (
  axiosParams: AxiosRequestConfig
): Promise<ApiResponse<ArticleSummariesResponse>> => {
  const { url } = await ArticleAxiosApi(
    apiConfig
  ).summariesControllerFindAllSummaries(commonOptions);

  return await apiRequest<ArticleSummariesResponse>({
    method: "GET",
    url,
    params: axiosParams.params,
  });
};

export const getArticleByIdApiFacade = async (
  id: string
): Promise<ApiResponse<ArticleDto>> => {
  const { url } = await ArticleAxiosApi(apiConfig).articlesControllerFindOne(
    id
  );

  return await apiRequest<ArticleDto>({
    method: "GET",
    url,
    data: id,
  });
};
