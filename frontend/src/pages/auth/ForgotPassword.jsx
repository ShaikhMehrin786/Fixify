import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import InputField from "../../components/auth/InputField";
import GradientButton from "../../components/auth/GradientButton";

import "../../assets/css/auth.css";
import "../../assets/css/forgot-password.css";

function ForgotPassword(){

    const navigate = useNavigate();

    const [email,setEmail]=useState("");

    const handleSubmit=(e)=>{

        e.preventDefault();

        // Backend API

        navigate("/verify-otp");

    };

    return(

        <AuthLayout>

            <div className="forgot-card">

                <AuthHeader

                    title="Forgot Password"

                    subtitle="Enter your registered email to receive an OTP."

                />

                <form

                    className="forgot-form"

                    onSubmit={handleSubmit}

                >

                    <InputField

                        label="Email Address"

                        icon={<FaEnvelope/>}

                        type="email"

                        name="email"

                        placeholder="Enter your email"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                    />

                    <GradientButton>

                        Send OTP

                    </GradientButton>

                    <div className="back-login">

                        <Link to="/login">

                            Back to Login

                        </Link>

                    </div>

                </form>

            </div>

        </AuthLayout>

    );

}

export default ForgotPassword;