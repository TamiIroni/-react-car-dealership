import axios from "axios";

const baseUrl = "http://localhost:4000/api/user";

const login = async (user) => {
    console.log (user)
    const {data} = await axios.post (`${baseUrl}/login`, user)
    console.log(data)
    return data;
}

const singIn = async (user) => {
    console.log (user)
    const {data} = await axios.post(`${baseUrl}/`, user)
    console.log(data)
    return data;
}

export {login, singIn}
