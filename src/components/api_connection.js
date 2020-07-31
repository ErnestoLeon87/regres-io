import { useReducer, useEffect } from 'react';
import axios from "axios";


const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://reqres.in/api/users';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
    UPDATE_HAS_NEXT_PAGE: 'has-next-page'
}


const reducer = (state, action) => {
    switch (action.type) {

        case ACTIONS.MAKE_REQUEST:
            return { loading: true, users: [] }

        case ACTIONS.GET_DATA:
            return {
                ...state,
                loading: false,
                users: action.payload.users,
                page: action.payload.page,
                setPage: action.payload.setPage
            }

        case ACTIONS.ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                users: []
            }

        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return {
                ...state,
                hasNextPage: action.payload.hasNextPage
            }

        default:
            return state;
    }
}

export const useGetUsers = (params, page, setPage) => {


    const [state, dispatch] = useReducer(reducer, { users: [], loading: true });

    console.log(state);

    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source();
        dispatch({ type: ACTIONS.MAKE_REQUEST });

        axios.get(BASE_URL, {
            cancelToken: cancelToken1.token,
            params: { page: page, ...params }

        }).then(({ data }) => {
            console.log(data);
            dispatch({
                type: ACTIONS.GET_DATA,
                payload: { users: data.data, page: data.page, setPage: setPage }
            })

        }).catch(err => {
            if (axios.isCancel(err)) return;
            dispatch({ type: ACTIONS.ERROR, payload: { error: err } })
        })


        // Checking if has next page
        const cancelToken2 = axios.CancelToken.source();
        axios.get(BASE_URL, {
            cancelToken: cancelToken2.token,
            params: { page: page + 1, ...params }

        }).then(({ data }) => {
            dispatch({
                type: ACTIONS.UPDATE_HAS_NEXT_PAGE,
                payload: {
                    hasNextPage: data.data.length !== 0,
                    setPage: setPage
                }
            })

        }).catch(err => {
            if (axios.isCancel(err)) return;
            dispatch({ type: ACTIONS.ERROR, payload: { error: err } })
        })


        return () => {
            cancelToken1.cancel();
            cancelToken2.cancel();
        }

    }, [params, page])

    return state;
}



