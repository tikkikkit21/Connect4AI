import {NavLink} from "react-router-dom";

function Header() {
    return (
        <NavLink className={"circle-class home-button one home-circle"} to={"/"}>
                <div className="circle-class button-container">
                    <div>
                        <h3>Home</h3>
                    </div>
                </div>
        </NavLink>
    )
}

export default Header;