import "../../assets/css/auth.css";

import { FaUpload } from "react-icons/fa";

function FileUpload({

    label,
    name,
    accept,
    onChange

}) {

    return (

        <div className="input-group">

            <label className="input-label">

                {label}

            </label>

            <label className="upload-box">

                <FaUpload className="upload-icon"/>

                <span>

                    Click to Upload

                </span>

                <input

                    type="file"

                    name={name}

                    accept={accept}

                    onChange={onChange}

                    hidden

                />

            </label>

        </div>

    );

}

export default FileUpload;