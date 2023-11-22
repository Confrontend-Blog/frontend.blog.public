// import { config } from "../openapi/config";
// import {
//   ArticleSlugsDto,
//   DefaultApiFp as ArticlesApi,
// } from "../openapi/generated-clients/api";

// export const getSlugs = async (): Promise<ArticleSlugsDto[] | null> => {
//   const { apiConfig } = config;

//   try {
//     const res = await ArticlesApi(apiConfig).articlesControllerFindAllSlugs();
//     const data = (await res()).data;

//     return data.slugs;
//   } catch (error) {
//     console.error("api error", error);
//     return Promise.resolve(null);
//   }
// };
