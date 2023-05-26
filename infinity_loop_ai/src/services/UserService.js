import axios from "axios"

let apiUrl = "http://localhost:4000/api/user/"
let addUser = async (obj) => {
    return await axios.post(apiUrl, obj)
}

let getCurrentUser = async (token) => {
    return await axios.get(`${apiUrl}/signin`, { headers: { token } })
}

export { addUser, getCurrentUser };