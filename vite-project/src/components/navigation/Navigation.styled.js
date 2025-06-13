import styled from "styled-components";

export const NavStyled = styled.nav`

padding: 1.5rem;

  .Logo img {
    width: 80px;
  }

  .nav-container {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
  }
  /* Burger menu button */
  .menu-toggle {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }

  /* Desktop Menu */
  .menu {
    position: relative;
    width: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  li {
    padding: 10px;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .menu {
      display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
      width: 100%;
      background: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      padding: 10px 0;
    }

    ul {
      flex-direction: column;
      width: 100%;
      text-align: center;
    }

    li {
      padding: 15px;
    }
  }
`;
