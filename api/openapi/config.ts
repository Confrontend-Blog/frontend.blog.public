import { Configuration as ApiConfiguration } from "./generated-clients";

const baseUrl = "http://localhost:3000";
export const articlesEndpoint= "articles"

export const config = {
  // Application wide api configs for auto-generated clients.
  apiConfig: new ApiConfiguration({
    baseOptions: {
      headers: {
        Accept: "application/json",
      },
    },
    basePath: baseUrl,
  }),
};
