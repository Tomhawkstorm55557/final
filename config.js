import axios from "axios"

export const axiosInstance = axios.create(
    {
        baseURL: "https://outstanding-sombrero-mite.cyclic.app/api/"
    }
)
