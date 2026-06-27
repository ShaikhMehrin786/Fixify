import "../../assets/css/auth.css";

function AuthLayout({ children }) {
    return (
        <section className="auth-page">

            <div className="auth-container">

                {children}

            </div>

        </section>
    );
}

export default AuthLayout;