import * as Yup from "yup"

let SignupSchema =  Yup.object({
    name : Yup.string().required("Name required!"),
    email : Yup.string().required("Email required!").email("Invalid Email!"),
    password : Yup.string().required("Password required!"),
    conf_pass : Yup.string().required("Confirm Password required!").oneOf([Yup.ref("password"), null], "Password and Confirm Password not match !")
})
export default SignupSchema