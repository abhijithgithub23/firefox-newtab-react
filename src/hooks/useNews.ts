import { useState, useEffect } from 'react';
import type { Article } from '../types';

export function useNews() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json');
        const data = await res.json();
        setArticles(data.articles.slice(0, 32)); 
      } catch (error) {
        console.error("Failed to fetch news", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return { articles, loading };
}