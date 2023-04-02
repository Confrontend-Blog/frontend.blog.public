// import { useContext, useState } from "react";
// import { ApiContext } from "./api-context";

// const Endpoints = {
//   getSummaries: () => null,
// };

// function test(func: any) {
//     func()
// }

// test(Endpoints.getSummaries)

// export const useApiWithCache = <T>(
//   apiCall: () => Promise<T>,
//   cacheKey: string
// ): [T | undefined, boolean, () => void] => {
//   const { cache } = useContext(ApiContext);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [data, setData] = useState<T | undefined>(cache.get(cacheKey));

//   const refresh = async () => {
//     setIsLoading(true);
//     const newData = await apiCall();
//     setData(newData);
//     cache.set(cacheKey, newData);
//     setIsLoading(false);
//   };

//   return [data, isLoading, refresh];
// };
