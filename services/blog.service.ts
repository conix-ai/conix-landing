import { api } from "./api";

const BlogService = (() => {
  const getLatestBlogArticles = async () => {
    const latestBlogArticles = await api.get("blog?limit=4");
    return latestBlogArticles.data;
  };

  return {
    getLatestBlogArticles,
  };
})();

export default BlogService;
