/*eslint-disable */
import React, {useState} from 'react'

const Signin = () => {
  let [isDrop, setIsDrop] = useState(false);
  let dropdown = () => {
    setIsDrop(true)
  }
  return (
    <>
    {/*begin::Body*/}
    <div  id="kt_body"  className="app-blank bgi-size-cover bgi-position-center bgi-no-repeat" style={{backgroundImage: "url('/assets/media/auth/bg4.jpg')"}}>
        {/*begin::Theme mode setup on page load*/}

{/*end::Theme mode setup on page load*/}            
        {/*begin::Root*/}
<div className="d-flex flex-column flex-root" id="kt_app_root">
    {/*begin::Page bg image*/}
{/* <style>
    body {
        background-image: url('/assets/media/auth/bg4.jpg');
    }

    [data-bs-theme="dark"] body {
        background-image: url('/assets/media/auth/bg4-dark.jpg');
    }
</style> */}
{/*end::Page bg image*/}

{/*begin::Authentication - Sign-in */}
<div className="d-flex flex-column flex-column-fluid flex-lg-row">
    {/*begin::Aside*/}
    <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">              
        {/*begin::Aside*/}
        <div className="d-flex flex-center flex-lg-start flex-column">              
            {/*begin::Logo*/}
            <a href="/index.html" className="mb-7">
                <img alt="Logo" src="/assets/media/logos/custom-3.svg"/>
            </a>    
            {/*end::Logo*/}            

            {/*begin::Title*/}
            <h2 className="text-white fw-normal m-0"> 
                Branding tools designed for your business
            </h2>  
            {/*end::Title*/}         
        </div>
        {/*begin::Aside*/}    
    </div>
    {/*begin::Aside*/}

    {/*begin::Body*/}
    <div className="d-flex flex-center w-lg-50 p-10">
        {/*begin::Card*/}
        <div className="card rounded-3 w-md-550px">
            {/*begin::Card body*/}
            <div className="card-body d-flex flex-column p-10 p-lg-20 pb-lg-10">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-center flex-column-fluid pb-15 pb-lg-20">
                    
{/*begin::Form*/}
<form className="form w-100" noValidate="noValidate" id="kt_sign_in_form" data-kt-redirect-url="/metronic8/demo27/../demo27/index.html" action="#">
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
        <input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent"/> 
        {/*end::Email*/}
    </div>

    {/*end::Input group-*/}
    <div className="fv-row mb-3">    
        {/*begin::Password*/}
        <input type="password" placeholder="Password" name="password" autoComplete="off" className="form-control bg-transparent"/>
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

        <a href="sign-up.html" className="link-primary">
             &nbsp;<b>Sign up</b>
        </a>
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
                        <button className={"btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base " + (isDrop === true ? "show menu-dropdown" : "")} data-kt-menu-trigger="click" data-kt-menu-placement="top-start" data-kt-menu-offset="0px, 0px" onClick={()=>{
                          dropdown()
                          isDrop == true ? (setIsDrop(false)) : setIsDrop(true)
                        }}>
    <img data-kt-element="current-lang-flag" className="w-20px h-20px rounded me-3" src="/assets/media/flags/united-states.svg" alt=""/>
                            
                            <span data-kt-element="current-lang-name" className="me-1">English</span>

                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
<span className="svg-icon svg-icon-5 svg-icon-muted rotate-180 m-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                        </button>
                        {/*end::Toggle*/}

                        {/*begin::Menu*/}
                        <div
  className={
    "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7 " +
    (isDrop === true ? "show" : "")
  }
  data-kt-menu="true"
  id="kt_auth_lang_menu"
  style={
    isDrop === true
      ? {
          zIndex: "107",
          position: "fixed",
          inset: "0px auto auto 0px",
          margin: "0px",
          transform: "translate(782px, 300px)",
        }
      : {}
  }
  data-popper-placement="top-start"
>


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
                    <div className="d-flex fw-semibold text-primary fs-base gap-5">
                    <a href="/metronic8/demo27/../demo27/pages/team.html" target="_blank">Terms</a>

                    <a href="/metronic8/demo27/../demo27/pages/pricing/column.html" target="_blank">Plans</a>
                    
                    <a href="/metronic8/demo27/../demo27/pages/contact.html" target="_blank">Contact Us</a>
                </div>
                {/* <!--end::Links--> */}
                </div>
                {/*end::Footer*/}
            </div>
            {/*end::Card body*/}
        </div>
        {/*end::Card*/}
    </div>
    {/*end::Body*/}
</div>
{/*end::Authentication - Sign-in*/}</div>
{/*end::Root*/}
        
        
            </div>
    {/*end::Body*/}
    </>
  )
}

export default Signin