import "./../../assets/css/serviceCategories.css";
import {
    FaBolt,
    FaWrench,
    FaPaintRoller,
    FaBroom,
    FaHammer,
    FaSnowflake,
    FaTools,
    FaArrowRight
} from "react-icons/fa";

import { useEffect, useState } from "react";

import "./../../assets/css/serviceCategories.css";

import { getCategories } from "../../services/categoryService";

function ServiceCategories(){
   const [categories,setCategories]=useState([]);

   const [loading,setLoading]=useState(true);

   const [error,setError]=useState("");
   const ICONS = {

    bolt: FaBolt,

    wrench: FaWrench,

    paint: FaPaintRoller,

    broom: FaBroom,

    hammer: FaHammer,

    snowflake: FaSnowflake,

    tools: FaTools

};

   useEffect(()=>{

    loadCategories();

},[]);

    const loadCategories = async()=>{

    try{

        const data = await getCategories();

        setCategories(data);

    }

    catch(error){

        console.error(error);

        setError("Unable to load services.");

    }

    finally{

        setLoading(false);

    }

}
    if(loading){

return(

<section className="services-section">

<div className="container text-center">

<h3>

Loading Services...

</h3>

</div>

</section>

)

}
    if(error){

return(

<section className="services-section">

<div className="container text-center">

<h3>

{error}

</h3>

</div>

</section>

)

}   
    
    return(

    <section className="services-section">

    <div className="container">

    <div className="text-center mb-5">

    <h2 className="section-title">
    Popular Services
    </h2>

    <p className="section-subtitle">
    Choose from our verified home service professionals.
    </p>

    </div>

    <div className="row">

    {
    
    categories.map((category)=>{
        const Icon = ICONS[category.icon] || FaTools;
    return(
        <div className="col-lg-4 col-md-6 mb-4"
        key={category.id}
        >

        <div className="service-card">

        <div className="service-icon">

        <Icon/>

</div>

        <h4>

        {category.name}

        </h4>

        <p>

        {category.description}

        </p>

        <button>

        Book Service

        <FaArrowRight/>

        </button>

        </div>

        </div>
        )

})
}

    </div>

    </div>

    </section>

    )

}

export default ServiceCategories;