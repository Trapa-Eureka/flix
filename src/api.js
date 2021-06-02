import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "aa77042bf637dfc6029f75a0f2b249c9",
        language: "en-US"
    }
});

export default api;