import { lOGIN, LOADING, lOGIN_FAILURE, lOGIN_SUCCESS } from "../ActionType";
const initialState = {
    loading: false,
    employee: [],
    error: []
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: false,
            }
        case lOGIN_SUCCESS:
            return {
                ...state,
                loading: true,
                employee : action.payload
            }
        case lOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}