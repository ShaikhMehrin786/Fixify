import { Link } from "react-router-dom";
import "./../../assets/css/callToAction.css";

function CallToAction() {
    return (

        <section className="cta-section">

            <div className="container">

                <div className="cta-box">

                    <span className="cta-badge">
                        🚀 Join India's Smart Home Service Platform
                    </span>

                    <h2>
                        Ready to Book a Trusted Professional?
                    </h2>

                    <p>
                        Whether you need an electrician, plumber,
                        carpenter, painter, cleaner or AC technician,
                        Fixify connects you with verified professionals
                        near your location in minutes.
                    </p>

                    <div className="cta-buttons">

                        <Link
                            to="/register"
                            className="cta-primary-btn"
                        >
                            Book a Service
                        </Link>

                        <Link
                            to="/worker/register"
                            className="cta-secondary-btn"
                        >
                            Become a Worker
                        </Link>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default CallToAction;