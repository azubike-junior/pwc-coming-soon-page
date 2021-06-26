import axios from "axios"
import React, {useContext, useReducer} from "react"
import { DB_ERROR, LOADING, SUCCESS } from "../constants"
import { reducer } from "../reducer/reducer"

const stateContext = React.createContext()

const initState = {
    dbError:'',
    isLoading: false
}

export const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const submitField = async (baseUrl, data, history) => {
        dispatch({type: LOADING});
        await axios.post(`${baseUrl}/api/users`, data)
        .then(response => {
            console.log("......response", response.message)
            dispatch({type: SUCCESS, payload: response})
            history.push('/landing')
        })
        .catch(e => dispatch({type: DB_ERROR, payload: e.response.data.message }))
    }
 
    return (
        <stateContext.Provider value={{...state, submitField}}>{children}</stateContext.Provider>
    )
}

export const useStateContext = () => {
    return useContext(stateContext)
}