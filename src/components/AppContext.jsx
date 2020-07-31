import React, { createContext, useState } from 'react'
import { useGetUsers } from "./api_connection";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);



    const state = useGetUsers(params, page, setPage);

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }