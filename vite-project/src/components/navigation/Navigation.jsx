import { useState } from "react";
import { NavStyled } from "./Navigation.styled";
import Logo from "../../assets/INGN.svg";
import { NavLinkStyled } from "../NavStyledLink/NavLink.styled";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <NavStyled $isOpen={isOpen}>

      <div className="nav-container">
        {/* Logo */}
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>


        {/* Burger Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
       
      </div>

       {/* Navigation Menu */}
       <div className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li><NavLinkStyled path={"/"}>Alle</NavLinkStyled></li>
            <li><NavLinkStyled path={"category/indland"}>Indland</NavLinkStyled></li>
            <li><NavLinkStyled path={"category/udland"}>Udland</NavLinkStyled></li>
            <li><NavLinkStyled path={"category/teknologi"}>Teknologi</NavLinkStyled></li>
            <li><NavLinkStyled path={"category/sport"}>Sport</NavLinkStyled></li>
            <li><NavLinkStyled path={"category/politik"}>Politik</NavLinkStyled></li>
            <li><NavLinkStyled path={"category/samfund"}>Samfund</NavLinkStyled></li>
          </ul>
        </div>

    </NavStyled>
  );
};

export default Navigation;
