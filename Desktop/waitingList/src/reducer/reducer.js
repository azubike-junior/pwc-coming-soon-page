import { DB_ERROR, LOADING, SUCCESS } from "../constants"


export const reducer = (state, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case DB_ERROR:
            return {
                ...state,
                isLoading: false,
                dbError: action.payload
            }
        default :
            return {state}
    } 
}