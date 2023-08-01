import { useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await axiosInstance.post('/login', {email, password})
    console.log(response)
    if (response.status === 401) {
      setIsLoading(false)
      setError(response.data.msg)
    }
    if (response.status === 200 && response.data.status === 'Success') {

      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(response.data.data))
      localStorage.setItem('token', JSON.stringify(response.data.token))

      // update the auth context
      dispatch({type: 'LOGIN', payload: {user: response.data.data, token: response.data.token}})

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}