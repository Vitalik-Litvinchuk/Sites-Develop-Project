import axios from "axios";

export const urlBackend = "";

export const bearer = (token: string) => {
    return axios.create({
        baseURL: urlBackend,
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${token}`
        }
    });
}

export default axios.create({
    baseURL: urlBackend,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});