import { AppApiResponse } from "@/api/app-api";
import { ArticleSummariesResponse } from "@/api/openapi/generated-clients";
import { createContext } from "react";
import { useContext } from "react";

type ApplicationDataType = {
  articleSummaries: AppApiResponse<ArticleSummariesResponse>;
  // extend for other data
};

export const DataContext = createContext<ApplicationDataType>({
  articleSummaries: { data: { summaries: [], count: 0 }, error: null },
});
