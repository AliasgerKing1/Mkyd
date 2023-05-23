
/*eslint-disable */
import React, { useEffect, useState } from 'react'

import {useDispatch} from "react-redux"
import {getCreateDesignRedux} from "../../../Redux/CreateDesignReducer"
import { updatePageNumber, updateWebsiteName } from '../../../Redux/Step2CreateReducer'
import { getCreateDesignstep3Redux } from '../../../Redux/Step3CreateReducer'
import { getCreateDesignstep4edux } from '../../../Redux/Step4CreateReducer'

const CreateDesign = () => {
    let dispatch = useDispatch();
    let [checkStep, setCheckStep] = useState(1)
    let [checkTeamSize, setCheckTEamSize] = useState(1)
    let [checkAccount, setCheckAccount] = useState(1)
    let [step2InfoState, setStep2InfoState] = useState([])
    let [step3InfoState, setStep3InfoState] = useState([])
    let [websiteName, setWebsiteName] = useState("")
    let [checkAccountStep1, setCheckAccountStep1] = useState("html")

    let handleChange = (event) => {
setCheckAccount(event.target.value)
    }
    let handleChangeStep1 = (event) => {
setCheckAccountStep1(event.target.value)
    }

    let setClicked = (val) => {
   
        dispatch(getCreateDesignRedux(val))
    }
    let setClicked2 = (val) => {
  
        dispatch(updatePageNumber(val))
    }
let setClicked22 = () => {
    dispatch(updateWebsiteName(websiteName))
}
  return (
    <>

    {/*begin::Body*/}
    <div id="kt_body"  className="app-blank" >
        {/*begin::Theme mode setup on page load*/}

        {/*begin::Root*/}
<div className="d-flex flex-column flex-root" id="kt_app_root">
    {/*begin::Authentication - Multi-steps*/}
<div className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep" id="kt_create_account_stepper">
    {/*begin::Aside*/}
    <div className="d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px">   
        <div className="d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center" style={{backgroundImage: "url('/assets/media/misc/auth-bg.png')"}}>
            {/*begin::Header*/}
            <div className="d-flex flex-center py-10 py-lg-20 mt-lg-20">          
                {/*begin::Logo*/}
                <a href="../../index.html">
                    <img alt="Logo" src="/assets/media/logos/custom-1.png" className="h-70px"/>
                </a>    
                {/*end::Logo*/}
            </div>
            {/*end::Header*/} 

            {/*begin::Body*/}
            <div className="d-flex flex-row-fluid justify-content-center p-10"> 
                {/*begin::Nav*/}
                <div className="stepper-nav">            
   {/*begin::Step 1*/}
   <div className={`stepper-item ${checkStep == 1 ? "current" : "completed"}`} data-kt-stepper-element="nav">  
                        {/*begin::Wrapper*/}  
                        <div className="stepper-wrapper">
                            {/*begin::Icon*/}
                            <div className="stepper-icon rounded-3">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">1</span>
                            </div>
                            {/*end::Icon*/}

                            {/*begin::Label*/}
                            <div className="stepper-label">
                                <h3 className="stepper-title fs-2">
                                                      Design Type
                                </h3>

                                <div className="stepper-desc fw-normal">
                                                      Select your design type
                                </div>
                            </div>
                            {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/} 

                        {/*begin::Line*/}
                        <div className="stepper-line h-40px">
                        </div>
                        {/*end::Line*/}
                    </div>
                    {/*end::Step 1*/}                

                    {/*begin::Step 2*/}
                    <div className={`stepper-item ${checkStep == 2 ? "current" : (checkStep > 2 ? "completed" : "")}`} data-kt-stepper-element="nav">
                        {/*begin::Wrapper*/}  
                        <div className="stepper-wrapper"> 
                            {/*begin::Icon*/}
                            <div className="stepper-icon rounded-3">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">2</span>
                            </div>
                            {/*end::Icon*/}

                            {/*begin::Label*/}
                            <div className="stepper-label">
                                <h3 className="stepper-title fs-2">
                                                      Design Info
                                </h3>
                                <div className="stepper-desc fw-normal">
                                                      Setup your Design settings
                                </div>
                            </div>
                            {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/} 

                        {/*begin::Line*/}
                        <div className="stepper-line h-40px">
                        </div>
                        {/*end::Line*/}
                    </div>
                    {/*end::Step 2*/}                

                    {/*begin::Step 3*/}
                    <div className={`stepper-item ${checkStep == 3 ? "current" : (checkStep > 3 ? "completed" : "")}`} data-kt-stepper-element="nav">
                        {/*begin::Wrapper*/}  
                        <div className="stepper-wrapper">
                            {/*begin::Icon*/}
                            <div className="stepper-icon">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">3</span>
                            </div>
                            {/*end::Icon*/}

                            {/*begin::Label*/}
                            <div className="stepper-label">
                                <h3 className="stepper-title fs-2">
                                                      Internal Website Details
                                </h3>
                                <div className="stepper-desc fw-normal">
                                                      Setup your internal eebsite details
                                </div>
                            </div>
                            {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}

                        {/*begin::Line*/}
                        <div className="stepper-line h-40px">
                        </div>
                        {/*end::Line*/}
                    </div>
                    {/*end::Step 3*/}



                    {/*begin::Step 4*/}
                    <div className={`stepper-item ${checkStep == 4 ? "current" : (checkStep > 4 ? "completed" : "")}`} data-kt-stepper-element="nav">      
                        {/*begin::Wrapper*/}  
                        <div className="stepper-wrapper">              
                            {/*begin::Icon*/}
                            <div className="stepper-icon">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">4</span>
                            </div>
                            {/*end::Icon*/}

                            {/*begin::Label*/}
                            <div className="stepper-label">
                                <h3 className="stepper-title ">
                                    Billing Details
                                </h3>
                                <div className="stepper-desc fw-normal">
                                    Provide your payment info
                                </div>
                            </div>
                            {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}           
                        
                        {/*begin::Line*/}
                        <div className="stepper-line h-40px">
                        </div>
                        {/*end::Line*/}
                    </div>
                    {/*end::Step 4*/}     
                    
                    {/*begin::Step 5*/}
                    <div className={`stepper-item ${checkStep == 5 ? "current" : (checkStep > 5 ? "completed" : "")}`} data-kt-stepper-element="nav">      
                        {/*begin::Wrapper*/}  
                        <div className="stepper-wrapper">              
                            {/*begin::Icon*/}
                            <div className="stepper-icon">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">5</span>
                            </div>
                            {/*end::Icon*/}

                            {/*begin::Label*/}
                            <div className="stepper-label">
                                <h3 className="stepper-title ">
                                    Completed
                                </h3>
                                <div className="stepper-desc fw-normal">
                                    Your account is created
                                </div>
                            </div>
                            {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}               
                    </div>
                    {/*end::Step 5*/}     
                </div>
                {/*end::Nav*/}
            </div>
            {/*end::Body*/} 
            
            {/*begin::Footer*/}
            <div className="d-flex flex-center flex-wrap px-5 py-10">
                {/*begin::Links*/}
                <div className="d-flex fw-normal">
                    <a href="https://keenthemes.com/" className="text-success px-5" target="_blank">Terms</a>

                    <a href="https://devs.keenthemes.com/" className="text-success px-5" target="_blank">Plans</a>
                    
                    <a href="https://1.envato.market/EA4JP" className="text-success px-5" target="_blank">Contact Us</a>
                </div>
                {/*end::Links*/}
            </div>
            {/*end::Footer*/}        
        </div>
    </div>
    {/*begin::Aside*/}

    {/*begin::Body*/}
    <div className="d-flex flex-column flex-lg-row-fluid py-10">
        {/*begin::Content*/}
        <div className="d-flex flex-center flex-column flex-column-fluid">
            {/*begin::Wrapper*/}
            <div className="w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto">
                {/*begin::Form*/}
                <form className="my-auto pb-5" noValidate="noValidate" id="kt_create_account_form">
{/*begin::Step 1*/}
<div className={`${checkStep == 1 ? "current" : "completed"}`} data-kt-stepper-element="content">
                        {/*begin::Wrapper*/}
<div className="w-100">
    {/*begin::Heading*/}
    <div className="pb-10 pb-lg-15">
        {/*begin::Title*/}
        <h2 className="fw-bold d-flex align-items-center text-dark">
                                                      Choose Design Type
                                                      <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Billing is issued based on your selected account type" data-bs-original-title="Billing is issued based on your selected account type" data-kt-initialized="1"></i>
        </h2>
        {/*end::Title*/}

        {/*begin::Notice*/}
        <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out 
            <a href="#" className="link-primary fw-bold">&nbsp;<b>&nbsp;<b>Help Page</b></b></a>.
        </div>
        {/*end::Notice*/}
    </div>
    {/*end::Heading*/}

    {/*begin::Input group*/}
    <div className="fv-row">
        {/*begin::Row*/}
        <div className="row">
            {/*begin::Col*/}
            <div className="col-lg-6">
                {/*begin::Option*/}
                                                          <input type="radio" className="btn-check" name="account_type" value="html" checked={checkAccountStep1 == "html" ? "checked" : ""} id="kt_create_account_form_account_type_personal" onFocus={(e) => handleChangeStep1(e)} onClick={()=>setClicked("html")}/>
                <label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10" htmlFor="kt_create_account_form_account_type_personal">
                    {/*begin::Svg Icon | path: icons/duotune/communication/com005.svg*/}
                                                              <span className="svg-icon svg-icon-3x me-5">                                                              <span className="svg-icon me-5">
                                                                  <img src='/assets/media/logos/html.svg' height="35" width="35" />

                                                              </span>
</span>
{/*end::Svg Icon*/}
                    {/*begin::Info*/}
                    <span className="d-block fw-semibold text-start">                            
                        <span className="text-dark fw-bold d-block fs-4 mb-2">
                                                                      Html & Css
                        </span>
                                                                  <span className="text-muted fw-semibold fs-6">Make a stuning Html & Css website using drawing layouts.</span>
                    </span>
                    {/*end::Info*/}
                </label>   
                {/*end::Option*/}
            </div>
            {/*end::Col*/}
            
            {/*begin::Col*/}
            <div className="col-lg-6">
                {/*begin::Option*/}
                                                          <input type="radio" className="btn-check" name="account_type" value="bootstrap" checked={checkAccountStep1 == "bootstrap" ? "checked" : ""} id="kt_create_account_form_account_type_corporate" onFocus={(e) => handleChangeStep1(e)} onClick={()=>setClicked("bootstrap")}/>
                <label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center" htmlFor="kt_create_account_form_account_type_corporate">
                    {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                                              <span className="svg-icon svg-icon-3x me-5">
                                                                  <img src='/assets/media/logos/bootstrap.svg' height="30" width="30" />

</span>
{/*end::Svg Icon*/}
                    {/*begin::Info*/}
                    <span className="d-block fw-semibold text-start">
                    <span className="text-dark fw-bold d-block fs-4 mb-2">Html, Css & Framework</span>
                                                                  <span className="text-muted fw-semibold fs-6">Make a stuning Html, Css & Css framework website using drawing layouts.</span>
                    </span>           
                    {/*end::Info*/}               
                </label>           
                {/*end::Option*/}   
            </div>
            {/*end::Col*/}
        </div>
        {/*end::Row*/}        
    </div>
    {/*end::Input group*/}    
</div> 
{/*end::Wrapper*/}                    </div>
                    {/*end::Step 1*/}

{/*begin::Step 2*/}
<div className={`${checkStep == 2 ? "current" : (checkStep > 2 ? "completed" : "")}`} data-kt-stepper-element="content">
                        {/*begin::Wrapper*/}
<div className="w-100">
    {/*begin::Heading*/}
    <div className="pb-10 pb-lg-15">
        {/*begin::Title*/}
                                                  <h2 className="fw-bold text-dark">Design Info</h2>
        {/*end::Title*/}

        {/*begin::Notice*/}
        <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out 
                                                      <a href="#" className="link-primary fw-bold">&nbsp;<b> Help Page</b></a>.
        </div>
        {/*end::Notice*/}
    </div>
    {/*end::Heading*/}

    {/*begin::Input group*/}
    <div className="mb-10 fv-row">
        {/*begin::Label*/}
        <label className="d-flex align-items-center form-label mb-3">
                                                      Specify Number of Pages
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Provide your team size to help us setup your billing"></i>
        </label>
        {/*end::Label*/}

        {/*begin::Row*/}
        <div className="row mb-2" data-kt-buttons="true"> 
            {/*begin::Col*/}
            <div className="col">
                {/*begin::Option*/}
                <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${checkTeamSize == 1 ? "active" : ""}`} onClick={()=> {
                    setCheckTEamSize(1)
                }}>
                    <input type="radio" className="btn-check" name="account_team_size" value="1-1" onClick={()=>setClicked2(1)} />    
                    <span className="fw-bold fs-3">1-1</span>
                </label>       
                {/*end::Option*/}     
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col">
                {/*begin::Option*/}
                <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${checkTeamSize == 2 ? "active" : ""}`} onClick={()=> {
                    setCheckTEamSize(2)
                }}>
                    <input type="radio" className="btn-check" name="account_team_size" checked value="2-4" onClick={()=>setClicked2(2)} />  
                                                              <span className="fw-bold fs-3">2-4</span>
                </label>
                {/*end::Option*/}
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
                                                      <div className="col yes-disabled">                            
                {/*begin::Option*/}
                <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${checkTeamSize == 3 ? "active" : ""}`} onClick={()=> {
                    setCheckTEamSize(3)
                }}>
                    <input type="radio" className="btn-check" name="account_team_size" value="4-10" onClick={()=>setClicked2(3)} />     
                                                              <span className="fw-bold fs-3">4-10</span>
                </label>
                {/*end::Option*/}
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
                                                      <div className="col yes-disabled">                                      
                {/*begin::Option*/}
                <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${checkTeamSize == 4 ? "active" : ""}`} onClick={()=> {
                    setCheckTEamSize(4)
                }}>
                    <input type="radio" className="btn-check" name="account_team_size" value="10+" onClick={()=>setClicked2(4)} /> 
                                                              <span className="fw-bold fs-3">10+</span>
                </label>   
                {/*end::Option*/}    
            </div>
            {/*end::Col*/}                 
        </div>
        {/*end::Row*/}

        {/*begin::Hint*/}
        <div className="form-text">
                                                      Dear user,

                                                      Our premium plan offers more than 4 pages, while the free plan does not. To access this feature, kindly upgrade to our premium plan.

                                                      Thank you.

        </div>
        {/*end::Hint*/}
    </div>
    {/*end::Input group*/}

    {/*begin::Input group*/}
    <div className="mb-10 fv-row">      
        {/*begin::Label*/}                  
                                                  <label className="form-label mb-3">Give your Website a Name <span className='text-danger'>*</span></label>
        {/*end::Label*/}

        {/*begin::Input*/}
                                                  <input type="text" className="form-control form-control-lg form-control-solid" name="account_name" placeholder="Example" value={websiteName} onChange={(e)=> {
                                                    setWebsiteName(e.target.value)
                                                    setClicked22()
                                                    }
                                                    
                                                  }/>
        {/*end::Input*/}
    </div>
    {/*end::Input group*/}

    {/*begin::Input group*/}
    <div className="mb-0 fv-row">
        {/*begin::Label*/}
        <label className="d-flex align-items-center form-label mb-5">
                                                      Select Website logo
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Monthly billing will be based on your account plan"></i>
        </label>
        {/*end::Label*/}

                                                  <div className="card card-flush py-4">
                                                      {/*begin::Card header*/}
                                                      <div className="card-header">
                                                          {/*begin::Card title*/}
                                                          <div className="card-title">
                                                              <h2>Logo</h2>
                                                          </div>
                                                          {/*end::Card title*/}
                                                      </div>
                                                      {/*end::Card header*/}

                                                      {/*begin::Card body*/}
                                                      <div className="card-body text-center pt-0">
                                                          {/*begin::Image input*/}
                                                          {/*begin::Image input placeholder*/}
                                                          {/* <style>
                .image-input-placeholder {
                    background-image: url('../../../assets/media/svg/files/blank-image.svg');
                }

                [data-bs-theme="dark"] .image-input-placeholder {
                    background-image: url('../../../assets/media/svg/files/blank-image-dark.svg');
                }                
            </style> */}
                                                          {/*end::Image input placeholder*/}

                                                          <div className="image-input image-input-empty image-input-outline image-input-placeholder mb-3" data-kt-image-input="true" style={{ backgroundImage: "url('/assets/media/svg/files/blank-image.svg')" }}>
                                                              {/*begin::Preview existing avatar*/}
                                                              <div className="image-input-wrapper w-150px h-150px"></div>
                                                              {/*end::Preview existing avatar*/}

                                                              {/*begin::Label*/}
                                                              <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" aria-label="Change avatar" data-bs-original-title="Change avatar" data-kt-initialized="1">
                                                                  <i className="bi bi-pencil-fill fs-7"></i>

                                                                  {/*begin::Inputs*/}
                                                                  <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                                  <input type="hidden" name="avatar_remove" />
                                                                  {/*end::Inputs*/}
            </label>
                                                              {/*end::Label*/}

                                                              {/*begin::Cancel*/}
                                                              <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" aria-label="Cancel avatar" data-bs-original-title="Cancel avatar" data-kt-initialized="1">
                                                                  <i className="bi bi-x fs-2"></i>
                                                              </span>
                                                              {/*end::Cancel*/}

                                                              {/*begin::Remove*/}
                                                              <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" aria-label="Remove avatar" data-bs-original-title="Remove avatar" data-kt-initialized="1">
                                                                  <i className="bi bi-x fs-2"></i>
                                                              </span>
                                                              {/*end::Remove*/}
                                                          </div>
                                                          {/*end::Image input*/}

                                                          {/*begin::Description*/}
                                                          <div className="text-muted fs-7">Set the logo image. Only *.png, *.jpg and *.svg image files are accepted</div>
                                                          {/*end::Description*/}
                                                      </div>
                                                      {/*end::Card body*/}
                                                      <div></div></div>
                                                  {/*begin::Options*/}

        {/*end::Options*/}
    </div>
    {/*end::Input group*/}
</div>
{/*end::Wrapper*/}                    </div>
                    {/*end::Step 2*/}

{/*begin::Step 3*/}             
<div className={`${checkStep == 3 ? "current" : (checkStep > 3 ? "completed" : "")}`} data-kt-stepper-element="content">
                        {/*begin::Wrapper*/}
<div className="w-100">
    {/*begin::Heading*/}
    <div className="pb-10 pb-lg-12">
        {/*begin::Title*/}
                                                  <h2 className="fw-bold text-dark">Internal Website Details</h2>
        {/*end::Title*/}

        {/*begin::Notice*/}
        <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out 
                                                      <a href="#" className="link-primary fw-bold">&nbsp;<b> Help Page</b></a>.
        </div>
        {/*end::Notice*/}
    </div>
    {/*end::Heading*/}
                                              <div className='fv-row mb-5' style={{ display: 'flex', gap: '0' }}>
                                                  <div style={{ backgroundColor: '#e5e5e5', width: '30rem', height: '6rem', borderRadius: '5% 0 0 5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                      60%
                                                  </div>
                                                  <div style={{ backgroundColor: '#191645', width: '15rem', height: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                      30%
                                                  </div>
                                                  <div style={{ backgroundColor: '#43c6ac', width: '5rem', height: '6rem', borderRadius: ' 0 8% 8% 0 ', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                      10%
                                                  </div>
                                              </div>
                                              <div className='fv-row mb-5' style={{ display: 'flex', gap: '0' }}>
                                                  <div style={{ backgroundColor: '#e5e5e5', width: '30rem', height: '6rem', borderRadius: '5% 0 0 5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                      60%
                                                  </div>
                                                  <div style={{ backgroundColor: '#191645', width: '15rem', height: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                      30%
                                                  </div>
                                                  <div style={{ backgroundColor: '#43c6ac', width: '5rem', height: '6rem', borderRadius: ' 0 8% 8% 0 ', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                      10%
                                                  </div>
                                              </div>
                                              <div className='fv-row mb-5' style={{ display: 'flex', gap: '0' }}>
                                                  <div style={{ backgroundColor: '#e5e5e5', width: '30rem', height: '6rem', borderRadius: '5% 0 0 5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                      60%
                                                  </div>
                                                  <div style={{ backgroundColor: '#191645', width: '15rem', height: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                      30%
                                                  </div>
                                                  <div style={{ backgroundColor: '#43c6ac', width: '5rem', height: '6rem', borderRadius: ' 0 8% 8% 0 ', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                      10%
                                                  </div>
                                              </div>
                                              <div className='fv-row' style={{ display: 'flex', gap: '0' }}>
                                                  <div style={{ backgroundColor: '#e5e5e5', width: '30rem', height: '6rem', borderRadius: '5% 0 0 5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                      60%
                                                  </div>
                                                  <div style={{ backgroundColor: '#191645', width: '15rem', height: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                      30%
                                                  </div>
                                                  <div style={{ backgroundColor: '#43c6ac', width: '5rem', height: '6rem', borderRadius: ' 0 8% 8% 0 ', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                      10%
                                                  </div>
                                              </div>

                                          </div>
                                          {/*end::Wrapper*/}
                    </div>              
                    {/*end::Step 3*/}

                    {/*begin::Step 4*/}
                    <div className={`${checkStep == 4 ? "current" : (checkStep > 4 ? "completed" : "")}`} data-kt-stepper-element="content">
                        {/*begin::Wrapper*/}
<div className="w-100">
    {/*begin::Heading*/}
    <div className="pb-10 pb-lg-15">
        {/*begin::Title*/}
        <h2 className="fw-bold text-dark">Billing Details</h2>
        {/*end::Title*/}

        {/*begin::Notice*/}
        <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out 
            <a href="#" className="text-primary fw-bold">&nbsp;<b>Help Page</b></a>.
        </div>
        {/*end::Notice*/}
    </div>
    {/*end::Heading*/}

    {/*begin::Input group*/}
<div className="d-flex flex-column mb-7 fv-row">
    {/*begin::Label*/}
    <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
        <span className="required">Name On Card</span>
        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
    </label>
    {/*end::Label*/}

    <input type="text" className="form-control form-control-solid" placeholder="" name="card_name" value="Max Doe"/>
</div>
{/*end::Input group*/}

{/*begin::Input group*/}
<div className="d-flex flex-column mb-7 fv-row">
    {/*begin::Label*/}
    <label className="required fs-6 fw-semibold form-label mb-2">Card Number</label>
    {/*end::Label*/}
    
    {/*begin::Input wrapper*/}
    <div className="position-relative">
        {/*begin::Input*/}
        <input type="text" className="form-control form-control-solid" placeholder="Enter card number" name="card_number" value="4111 1111 1111 1111"/>
        {/*end::Input*/}

        {/*begin::Card logos*/}
        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
            <img src="/assets/media/svg/card-logos/visa.svg" alt="" className="h-25px"/>
            <img src="/assets/media/svg/card-logos/mastercard.svg" alt="" className="h-25px"/>
            <img src="/assets/media/svg/card-logos/american-express.svg" alt="" className="h-25px"/>
        </div>
        {/*end::Card logos*/}
    </div>
    {/*end::Input wrapper*/}
</div>
{/*end::Input group*/}

{/*begin::Input group*/}
<div className="row mb-10">
    {/*begin::Col*/}
    <div className="col-md-8 fv-row">
        {/*begin::Label*/}
        <label className="required fs-6 fw-semibold form-label mb-2">Expiration Date</label>
        {/*end::Label*/}

        {/*begin::Row*/}
        <div className="row fv-row">
            {/*begin::Col*/}
            <div className="col-6">
                <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
                    <option></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                    </select>
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-6">
                <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
                    <option></option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option>
                                            <option value="2031">2031</option>
                                            <option value="2032">2032</option>
                                            <option value="2033">2033</option>
                                    </select>
            </div>
            {/*end::Col*/}
        </div>
        {/*end::Row*/}
    </div>
    {/*end::Col*/}

    {/*begin::Col*/}
    <div className="col-md-4 fv-row">
        {/*begin::Label*/}
        <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">CVV</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
        </label>
        {/*end::Label*/}

        {/*begin::Input wrapper*/}
        <div className="position-relative">
            {/*begin::Input*/}
            <input type="text" className="form-control form-control-solid" minLength="3" maxLength="4" placeholder="CVV" name="card_cvv"/>
            {/*end::Input*/}

            {/*begin::CVV icon*/}
            <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
<span className="svg-icon svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 7H2V11H22V7Z" fill="currentColor"/>
<path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}            </div>
            {/*end::CVV icon*/}
        </div>
        {/*end::Input wrapper*/}
    </div>
    {/*end::Col*/}
</div>
{/*end::Input group*/}

{/*begin::Input group*/}
<div className="d-flex flex-stack">
    {/*begin::Label*/}
    <div className="me-5">
        <label className="fs-6 fw-semibold form-label">Save Card for further billing?</label>
        <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
    </div>
    {/*end::Label*/}

    {/*begin::Switch*/}
    <label className="form-check form-switch form-check-custom form-check-solid">
        <input className="form-check-input" type="checkbox" value="1" checked="checked"/>
        <span className="form-check-label fw-semibold text-muted">
            Save Card
        </span>
    </label>
    {/*end::Switch*/}
</div>
{/*end::Input group*/}

</div> 
{/*end::Wrapper*/}                    </div>            
                    {/*end::Step 4*/}   
                    
                    {/*begin::Step 5*/}
                    <div className={`${checkStep == 5 ? "current" : (checkStep > 5 ? "completed" : "")}`} data-kt-stepper-element="content">
                         

{/*begin::Wrapper*/}
<div className="w-100">
    {/*begin::Heading*/}
    <div className="pb-8 pb-lg-10">
        {/*begin::Title*/}
        <h2 className="fw-bold text-dark">Your Are Done!</h2>      
        {/*end::Title*/}

        {/*begin::Notice*/}   
        <div className="text-muted fw-semibold fs-6">
            If you need more info, please  
            <a href="#" className="link-primary fw-bold">&nbsp;<b>Sign In</b></a>.
        </div>
        {/*end::Notice*/}
    </div>
    {/*end::Heading*/}
                    
    {/*begin::Body*/}
    <div className="mb-0">     
        {/*begin::Text*/}
        <div className="fs-6 text-gray-600 mb-5">
            Writing headlines for blog posts is as much an art as it is a science 
            and probably warrants its own post, but for all advise is with what 
            works for your great & amazing audience. 
        </div>
        {/*end::Text*/}

        {/*begin::Alert*/}
        
{/*begin::Notice*/}
<div className="notice d-flex bg-light-warning rounded border-warning border border-dashed  p-6">
            {/*begin::Icon*/}
        {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
<span className="svg-icon svg-icon-2tx svg-icon-warning me-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
<rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor"/>
<rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}        {/*end::Icon*/}
    
    {/*begin::Wrapper*/}
    <div className="d-flex flex-stack flex-grow-1 ">
                    {/*begin::Content*/}
            <div className=" fw-semibold">
                                    <h4 className="text-gray-900 fw-bold">We need your attention!</h4>
                
                                    <div className="fs-6 text-gray-700 ">To start using great tools, please, <a href="../../utilities/wizards/vertical.html" className="fw-bold">Create Team Platform</a></div>
                            </div>
            {/*end::Content*/}
        
            </div>
    {/*end::Wrapper*/}  
</div>
{/*end::Notice*/}
        {/*end::Alert*/}
    </div>
    {/*end::Body*/}
</div> 
{/*end::Wrapper*/}

                     </div>            
                    {/*end::Step 5*/}   

                    {/*begin::Actions*/}
                    <div className="d-flex flex-stack pt-15"> 
                        <div className="mr-2">
                        {/* data-kt-stepper-action="previous" */}
                            <button type="button" className="btn btn-lg btn-light-primary me-3" style={{display : (checkStep == 1 ? "none" : "block")}} onClick={()=> {
                                setCheckStep(checkStep - 1)
                            }}> 
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
<span className="svg-icon svg-icon-4 me-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor"/>
<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                                Previous
                            </button>
                        </div>

                        <div>
                            <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                                <span className="indicator-label">
                                    Submit
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
<span className="svg-icon svg-icon-4 ms-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"/>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                                </span>
                                <span className="indicator-progress">
                                    Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next" style={{display : (checkStep == 5 ? "none" : "block")}} onClick={()=> {
                                setCheckStep(checkStep + 1)
                            }}>
                                Continue
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
<span className="svg-icon svg-icon-4 ms-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"/>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                            </button>
                        </div>
                    </div>
                    {/*end::Actions*/}
                </form>
                {/*end::Form*/}
            </div>
            {/*end::Wrapper*/}
        </div>
        {/*end::Content*/}       
    </div>
    {/*end::Body*/}
</div>
{/*end::Authentication - Multi-steps*/}




                 </div>
{/*end::Root*/}
        
</div>
    </>
  )
}

export default CreateDesign