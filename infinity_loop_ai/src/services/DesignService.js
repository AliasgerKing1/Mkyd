import axios from "axios"

let apiUrl = "http://localhost:4000/api/design/"
let addDesign = async (id, obj) => {
    return await axios.put(`${apiUrl}/${id}`, obj)
}


export { addDesign };