import styled from "styled-components";

export const FooterStyled = styled.section`

display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 10%;
  background: #f8f8f8;
  font-family: Arial, sans-serif;
  
  .column {
    flex: 1;
    min-width: 200px;
    margin-bottom: 20px;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  p, a {
    font-size: 16px;
    color: #333;
    text-decoration: none;
    margin-bottom: 5px;
    display: block;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .column {
      width: 100%;
      margin-bottom: 30px;
    }
  }
`