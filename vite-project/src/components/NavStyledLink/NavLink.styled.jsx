import { NavLink } from "react-router-dom"; 

export const NavLinkStyled = ({ path, children }) => {

    return(
        <NavLink
            style={({isActive}) => isActive ? { color: "blue" } : { color: "black" }}
            to={path}
            >
            {children}
        </NavLink>
    )
}