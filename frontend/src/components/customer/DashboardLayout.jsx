import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../../assets/css/customer_dashboard.css";

function DashboardLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="dashboard">

            <Sidebar

                sidebarOpen={sidebarOpen}

                setSidebarOpen={setSidebarOpen}

            />

            <div className="dashboard-main">

                <Navbar

                    setSidebarOpen={setSidebarOpen}

                />

                <div className="dashboard-content">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default DashboardLayout;