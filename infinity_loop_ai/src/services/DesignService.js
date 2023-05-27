import axios from "axios"

let apiUrl = "http://localhost:4000/api/design/"
let addDesign = async (obj) => {
    return await axios.put(`${apiUrl}`, obj)
}


export { addDesign };