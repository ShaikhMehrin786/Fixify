import "./../../assets/css/auth.css";

function InputField({

    label,
    icon,
    type = "text",
    name,
    placeholder,
    value,
    onChange,
    required = false,
    error,
    rightIcon,
    onRightIconClick

}) {

    return (

        <div className="input-group">

            {label && (

                <label className="input-label">

                    {label}

                </label>

            )}

            <div className={`input-wrapper ${error ? "input-error" : ""}`}>

                {icon && (

                    <span className="input-icon">

                        {icon}

                    </span>

                )}

                <input

                    type={type}

                    name={name}

                    placeholder={placeholder}

                    value={value}

                    onChange={onChange}

                    required={required}

                />

                {rightIcon && (

                    <button

                        type="button"

                        className="input-right-icon"

                        onClick={onRightIconClick}

                    >

                        {rightIcon}

                    </button>

                )}

            </div>

            {

                error &&

                <small className="error-text">

                    {error}

                </small>

            }

        </div>

    );

}

export default InputField;