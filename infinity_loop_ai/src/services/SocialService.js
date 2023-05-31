import axios from "axios"

let getFirstPost = () => {
    return axios.get("http://localhost:4000/api/social/first")
}
export {getFirstPost}