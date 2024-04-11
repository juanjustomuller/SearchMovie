import axios from "axios"
import { useEffect, useState } from "react"

const API_ENDPOINT = 'https://www.omdbapi.com/?apikey=76094e6b'

export const useFetch = (params) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        getMovie()
    }, [params])

    const getMovie = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${API_ENDPOINT}${params}`)
            console.log("data from APi", response.data)
            if(response.data.Response === 'True') {
                setData(response.data.Search || response.data)
                setError(false)
            } else {
                setError(true)
            }
            setIsLoading(false)
        } catch (error) {
            setError(true)
            console.log(error.message);
        } 
    }

    return {isLoading, error, data}
}