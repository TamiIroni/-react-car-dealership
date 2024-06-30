import axios from "axios";

const baseUrl = "http://localhost:4000/api/car";

export const getAllCarsFromServer = () => {
    const a = axios.get(baseUrl);
    console.log("a", a);
    return a;
}

export const getCarsFromServerById = (id) => {
    const {data} = axios.get(`${baseUrl}/${id}`)
    return data;
}

