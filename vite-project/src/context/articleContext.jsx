import { useState, useEffect } from "react";
import client from "../src/Utils/contentfulClient";
import { useParams } from "react-router-dom";

// Custom hook til at hente artikler
const useArticle = () => {
    const { category } = useParams(); // Hent kategori fra URL
    const [articles, setArticles] = useState([]); // State til artikler
    const [filteredArticles, setFilteredArticles] = useState([]); // State til filtrerede artikler
    const [error, setError] = useState(null); // State til fejl

    useEffect(() => {
        // Hent artikler fra Contentful
        client.getEntries({ content_type: 'nyhedsArtikel' })
            .then((data) => {
                // Map data til artikel objekter
                const fetchedArticles = data.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.overskrift,
                    publishDate: new Date(item.fields.udgivelsesdato).toLocaleDateString("da-DK"),
                    author: item.fields.skribent,
                    image: item.fields.artikelbillede?.fields.file.url || null,
                    content: item.fields.indhold,
                    category: item.fields.kategori,
                    slug: item.fields.slug,
                }));

                setArticles(fetchedArticles); // Opdater artikler state
            })
            .catch((error) => {
                setError(error); // Opdater fejl state
                console.error("Error fetching articles:", error); // Log fejl
            });
    }, []);

    useEffect(() => {
        // Filtrer artikler baseret på kategori
        if (category) {
            const filtered = articles.filter(article => article.category.toLowerCase() === category.toLowerCase());
            setFilteredArticles(filtered);
        } else {
            setFilteredArticles(articles);
        }
    }, [category, articles]);

    return { articles: filteredArticles, error }; // Returner filtrerede artikler og fejl
};

export default useArticle;
