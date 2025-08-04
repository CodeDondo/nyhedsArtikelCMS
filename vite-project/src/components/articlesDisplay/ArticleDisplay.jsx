import useArticle from "../../context/articleContext";
import { NavLink } from "react-router-dom";
import { ArticlesStyled } from "./Articles.styled";

const Article = () => {
  const { articles, error } = useArticle();

  if (error) {
    return <div>Fejl opstod: {error.message}</div>;
  }

  if (articles.length === 0) {
    return <div>Ingen artikler fundet.</div>;
  }

  return (
    <ArticlesStyled>
      <div className="news-container">
        {articles.items.map((article) => (
  <NavLink
    key={article.sys.id}
    to={`/article/${article.fields.slug}`}
    className="news-item"
  >
    {article.fields.image?.fields?.file?.url && (
      <img
        src={article.fields.image.fields.file.url}
        alt={article.fields.titel}
        className="news-image"
      />
    )}
    <div className="news-content">
      <h2 className="news-title">{article.fields.titel}</h2>
    </div>
  </NavLink>
))}

      </div>
    </ArticlesStyled>
  );
};

export default Article;
