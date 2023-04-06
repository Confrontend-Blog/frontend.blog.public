import { ArticleDto, ArticleSummariesResponse } from "../openapi/generated-clients";

type FetchStatus = "idle" | "loading" | "succeeded" | "failed";
type ApiCallInfo = {
  status: FetchStatus;
  error: string | null;
  timestamp: Date | null;
};

export type DataState = {
  summaries: {
    data: ArticleSummariesResponse | null;
    api: ApiCallInfo;
  };
  article: {
    data: ArticleDto | null;
    api: ApiCallInfo;
  };
};

export type DataAction =
  | {
      type: "setSummaries";
      data: ArticleSummariesResponse | null;
      api: ApiCallInfo;
    }
  | { type: "setArticle"; data: ArticleDto | null; api: ApiCallInfo };

export type DataContextType = {
  state: Readonly<DataState>;
  dispatch: React.Dispatch<DataAction>;
};
