import React from 'react'

const VerifyOtp = () => {
  return (
    <>
   {/*begin::Body*/}
<div id="kt_body" className="app-blank bgi-size-cover bgi-position-center bgi-no-repeat" style={{backgroundImage: "url('/assets/media/auth/bg5.jpg"}}>
  {/*begin::Root*/}
  <div className="d-flex flex-column flex-root" id="kt_app_root">
    {/*begin::Page bg image*/}
    {/* <style dangerouslySetInnerHTML={{__html: "\n    body {\n        background-image: url('/assets/media/auth/bg5.jpg');\n    }\n\n    [data-bs-theme=\"dark\"] body {\n        background-image: url('/assets/media/auth/bg5-dark.jpg');\n    }\n" }} /> */}
    {/*end::Page bg image*/}
    {/*begin::Authentication - Signup Welcome Message */}
    <div className="d-flex flex-column flex-center flex-column-fluid">    
      {/*begin::Content*/}
      <div className="d-flex flex-column flex-center text-center p-10">        
        {/*begin::Wrapper*/}
        <div className="card card-flush w-lg-650px py-5">
          <div className="card-body py-1F5 py-lg-20">
            {/*begin::Logo*/}
            <div className="mb-14">
              <a href="/index.html" className="">
                <img alt="Logo" src="/assets/media/logos/custom-2.svg" className="h-40px" /> 
              </a> 
            </div>
            {/*end::Logo*/}
            {/*begin::Title*/}
            <h1 className="fw-bolder text-gray-900 mb-5">
              Verify your email
            </h1>
            {/*end::Title*/} 
            {/*begin::Action*/}
            <div className="fs-6 mb-8">
              <span className="fw-semibold text-gray-500">Did’t receive an email?</span>
              <a href="../layouts/corporate/sign-up.html" className="link-primary fw-bold"> Try Again</a>
            </div>
            {/*end::Action*/}
            {/*begin::Link*/}
            <div className="mb-11">
              <a href="/index.html" className="btn btn-sm btn-primary">Skip for now</a>
            </div>    
            {/*end::Link*/}
            {/*begin::Illustration*/}
            <div className="mb-0">
              <img src="/assets/media/auth/please-verify-your-email.png" className="mw-100 mh-300px theme-light-show" alt />
              <img src="/assets/media/auth/please-verify-your-email-dark.png" className="mw-100 mh-300px theme-dark-show" alt />
            </div>
            {/*end::Illustration*/}   
          </div>
        </div>
        {/*end::Wrapper*/}        
      </div>
      {/*end::Content*/}    
    </div>
    {/*end::Authentication - Signup Welcome Message*/}
  </div>
  {/*end::Root*/}
</div>
{/*end::Body*/}

    </>
  )
}

export default VerifyOtp
