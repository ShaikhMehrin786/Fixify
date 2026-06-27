import "./../../assets/css/howItWorks.css";

import {
    FaSearch,
    FaClipboardList,
    FaRobot,
    FaUserCheck,
    FaMapMarkedAlt,
    FaShieldAlt,
    FaCreditCard,
    FaStar
} from "react-icons/fa";

const steps = [

    {
        id:1,
        icon:<FaSearch/>,
        title:"Choose Service",
        description:"Select the service you need from our verified categories."
    },

    {
        id:2,
        icon:<FaClipboardList/>,
        title:"Create Request",
        description:"Enter your address, preferred time and service details."
    },

    {
        id:3,
        icon:<FaRobot/>,
        title:"AI Match",
        description:"Fixify finds the most suitable nearby verified worker."
    },

    {
        id:4,
        icon:<FaUserCheck/>,
        title:"Worker Accepts",
        description:"The worker accepts your request and confirms the booking."
    },

    {
        id:5,
        icon:<FaMapMarkedAlt/>,
        title:"Live Tracking",
        description:"Track the worker's live location until arrival."
    },

    {
        id:6,
        icon:<FaShieldAlt/>,
        title:"OTP Verification",
        description:"Secure service starts only after OTP verification."
    },

    {
        id:7,
        icon:<FaCreditCard/>,
        title:"Payment",
        description:"Pay securely using your preferred payment method."
    },

    {
        id:8,
        icon:<FaStar/>,
        title:"Review",
        description:"Rate your experience and help others choose better."
    }

];

function HowItWorks(){

    return(

<section className="how-section">

<div className="container">

<div className="text-center mb-5">

<h2 className="section-title">
How Fixify Works
</h2>

<p className="section-subtitle">

Book a trusted professional in just a few simple steps.

</p>

</div>

<div className="row">

{

steps.map((step)=>(

<div
className="col-lg-3 col-md-6 mb-4"
key={step.id}
>

<div className="step-card">

<div className="step-number">

{step.id}

</div>

<div className="step-icon">

{step.icon}

</div>

<h4>

{step.title}

</h4>

<p>

{step.description}

</p>

</div>

</div>

))

}

</div>

</div>

</section>

    )

}

export default HowItWorks;