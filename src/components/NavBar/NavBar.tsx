import {NavLink} from "react-router-dom";
import navLinks, {navLink} from "./navLinks";
import style from "./NavBar.module.css"

export function NavBar() {

return(
        <nav className={style.nav}>
            {navLinks.map(({link, title}: navLink, index: number) =>
                <NavLink className={style.link} key={index} to={link}>{title}</NavLink>
                )}
        </nav>
)
}