function GradientButton({

    children,

    type = "submit",

    disabled = false,

    onClick

}) {

    return (

        <button

            type={type}

            className="gradient-btn"

            disabled={disabled}

            onClick={onClick}

        >

            {children}

        </button>

    );

}

export default GradientButton;