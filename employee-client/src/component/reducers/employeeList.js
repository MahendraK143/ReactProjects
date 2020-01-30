import { SUCCESS, FAILURE } from "../ActionType";
const initialState = {
    loading: false,
    employeeList: [],
    error: []
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                loading: true,
                employeeList : action.payload
            }
        case FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}