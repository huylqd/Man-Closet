import axios from "axios";

interface MyResponseData {
  accessToken: string; // or the actual type of your accessToken
  // other properties if there are any
}
const instance = axios.create({
    baseURL: "http://localhost:8088/",
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  async (err) => {
    const originalConfig = err.config;

    if(originalConfig.url !== '/signIn' && err.response) {
      if(err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true
      }
      try {

        const rs = await instance.post('refreshToken', {
          refreshToken: localStorage.getItem("refresh")
        })

        const accessToken  = rs.data
        localStorage.setItem("accessToken", accessToken);
        return instance(originalConfig)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
)

export default instance;
