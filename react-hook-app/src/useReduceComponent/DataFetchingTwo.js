import React, { useReducer, useEffect } from 'react';
import axios from 'axios'

function DataFetchingTwo(props) {
    const initialState = {
        loading: true,
        post: {},
        error: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    post: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR':
                return {
                    loading: true,
                    post: {},
                    error: 'Something went wrong while fetching post data, Please try again after sometime!'
                }
            
            default : return state
        }
    }

    const [state, dispatch] = useReducer(reducer,initialState)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicod.com/posts/3`)
        .then(res => {
            dispatch({type : 'FETCH_SUCCESS', payload : res.data})
        })
        .catch(err => {
            dispatch({type : 'FETCH_ERROR'})
        })
    }, [])
    return (
        <div>
            {state.loading ? 'loading' : `${state.post.id}.${state.post.title}`}
            {state.error ? state.error : null}
        </div>
    );
}

export default DataFetchingTwo;