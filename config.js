import axios from "axios"

export const axiosInstance = axios.create(
    {
        baseURL: "https://calm-teal-goldfish-wrap.cyclic.app/api/"
    }
)
