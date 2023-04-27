/*eslint-disable */
import axios from "axios"

// const apiUrl = "http://localhost:4000/api/user";
const apiUrl = "https://mkyd.onrender.com/api/user";
// const apiOtpUrl = "http://localhost:4000/api/otp";
const apiOtpUrl = "https://mkyd.onrender.com/api/otp";

let addUser = async (data) => {
    return await axios.post(apiUrl, data);
}
let token = localStorage.getItem("token");
const header = token;

// let getUser = async () => {
//     return await axios.get(apiUrl,{ headers: { header } });
// }

let getUserById = async (token) => {
  return await axios.get(`${apiUrl}/${token}`);
}
let getUserByOtpId = async (id) => {
  return await axios.get(`${apiUrl}/otpid/${id}`);
}



//Signin area

let Logout = () => {
    localStorage.clear();
  }
  let DoLogin = (obj) => {
    return axios.post(
        '"https://mkyd.onrender.com/api/user/loginauth',
        obj
      );
    }
  
    let IsSignin = () => {
      if (localStorage.getItem("token")) {
        return true;
      } else {
        return false;
      }
    }
    
    let checkUser = async (obj) => {
      return await axios.post(`${apiUrl}/checkuser`, obj)
    }


    //otp area
    let signupOtp = async (id) => {
      return await axios.get(`${apiOtpUrl}/${id}`)
    }

    let otpIn = async (id) => {
return await axios.get(`${apiOtpUrl}/otpin/${id}`)
    }

    let checkOtp = async (otp)=> {
      return await axios.post(`${apiOtpUrl}/checkotp`, otp)
    }

    let otpVerfied = async (id) => {
      return await axios.get(`${apiOtpUrl}/otpverified/${id}`)
    }
export {addUser,getUserById, DoLogin,IsSignin ,Logout, checkUser, signupOtp, otpIn, checkOtp, otpVerfied, getUserByOtpId}