import { useState } from "react";
import { Link } from "react-router-dom";

import {
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import InputField from "../../components/auth/InputField";
import GradientButton from "../../components/auth/GradientButton";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";
import authService from "../../services/authService";
import { validateCustomer } from "../../utils/validators";
import "../../assets/css/auth.css";
import "../../assets/css/customer-register.css";

function CustomerRegister() {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
        agree: false
    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });

    };

    const handleSubmit = async (e) => {

      e.preventDefault();

      setLoading(true);

      setError("");

      const message = validateCustomer(formData);

      if (message) {

          setError(message);

          setLoading(false);

          return;

      }

      try {

        await authService.registerCustomer(formData);
        toast.success("Account Created Successfully!");
        navigate("/login");

      }

      catch (error) {

          setError(

              error.response?.data?.detail ||

              "Registration failed."

          );

      }

      finally {

          setLoading(false);

      }

    };

    return (

        <AuthLayout>

            <div className="customer-register-card">

                <AuthHeader
                    title="Create Customer Account"
                    subtitle="Join Fixify and book trusted professionals."
                />

                <form
                    className="customer-form"
                    onSubmit={handleSubmit}
                >
                  {
                    error &&

                    <div className="auth-error">

                        {error}

                    </div>
                }

                    <InputField
                        label="Full Name"
                        icon={<FaUser />}
                        name="full_name"
                        placeholder="Enter your full name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                    />

                    <InputField
                        label="Email Address"
                        icon={<FaEnvelope />}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <InputField
                        label="Phone Number"
                        icon={<FaPhoneAlt />}
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <InputField
                        label="Password"
                        icon={<FaLock />}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Create password"
                        value={formData.password}
                        onChange={handleChange}
                        rightIcon={
                            showPassword
                                ? <FaEyeSlash />
                                : <FaEye />
                        }
                        onRightIconClick={() =>
                            setShowPassword(!showPassword)
                        }
                        required
                    />

                    <InputField
                        label="Confirm Password"
                        icon={<FaLock />}
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirm_password"
                        placeholder="Confirm password"
                        value={formData.confirm_password}
                        onChange={handleChange}
                        rightIcon={
                            showConfirmPassword
                                ? <FaEyeSlash />
                                : <FaEye />
                        }
                        onRightIconClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                        required
                    />

                    <label className="terms-check">

                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                        />

                        <span>
                            I agree to the
                            <Link to="#"> Terms </Link>
                            &
                            <Link to="#"> Privacy Policy</Link>
                        </span>

                    </label>

                    <GradientButton disabled={loading}>

                      {

                          loading

                          ?

                          <Loader />

                          :

                          "Create Account"

                      }

                  </GradientButton>
                    <div className="login-link">

                        Already have an account?

                        <Link to="/login">

                            Sign In

                        </Link>

                    </div>

                </form>

            </div>

        </AuthLayout>

    );

}

export default CustomerRegister;