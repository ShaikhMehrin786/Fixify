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

import "../../assets/css/auth.css";
import "../../assets/css/customer-register.css";

function CustomerRegister() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        // Django API Integration
        // authService.customerRegister(formData)

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

                    <GradientButton>

                        Create Account

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