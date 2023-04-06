import { getSummaries } from "@/api/clients/get-article-summaries";
import { useEffect } from "react";
import { useData } from "../api/context/data.context";

export const useSummaries = (page = 1, limit = 10) => {
  const { state, dispatch } = useData();

  /**
   * 💎 Developer's insight:
   * Without useEffect,the fetchSummaries function will be called repeatedly
   * without any control on when it should be called, since it's directly
   * inside the hook. This will happen whenever the component using the hook
   * re-renders due to a state or prop change, or any other re-render trigger.
   */
  useEffect(() => {
    const fetchSummaries = async () => {
      dispatch({
        type: "setSummaries",
        data: state.summaries.data,
        api: { status: "loading", error: null, timestamp: null },
      });

      try {
        const summaries = await getSummaries(page, limit);
        // TODO compare timestamps and read from store if too soon or come up with an invalidation concept
        summaries &&
          dispatch({
            type: "setSummaries",
            data: summaries,
            api: { status: "succeeded", error: null, timestamp: null },
          });
      } catch (error) {
        console.error("api error", error);

        error &&
          dispatch({
            type: "setSummaries",
            data: state.summaries.data,
            api: {
              status: "failed",
              error: JSON.stringify(error),
              timestamp: null,
            },
          });
      }
    };

    fetchSummaries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  return state.summaries;
};
