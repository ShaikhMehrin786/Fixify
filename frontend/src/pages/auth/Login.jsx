import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import InputField from "../../components/auth/InputField";
import GradientButton from "../../components/auth/GradientButton";
import Loader from "../../components/common/Loader";
import "../../assets/css/auth.css";
import "../../assets/css/login.css";
import { validateLogin } from "../../utils/validators";

function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

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
        setError("")
        const message = validateLogin(formData);

            if (message) {

                setError(message);

                setLoading(false);

                return;

            }

        try{

            const user = await login(formData);
            toast.success("Login Successful!");
            const role = user.role;

            if (role === "CUSTOMER") {
                navigate("/customer/dashboard");
            }
            else if (role === "WORKER") {
                navigate("/worker/dashboard");
            }
            else {
                navigate("/admin/dashboard");
            }

        }

        catch(error){

            const message =

                error.response?.data?.detail ||

                "Invalid email or password.";

            setError(message);

            toast.error(message);

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

                    <GradientButton disabled={loading}>

                        {

                            loading

                            ?

                            <Loader/>

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