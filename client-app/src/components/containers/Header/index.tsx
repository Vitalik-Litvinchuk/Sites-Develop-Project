import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Logout from "../../auth/Logout";

const Header = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    return (
        <nav className="navbar navbar-expand navbar-dark sticky-top bg-dark rounded-bottom-2">
            <div className="collapse navbar-collapse container p-0">
                <Link className="navbar-brand" to="/">
                    <img className="main-logo logo-invert-100" src="/public/storage-logo.svg" alt="STORagE" />
                </Link>
                <ul className="navbar-nav me-auto">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/">Home page</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">Create Resume</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto site-font">
                    {isAuth ?
                        <li className="nav-item">
                            <Logout />
                        </li> :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Header;