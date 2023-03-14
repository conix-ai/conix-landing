import { Article as ArticleInterface } from "@/interfaces/blog";
import MainLayout from "@/layouts/MainLayout";
import BlogService from "@/services/blog.service";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Layout = ({ children }: any) => {
  return <MainLayout>{children}</MainLayout>;
};

export type ArticleProps = {};
const Article = (props: ArticleProps) => {
  const router = useRouter();
  const articleSlug = router.query.articleSlug as string;
  const [article, setArticle] = useState<Partial<ArticleInterface>>({});

  const getArticle = useCallback(async () => {
    if (articleSlug) {
      const res = await BlogService.getArticle(articleSlug);
      setArticle(res.article);
    }
  }, [articleSlug]);

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  return (
    <div className="page" id="article">
      <header className="h-[350px]">
        <div className="container mx-auto">
          <div className="py-4">
            <h1>{articleSlug}</h1>
          </div>
        </div>
      </header>
    </div>
  );
};

Article.Layout = Layout;
export default Article;
