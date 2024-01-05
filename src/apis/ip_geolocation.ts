import axios from "axios";


export const api = axios.create({
    baseURL: `https://geo.ipify.org/api`,
    params: {
        apiKey: process.env.IP_GEOLOCATION_KEY
    }
})

