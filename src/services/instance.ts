
import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:8088/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },

})


export default instance