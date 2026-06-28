import { FaBars } from "react-icons/fa";
import "../../assets/css/customer_navbar.css"

function Navbar({ setSidebarOpen }) {

    return (

        <header className="dashboard-navbar">

            <button

                className="menu-btn"

                onClick={() =>

                    setSidebarOpen(true)

                }

            >

                <FaBars />

            </button>
            <div>

                <h2>

                    Customer Dashboard

                </h2>

                <p>

                    Welcome Back 👋

                </p>

            </div>

        </header>

    );

}

export default Navbar;