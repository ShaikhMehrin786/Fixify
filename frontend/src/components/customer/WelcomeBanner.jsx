import "../../assets/css/customer_welcome-banner.css";

function WelcomeBanner() {

    return (

        <section className="welcome-banner">

            <div>

                <h1>

                    Need a Home Service Today?

                </h1>

                <p>

                    Book trusted professionals for all your home services in just a few clicks.

                </p>

            </div>

            <div className="banner-buttons">

                <button className="primary-btn">

                    Book Service

                </button>

                <button className="secondary-btn">

                    Track Booking

                </button>

            </div>

        </section>

    );

}

export default WelcomeBanner;