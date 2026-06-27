import { useEffect, useState } from "react";
import "./../../assets/css/statistics.css";

import {
    FaUsers,
    FaClipboardList,
    FaTools,
    FaStar
} from "react-icons/fa";

import { getStatistics } from "../../services/dashboardService";

function Statistics() {

    const [stats, setStats] = useState({
        customers: 0,
        requests: 0,
        workers: 0,
        completed: 0
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStatistics();
    }, []);

    const loadStatistics = async () => {
        try {

            const data = await getStatistics();

            setStats(data);

        } catch (error) {

            console.error("Statistics Error:", error);

        } finally {

            setLoading(false);

        }
    };

    const statistics = [

        {
            icon: <FaUsers />,
            number: loading ? "..." : `${stats.customers}`,
            title: "Verified Customers"
        },

        {
            icon: <FaClipboardList />,
            number: loading ? "..." : `${stats.requests}`,
            title: "Service Requests"
        },

        {
            icon: <FaTools />,
            number: loading ? "..." : `${stats.workers}`,
            title: "Active Workers"
        },

        {
            icon: <FaStar />,
            number: loading ? "..." : `${stats.completed}`,
            title: "Completed Services"
        }

    ];

    return (

        <section className="stats-section">

            <div className="container">

                <div className="row">

                    {statistics.map((item, index) => (

                        <div
                            className="col-lg-3 col-md-6 mb-4"
                            key={index}
                        >

                            <div className="stat-card">

                                <div className="stat-icon">
                                    {item.icon}
                                </div>

                                <h2>{item.number}</h2>

                                <p>{item.title}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Statistics;