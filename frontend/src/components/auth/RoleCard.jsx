import { FaCheckCircle } from "react-icons/fa";

function RoleCard({
    icon,
    title,
    description,
    features,
    onClick
}) {
    return (
        <div className="role-card" onClick={onClick}>

            <div className="role-icon">
                {icon}
            </div>

            <h3>{title}</h3>

            <p className="role-description">
                {description}
            </p>

            <ul className="role-features">

                {features.map((item,index)=>(

                    <li key={index}>

                        <FaCheckCircle/>

                        <span>{item}</span>

                    </li>

                ))}

            </ul>

        </div>
    );
}

export default RoleCard;