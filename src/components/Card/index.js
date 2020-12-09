import React from "react";
import "./style.css";

function EmployeeCard(props) {
    return (
        <div className="card">

            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            
            <div className="content">
                <ul>
                    <li>
                        <strong>Name: </strong>{props.name}
                    </li>
                    <li>
                        <strong>Department: </strong>{props.department}
                    </li>
                    <li>
                        <strong>Role: </strong>{props.role}
                    </li>
                    <li>
                        <strong>Email: </strong>{props.email}
                    </li>
                    <li>
                        <strong>Extension: </strong>{props.extension}
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default EmployeeCard;