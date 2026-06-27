import "./../../assets/css/hero.css";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

function Hero() {
    return (
        <section className="hero-section">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-10 text-center">

                        <span className="hero-badge">
                            AI Powered Home Services
                        </span>

                        <h1 className="hero-title">
                            Your Trusted
                            <span> Home Service </span>
                            Partner
                        </h1>

                        <p className="hero-description">

                            Book verified electricians, plumbers,
                            carpenters, painters and technicians in
                            just a few clicks. Fast, reliable and
                            affordable services at your doorstep.

                        </p>

                        <div className="hero-buttons">

                            <button className="btn-primary-custom">

                                Book Service

                                <FaArrowRight />

                            </button>

                            <button className="btn-outline-custom">

                                Become a Worker

                            </button>

                        </div>

                        <div className="search-box">

                            <div className="search-input">

                                <FaMapMarkerAlt className="location-icon" />

                                <input
                                    type="text"
                                    placeholder="Enter your location..."
                                />

                            </div>

                            <button className="search-btn">
                                Search
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;