import { useState, useEffect } from "react";
import client from "../utils/contentfulClient";
import { useParams } from "react-router-dom";

const useArticle = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
        try {
            const data = await client.getEntries('nyhedsArtikel')
                setArticles(data)
        } catch (err) {
            console.error("Error fetching articles:", err);
            setError(err.message || 'Unknown error')
        }
    }

    fetchArticles();
  }, []);

  useEffect(() => {
    if (category) {
      const filtered = articles.filter(
        (article) => article.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  }, [category, articles]);

  return { articles: filteredArticles, error };
};

export default useArticle;
