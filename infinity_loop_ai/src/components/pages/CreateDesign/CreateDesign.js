/*eslint-disable */
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"


import { getCreateDesignRedux } from "../../../Redux/CreateDesignReducer"
import { updatePageNumber, updateWebsiteName} from '../../../Redux/Step2CreateReducer'
import { updatePaletteRedux } from '../../../Redux/Step3CreateReducer'
import { updateLanguage, updateTone } from '../../../Redux/Step4CreateReducer'

import { dummy, dummy2, languages, languages_ind } from '../../../json/Bin'
import DrawCanvas from '../DrawCanvas/DrawCanvas'
import { addDesign } from '../../../services/DesignService'

const CreateDesign = () => {
    let state = useSelector(state => state.SignInReducer)
    let state2 = useSelector(state => state.CreateDesignReducer)
    let state3 = useSelector(state => state.Step2CreateReducer)
    let dispatch = useDispatch();
    let [checkStep, setCheckStep] = useState(1)
    let [checkTeamSize, setCheckTEamSize] = useState(1)
    let [checkAccount, setCheckAccount] = useState(1)
    let [modalOpen, setModalOpen] = useState(false)
    let [paletteSeq, setPaletteSeq] = useState(0)
    let [selectedP, setSelectedP] = useState(0)
    let [selectedLang, setSelectedLang] = useState(0)
    let [websiteName, setWebsiteName] = useState("")
    let [checkAccountStep1, setCheckAccountStep1] = useState("html")
    let [languageSelected, setLanguageSelected] = useState(1)
    let [toneSelected, setToneSelected] = useState(1)
    let [isMenu, setIsMenu] = useState(false);
    let [isErrMenu, setIsErrMenu] = useState(false);
    let [isPalette, setIsPalette] = useState(false)
    let [isLanguage, setIsLanguage] = useState(false)

    useEffect(() => {
        dispatch(updateLanguage(languageSelected))
    }, [languageSelected])
    useEffect(() => {
        dispatch(updateTone(toneSelected))
    }, [toneSelected])
    useEffect(()=> {
setPaletteSeq(dummy.length)
    }, [])
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
    let setClicked3 = async (val) => {
        let step1_2 = {
            step_1 : state2[0].step_1,
            step_2 : {
                website_name : state3.website_name,
                page_number : state3.page_number,
            }
        }
    //     let form = new FormData();
    //     form.append("photo",val.target.files[0]);
    //     form.append("data",step1_2)
    // let resultOfPhoto = await addDesign(form)
        // if (resultOfPhoto.status == 500) {

        // } else {
            // console.log(val.target.files[0])
        // }
    }
let setClicked22 = () => {
    dispatch(updateWebsiteName(websiteName))
}

let selectpalette = (palette) => {
    if (palette) {
        setIsPalette(true)
        setSelectedP(palette)
        dispatch(updatePaletteRedux({ palette_selected: palette }))
    }
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
                                                      Colour  Selection
                                </h3>
                                <div className="stepper-desc fw-normal">
                                                      Setup colour for your website
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
                                Conten Details
                                </h3>
                                <div className="stepper-desc fw-normal">
                                    Provide content info
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
                                    Design Website
                                </h3>
                                <div className="stepper-desc fw-normal">
                                    Design the Website
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
                    {/*end::Step 5*/}     
                              {/*begin::Step 6*/}
                              <div className={`stepper-item ${checkStep == 6 ? "current" : (checkStep > 6 ? "completed" : "")}`} data-kt-stepper-element="nav">      
                        {/*begin::Wrapper*/}  
                        <div className="stepper-wrapper">              
                            {/*begin::Icon*/}
                            <div className="stepper-icon">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">6</span>
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
                    {/*end::Step 6*/}    
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
                                                          <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${checkTeamSize == 1 ? "active" : ""}`} onClick={() => {
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
                                                          <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${checkTeamSize == 2 ? "active" : ""}`} onClick={() => {
                    setCheckTEamSize(2)
                }}>
                    <input type="radio" className="btn-check" name="account_team_size" checked value="2-4" onClick={()=>setClicked2(2)} />  
                                                              <span className="fw-bold fs-3">2-4</span>
                </label>
                {/*end::Option*/}
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className={`col ${state.plan == "free" ?"yes-disabled" : ""}`}>                                  
                {/*begin::Option*/}
                                                          <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${checkTeamSize == 3 ? "active" : ""}`} onClick={() => {
                    setCheckTEamSize(3)
                }}>
                    <input type="radio" className="btn-check" name="account_team_size" value="4-10" onClick={()=>setClicked2(3)} />     
                                                              <span className="fw-bold fs-3">4-10</span>
                </label>
                {/*end::Option*/}
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
                                                      <div className={`col ${state.plan == "free" ?"yes-disabled" : ""}`}>                                      
                {/*begin::Option*/}
                                                          <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${checkTeamSize == 4 ? "active" : ""}`} onClick={() => {
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
                    background-image: url('../..//assets/media/svg/files/blank-image.svg');
                }

                [data-bs-theme="dark"] .image-input-placeholder {
                    background-image: url('../..//assets/media/svg/files/blank-image-dark.svg');
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
                                                                  <input type="file" name="avatar" accept=".png, .jpg, .jpeg" onChange={(e)=> setClicked3(e)} />
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
                                                  <h2 className="fw-bold text-dark">Colour  Selection <span className='text-danger'>*</span></h2>
        {/*end::Title*/}

        {/*begin::Notice*/}
        <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out 
                                                      <a href="#" className="link-primary fw-bold">&nbsp;<b> Help Page</b></a>.
        </div>
        {/*end::Notice*/}
    </div>
    {/*end::Heading*/}
    {dummy.map((x, n)=> {
          const isSelected = selectedP === n + 1;
        return (
            <>
<div className="card mb-5" dir="ltr" style={{background: isSelected ? '#C0C0C0' :'#F9F9F9' }}> 
    {/*}begin::Body*/}
    <div className="card-body">  
    <h3 className="align-items-start flex-column">
   <span className="card-label fw-bold text-gray-800">Palette {n + 1}</span>
  </h3>
                        <div className='fv-row mb-5' style={{ display: 'flex', gap: '0', cursor: 'pointer' }} onClick={() => selectpalette(n + 1)} >
                                                      <div style={{ backgroundColor: x.color_60, width: '30rem', height: '6rem', borderRadius: '3% 0 0 3%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                          60%
                                                      </div>
                                                      <div style={{ backgroundColor: x.color_30, width: '15rem', height: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                          30%
                                                      </div>
                                                      <div style={{ backgroundColor: x.color_10, width: '5rem', height: '6rem', borderRadius: ' 0 8% 8% 0 ', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                          10%
                                                      </div>
                                                  </div>
      
        {/*}end::Links*/}
    </div>
    {/*}end::Body*/}
</div>
                                                  </>
        )
    })}

    {dummy2.map((x, n)=> {
                  const isSelected = selectedP === paletteSeq + n + 1;
        return (
            <>
<div className="card mb-5" dir="ltr" style={{background: isSelected ? '#C0C0C0' :'#F9F9F9' }}> 
    {/*}begin::Body*/}
    <div className="card-body">  
    <h3 className="align-items-start flex-column">
   <span className="card-label fw-bold text-gray-800">Palette {paletteSeq + n + 1}</span>
  </h3>
                                                      <div className='fv-row mb-5' style={{ display: 'flex', gap: '0', cursor : 'pointer' }} onClick={()=>selectpalette(paletteSeq + n + 1)}>
                                                      <div style={{ backgroundColor: x.color_60, width: '30rem', height: '6rem', borderRadius: '3% 0 0 3%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                          60%
                                                      </div>
                                                      <div style={{ backgroundColor: x.color_15_1, width: '7.5rem', height: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                          15%
                                                      </div>
                                                      <div style={{ backgroundColor: x.color_15_2, width: '7.5rem', height: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                          15%
                                                      </div>
                                                      <div style={{ backgroundColor: x.color_10, width: '5rem', height: '6rem', borderRadius: ' 0 8% 8% 0 ', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                                                          10%
                                                      </div>
                                                  </div>
      
        {/*}end::Links*/}
    </div>
    {/*}end::Body*/}
</div>
                                                  </>
        )
    })}
    

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
        <h2 className="fw-bold text-dark">Content Details</h2>
        {/*end::Title*/}

        {/*begin::Notice*/}
        <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out 
            <a href="#" className="text-primary fw-bold">&nbsp;<b>Help Page</b></a>.
        </div>
        {/*end::Notice*/}
    </div>
    {/*end::Heading*/}

{/*end::Input group*/}
<div className="row g-5 g-xl-8">
    <div className="col-xl-6">
{/*begin::Input group*/}
<div className="card card-xl-stretch mb-xl-8">
    {/*begin::Header*/}
    <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
   <span className="card-label fw-bold text-dark">Content Tone</span>
   <span className="text-muted mt-1 fw-semibold fs-7">choose <b>1</b> tone</span>
  </h3>

        <div className="card-toolbar">
            {/*begin::Menu*/}
            {/* <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"> */}
                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
{/* <span className="svg-icon svg-icon-2"> */}
    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"> */}
    {/* <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> */}
     {/* <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect> */}
        {/* <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect> */}
        {/* <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect> */}
        {/* <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect> */}
    {/* </g> */}
{/* </svg></span> */}
{/*end::Svg Icon*/}           
 {/* </button> */}
            

{/*begin::Menu 1*/}
<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63eda874daa77">
    {/*begin::Header*/}
    <div className="px-7 py-5">
        <div className="fs-5 text-dark fw-bold">Filter Options</div>
    </div>
    {/*end::Header*/}

    {/*begin::Menu separator*/}
    <div className="separator border-gray-200"></div>
    {/*end::Menu separator*/}

    {/*begin::Form*/}
    <div className="px-7 py-5">
        {/*begin::Input group*/}
        <div className="mb-10">
            {/*begin::Label*/}
            <label className="form-label fw-semibold">Status:</label>
            {/*end::Label*/}

            {/*begin::Input*/}
            <div>
                <select className="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63eda874daa77" data-allow-clear="true" data-select2-id="select2-data-1-u352" tabIndex="-1" aria-hidden="true" data-kt-initialized="1">
                    <option data-select2-id="select2-data-3-0d0r"></option>
                    <option value="1">Approved</option>
                    <option value="2">Pending</option>
                    <option value="2">In Process</option>
                    <option value="2">Rejected</option>
                </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-2-h6og" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-adee-container" aria-controls="select2-adee-container"><span className="select2-selection__rendered" id="select2-adee-container" role="textbox" aria-readonly="true" title="Select option"><span className="select2-selection__placeholder">Select option</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
            </div>
            {/*end::Input*/}
        </div>
        {/*end::Input group*/}

        {/*begin::Input group*/}
        <div className="mb-10">
            {/*begin::Label*/}
            <label className="form-label fw-semibold">Member Type:</label>
            {/*end::Label*/}

            {/*begin::Options*/}
            <div className="d-flex">
                {/*begin::Options*/}    
                <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                    <input className="form-check-input" type="checkbox" value="1" />
                    <span className="form-check-label">
                        Author
                    </span>
                </label>
                {/*end::Options*/}    

                {/*begin::Options*/}    
                <label className="form-check form-check-sm form-check-custom form-check-solid">
                    <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                    <span className="form-check-label">
                        Customer
                    </span>
                </label>
                {/*end::Options*/}    
            </div>        
            {/*end::Options*/}    
        </div>
        {/*end::Input group*/}

        {/*begin::Input group*/}
        <div className="mb-10">
            {/*begin::Label*/}
            <label className="form-label fw-semibold">Notifications:</label>
            {/*end::Label*/}

            {/*begin::Switch*/}
            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                <input className="form-check-input" type="checkbox" value="" name="notifications" checked="" />
                <label className="form-check-label">
                    Enabled
                </label>
            </div>
            {/*end::Switch*/}
        </div>
        {/*end::Input group*/} 
        {/*begin::Actions*/}
        <div className="d-flex justify-content-end">
            <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>

            <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
        </div>
        {/*end::Actions*/}
    </div>
    {/*end::Form*/}
</div>
{/*end::Menu 1*/}            {/*end::Menu*/}
        </div>
    </div>
    {/*end::Header*/}

    {/*begin::Body*/}
    <div className="card-body pt-5">
                    {/*begin::Item*/}
            <div className="d-flex align-items-center mb-7">
                {/*begin::Symbol*/}
                <div className="symbol symbol-50px me-5">
                    <span className="symbol-label bg-light-success">
                        {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
<span className="svg-icon svg-icon-2x svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor"></path>
<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor"></path>
</svg>
</span>
{/*end::Svg Icon*/}                    </span>                
                </div>
                {/*end::Symbol*/}

                {/*begin::Text*/}
                <div className="d-flex flex-column">
                                                                      <a href="#" className={`text-dark text-hover-primary fs-6 fw-bold text-active-primary ${toneSelected == 1 ? "active" : ""}`} onClick={() => setToneSelected(1)}>Professional tone</a>

                    <span className="text-muted fw-bold">standard</span>
                </div>
                {/*end::Text*/}
            </div>
            {/*end::Item*/}
                    {/*begin::Item*/}
            <div className="d-flex align-items-center mb-7">
                {/*begin::Symbol*/}
                <div className="symbol symbol-50px me-5">
                    <span className="symbol-label bg-light-warning">
                        {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
<span className="svg-icon svg-icon-2x svg-icon-warning"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"></path>
<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"></path>
</svg>
</span>
{/*end::Svg Icon*/}                    </span>                
                </div>
                {/*end::Symbol*/}

                {/*begin::Text*/}
                <div className="d-flex flex-column">
                                                                      <a href="#" className={`text-dark text-hover-primary fs-6 fw-bold text-active-primary ${toneSelected == 2 ? "active" : ""}`} onClick={() => setToneSelected(2)}>Poetic tone</a>

                    <span className="text-muted fw-bold">Artistic tone</span>
                </div>
                {/*end::Text*/}
            </div>
            {/*end::Item*/}
                    {/*begin::Item*/}
            <div className="d-flex align-items-center mb-7">
                {/*begin::Symbol*/}
                <div className="symbol symbol-50px me-5">
                    <span className="symbol-label bg-light-primary">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
<span className="svg-icon svg-icon-2x svg-icon-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor"></path>
<rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor"></rect>
<rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
</svg>
</span>
{/*end::Svg Icon*/}                    </span>                
                </div>
                {/*end::Symbol*/}

                {/*begin::Text*/}
                <div className="d-flex flex-column">
                                                                      <a href="#" className={`text-dark text-hover-primary fs-6 fw-bold text-active-primary ${toneSelected == 3 ? "active" : ""}`} onClick={() => setToneSelected(3)}>Communicational tone</a>

                    <span className="text-muted fw-bold">general conversation</span>
                </div>
                {/*end::Text*/}
            </div>
            {/*end::Item*/}
                    {/*begin::Item*/}
            <div className="d-flex align-items-center mb-7">
                {/*begin::Symbol*/}
                <div className="symbol symbol-50px me-5">
                    <span className="symbol-label bg-light-danger">
                        {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                        <span className="svg-icon svg-icon-2x svg-icon-danger"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor"></path>
<path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor"></path>
</svg>
</span>
{/*end::Svg Icon*/}                    </span>                
                </div>
                {/*end::Symbol*/}

                {/*begin::Text*/}
                <div className="d-flex flex-column">
                                                                      <a href="#" className={`text-dark text-hover-primary fs-6 fw-bold text-active-primary ${toneSelected == 4 ? "active" : ""}`} onClick={() => setToneSelected(4)}>Developer tone</a>

                    <span className="text-muted fw-bold">DevOps</span>
                </div>
                {/*end::Text*/}
            </div>
            {/*end::Item*/}
                    {/*begin::Item*/}
            <div className="d-flex align-items-center ">
                {/*begin::Symbol*/}
                <div className="symbol symbol-50px me-5">
                    <span className="symbol-label bg-light-info">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen049.svg*/}
<span className="svg-icon svg-icon-2x svg-icon-info">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="currentColor"></path>
<path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="currentColor"></path>
</svg>
</span>
{/*end::Svg Icon*/}                    </span>                
                </div>
                {/*end::Symbol*/}

                {/*begin::Text*/}
                <div className="d-flex flex-column">
                                                                      <a href="#" className={`text-dark text-hover-primary fs-6 fw-bold text-active-primary ${toneSelected == 5 ? "active" : ""}`} onClick={() => setToneSelected(5)}>funny</a>

                    <span className="text-muted fw-bold">Light and Humorous</span>
                </div>
                {/*end::Text*/}
            </div>
            {/*end::Item*/}
            
    </div>
    {/*end::Body*/}
</div>
</div>

<div className="col-xl-6">
    {/*begin::Label*/}
    <label className="required fs-6 fw-semibold form-label mb-2">Language</label>
        {/*end::Label*/}
<div className="app-sidebar-footer d-flex flex-stack pb-10" id="kt_app_sidebar_footer">   
    {/*begin::User menu*/}
    <div className="" onClick={()=> setIsMenu(isMenu == true ? false : true)} style={{cursor : "pointer"}}>
       {/*begin::Menu wrapper*/}
       
        {/*begin::Select2*/}
        <select className="form-select mb-2 select2-hidden-accessible" data-control="select2" data-placeholder="Select an option" data-allow-clear="true" multiple="" data-select2-id="select2-data-3-tn0u" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
            <option></option>
                            <option value="Computers">Computers</option>
                            <option value="Watches">Watches</option>
                            <option value="Headphones">Headphones</option>
                            <option value="Footwear">Footwear</option>
                            <option value="Cameras">Cameras</option>
                            <option value="Shirts">Shirts</option>
                            <option value="Household">Household</option>
                            <option value="Handbags">Handbags</option>
                            <option value="Wines">Wines</option>
                            <option value="Sandals">Sandals</option>
                    </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-4-cpoo" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--multiple form-select mb-2" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul className="select2-selection__rendered" id="select2-nt4d-container"></ul><span className="select2-search select2-search--inline"><textarea className="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-nt4d-container" placeholder="Select an option" style={{width: '100%'}}></textarea></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
        {/*end::Select2*/}
        {/*end::Input group*/}

 
{/*begin::User account menu*/}
<div className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-2 fs-6 w-275px ${isMenu == true ? "show" : ""}`} data-kt-menu="true" data-kt-menu-placement="top-start">
    {/*begin::Menu item*/}
         <div className="menu-item px-5">
                                                                      <a href="#" className="menu-link px-5" onClick={() => setLanguageSelected(1)}>
            <span className="menu-text">English (US)</span>
            <span className="menu-badge">
                <span className="badge badge-light-danger badge-circle fw-bold fs-9">hot</span>
            </span>
        </a>
    </div>
    {/*end::Menu item*/}
      {/*begin::Menu item*/}
                                                                  {languages.map((x, n) => {
    return (
        <div className="menu-item px-5">
            <a href="#" className="menu-link px-5" onClick={() => {
                setLanguageSelected(n + 2)
            }
            }>
            {x}
        </a>
    </div>
    )
   })}
    {/*end::Menu item*/}
         {/*begin::Menu item*/}
                                                                  {languages_ind.map((x, n) => {
    return (
        <div className="menu-item px-5">
            <a href="#" className="menu-link px-5" onClick={() => setLanguageSelected(5 + n + 2)}>
            {x + "\t(IND)"}
        </a>
    </div>
    )
   })}
    {/*end::Menu item*/}

</div>
{/*end::User account menu*/}
        {/*end::Menu wrapper*/}
    </div>
    {/*end::User menu*/} 


</div>
</div>

</div>

</div> 
{/*end::Wrapper*/}  
                  </div>            
                    {/*end::Step 4*/} 
                    
{/*begin::Step 5*/}
<div className={`${checkStep == 5 ? "current" : (checkStep > 5 ? "completed" : "")}`} data-kt-stepper-element="content">
                         

                         {/*begin::Wrapper*/}
                         <div className="w-100">
     {/*begin::Heading*/}
     <div className="pb-10 pb-lg-15">
         {/*begin::Title*/}
                                                  <h2 className="fw-bold text-dark">Design Website</h2>
         {/*end::Title*/}
 
         {/*begin::Notice*/}
         <div className="text-muted fw-semibold fs-6">
             If you need more info, please check out 
             <a href="#" className="text-primary fw-bold">&nbsp;<b>Help Page</b></a>.
         </div>
         {/*end::Notice*/}
     </div>
                                              <div className='row'>
                                                  <div className='col-xl-8 offset-xl-2'>
                                                      {/*end::Heading*/}
                                                      <div className="card h-md-100" dir="ltr"> 
    {/*begin::Body*/}
                                                          <div className="card-body d-flex flex-column flex-center">
                                                              {/*begin::Heading*/}
                                                              <div className="mb-2">
                                                                  {/*begin::Title*/}
                                                                  <h1 className="fw-semibold text-gray-800 text-center lh-lg">
                                                                      Have your tried <br /> our new
                                                                      <span className="fw-bolder"> Infinity Model?</span>
                                                                  </h1>
                                                                  {/*end::Title*/}

                                                                  {/*begin::Illustration*/}
                                                                  <div className="py-10 text-center">
                                                                      <img src="/assets/media/svg/illustrations/easy/2.svg" className="theme-light-show w-200px" alt="" />
                                                                      <img src="/assets/media/svg/illustrations/easy/2-dark.svg" className="theme-dark-show w-200px" alt="" />
                                                                  </div>
                                                                  {/*end::Illustration*/}
                                                              </div>
                                                              {/*end::Heading*/}

                                                              {/*begin::Links*/}
                                                              <div className="text-center mb-1">
                                                                  {/*begin::Link*/}
                                                                  <NavLink to="/auth/create/design/draw" className="btn btn-sm btn-primary me-2">
                                                                      Create now           </NavLink>
                                                                  {/*end::Link*/}

                                                                  {/*begin::Link*/}
                                                                  <a className="btn btn-sm btn-light" href="/documentation">
                                                                      Learn More            </a>
                                                                  {/*end::Link*/}
                                                              </div>
                                                              {/*end::Links*/}
    </div>
    {/*end::Body*/}
                                                      </div>
                                                  </div>
                                              </div>
</div> 
{/*end::Wrapper*/}  

                     </div>            
                    {/*end::Step 5*/}   
                       {/*begin::Step 6*/}
                       <div className={`${checkStep == 6 ? "current" : (checkStep > 6 ? "completed" : "")}`} data-kt-stepper-element="content">
                         

                         {/*begin::Wrapper*/}
                         <div className="w-100">
                             {/*begin::Heading*/}
                             <div className="pb-8 pb-lg-10">
                                 {/*begin::Title*/}
                                 <h2 className="fw-bold text-dark">Your Are Done!</h2>      
                                 {/*end::Title*/}
                         
                                 {/*begin::Notice*/}   
                                 <div className="text-muted fw-semibold fs-6">
                                     Go to home page 
                                     <NavLink to="/auth/home" className="link-primary fw-bold">&nbsp;<b> home</b></NavLink>.
                                 </div>
                                 {/*end::Notice*/}
                             </div>
                             {/*end::Heading*/}
                                             
                             {/*begin::Body*/}
                             <div className="mb-0">     
                                 {/*begin::Text*/}
                                                  <div className="fs-6 text-gray-600 mb-1">
                                                      Hello!
                                                  </div>
                                 <div className="fs-6 text-gray-600 mb-5">
                                                      Thank you for using our service. I'm glad to hear that your site is ready to go. You should be able to view your site by clicking on the "View Site" button. If you have any further questions or concerns, please don't hesitate to let me know.
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
                                                              <h4 className="text-gray-900 fw-bold">Attention {state && state[0] ? (state[0].name) : null}!</h4>
                                         
                                                              <div className="fs-6 text-gray-700 ">Hello! If you feel that further changes need to be made to the design, please click on the following link to proceed: <a onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }} className="fw-bold">Create Design</a> Thank you!</div>
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
                                             {/*end::Step 6*/} 
{/*begin::Actions*/}
<div className="d-flex flex-stack pt-15"> 
                        <div className="mr-2">
                        {/* data-kt-stepper-action="previous" */}
                                              <button type="button" className="btn btn-lg btn-light-primary me-3" style={{ display: (checkStep == 1 ? "none" : "block") }} onClick={() => {
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
                                              {/* <div className="spinner-border" role="status" style={{display : (checkStep == 6 ? "block" : "none")}}>
  <span className="visually-hidden">Loading...</span>
</div> */}
                            <button type="button" className="btn btn-lg btn-primary" style={{display : (checkStep == 6 ? "block" : "none")}}>
                                <span className="indicator-label">
                                    View Site
                                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
<span className="svg-icon svg-icon-4 ms-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"/>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"/>
</svg>
</span>
{/* end::Svg Icon         */}
                        </span>
                                <span className="indicator-progress">
                                    Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next" style={{display : (checkStep == 6 ? "none" : "block")}} onClick={()=> {
                                                  checkStep == 2 && websiteName.length == 0 || checkStep == 3 && isPalette == false ? (setIsErrMenu(true)) : (setCheckStep(checkStep + 1))
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

          {/* --------------------------------------Modal start---------------------------- */}
          {/* --------------------------------------Modal start---------------------------- */}
          {/* --------------------------------------Modal start---------------------------- */}
          {/* --------------------------------------Modal start---------------------------- */}
          {/* --------------------------------------Modal start---------------------------- */}
          {/* --------------------------------------Modal start---------------------------- */}
          <div className="modal fade show" id="kt_modal_create_campaign" tabindex="-1" style={{ display: modalOpen == true ? 'block' : 'none' }} aria-modal="true" role="dialog">
              {/*begin::Modal dialog*/}
              <div className="modal-dialog modal-fullscreen p-9">
                  {/*begin::Modal content*/}
                  <div className="modal-content modal-rounded">
                      {/*begin::Modal header*/}
                      <div className="modal-header py-7 d-flex justify-content-between">
                          {/*begin::Modal title*/}
                          <h2>Create Design</h2>
                          {/*end::Modal title*/}

                          {/*begin::Close*/}
                          <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal" onClick={() => setModalOpen(false)}>
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                              <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
                                  <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
                              </svg>

                              </span>
                              {/*end::Svg Icon*/}                </div>
                          {/*end::Close*/}
                      </div>
                      {/*begin::Modal header*/}

                      {/*begin::Modal body*/}
                      <div className="modal-body scroll-y m-5">

                      </div>
                      {/*begin::Modal body*/}
                  </div>
              </div>
          </div>
          {/* --------------------------------------Modal end---------------------------- */}


          {/* --------------------------------------Modal start---------------------------- */}
          <div class="swal2-container swal2-center swal2-backdrop-show" style={{ overflowY: 'auto', display: isErrMenu == false ? "none" : "" }}>
              <div aria-labelledby="swal2-title" aria-describedby="swal2-html-container" class="swal2-popup swal2-modal swal2-icon-error swal2-show" tabindex="-1" role="dialog" aria-live="assertive" aria-modal="true" style={{ display: 'grid' }}><ul class="swal2-progress-steps" style={{ display: 'block' }}></ul><div class="swal2-icon swal2-error swal2-icon-show" style={{ display: 'flex' }}><span class="swal2-x-mark">
                  <span class="swal2-x-mark-line-left"></span>
                  <span class="swal2-x-mark-line-right"></span>
              </span>
              </div><img class="swal2-image" style={{ display: 'block' }} /><h2 class="swal2-title" id="swal2-title" style={{ display: 'block' }}></h2>

                  <div class="swal2-html-container" id="swal2-html-container" style={{ display: 'block' }}>Sorry, looks like there are some <span style={{ color: '#F1416C' }}>mandatory detailed not filled</span>, please fill and try again.</div>
                  <div class="swal2-loader"></div><button type="button" class="swal2-confirm btn btn-light" style={{ display: 'inline-block' }} aria-label="" onClick={() => setIsErrMenu(false)}>Ok, got it!</button></div></div>
          {/* --------------------------------------Modal end---------------------------- */}
          {/* --------------------------------------Modal end---------------------------- */}
          {/* --------------------------------------Modal end---------------------------- */}
          {/* --------------------------------------Modal end---------------------------- */}
          {/* --------------------------------------Modal end---------------------------- */}
          {/* --------------------------------------Modal end---------------------------- */}

    </>
  )
}

export default CreateDesign