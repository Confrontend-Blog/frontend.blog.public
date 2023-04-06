import { Reducer } from "react";
import { DataState, DataAction } from "./data.types";

export const dataReducer: Reducer<DataState, DataAction> = (state, action) => {
  switch (action.type) {
    case "setSummaries":
      return {
        ...state,
        summaries: { ...state.summaries, data: action.data, api: action.api }
      };
    case "setArticle":
      return { ...state, article: { ...state.article, data: action.data, api: action.api }}
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};