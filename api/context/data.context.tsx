import {
  createContext,
  ReactNode,
  Reducer,
  useContext,
  useReducer,
} from "react";
import { dataReducer } from "./data.reducer";

import { DataAction, DataContextType, DataState } from "./data.types";

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};

export const DataContextProvider = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<DataState, DataAction>>(
    dataReducer,
    {
      summaries: {
        data: null,
        status: "idle",
        error: null,
        timestamp: null,
      },
      article: {
        data: null,
        status: "idle",
        error: null,
        timestamp: null,
      },
    }
  );

  const dataContextValue: DataContextType = {
    state: Object.freeze(state),
    dispatch,
  };

  return <DataContext.Provider value={dataContextValue} {...props} />;
};
