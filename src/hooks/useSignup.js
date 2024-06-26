import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import { BASE_URL } from '../api/Constants';


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async ( username, password, email) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch (`${BASE_URL}/user/signup` , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password, email})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update auth context
            dispatch({type: 'LOGIN', payload: json})
            
            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}