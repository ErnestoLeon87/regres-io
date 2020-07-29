import React, { useContext } from 'react'
import { AppContext } from "./AppContext";
import { UserItem } from "./UserItem";

export const UserList = () => {

    const data = useContext(AppContext)
    return (
        <div>
            <UserItem userData={data}> </UserItem>
        </div>
    )
}
