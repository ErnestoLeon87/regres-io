import React, { useContext } from 'react'
import { AppContext } from "./AppContext";
import { UserItem } from "./UserItem";
import { UserPagination } from './Pagination';

export const UserList = () => {

    const { users, loading, error, page, setPage, hasNextPage } = useContext(AppContext)

    console.log(setPage)

    return (
        <div className="m-2">
            <UserPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
            {loading && <h2>Loading...</h2>}
            {error && <h3>Error. Try to refresh</h3>}
            <div className="d-flex justify-content-between">
                {users.map((user) => <UserItem key={user.id} user={user} />)}
            </div>
            <UserPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        </div>)
}
