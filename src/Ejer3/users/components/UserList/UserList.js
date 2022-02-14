import React from "react";

import './UserList.css'
import UserItem from "../UserItem/UserItem";
import Card from "../../../../shared/components/UIElements/Card/Card";

const UserList = (props) => {
    if(props.items.length === 0){
        return(
            <Card className="center">
                <h2> No se Encontraron Usuarios </h2>
            </Card>
        );
    }else {
        return(
            <ul className="users-list">
                {props.items.map(user =>{
                    return(
                        <UserItem 
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            image={user.image}
                            fecha={user.fecha}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default UserList