import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {

FaLock,

FaEye,

FaEyeSlash

} from "react-icons/fa";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import InputField from "../../components/auth/InputField";
import GradientButton from "../../components/auth/GradientButton";

import "../../assets/css/auth.css";
import "../../assets/css/reset-password.css";

function ResetPassword(){

const navigate=useNavigate();

const [show,setShow]=useState(false);

const [showConfirm,setShowConfirm]=useState(false);

const [password,setPassword]=useState("");

const [confirm,setConfirm]=useState("");

return(

<AuthLayout>

<div className="reset-card">

<AuthHeader

title="Reset Password"

subtitle="Create a new password."

/>

<InputField

label="New Password"

icon={<FaLock/>}

type={show?"text":"password"}

value={password}

onChange={(e)=>setPassword(e.target.value)}

rightIcon={

show?<FaEyeSlash/>:<FaEye/>

}

onRightIconClick={()=>setShow(!show)}

/>

<InputField

label="Confirm Password"

icon={<FaLock/>}

type={showConfirm?"text":"password"}

value={confirm}

onChange={(e)=>setConfirm(e.target.value)}

rightIcon={

showConfirm?<FaEyeSlash/>:<FaEye/>

}

onRightIconClick={()=>

setShowConfirm(!showConfirm)

}

/>

<GradientButton

onClick={()=>navigate("/login")}

>

Reset Password

</GradientButton>

</div>

</AuthLayout>

);

}

export default ResetPassword;