import axios from "axios"
let apiUrl = "http://localhost:4000/api/user/"
let apiUrl2 = "http://localhost:4000/api/otp/"
let loginUser = async (obj) => {
    return await axios.post(`${apiUrl}/loginauth`, obj)
}

let otpGen = async (id) => {
    return await axios.get(`${apiUrl2}/${id}`)
}
let otpVerification = async (obj) => {
    return await axios.post(`${apiUrl2}/checkotp`, obj)
}
export { loginUser, otpGen, otpVerification };
