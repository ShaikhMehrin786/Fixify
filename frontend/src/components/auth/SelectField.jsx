import "../../assets/css/auth.css";

function SelectField({

    label,
    icon,
    name,
    value,
    onChange,
    options,
    placeholder = "Select"

}) {

    return (

        <div className="input-group">

            <label className="input-label">

                {label}

            </label>

            <div className="input-wrapper">

                <span className="input-icon">

                    {icon}

                </span>

                <select

                    name={name}

                    value={value}

                    onChange={onChange}

                    className="select-field"

                >

                    <option value="">

                        {placeholder}

                    </option>

                    {

                        options.map((option,index)=>(

                            <option
                                key={index}
                                value={option}
                            >

                                {option}

                            </option>

                        ))

                    }

                </select>

            </div>

        </div>

    );

}

export default SelectField;