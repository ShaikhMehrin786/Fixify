import { useState } from "react";

function useFormValidation(){

    const [errors,setErrors]=useState({});

    const setFieldError=(field,message)=>{

        setErrors(prev=>({

            ...prev,

            [field]:message

        }));

    };

    const clearErrors=()=>{

        setErrors({});

    };

    return{

        errors,

        setFieldError,

        clearErrors

    };

}

export default useFormValidation;