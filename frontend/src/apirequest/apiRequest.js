import axios from "axios";

const API = axios.create({
    baseURL:"https://personality-quiz-backend.onrender.com"
})

export default API
