import "./../../assets/css/whyChoose.css";

import {
    FaRobot,
    FaMapMarkedAlt,
    FaUserCheck,
    FaShieldAlt,
    FaClock,
    FaHeadset
} from "react-icons/fa";

const features = [

{
    icon:<FaRobot/>,
    title:"AI Smart Matching",
    description:"Automatically finds the best nearby worker based on service and location."
},

{
    icon:<FaMapMarkedAlt/>,
    title:"Live Tracking",
    description:"Track your assigned worker in real-time until arrival."
},

{
    icon:<FaUserCheck/>,
    title:"Verified Workers",
    description:"Every worker goes through identity and skill verification."
},

{
    icon:<FaShieldAlt/>,
    title:"OTP Verification",
    description:"Service begins only after secure OTP confirmation."
},

{
    icon:<FaClock/>,
    title:"Fast Booking",
    description:"Book a professional in less than a minute."
},

{
    icon:<FaHeadset/>,
    title:"24×7 Support",
    description:"Dedicated customer support whenever you need assistance."
}

];

function WhyChoose(){

return(

<section className="why-section">

<div className="container">

<div className="text-center mb-5">

<h2 className="section-title">
Why Choose Fixify?
</h2>

<p className="section-subtitle">
A smarter, safer and faster way to book trusted home services.
</p>

</div>

<div className="row">

{

features.map((item,index)=>(

<div
className="col-lg-4 col-md-6 mb-4"
key={index}
>

<div className="why-card">

<div className="why-icon">
{item.icon}
</div>

<h4>{item.title}</h4>

<p>{item.description}</p>

</div>

</div>

))

}

</div>

</div>

</section>

)

}

export default WhyChoose;