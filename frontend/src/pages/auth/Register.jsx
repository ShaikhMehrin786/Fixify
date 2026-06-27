import { useNavigate } from "react-router-dom";
import { FaUser, FaTools } from "react-icons/fa";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import RoleCard from "../../components/auth/RoleCard";

function Register() {

    const navigate = useNavigate();

    return (

        <AuthLayout>

            <AuthHeader />

            <div className="register-wrapper">

                <div className="register-title">

                    <h1>Choose Your Role</h1>

                    <p>

                        Join Fixify as a customer or service professional.

                    </p>

                </div>

                <div className="register-cards">

                    <RoleCard

                        icon={<FaUser />}

                        title="Customer"

                        description="Book trusted professionals for all your home service needs."

                        features={[
                            "Book Services",
                            "Track Requests",
                            "Secure Payments"
                        ]}

                        onClick={() => navigate("/register/customer")}

                    />

                    <RoleCard

                        icon={<FaTools />}

                        title="Service Professional"

                        description="Register your skills and start receiving service requests."

                        features={[
                            "Accept Jobs",
                            "Flexible Working",
                            "Grow Your Income"
                        ]}

                        onClick={() => navigate("/register/worker")}

                    />

                </div>

                <div className="auth-footer">

                    Already have an account?

                    <span onClick={() => navigate("/login")}>

                        Sign In

                    </span>

                </div>

            </div>

        </AuthLayout>

    );

}

export default Register;