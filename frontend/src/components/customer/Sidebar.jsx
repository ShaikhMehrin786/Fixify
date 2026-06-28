import {

    FaHome,
    FaSearch,
    FaCalendarAlt,
    FaTools,
    FaBell,
    FaUser,
    FaHeadset,
    FaCog,
    FaSignOutAlt,
    FaTimes

} from "react-icons/fa";
import "../../assets/css/customer_sidebar.css"
import { NavLink } from "react-router-dom";

function Sidebar({

    sidebarOpen,

    setSidebarOpen

}) {

    return (

        <>

            {

                sidebarOpen &&

                <div

                    className="sidebar-overlay"

                    onClick={() =>

                        setSidebarOpen(false)

                    }

                />

            }

            <aside

                className={`sidebar ${

                    sidebarOpen

                    ?

                    "open"

                    :

                    ""

                }`}

            >

                <div className="sidebar-header">

                    <div className="sidebar-logo">

                        <div className="logo-circle">

                            F

                        </div>

                        <h2>

                            Fixify

                        </h2>

                    </div>

                    <button

                        className="close-btn"

                        onClick={() =>

                            setSidebarOpen(false)

                        }

                    >

                        <FaTimes />

                    </button>

                </div>

                <nav>

                    <NavLink to="/customer/dashboard">

                        <FaHome />

                        <span>Dashboard</span>

                    </NavLink>

                    <NavLink to="/customer/services">

                        <FaSearch />

                        <span>Find Services</span>

                    </NavLink>

                    <NavLink to="/customer/bookings">

                        <FaCalendarAlt />

                        <span>My Bookings</span>

                    </NavLink>

                    <NavLink to="/customer/active">

                        <FaTools />

                        <span>Active Services</span>

                    </NavLink>

                    <NavLink to="/customer/notifications">

                        <FaBell />

                        <span>Notifications</span>

                    </NavLink>

                    <NavLink to="/customer/profile">

                        <FaUser />

                        <span>Profile</span>

                    </NavLink>

                    <NavLink to="/customer/support">

                        <FaHeadset />

                        <span>Support</span>

                    </NavLink>

                    <NavLink to="/customer/settings">

                        <FaCog />

                        <span>Settings</span>

                    </NavLink>

                </nav>

                <button className="logout-btn">

                    <FaSignOutAlt />

                    Logout

                </button>

            </aside>

        </>

    );

}

export default Sidebar;