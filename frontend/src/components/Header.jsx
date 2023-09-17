import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className="header-container">
            <NavLink className="header-text" to="/">Home</NavLink>
        </div>
    )
}

export default Header;