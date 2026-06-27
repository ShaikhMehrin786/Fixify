import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";

function Navbar() {

    return (

        <header className="navbar-area">

            <div className="container">

                <nav className="navbar navbar-expand-lg">

                    {/* Logo */}

                    <Link
                        className="navbar-brand logo"
                        to="/"
                    >

                        <div className="logo-box">
                            F
                        </div>

                        <span>Fixify</span>

                    </Link>

                    {/* Toggle */}

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMenu"
                    >

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarMenu"
                    >

                        <ul className="navbar-nav mx-auto">

                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/services">
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link to="/help">
                                    Help
                                </Link>
                            </li>

                        </ul>

                        <div className="nav-buttons">

                            <Link
                                to="/login"
                                className="login-btn"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="register-btn"
                            >
                                Register
                            </Link>

                        </div>

                    </div>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;