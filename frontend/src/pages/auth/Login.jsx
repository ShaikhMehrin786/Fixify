import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import InputField from "../../components/auth/InputField";
import GradientButton from "../../components/auth/GradientButton";

import "../../assets/css/auth.css";
import "../../assets/css/login.css";

import authService from "../../services/authService";

function Login() {

    const navigate = useNavigate();

    const [showPassword,setShowPassword]=useState(false);

    const [loading,setLoading]=useState(false);

    const [error,setError]=useState("");

    const [formData,setFormData]=useState({

        email:"",
        password:""

    });

    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        setLoading(true);

        setError("");

        try{

            const response=await authService.login(formData);

            localStorage.setItem(
                "access",
                response.data.access
            );

            localStorage.setItem(
                "refresh",
                response.data.refresh
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            const role=response.data.user.role;

            if(role==="customer"){

                navigate("/customer/dashboard");

            }

            else if(role==="worker"){

                navigate("/worker/dashboard");

            }

            else{

                navigate("/admin/dashboard");

            }

        }

        catch(error){

            setError(

                error.response?.data?.detail ||

                "Invalid email or password."

            );

        }

        finally{

            setLoading(false);

        }

    };

    return(

        <AuthLayout>
            <div className="login-wrapper">

            <div className="login-card">

                <AuthHeader

                    title="Welcome Back"

                    subtitle="Sign in to your Fixify account"

                />

                <form

                    className="login-form"

                    onSubmit={handleSubmit}

                >

                    {

                        error &&

                        <div className="auth-error">

                            {error}

                        </div>

                    }

                    <InputField

                        label="Email"

                        icon={<FaEnvelope/>}

                        type="email"

                        name="email"

                        placeholder="Enter your email"

                        value={formData.email}

                        onChange={handleChange}

                        required

                    />

                    <InputField

                        label="Password"

                        icon={<FaLock/>}

                        type={

                            showPassword

                            ?

                            "text"

                            :

                            "password"

                        }

                        name="password"

                        placeholder="Enter your password"

                        value={formData.password}

                        onChange={handleChange}

                        rightIcon={

                            showPassword

                            ?

                            <FaEyeSlash/>

                            :

                            <FaEye/>

                        }

                        onRightIconClick={()=>

                            setShowPassword(!showPassword)

                        }

                        required

                    />

                    <div className="auth-options">

                        <label>

                            <input type="checkbox"/>

                            Remember me

                        </label>

                        <Link to="/forgot-password">

                            Forgot Password?

                        </Link>

                    </div>

                    <GradientButton>

                        {

                            loading

                            ?

                            "Signing In..."

                            :

                            "Sign In"

                        }

                    </GradientButton>

                    <div className="auth-divider">

                        <span>

                            OR

                        </span>

                    </div>

                    <button

                        type="button"

                        className="google-btn"

                    >

                        Continue with Google

                    </button>

                    <div className="login-footer">

                        Don't have an account?

                        <Link to="/register">

                            Sign Up

                        </Link>

                    </div>

                </form>

            </div>
            </div>

        </AuthLayout>

    );

}

export default Login;