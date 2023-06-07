/*eslint-disable */
import React, { useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { otpVerification } from '../../../services/AuthService';
const VerifyOtp = () => {
  let state = useSelector(state => state.OtpReducer)
  const [current, setCurrent] = useState(1);
  let navigate = useNavigate();

  const restrictOtp = (event, currentInput) => {
    let otp = '';
  
    if (event.key === 'Backspace' && event.target.value === '') {
      const previousInputElement = document.getElementById(`input-${currentInput - 1}`);
      if (previousInputElement) {
        previousInputElement.focus();
      }
    } else {
      if (isNaN(parseFloat(event.target.value))) {
        event.target.value = '';
      } else {
        const inputValue = event.target.value;
        event.target.value = inputValue.charAt(0);
        otp += inputValue.charAt(0);
  
        const nextInputElement = document.getElementById(`input-${currentInput + 1}`);
        if (nextInputElement && inputValue.length > 0) {
          nextInputElement.focus();
          nextInputElement.value = inputValue.substring(1);
          otp += inputValue.substring(1);
          setCurrent(currentInput + 1);
        }
      }
    }

  };
  const handleButtonClick = () => {
    let otp = '';
    for (let i = 1; i <= 6; i++) {
      const inputElement = document.getElementById(`input-${i}`);
      if (inputElement) {
        otp += inputElement.value;
      }
    }
    let obj = {
      email : state.email,
      otp : otp
    }
    let result = otpVerification(obj) 
        navigate("/");

  }
  
  
  

  return (
    <>
   {/*begin::Body*/}
<div id="kt_body" className="app-blank bgi-size-cover bgi-position-center bgi-no-repeat" style={{backgroundImage: "url('/assets/media/auth/bg5.jpg"}}>
  {/*begin::Root*/}
  <div className="d-flex flex-column flex-root" id="kt_app_root">
    {/*begin::Page bg image*/}
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

            <div className="input-field mb-8">
  <input className='otp_input' type="text" id="input-1" onKeyUp={(e)=> restrictOtp(e, 1)} style={{pointerEvents :  current !== 1 ? 'none' : "", opacity : current !== 1 ? '0.6' : ""}} />
  <input className='otp_input' type="text" id="input-2" onKeyUp={(e)=> restrictOtp(e, 2)} style={{pointerEvents :  current !== 2 ? 'none' : "", opacity : current !== 2 ? '0.6' : ""}} />
  <input className='otp_input' type="text" id="input-3" onKeyUp={(e)=> restrictOtp(e, 3)} style={{pointerEvents :  current !== 3 ? 'none' : "", opacity : current !== 3 ? '0.6' : ""}} />
  <input className='otp_input' type="text" id="input-4" onKeyUp={(e)=> restrictOtp(e, 4)} style={{pointerEvents :  current !== 4 ? 'none' : "", opacity : current !== 4 ? '0.6' : ""}} />
  <input className='otp_input' type="text" id="input-5" onKeyUp={(e)=> restrictOtp(e, 5)} style={{pointerEvents :  current !== 5 ? 'none' : "", opacity : current !== 5 ? '0.6' : ""}} />
  <input className='otp_input' type="text" id="input-6" onKeyUp={(e)=> restrictOtp(e, 6)} style={{pointerEvents :  current !== 6 ? 'none' : "", opacity : current !== 6 ? '0.6' : ""}} />
</div>


            {/*begin::Link*/}
            <div className="mb-11">
              <a className="btn btn-sm btn-primary" onClick={handleButtonClick}>Submit</a>
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
