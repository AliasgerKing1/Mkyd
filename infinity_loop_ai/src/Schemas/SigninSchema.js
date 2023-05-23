import * as Yup from "yup"

let SigninSchema =  Yup.object({
    email : Yup.string().required("Email required!").email("Invalid Email!"),
    password : Yup.string().required("Password required!"),
})
export default SigninSchema