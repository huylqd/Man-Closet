
import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:8088/api",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },

})


export default instance