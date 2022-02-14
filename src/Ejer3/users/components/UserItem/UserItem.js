import React from "react";

import './UserItem.css';
import Avatar from "../../../../shared/components/UIElements/Avatar/Avatar";
import Card from "../../../../shared/components/UIElements/Card/Card";

const UserItem = (props) => {
    return(
        <li className="user-item">
            <Card className="user-item__content">
                <div className="user-item__image">
                    <Avatar image={props.image} alt={props.name} />
                </div>

                <div className="user-item__info">
                    <h2> {props.name} </h2>
                    <h3> {props.fecha} </h3>
                </div>
            </Card>
        </li>
    );
}

export default UserItem