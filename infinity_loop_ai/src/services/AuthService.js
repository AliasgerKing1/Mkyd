import axios from "axios"

let apiUrl = "http://localhost:4000/api/user/"
let loginUser = async (obj) => {
    return await axios.post(`${apiUrl}/loginauth`, obj)
}

export { loginUser };
