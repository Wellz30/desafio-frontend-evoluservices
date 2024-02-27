import axios from "axios";

let result;

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character",
});

export default api;