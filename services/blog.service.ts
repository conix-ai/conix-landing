import { api } from "./api";

const BlogService = (() => {
  const getLatestBlogArticles = async () => {
    const latestBlogArticles = await api.get("blog?limit=4");
    return latestBlogArticles.data;
  };

  const getArticle = async (slug: string) => {
    const article = await api.get(`blog/${slug}`);
    return article.data;
  };

  return {
    getLatestBlogArticles,
    getArticle,
  };
})();

export default BlogService;
