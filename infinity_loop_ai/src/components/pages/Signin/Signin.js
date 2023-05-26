/*eslint-disable */
import React, {useState} from 'react'
import {NavLink, useNavigate} from "react-router-dom"


import {useDispatch} from "react-redux"
import {getTokenRedux} from "../../../Redux/TokenReducer"
import {getSignInUserRedux} from "../../../Redux/SignInReducer"

import {useFormik} from "formik"
import {AlertDanger} from "../../shared/Alert"
import SigninSchema from '../../../Schemas/SigninSchema'
import { loginUser } from '../../../services/AuthService'
import { getCurrentUser } from '../../../services/UserService'
let initialValues = {
    email : "",
    password : "",
}
const Signin = () => {
    let dispatch = useDispatch();
    let [showAlert, setShowAlert] = useState(false);
    let [msg, setMsg] = useState("");
    let navigate = useNavigate();
    let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues : initialValues,
        validationSchema : SigninSchema,
        onSubmit : async () => {
   let result = await loginUser(values);
   if(result.data.errType == 1) {
setShowAlert(true)
setMsg("This email or password is incorrect !")
   }
   else if(result.data.errType == 2) {
setShowAlert(true)
setMsg("This email or password is incorrect !")
   }
   else {
    setShowAlert(false)
    let tokens = [
        {
            Login_token : result.data.token
        }
    ]
dispatch(getTokenRedux(tokens))
let result2 = await getCurrentUser(tokens[0].Login_token);
dispatch(getSignInUserRedux(result2.data[0]))
navigate("/auth/home")
   }
    }

})
  return (
    <>
    
    <div  id="kt_body"  className="app-blank bgi-size-cover bgi-position-center">
        {/*begin::Theme mode setup on page load*/}
{/* <script>
	var defaultThemeMode = "light";
	var themeMode;

	if ( document.documentElement ) {
		if ( document.documentElement.hasAttribute("data-bs-theme-mode")) {
			themeMode = document.documentElement.getAttribute("data-bs-theme-mode");
		} else {
			if ( localStorage.getItem("data-bs-theme") !== null ) {
				themeMode = localStorage.getItem("data-bs-theme");
			} else {
				themeMode = defaultThemeMode;
			}			
		}

		if (themeMode === "system") {
			themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		}

		document.documentElement.setAttribute("data-bs-theme", themeMode);
	}            
</script> */}
{/*end::Theme mode setup on page load*/}            
        
        {/*begin::Root*/}
<div className="d-flex flex-column flex-root" id="kt_app_root" style={{backgroundImage: "url('/assets/media/auth/bg10.jpg')"}}>
    {/*begin::Page bg image*/}
{/* <style>
    body {
        background-image: url('/assets/media/auth/bg10.jpg');
    }

    [data-bs-theme="dark"] body {
        background-image: url('/assets/media/auth/bg10-dark.jpg');
    }
</style> */}
{/*end::Page bg image*/}

{/*begin::Authentication - Sign-in */}
<div className="d-flex flex-column flex-lg-row flex-column-fluid">
    {/*begin::Aside*/}
    <div className="d-flex flex-lg-row-fluid">
        {/*begin::Content*/}
        <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100"> 
            {/*begin::Image*/}                
            <img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="/assets/media/auth/agency.png" alt=""/>    
            <img className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="/assets/media/auth/agency-dark.png" alt=""/>                 
            {/*end::Image*/}

            {/*begin::Title*/}
            <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7"> 
                Fast, Efficient and Productive
            </h1>  
            {/*end::Title*/}

            {/*begin::Text*/}
            <div className="text-gray-600 fs-base text-center fw-semibold">
                In this kind of post, <a href="#" className="opacity-75-hover text-primary me-1">the blogger</a> 

                introduces a person they’ve interviewed <br/> and provides some background information about 
                
                <a href="#" className="opacity-75-hover text-primary me-1">the interviewee</a> 
                and their <br/> work following this is a transcript of the interview.  
            </div>
            {/*end::Text*/}
        </div>
        {/*end::Content*/}
    </div>
    {/*begin::Aside*/}

    {/*begin::Body*/}
    <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
        {/*begin::Wrapper*/}
        <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
            {/*begin::Content*/}
            <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-center flex-column-fluid pb-15 pb-lg-20">
                    
{/*begin::Form*/}
<form className="form w-100" onSubmit={handleSubmit}>
    {/*begin::Heading*/}
    <div className="text-center mb-11">
        {/*begin::Title*/}
        <h1 className="text-dark fw-bolder mb-3">
            Sign In
        </h1>
        {/*end::Title*/}

        {/*begin::Subtitle*/}
        <div className="text-gray-500 fw-semibold fs-6">
            Your Social Campaigns
        </div>
        {/*end::Subtitle-*/}
    </div>
    {/*begin::Heading*/}

    {/*begin::Login options*/}
    <div className="row g-3 mb-9">
        {/*begin::Col*/}
        <div className="col-md-6">
            {/*begin::Google link-*/}
            <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                <img alt="Logo" src="/assets/media/svg/brand-logos/google-icon.svg" className="h-15px me-3"/>   
                Sign in with Google
            </a>
            {/*end::Google link-*/}
        </div>
        {/*end::Col*/}

        {/*begin::Col*/}
        <div className="col-md-6">
            {/*begin::Google link-*/}
            <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                <img alt="Logo" src="/assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show h-15px me-3"/>
                <img alt="Logo" src="/assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3"/>     
                Sign in with Apple
            </a>
            {/*end::Google link-*/}
        </div>
        {/*end::Col*/}
    </div>
    {/*end::Login options*/}

    {/*begin::Separator*/}
    <div className="separator separator-content my-14">
        <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
    </div>
    {/*end::Separator*/}

    {/*begin::Input group-*/}
    <div className="fv-row mb-8">
            {/*begin::Email*/}
            <input type="text" placeholder="Email" name="email" autoComplete="off" className={`form-control bg-transparent ${errors.email && touched.email ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.email}/> 
        <div>{errors.email && touched.email ? (<small className='text-danger'>{errors.email}</small>) : null}</div>
        {/*end::Email*/}
    </div>

    {/*end::Input group-*/}
    <div className="fv-row mb-3">    
        {/*begin::Password*/}
                   {/*begin::Input wrapper*/}
                   <div className="position-relative mb-3">    
                                                      <input className={`form-control bg-transparent ${errors.password && touched.password ? "is-invalid" : ""}`} type="password" placeholder="Password" name="password" autoComplete="off" onChange={handleChange} onBlur={handleBlur} value={values.password} />

            </div>
            <div>{errors.password && touched.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
            {/*end::Input wrapper*/}
        {/*end::Password*/}
    </div>
    {/*end::Input group-*/}

    {/*begin::Wrapper*/}
    <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div></div>

        {/*begin::Link*/}
        <a href="reset-password.html" className="link-primary">
            Forgot Password ?
        </a>
        {/*end::Link*/}
    </div>
    {/*end::Wrapper*/}    
    { showAlert ? (<AlertDanger msg={msg}/>) : ""}
    {/*begin::Submit button*/}
    <div className="d-grid mb-10">
        <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
            
{/*begin::Indicator label*/}
<span className="indicator-label">
    Sign In</span>
{/*end::Indicator label*/}

{/*begin::Indicator progress*/}
<span className="indicator-progress">
    Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
</span>
{/*end::Indicator progress*/}        </button>
    </div>
    {/*end::Submit button*/}

    {/*begin::Sign up*/}
    <div className="text-gray-500 text-center fw-semibold fs-6">
        Not a Member yet?

        <NavLink to="/signup" className="link-primary">
            &nbsp; <b>Sign up</b>
        </NavLink>
    </div>
    {/*end::Sign up*/}
</form>
{/*end::Form*/}     

                </div>
                {/*end::Wrapper*/}

                {/*begin::Footer*/}  
                <div className=" d-flex flex-stack">
                    {/*begin::Languages*/}
                    <div className="me-10">             
                        {/*begin::Toggle*/}
                        <button className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, 0px">
                            <img  data-kt-element="current-lang-flag" className="w-20px h-20px rounded me-3" src="/assets/media/flags/united-states.svg" alt=""/>
                            
                            <span data-kt-element="current-lang-name" className="me-1">English</span>

                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
<span className="svg-icon svg-icon-5 svg-icon-muted rotate-180 m-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                        </button>
                        {/*end::Toggle*/}

                        {/*begin::Menu*/}
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7" data-kt-menu="true" id="kt_auth_lang_menu">
                                                            {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="English">
                                        <span className="symbol symbol-20px me-4">
                                            <img data-kt-element="lang-flag" className="rounded-1" src="/assets/media/flags/united-states.svg" alt=""/>
                                        </span>
                                        <span data-kt-element="lang-name">English</span>
                                    </a>
                                </div>
                                {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="Spanish">
                                        <span className="symbol symbol-20px me-4">
                                            <img data-kt-element="lang-flag" className="rounded-1" src="/assets/media/flags/spain.svg" alt=""/>
                                        </span>
                                        <span data-kt-element="lang-name">Spanish</span>
                                    </a>
                                </div>
                                {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="German">
                                        <span className="symbol symbol-20px me-4">
                                            <img data-kt-element="lang-flag" className="rounded-1" src="/assets/media/flags/germany.svg" alt=""/>
                                        </span>
                                        <span data-kt-element="lang-name">German</span>
                                    </a>
                                </div>
                                {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="Japanese">
                                        <span className="symbol symbol-20px me-4">
                                            <img data-kt-element="lang-flag" className="rounded-1" src="/assets/media/flags/japan.svg" alt=""/>
                                        </span>
                                        <span data-kt-element="lang-name">Japanese</span>
                                    </a>
                                </div>
                                {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="French">
                                        <span className="symbol symbol-20px me-4">
                                            <img data-kt-element="lang-flag" className="rounded-1" src="/assets/media/flags/france.svg" alt=""/>
                                        </span>
                                        <span data-kt-element="lang-name">French</span>
                                    </a>
                                </div>
                                {/*end::Menu item*/}
                                                    </div>
                        {/*end::Menu*/}           
                    </div>
                    {/*end::Languages*/} 

                    {/*begin::Links*/}
                    <div className="d-flex fw-semibold text-primary fs-base gap-5">
                        <a href="../../../pages/team.html" target="_blank">Terms</a>

                        <a href="../../../pages/pricing/column.html" target="_blank">Plans</a>
                        
                        <a href="../../../pages/contact.html" target="_blank">Contact Us</a>
                    </div>
                    {/*end::Links*/}
                </div>
                {/*end::Footer*/}
            </div>
            {/*end::Content*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    {/*end::Body*/}
</div>
{/*end::Authentication - Sign-in*/}</div>
{/*end::Root*/}
        </div>

    </>
  )
}

export default Signin