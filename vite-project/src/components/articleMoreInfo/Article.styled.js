import styled from "styled-components";

export const ArticleInfoStyled = styled.section`

max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .article-meta {
    font-size: 1rem;
    color: #777;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .article-content {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
    p {
      margin-bottom: 15px;
    }

    ul {
      padding-left: 20px;
      list-style: disc;
    }

    blockquote {
      font-style: italic;
      color: #555;
      border-left: 4px solid #ccc;
      padding-left: 15px;
      margin: 20px 0;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    h1 {
      font-size: 2rem;
    }

    .article-meta {
      font-size: 0.9rem;
    }
  }


`