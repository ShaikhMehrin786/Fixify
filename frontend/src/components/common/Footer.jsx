import { Link } from "react-router-dom";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

import "./../../assets/css/footer.css";

function Footer() {

    return (

<footer className="footer">

<div className="container">

<div className="row">

<div className="col-lg-4 mb-4">

<h3 className="footer-logo">

Fixify

</h3>

<p>

Fixify connects customers with trusted,
verified home service professionals using
AI-powered worker matching, live tracking,
OTP verification and secure payments.

</p>

<div className="social-icons">

<a href="#">
<FaFacebookF/>
</a>

<a href="#">
<FaInstagram/>
</a>

<a href="#">
<FaLinkedinIn/>
</a>

<a href="#">
<FaGithub/>
</a>

</div>

</div>

<div className="col-lg-2 col-md-6 mb-4">

<h5>

Quick Links

</h5>

<ul>

<li>
<Link to="/">
Home
</Link>
</li>

<li>
<Link to="/services">
Services
</Link>
</li>

<li>
<Link to="/about">
About
</Link>
</li>

<li>
<Link to="/contact">
Contact
</Link>
</li>

</ul>

</div>

<div className="col-lg-3 col-md-6 mb-4">

<h5>

Our Services

</h5>

<ul>

<li>Electrician</li>

<li>Plumber</li>

<li>Cleaning</li>

<li>Painter</li>

<li>AC Repair</li>

<li>Carpenter</li>

</ul>

</div>

<div className="col-lg-3">

<h5>

Contact

</h5>

<p>

<FaPhoneAlt/>

+91 9876543210

</p>

<p>

<FaEnvelope/>

support@fixify.com

</p>

<p>

<FaMapMarkerAlt/>

Ahmedabad, Gujarat

</p>

</div>

</div>

<hr/>

<div className="footer-bottom">

<p>

© 2026 Fixify.
All Rights Reserved.

</p>

<div>

<Link to="/privacy">

Privacy Policy

</Link>

<Link to="/terms">

Terms

</Link>

</div>

</div>

</div>

</footer>

    )

}

export default Footer;