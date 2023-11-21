import { getArticleByIdApiFacade } from "../openapi/config";
import {
  ArticleDto,
  DefaultApiFp as ArticlesApi,
} from "../openapi/generated-clients/api";

export const getArticleById = async (
  id: string
): Promise<ArticleDto | null> => {
  try {
    const res = await getArticleByIdApiFacade(id);

    return res.data ?? null;
  } catch (error) {
    console.error("api error", error);
    return Promise.resolve(null);
  }
};
