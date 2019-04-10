import axios from 'axios'

const api = axios.create({
    baseURL: "https://pbe-omnistack-backend.herokuapp.com",
})

export default api