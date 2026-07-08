import { NavLink } from "react-router-dom";

type NavItemProps={
    to: string ;
    children : React.ReactNode;
}
function NavItem({to,children} : NavItemProps){

    return(
        <div>
            <NavLink to={to} >{children}</NavLink>
        </div>
    )
}

export default NavItem;