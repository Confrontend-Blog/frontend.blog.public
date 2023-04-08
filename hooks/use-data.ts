import { ArticleSummariesResponse } from "@/api/openapi/generated-clients";
import { createContext } from "react";
import { useContext } from "react";

type Data = {
  data: ArticleSummariesResponse;
  api: { status: string; error: null; timestamp: null };
};

export const DataContext = createContext(null as unknown as Data);

export function useData() {
  return useContext(DataContext);
}
