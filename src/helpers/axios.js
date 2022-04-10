import axios from "axios";

const instance = axios.create({
    baseURL: "https://ticket-challange.herokuapp.com",
    withCredentials: false,
});

export default instance;