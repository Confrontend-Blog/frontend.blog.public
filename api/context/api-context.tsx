// import React, { createContext, useState } from "react";
// import { getSummaries } from "./api";

// type ApiContextType = {
//   getSummaries: () => Promise<any>;
// };

// export const ApiContext = createContext<ApiContextType>({
//   getSummaries: async () => {},
// });

// const getSummariesWithCache = async () => {
//     const [summariesCache, setSummariesCache] = useState<any>(null);

//     if (summariesCache) {
//       return summariesCache;
//     }

//     const data = await getSummaries();
//     setSummariesCache(data);

//     return data;
//   };

// export const ApiProvider: React.FC = ({ children }) => {


  

//   const apiContextValue = {
//     getSummaries: getSummariesWithCache,
//   };

//   return <ApiContext.Provider value={apiContextValue}>{children}</ApiContext.Provider>;
// };
