import axios from "axios";

const instance = axios.create({
    baseURL: 'https://machete-backend.herokuapp.com/'
});
export default instance;