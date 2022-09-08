import React from "react";
 
import UserLists from "../components/UserLists";

function Users(){

    const USERS = [{id: 'u1', name : 'Sarang', image: "url", places:'India'}]

    return (
            <UserLists items = {USERS}/>
    );
}

export default Users;