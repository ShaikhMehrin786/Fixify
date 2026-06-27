import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import ServiceCategories from "../components/common/ServiceCategories";
import HowItWorks from "../components/common/HowItWorks";
import WhyChoose from "../components/common/WhyChoose";
import Staticstics from "../components/common/Statistics";
import CustomerReviews from "../components/common/CustomerReviews";
import FAQ from "../components/common/FAQ";
import CallToAction from "../components/common/CallToAction";
import Footer from "../components/common/Footer";


function Landing(){

    return(

        <>

        <Navbar/>

        <Hero/>

        <ServiceCategories/>

        <HowItWorks/>

        <WhyChoose />

        <Staticstics/>

        <CustomerReviews/>

        <FAQ/>

        <CallToAction/>

        <Footer/>

        </>

    )

}

export default Landing;