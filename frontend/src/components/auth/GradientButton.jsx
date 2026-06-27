function GradientButton({

    children,

    onClick,

    type = "submit"

}) {

    return (

        <button

            type={type}

            className="gradient-btn"

            onClick={onClick}

        >

            {children}

        </button>

    );

}

export default GradientButton;