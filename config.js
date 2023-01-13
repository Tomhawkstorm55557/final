import axios from "axios"

export const axiosInstance = axios.create(
    {
        baseURL: "https://odd-blue-camel-cuff.cyclic.app/api/"
    }
)
