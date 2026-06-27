function ProgressStepper({ step }) {

    const steps = [
        "Personal",
        "Professional",
        "Verification"
    ];

    return (

        <div className="stepper">

            {steps.map((item,index)=>(

                <div
                    key={index}
                    className={`step ${step>=index+1 ? "active" : ""}`}
                >

                    <div className="step-circle">

                        {index+1}

                    </div>

                    <span>

                        {item}

                    </span>

                </div>

            ))}

        </div>

    );

}

export default ProgressStepper;