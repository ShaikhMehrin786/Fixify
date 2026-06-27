import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../../services/authService";


import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import GradientButton from "../../components/auth/GradientButton";

import "../../assets/css/auth.css";
import "../../assets/css/otp.css";

function OtpVerification(){

    const navigate=useNavigate();

    const [otp,setOtp]=useState(["","","","","",""]);

    const handleChange=(value,index)=>{

        const copy=[...otp];

        copy[index]=value;

        setOtp(copy);

    };

    const handleVerify = async () => {
        try {
            await authService.verifyOTP({
                otp: otp.join("")
            });
            toast.success("OTP Verified Successfully!");
            navigate("/reset-password");
        } catch (error) {
            toast.error(
                error.response?.data?.detail ||
                "Invalid OTP."
            );
        }
    };

    return(

        <AuthLayout>

            <div className="otp-card">

                <AuthHeader

                    title="Verify OTP"

                    subtitle="Enter the 6 digit code."

                />

                <div className="otp-inputs">

                    {

                        otp.map((digit,index)=>(

                            <input

                                key={index}

                                maxLength={1}

                                value={digit}

                                onChange={(e)=>

                                    handleChange(

                                        e.target.value,

                                        index

                                    )

                                }

                            />

                        ))

                    }

                </div>
                <GradientButton onClick={handleVerify}>

                    Verify OTP

                </GradientButton>

            </div>

        </AuthLayout>

    );

}

export default OtpVerification;