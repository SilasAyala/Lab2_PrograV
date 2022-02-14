import React from "react";

import UserList from "../components/UserList/UserList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Jhon Doe',
            image: 'https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg',
            fecha: '27-02-1951'
        },
        {
            id: 'u2',
            name: 'Monika Garware Modi',
            image: 'http://advancedindustrialmarketer.com/clients/garware-suncontrol/wp-content/uploads/2018/08/sortcode-04-500x500.jpg',
            fecha: '02-07-1990'  
        },
        {
            id: 'u3',
            name: 'John Peter',
            image: 'https://images.id/wp-content/uploads/2017/11/team6.jpg',
            fecha: '16-09-1991'  
        }
    ]

    return(
        <UserList items={USERS} />
    );
}

export default Users;