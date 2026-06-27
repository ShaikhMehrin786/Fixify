import { Link } from "react-router-dom";

function AuthHeader({ title, subtitle }) {

    return (

        <>

            <Link
                to="/"
                className="auth-logo"
            >

                <div className="auth-logo-box">

                    F

                </div>

                <h2>

                    Fixify

                </h2>

            </Link>

            <div className="auth-header">

                <h1>{title}</h1>

                <p>{subtitle}</p>

            </div>

        </>

    );

}

export default AuthHeader;