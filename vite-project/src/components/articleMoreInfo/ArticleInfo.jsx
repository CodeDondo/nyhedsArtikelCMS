import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ArticleInfoStyled } from "./Article.styled"
import { useParams } from "react-router-dom";
import useArticle from "../../context/articleContext";
 
const ArticleInfo = () => {
    const { slug } = useParams();
    const { articles, error } = useArticle();
    //console.log(typeof articles.items);
 
    const result = articles?.items?.find(x => x.fields.slug === slug)
    
 
    if (!result || !result.fields) {
        return <p>Indlæser artikel...</p>;
    }
    console.log(result.fields);
    
    const { titel, content } = result.fields
 
    return (
 
        <ArticleInfoStyled>
            <h2>{titel}</h2>
            <p>{content && documentToReactComponents(content)}</p>
        </ArticleInfoStyled>
    );
};
 
export default ArticleInfo;