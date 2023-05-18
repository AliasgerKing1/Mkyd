/*eslint-disable */
import React, { useState } from 'react'
import Header from '../../shared/Header'
import Sidebar from "../../shared/Sidebar"
import Footer from '../../shared/Footer'
import CampaignModal from '../../shared/CampaignModal'
import Row1Home from '../../shared/Row1/Row1Home'
import Row2Home from '../../shared/Row2/Row2Home'
import Row3Home from '../../shared/Row3/Row3Home'
import Row4Home from '../../shared/Row4/Row4Home'
import Row5Home from '../../shared/Row5/Row5Home'
const Home = () => {

  return (
    <>
              
{/*begin::App*/}
<div className="d-flex flex-column flex-root flex-row" id="kt_app_root">
    {/*begin::Page*/}
    <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
        {/*begin::Header*/}
        <Header />
        {/*end::Header*/}        
        {/*begin::Wrapper*/}
        <div className="app-wrapper flex-row flex-column-fluid" id="kt_app_wrapper">
            {/*begin::Sidebar*/}
            <Sidebar />
            {/*end::Sidebar*/}
     
                            
            
            {/*begin::Main*/}
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                {/*begin::Content wrapper*/}
                <div className="d-flex flex-column flex-column-fluid">
                                        
                    
{/*begin::Content*/}
<div id="kt_app_content" className="app-content  flex-column-fluid " >
            {/*begin::Content container*/}
        <div id="kt_app_content_container" className="app-container  container-fluid ">
<Row1Home />

<Row2Home />

<Row3Home />

<Row4Home />

<Row5Home />

 

        </div>
        {/*end::Content container*/}
    </div>
{/*end::Content*/}					
                </div>
                {/*end::Content wrapper*/}

                <Footer />                    

                           </div>
            {/*end:::Main*/}

            
                    </div>
        {/*end::Wrapper*/}

        
            </div>
    {/*end::Page*/}
</div>
{/*end::App*/}

    {/*begin::App layout builder*/}
<div 
	id="kt_app_layout_builder" 
	className="bg-body" 

	data-kt-drawer="true" 
	data-kt-drawer-name="app-settings" 
	data-kt-drawer-activate="true" 
	data-kt-drawer-overlay="true" 
	data-kt-drawer-width="{default:'300px', 'lg': '380px'}" 
	data-kt-drawer-direction="end" 
	data-kt-drawer-toggle="#kt_app_layout_builder_toggle" 
	data-kt-drawer-close="#kt_app_layout_builder_close">

	{/*begin::Card*/}
	<div className="card border-0 shadow-none rounded-0 w-100">
		{/*begin::Card header*/}
<div className="card-header bgi-position-y-bottom bgi-position-x-end bgi-size-cover bgi-no-repeat rounded-0 border-0 py-4" id="kt_app_layout_builder_header"
style={{backgroundImage:"url('/assets/media/misc/layout/header-bg.jpg')"}}>
    {/*begin::Card title*/}
    <h3 className="card-title fs-3 fw-bold text-white flex-column m-0">
        Metronic Builder
        <small className="text-white opacity-50 fs-7 fw-semibold pt-1">Get your product deeply customized</small>
    </h3>
    {/*end::Card title*/}

    {/*begin::Card toolbar*/}
    <div className="card-toolbar">
        <button type="button" className="btn btn-sm btn-icon bg-white bg-opacity-25 btn-color-white p-0 w-20px h-20px rounded-1" id="kt_app_layout_builder_close">
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
<span className="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
{/*end::Svg Icon*/}        </button>
    </div>
    {/*end::Card toolbar*/}
</div>
{/*end::Card header*/}
		{/*begin::Card body*/}
		<div className="card-body position-relative" id="kt_app_layout_builder_body">
			{/*begin::Content*/}
			<div id="kt_app_settings_content" 
				className="position-relative scroll-y me-n5 pe-5" 
				
				data-kt-scroll="true" 
				data-kt-scroll-height="auto" 
				data-kt-scroll-wrappers="#kt_app_layout_builder_body" 
				data-kt-scroll-dependencies="#kt_app_layout_builder_header, #kt_app_layout_builder_footer" 
				data-kt-scroll-offset="5px">

				{/*begin::Form*/}
				<form className="form" method="POST" id="kt_app_layout_builder_form" action="https://preview.keenthemes.com/metronic8/demo27/index.php">
    				<input type="hidden" id="kt_app_layout_builder_action" name="layout-builder[action]"/>
					{/*begin::Card body*/}
<div className="card-body p-0">
    {/*begin::Form group*/}
    <div className="form-group">
        {/*begin::Heading*/}
        <div className="mb-6">
            <h4 className="fw-bold text-dark">Theme Mode</h4>
            <div className="fw-semibold text-muted fs-7 d-block lh-1">
                Enjoy Dark & Light modes.

                <a className="fw-semibold" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/dark-mode" target="_blank">See docs</a>
            </div>
        </div>
        {/*end::Heading*/}  
        
        {/*begin::Options*/}
        <div className="row" data-kt-buttons="true" data-kt-buttons-target=".form-check-image,.form-check-input">
                            {/*begin::Col*/}
                <div className="col-6">
                    {/*begin::Option*/}
                    <label className="form-check-image form-check-success">
                        {/*begin::Image*/} 
                        <div className="form-check-wrapper">
                            <img src="/assets/media/preview/demos/demo27/light-ltr.png" className="mw-100" alt=""/>                  
                        </div>
                        {/*end::Image*/} 

                        {/*begin::Check*/} 
                        <div className="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                            <input className="form-check-input" type="radio" value="light" name="theme_mode" id="kt_layout_builder_theme_mode_light"/>

                            {/*begin::Label*/} 
                            <div className="form-check-label text-gray-700">
                                Light                            </div>
                            {/*end::Label*/} 
                        </div>
                        {/*end::Check*/} 
                    </label>   
                    {/*end::Option*/}             
                </div>
                {/*end::Col*/}
                            {/*begin::Col*/}
                <div className="col-6">
                    {/*begin::Option*/}
                    <label className="form-check-image form-check-success">
                        {/*begin::Image*/} 
                        <div className="form-check-wrapper">
                            <img src="/assets/media/preview/demos/demo27/dark-ltr.png" className="mw-100" alt=""/>                  
                        </div>
                        {/*end::Image*/} 

                        {/*begin::Check*/} 
                        <div className="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                            <input className="form-check-input" type="radio" value="dark" name="theme_mode" id="kt_layout_builder_theme_mode_dark"/>

                            {/*begin::Label*/} 
                            <div className="form-check-label text-gray-700">
                                Dark                            </div>
                            {/*end::Label*/} 
                        </div>
                        {/*end::Check*/} 
                    </label>   
                    {/*end::Option*/}             
                </div>
                {/*end::Col*/}
              
        </div>
        {/*end::Options*/}            
    </div>
    {/*end::Form group*/}

    {/*begin::Separator*/}
    <div className="separator separator-dashed my-5"></div>
    {/*end::Separator*/}

    {/*begin::Form group*/}
    <div className="form-group d-flex flex-stack">           
        {/*begin::Heading*/}     
        <div className="d-flex flex-column">
            <h4 className="fw-bold text-dark">RTL Mode</h4>
            <div className="fs-7 fw-semibold text-muted">
                Change Language Direction.

                <a className="" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/rtl" target="_blank">See docs</a>
            </div>	
        </div>
        {/*end::Heading*/}

        {/*begin::Option*/}
        <div className="d-flex justify-content-end">
            {/*begin::Check*/}
            <div className="form-check form-check-solid form-check-custom form-check-success form-switch">
                <input type="hidden" value="false" name="layout-builder[layout][app][general][rtl]"/>
                <input className="form-check-input w-45px h-30px" type="checkbox"  value="true" name="layout-builder[layout][app][general][rtl]" id="kt_builder_rtl"/>

                {/*begin::Label*/}
                <label className="form-check-label" for="kt_builder_rtl"></label>
                {/*end::Label*/}
            </div>
            {/*end::Check*/}
        </div>
        {/*end::Option*/}
    </div>
    {/*end::Form group*/}

    {/*begin::Separator*/}
    <div className="separator separator-dashed my-5"></div>
    {/*end::Separator*/}

    {/*begin::Form group*/}
    <div className="form-group">            
        {/*begin::Heading*/}     
        <div className="d-flex flex-column mb-4">
            <h4 className="fw-bold text-dark">Width Mode</h4>
            <div className="fs-7 fw-semibold text-muted">Page width options</div>
        </div>
        {/*end::Heading*/}

        {/*begin::Options*/}
        <div className="d-flex">
                                            {/*begin::Check*/}
                <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5" >
                    <input className="form-check-input" type="radio" checked  value="default" id="kt_builder_page_width_default" name="layout-builder[layout][app][general][page-width]"/>

                    {/*begin::Label*/}
                    <label className="form-check-label text-gray-700 fw-bold text-nowrap" for="kt_builder_page_width_default">
                        Default                    </label>
                    {/*end::Label*/}
                </div>
                {/*end::Check*/}
                                            {/*begin::Check*/}
                <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5" >
                    <input className="form-check-input" type="radio"   value="fluid" id="kt_builder_page_width_fluid" name="layout-builder[layout][app][general][page-width]"/>

                    {/*begin::Label*/}
                    <label className="form-check-label text-gray-700 fw-bold text-nowrap" for="kt_builder_page_width_fluid">
                        Fluid                    </label>
                    {/*end::Label*/}
                </div>
                {/*end::Check*/}
                                            {/*begin::Check*/}
                <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5" >
                    <input className="form-check-input" type="radio"   value="fixed" id="kt_builder_page_width_fixed" name="layout-builder[layout][app][general][page-width]"/>

                    {/*begin::Label*/}
                    <label className="form-check-label text-gray-700 fw-bold text-nowrap" for="kt_builder_page_width_fixed">
                        Fixed                    </label>
                    {/*end::Label*/}
                </div>
                {/*end::Check*/}
                    </div>
        {/*end::Options*/}
    </div>
    {/*end::Form group*/}

    {/*begin::Separator*/}
    <div className="separator separator-dashed my-5"></div>
    {/*end::Separator*/}

    {/*begin::Form group*/}
    <div className="form-group">            
        {/*begin::Heading*/}     
        <div className="d-flex flex-column mb-4">
            <h4 className="fw-bold text-dark">Menu Icon</h4>
            <div className="fs-7 fw-semibold text-muted">Sidebar menu icon options</div>
        </div>
        {/*end::Heading*/}

        {/*begin::Options*/}
        <div className="d-flex">
                                            {/*begin::Check*/}
                <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5" >
                    <input className="form-check-input" type="radio" checked value="font" id="kt_builder_icon_font" name="layout-builder[layout][app][menu][icon]"/>

                    {/*begin::Label*/}
                    <label className="form-check-label text-gray-700 fw-bold text-nowrap" for="kt_builder_icon_font">
                        Font Icons                    </label>
                    {/*end::Label*/}
                </div>
                {/*end::Check*/}
                                            {/*begin::Check*/}
                <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5" >
                    <input className="form-check-input" type="radio"  value="svg" id="kt_builder_icon_svg" name="layout-builder[layout][app][menu][icon]"/>

                    {/*begin::Label*/}
                    <label className="form-check-label text-gray-700 fw-bold text-nowrap" for="kt_builder_icon_svg">
                        SVG Duotone                    </label>
                    {/*end::Label*/}
                </div>
                {/*end::Check*/}
                    </div>
        {/*end::Options*/}
    </div>
    {/*end::Form group*/}

    {/*begin::Separator*/}
    <div className="separator separator-dashed my-5"></div>
    {/*end::Separator*/}

    {/*begin::Form group*/}
    <div className="form-group d-flex flex-stack">           
        {/*begin::Heading*/}     
        <div className="d-flex flex-column">
            <h4 className="fw-bold text-dark">Sticky Header</h4>
            <div className="fs-7 fw-semibold text-muted">
                Enable sticky header

                <a href="../layout-builder.html" className="fw-semibold text-primary">More layout options</a>
            </div>	
        </div>
        {/*end::Heading*/}

        {/*begin::Option*/}
        <div className="d-flex justify-content-end">
            {/*begin::Check*/}
            <div className="form-check form-check-solid form-check-custom form-check-success form-switch">
                <input type="hidden" value="false" name="layout-builder[layout][app][header][default][sticky][enabled]"/>
                <input className="form-check-input w-45px h-30px" type="checkbox" checked value="true" name="layout-builder[layout][app][header][default][sticky][enabled]" id="kt_builder_header_sticky"/>

                {/*begin::Label*/}
                <label className="form-check-label" for="kt_builder_header_sticky"></label>
                {/*end::Label*/}
            </div>
            {/*end::Check*/}
        </div>
        {/*end::Option*/}
    </div>
    {/*end::Form group*/}
</div>
{/*end::Card body*/}				</form>
				{/*end::Form*/}
			</div>
			{/*end::Content*/}
		</div>
		{/*end::Card body*/}

		{/*begin::Card footer*/}
<div className="card-footer border-0 d-flex gap-3 pb-9 pt-0" id="kt_app_layout_builder_footer">
    <button type="button" id="kt_app_layout_builder_preview" className="btn btn-primary flex-grow-1 fw-semibold">
        
{/*begin::Indicator label*/}
<span className="indicator-label">
    Preview</span>
{/*end::Indicator label*/}

{/*begin::Indicator progress*/}
<span className="indicator-progress">
    Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
</span>
{/*end::Indicator progress*/}    </button>

    <button type="button" id="kt_app_layout_builder_reset"  className="btn btn-light flex-grow-1 fw-semibold">
        
{/*begin::Indicator label*/}
<span className="indicator-label">
    Reset</span>
{/*end::Indicator label*/}

{/*begin::Indicator progress*/}
<span className="indicator-progress">
    Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
</span>
{/*end::Indicator progress*/}    </button>
</div>
{/*end::Card footer*/}	</div>
	{/*end::Card*/}
</div>
{/*end::App layout builder*/}

{/*begin::App settings toggle*/}
<button 
  	id="kt_app_layout_builder_toggle" 
    className="btn btn-dark app-layout-builder-toggle lh-1 py-4 " 
    title="Metronic Builder" 
    data-bs-custom-classname="tooltip-inverse" 
    data-bs-toggle="tooltip" 
    data-bs-placement="left" 
    data-bs-dismiss="click" 
    data-bs-trigger="hover">

	  <i className="fonticon-equalizer fs-4 me-1"></i> Customize   
</button>
{/*end::App settings toggle*/}

{/*begin::Drawers*/}
{/*begin::Activities drawer*/}
<div 
	id="kt_activities" 
	className="bg-body" 

	data-kt-drawer="true" 
	data-kt-drawer-name="activities" 
	data-kt-drawer-activate="true" 
	data-kt-drawer-overlay="true" 
	data-kt-drawer-width="{default:'300px', 'lg': '900px'}" 
	data-kt-drawer-direction="end" 
	data-kt-drawer-toggle="#kt_activities_toggle" 
	data-kt-drawer-close="#kt_activities_close">

	<div className="card shadow-none border-0 rounded-0">
		{/*begin::Header*/}
		<div className="card-header" id="kt_activities_header">
			<h3 className="card-title fw-bold text-dark">Activity Logs</h3>

			<div className="card-toolbar">
				<button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
					{/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
<span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
{/*end::Svg Icon*/}				</button>
			</div>
		</div>
		{/*end::Header*/}

		{/*begin::Body*/}
		<div className="card-body position-relative" id="kt_activities_body">
			{/*begin::Content*/}
			<div id="kt_activities_scroll" 
				className="position-relative scroll-y me-n5 pe-5" 
				
				data-kt-scroll="true" 
				data-kt-scroll-height="auto" 
				data-kt-scroll-wrappers="#kt_activities_body" 
				data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" 
				data-kt-scroll-offset="5px">

				{/*begin::Timeline items*/}
				<div className="timeline">				
					{/*begin::Timeline item*/}
<div className="timeline-item">
    {/*begin::Timeline line*/}
    <div className="timeline-line w-40px"></div>
    {/*end::Timeline line*/}

    {/*begin::Timeline icon*/}
    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
        <div className="symbol-label bg-light">
            {/*begin::Svg Icon | path: icons/duotune/communication/com003.svg*/}
<span className="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor"/>
<path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}        </div>
    </div>
    {/*end::Timeline icon*/}

    {/*begin::Timeline content*/}
    <div className="timeline-content mb-10 mt-n1">
        {/*begin::Timeline heading*/}
        <div className="pe-3 mb-5">
            {/*begin::Title*/}
            <div className="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
            {/*end::Title*/}

            {/*begin::Description*/}
            <div className="d-flex align-items-center mt-1 fs-6">
                {/*begin::Info*/}
                <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                {/*end::Info*/}

                {/*begin::User*/}
                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                    <img src="/assets/media/avatars/300-14.jpg" alt="img"/>
                </div>  
                {/*end::User*/} 
            </div>
            {/*end::Description*/}
        </div>
        {/*end::Timeline heading*/}

        {/*begin::Timeline details*/}
        <div className="overflow-auto pb-5">
            {/*begin::Record*/}
            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">  
                {/*begin::Title*/}                                   
                <a href="../apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>                                  
                {/*end::Title*/}

                {/*begin::Label*/}
                <div className="min-w-175px pe-2">
                    <span className="badge badge-light text-muted">Application Design</span>
                </div>
                {/*end::Label*/}
                
                {/*begin::Users*/}
                <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px">
                        <img src="/assets/media/avatars/300-2.jpg" alt="img"/>
                    </div>
                    {/*end::User*/}

                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px">
                        <img src="/assets/media/avatars/300-14.jpg" alt="img"/>
                    </div>  
                    {/*end::User*/}                                  

                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px">
                        <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
                    </div>
                    {/*end::User*/}
                </div>
                {/*end::Users*/}                                     

                {/*begin::Progress*/}
                <div className="min-w-125px pe-2">
                    <span className="badge badge-light-primary">In Progress</span>
                </div>
                {/*end::Progress*/}
                                    
                {/*begin::Action*/}
                <a href="../apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>    
                {/*end::Action*/}                                
            </div>
            {/*end::Record*/}

            {/*begin::Record*/}
            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">  
                {/*begin::Title*/}                                   
                <a href="../apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>                                  
                {/*end::Title*/}

                {/*begin::Label*/}
                <div className="min-w-175px">
                    <span className="badge badge-light text-muted">CRM System Development</span>
                </div>
                {/*end::Label*/}
                
                {/*begin::Users*/}
                <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px">
                        <img src="/assets/media/avatars/300-20.jpg" alt="img"/>
                    </div>
                    {/*end::User*/}                               

                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px">
                        <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
                    </div>
                    {/*end::User*/}
                </div>
                {/*end::Users*/}                                     

                {/*begin::Progress*/}
                <div className="min-w-125px">
                    <span className="badge badge-light-success">Completed</span>
                </div>
                {/*end::Progress*/}
                                    
                {/*begin::Action*/}
                <a href="../apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>    
                {/*end::Action*/}                                
            </div>
            {/*end::Record*/}
        </div>
        {/*end::Timeline details*/}
    </div>
    {/*end::Timeline content*/}    
</div>
{/*end::Timeline item*/}
					{/*begin::Timeline item*/}
<div className="timeline-item">
    {/*begin::Timeline line*/}
    <div className="timeline-line w-40px"></div>
    {/*end::Timeline line*/}

    {/*begin::Timeline icon*/}
    <div className="timeline-icon symbol symbol-circle symbol-40px">
        <div className="symbol-label bg-light">
            {/*begin::Svg Icon | path: icons/duotune/communication/com009.svg*/}
<span className="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor"/>
<path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}        </div>
    </div>
    {/*end::Timeline icon*/}       

    {/*begin::Timeline content*/}
    <div className="timeline-content mb-10 mt-n2">
        {/*begin::Timeline heading*/}
        <div className="overflow-auto pe-3">
            {/*begin::Title*/}
            <div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
            {/*end::Title*/}

            {/*begin::Description*/}
            <div className="d-flex align-items-center mt-1 fs-6">
                {/*begin::Info*/}
                <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                {/*end::Info*/}

                {/*begin::User*/}
                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                    <img src="/assets/media/avatars/300-1.jpg" alt="img"/>
                </div>  
                {/*end::User*/} 
            </div>
            {/*end::Description*/}
        </div>
        {/*end::Timeline heading*/}
    </div>
    {/*end::Timeline content*/} 
</div>
{/*end::Timeline item*/}
					{/*begin::Timeline item*/}
<div className="timeline-item">
    {/*begin::Timeline line*/}
    <div className="timeline-line w-40px"></div>
    {/*end::Timeline line*/}

    {/*begin::Timeline icon*/}
    <div className="timeline-icon symbol symbol-circle symbol-40px">
        <div className="symbol-label bg-light">
            {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
<span className="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor"/>
<path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}        </div>
    </div>
    {/*end::Timeline icon*/}

    {/*begin::Timeline content*/}
    <div className="timeline-content mb-10 mt-n1">
        {/*begin::Timeline heading*/}
        <div className="mb-5 pe-3">
            {/*begin::Title*/}
            <a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
            {/*end::Title*/}

            {/*begin::Description*/}
            <div className="d-flex align-items-center mt-1 fs-6">
                {/*begin::Info*/}
                <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                {/*end::Info*/}

                {/*begin::User*/}
                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                    <img src="/assets/media/avatars/300-23.jpg" alt="img"/>
                </div>  
                {/*end::User*/} 
            </div>
            {/*end::Description*/}
        </div>
        {/*end::Timeline heading*/}

        {/*begin::Timeline details*/}
        <div className="overflow-auto pb-5">
            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                {/*begin::Item*/}
                <div className="d-flex flex-aligns-center pe-10 pe-lg-20">  
                    {/*begin::Icon*/}                                  
                    <img alt="" className="w-30px me-3" src="/assets/media/svg/files/pdf.svg"/>
                    {/*end::Icon*/} 

                    {/*begin::Info*/} 
                    <div className="ms-1 fw-semibold">
                        {/*begin::Desc*/} 
                        <a href="../apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                        {/*end::Desc*/} 

                        {/*begin::Number*/} 
                        <div className="text-gray-400">1.9mb</div>
                        {/*end::Number*/} 
                    </div>
                    {/*begin::Info*/} 
                </div>
                {/*end::Item*/}

                {/*begin::Item*/}
                <div className="d-flex flex-aligns-center pe-10 pe-lg-20">   
                    {/*begin::Icon*/}                                  
                    <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="/assets/media/svg/files/doc.svg"/>
                    {/*end::Icon*/} 

                    {/*begin::Info*/} 
                    <div className="ms-1 fw-semibold">
                        {/*begin::Desc*/} 
                        <a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                        {/*end::Desc*/} 

                        {/*begin::Number*/} 
                        <div className="text-gray-400">18kb</div>
                        {/*end::Number*/} 
                    </div>
                    {/*end::Info*/} 
                </div>
                {/*end::Item*/}

                {/*begin::Item*/}
                <div className="d-flex flex-aligns-center">   
                    {/*begin::Icon*/}                                  
                    <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="/assets/media/svg/files/css.svg"/>
                    {/*end::Icon*/} 

                    {/*begin::Info*/} 
                    <div className="ms-1 fw-semibold">
                        {/*begin::Desc*/} 
                        <a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                        {/*end::Desc*/} 

                        {/*begin::Number*/} 
                        <div className="text-gray-400">20mb</div>
                        {/*end::Number*/} 
                    </div>
                    {/*end::Icon*/} 
                </div>
                {/*end::Item*/}
            </div>
        </div>
        {/*end::Timeline details*/}
    </div>
    {/*end::Timeline content*/}    
</div>
{/*end::Timeline item*/}
					{/*begin::Timeline item*/}
<div className="timeline-item">
    {/*begin::Timeline line*/}
    <div className="timeline-line w-40px"></div>
    {/*end::Timeline line*/}

    {/*begin::Timeline icon*/}
    <div className="timeline-icon symbol symbol-circle symbol-40px">
        <div className="symbol-label bg-light">
            {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
<span className="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor"/>
<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}        </div>
    </div>
    {/*end::Timeline icon*/}

        {/*begin::Timeline content*/}
    <div className="timeline-content mb-10 mt-n1">
        {/*begin::Timeline heading*/}
        <div className="pe-3 mb-5">
            {/*begin::Title*/}
            <div className="fs-5 fw-semibold mb-2">
                Task <a href="#" className="text-primary fw-bold me-1">#45890</a>  
                merged with <a href="#" className="text-primary fw-bold me-1">#45890</a>  in “Ads Pro Admin Dashboard project:
            </div>
            {/*end::Title*/}

            {/*begin::Description*/}
            <div className="d-flex align-items-center mt-1 fs-6">
                {/*begin::Info*/}
                <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                {/*end::Info*/}

                {/*begin::User*/}
                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                    <img src="/assets/media/avatars/300-14.jpg" alt="img"/>
                </div>  
                {/*end::User*/} 
            </div>
            {/*end::Description*/}
        </div>
        {/*end::Timeline heading*/}
    </div>
    {/*end::Timeline content*/}    
</div>
{/*end::Timeline item*/}
					{/*begin::Timeline item*/}
<div className="timeline-item">
    {/*begin::Timeline line*/}
    <div className="timeline-line w-40px"></div>
    {/*end::Timeline line*/}

    {/*begin::Timeline icon*/}
    <div className="timeline-icon symbol symbol-circle symbol-40px">
        <div className="symbol-label bg-light">
            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
<span className="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"/>
<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}        </div>
    </div>
    {/*end::Timeline icon*/}

    {/*begin::Timeline content*/}
    <div className="timeline-content mb-10 mt-n1">
        {/*begin::Timeline heading*/}
        <div className="pe-3 mb-5">
            {/*begin::Title*/}
            <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
            {/*end::Title*/}

            {/*begin::Description*/}
            <div className="d-flex align-items-center mt-1 fs-6">
                {/*begin::Info*/}
                <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                {/*end::Info*/}

                {/*begin::User*/}
                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                    <img src="/assets/media/avatars/300-2.jpg" alt="img"/>
                </div>  
                {/*end::User*/} 
            </div>
            {/*end::Description*/}
        </div>
        {/*end::Timeline heading*/}

        {/*begin::Timeline details*/}
        <div className="overflow-auto pb-5">
            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                {/*begin::Item*/}
                <div className="overlay me-10">  
                    {/*begin::Image*/}                                      
                    <div className="overlay-wrapper">
                        <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-29.jpg"/>  
                    </div>
                    {/*end::Image*/}

                    {/*begin::Link*/}
                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                    </div>   
                    {/*end::Link*/}                                     
                </div>
                {/*end::Item*/}

                {/*begin::Item*/}
                <div className="overlay me-10">   
                    {/*begin::Image*/}                                     
                    <div className="overlay-wrapper">
                        <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-31.jpg"/> 
                    </div>
                    {/*end::Image*/}

                    {/*begin::Link*/}
                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                    </div>        
                    {/*end::Link*/}                                
                </div>
                {/*end::Item*/}                        
                
                {/*begin::Item*/}
                <div className="overlay">   
                    {/*begin::Image*/}                                     
                    <div className="overlay-wrapper">
                        <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-40.jpg"/>
                    </div>
                    {/*end::Image*/}

                    {/*begin::Link*/}
                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                    </div>   
                    {/*end::Link*/}                                     
                </div>
                {/*end::Item*/}
            </div>
        </div>
        {/*end::Timeline details*/}
    </div>
    {/*end::Timeline content*/}  
</div>
{/*end::Timeline item*/}					
					{/*begin::Timeline item*/}
<div className="timeline-item">
    {/*begin::Timeline line*/}
    <div className="timeline-line w-40px"></div>
    {/*end::Timeline line*/}

    {/*begin::Timeline icon*/}
    <div className="timeline-icon symbol symbol-circle symbol-40px">
        <div className="symbol-label bg-light">
            {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
<span className="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor"/>
<path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}        </div>
    </div>
    {/*end::Timeline icon*/}

    {/*begin::Timeline content*/}
    <div className="timeline-content mb-10 mt-n1">
        {/*begin::Timeline heading*/}
        <div className="pe-3 mb-5">
            {/*begin::Title*/}
            <div className="fs-5 fw-semibold mb-2">
                New case <a href="#" className="text-primary fw-bold me-1">#67890</a> 
                is assigned to you in Multi-platform Database Design project
            </div>
            {/*end::Title*/}

            {/*begin::Description*/}
            <div className="overflow-auto pb-5">
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                    {/*end::Info*/}

                    {/*begin::User*/}
                    <a href="#" className="text-primary fw-bold me-1">Alice Tan</a>
                    {/*end::User*/} 
                </div>
                {/*end::Wrapper*/}
            </div>
            {/*end::Description*/}
        </div>
        {/*end::Timeline heading*/}
    </div>
    {/*end::Timeline content*/}           
</div>
{/*end::Timeline item*/}
					{/*begin::Timeline item*/}
<div className="timeline-item">
    {/*begin::Timeline line*/}
    <div className="timeline-line w-40px"></div>
    {/*end::Timeline line*/}

    {/*begin::Timeline icon*/}
    <div className="timeline-icon symbol symbol-circle symbol-40px">
        <div className="symbol-label bg-light">
            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
<span className="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"/>
<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}        </div>
    </div>
    {/*end::Timeline icon*/}

    {/*begin::Timeline content*/}
    <div className="timeline-content mb-10 mt-n1">
        {/*begin::Timeline heading*/}
        <div className="pe-3 mb-5">
            {/*begin::Title*/}
            <div className="fs-5 fw-semibold mb-2">You have received a new order:</div>
            {/*end::Title*/}

            {/*begin::Description*/}
            <div className="d-flex align-items-center mt-1 fs-6">
                {/*begin::Info*/}
                <div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
                {/*end::Info*/}

                {/*begin::User*/}
                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
                    <img src="/assets/media/avatars/300-4.jpg" alt="img"/>
                </div>  
                {/*end::User*/} 
            </div>
            {/*end::Description*/}
        </div>
        {/*end::Timeline heading*/}

        {/*begin::Timeline details*/}
        <div className="overflow-auto pb-5">
            
{/*begin::Notice*/}
<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
            {/*begin::Icon*/}
        {/*begin::Svg Icon | path: icons/duotune/coding/cod004.svg*/}
<span className="svg-icon svg-icon-2tx svg-icon-primary me-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z" fill="currentColor"/>
<path d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}        {/*end::Icon*/}
    
    {/*begin::Wrapper*/}
    <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                    {/*begin::Content*/}
            <div className="mb-3 mb-md-0 fw-semibold">
                                    <h4 className="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
                
                                    <div className="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
                            </div>
            {/*end::Content*/}
        
                    {/*begin::Action*/}
            <a href="#" className="btn btn-primary px-6 align-self-center text-nowrap"  > 
                Proceed            </a>
            {/*end::Action*/}
            </div>
    {/*end::Wrapper*/}  
</div>
{/*end::Notice*/}
                
        </div>
        {/*end::Timeline details*/}
    </div>
    {/*end::Timeline content*/}   
</div>
{/*end::Timeline item*/}
					{/*begin::Timeline item*/}
<div className="timeline-item">
    {/*begin::Timeline line*/}
    <div className="timeline-line w-40px"></div>
    {/*end::Timeline line*/}

    {/*begin::Timeline icon*/}
    <div className="timeline-icon symbol symbol-circle symbol-40px">
        <div className="symbol-label bg-light">
            {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
<span className="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor"/>
<path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor"/>
<path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}        </div>
    </div>
    {/*end::Timeline icon*/}

    {/*begin::Timeline content*/}
    <div className="timeline-content mt-n1">
        {/*begin::Timeline heading*/}
        <div className="pe-3 mb-5">
            {/*begin::Title*/}
            <div className="fs-5 fw-semibold mb-2">
                New order <a href="#" className="text-primary fw-bold me-1">#67890</a> 
                is placed for Workshow Planning & Budget Estimation
            </div>
            {/*end::Title*/}

            {/*begin::Description*/}
            <div className="d-flex align-items-center mt-1 fs-6">
                {/*begin::Info*/}
                <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                {/*end::Info*/}

                {/*begin::User*/}
                <a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>
                {/*end::User*/} 
            </div>
            {/*end::Description*/}
        </div>
        {/*end::Timeline heading*/}
    </div>
    {/*end::Timeline content*/} 
</div>
{/*end::Timeline item*/} 				</div>
				{/*end::Timeline items*/}				 
			</div>
			{/*end::Content*/}
		</div>
		{/*end::Body*/}

		{/*begin::Footer*/}
		<div className="card-footer py-5 text-center" id="kt_activities_footer">
			<a href="../pages/user-profile/activity.html" className="btn btn-bg-body text-primary">
				View All Activities {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
<span className="svg-icon svg-icon-3 svg-icon-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"/>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}			</a>
		</div>
		{/*end::Footer*/}
	</div>
</div>
{/*end::Activities drawer*/}		

{/*begin::Chat drawer*/}
<div 
    id="kt_drawer_chat"

    className="bg-body"
    data-kt-drawer="true" 
	data-kt-drawer-name="chat" 
	data-kt-drawer-activate="true" 
	data-kt-drawer-overlay="true" 
	data-kt-drawer-width="{default:'300px', 'md': '500px'}" 
	data-kt-drawer-direction="end" 
	data-kt-drawer-toggle="#kt_drawer_chat_toggle" 
	data-kt-drawer-close="#kt_drawer_chat_close">

    {/*begin::Messenger*/}
    <div className="card w-100 rounded-0 border-0" id="kt_drawer_chat_messenger">
        {/*begin::Card header*/}
        <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
            {/*begin::Title*/}
            <div className="card-title">
                {/*begin::User*/}
                <div className="d-flex justify-content-center flex-column me-3">
                    <a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>

                    {/*begin::Info*/}
                    <div className="mb-0 lh-1">
                        <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                        <span className="fs-7 fw-semibold text-muted">Active</span>
                    </div>
                    {/*end::Info*/}
                </div>
                {/*end::User*/}
            </div>
            {/*end::Title*/}

            {/*begin::Card toolbar*/}
            <div className="card-toolbar">
                {/*begin::Menu*/}
                <div className="me-2">
                    <button className="btn btn-sm btn-icon btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <i className="bi bi-three-dots fs-3"></i>
                    </button>
                    
{/*begin::Menu 3*/}
<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
    {/*begin::Heading*/}
    <div className="menu-item px-3">
        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
            Contacts
        </div>
    </div>
    {/*end::Heading*/}

    {/*begin::Menu item*/}
    <div className="menu-item px-3">
        <a href="#" className="menu-link px-3"  data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">
            Add Contact
        </a>
    </div>
    {/*end::Menu item*/}

    {/*begin::Menu item*/}
    <div className="menu-item px-3">
        <a href="#" className="menu-link flex-stack px-3"  data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
            Invite Contacts

            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation"></i>
        </a>
    </div>
    {/*end::Menu item*/}

    {/*begin::Menu item*/}
    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <a href="#" className="menu-link px-3">
            <span className="menu-title">Groups</span>
            <span className="menu-arrow"></span>
        </a>

        {/*begin::Menu sub*/}
        <div className="menu-sub menu-sub-dropdown w-175px py-4">
            {/*begin::Menu item*/}
            <div className="menu-item px-3">
                <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">
                    Create Group
                </a>
            </div>
            {/*end::Menu item*/}

            {/*begin::Menu item*/}
            <div className="menu-item px-3">
                <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">
                    Invite Members
                </a>
            </div>
            {/*end::Menu item*/}

            {/*begin::Menu item*/}            
            <div className="menu-item px-3">
                <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">
                    Settings
                </a>
            </div>
            {/*end::Menu item*/}
        </div>
        {/*end::Menu sub*/}
    </div>
    {/*end::Menu item*/}

    {/*begin::Menu item*/}
    <div className="menu-item px-3 my-1">
        <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">
            Settings
        </a>
    </div>
    {/*end::Menu item*/}
</div>
{/*end::Menu 3*/}
                </div>
                {/*end::Menu*/}

                {/*begin::Close*/}
                <div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_chat_close">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
<span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
{/*end::Svg Icon*/}                </div>
                {/*end::Close*/}
            </div>
            {/*end::Card toolbar*/}
        </div>
        {/*end::Card header*/}

        {/*begin::Card body*/}
        <div className="card-body" id="kt_drawer_chat_messenger_body">
            {/*begin::Messages*/}
            <div 
                className="scroll-y me-n5 pe-5"

                data-kt-element="messages"

                data-kt-scroll="true"     
                data-kt-scroll-activate="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
                data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"       
                data-kt-scroll-offset="0px">

                
    
    {/*begin::Message(in)*/}
    <div className="d-flex justify-content-start mb-10 " >
        {/*begin::Wrapper*/}
        <div className="d-flex flex-column align-items-start">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
                                    {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-25.jpg"/></div>{/*end::Avatar*/}
                    {/*begin::Details*/}
                    <div className="ms-3">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                        <span className="text-muted fs-7 mb-1">2 mins</span>
                    </div>
                    {/*end::Details*/}
                 
            </div>
            {/*end::User*/}

            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                How likely are you to recommend our company to your friends and family ?            </div>
            {/*end::Text*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    {/*end::Message(in)*/}
    
    {/*begin::Message(out)*/}
    <div className="d-flex justify-content-end mb-10 " >
        {/*begin::Wrapper*/}
        <div className="d-flex flex-column align-items-end">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
                                    {/*begin::Details*/}
                    <div className="me-3">
                        <span className="text-muted fs-7 mb-1">5 mins</span>
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>  
                    </div>
                    {/*end::Details*/}

                    {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-1.jpg"/></div>{/*end::Avatar*/}                 
            </div>
            {/*end::User*/}

            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.            </div>
            {/*end::Text*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    {/*end::Message(out)*/}
    
    {/*begin::Message(in)*/}
    <div className="d-flex justify-content-start mb-10 " >
        {/*begin::Wrapper*/}
        <div className="d-flex flex-column align-items-start">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
                                    {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-25.jpg"/></div>{/*end::Avatar*/}
                    {/*begin::Details*/}
                    <div className="ms-3">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                        <span className="text-muted fs-7 mb-1">1 Hour</span>
                    </div>
                    {/*end::Details*/}
                 
            </div>
            {/*end::User*/}

            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                Ok, Understood!            </div>
            {/*end::Text*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    {/*end::Message(in)*/}
    
    {/*begin::Message(out)*/}
    <div className="d-flex justify-content-end mb-10 " >
        {/*begin::Wrapper*/}
        <div className="d-flex flex-column align-items-end">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
                                    {/*begin::Details*/}
                    <div className="me-3">
                        <span className="text-muted fs-7 mb-1">2 Hours</span>
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>  
                    </div>
                    {/*end::Details*/}

                    {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-1.jpg"/></div>{/*end::Avatar*/}                 
            </div>
            {/*end::User*/}

            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                You’ll receive notifications for all issues, pull requests!            </div>
            {/*end::Text*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    {/*end::Message(out)*/}
    
    {/*begin::Message(in)*/}
    <div className="d-flex justify-content-start mb-10 " >
        {/*begin::Wrapper*/}
        <div className="d-flex flex-column align-items-start">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
                                    {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-25.jpg"/></div>{/*end::Avatar*/}
                    {/*begin::Details*/}
                    <div className="ms-3">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                        <span className="text-muted fs-7 mb-1">3 Hours</span>
                    </div>
                    {/*end::Details*/}
                 
            </div>
            {/*end::User*/}

            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                You can unwatch this repository immediately by clicking here: <a href="https://keenthemes.com/">Keenthemes.com</a>            </div>
            {/*end::Text*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    {/*end::Message(in)*/}
    
    {/*begin::Message(out)*/}
    <div className="d-flex justify-content-end mb-10 " >
        {/*begin::Wrapper*/}
        <div className="d-flex flex-column align-items-end">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
                                    {/*begin::Details*/}
                    <div className="me-3">
                        <span className="text-muted fs-7 mb-1">4 Hours</span>
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>  
                    </div>
                    {/*end::Details*/}

                    {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-1.jpg"/></div>{/*end::Avatar*/}                 
            </div>
            {/*end::User*/}

            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                Most purchased Business courses during this sale!            </div>
            {/*end::Text*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    {/*end::Message(out)*/}
    
    {/*begin::Message(in)*/}
    <div className="d-flex justify-content-start mb-10 " >
        {/*begin::Wrapper*/}
        <div className="d-flex flex-column align-items-start">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
                                    {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-25.jpg"/></div>{/*end::Avatar*/}
                    {/*begin::Details*/}
                    <div className="ms-3">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                        <span className="text-muted fs-7 mb-1">5 Hours</span>
                    </div>
                    {/*end::Details*/}
                 
            </div>
            {/*end::User*/}

            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided            </div>
            {/*end::Text*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    {/*end::Message(in)*/}
    
    {/*begin::Message(template for out)*/}
    <div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
        {/*begin::Wrapper*/}
        <div className="d-flex flex-column align-items-end">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
                                    {/*begin::Details*/}
                    <div className="me-3">
                        <span className="text-muted fs-7 mb-1">Just now</span>
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>  
                    </div>
                    {/*end::Details*/}

                    {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-1.jpg"/></div>{/*end::Avatar*/}                 
            </div>
            {/*end::User*/}

            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                            </div>
            {/*end::Text*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    {/*end::Message(template for out)*/}
    
    {/*begin::Message(template for in)*/}
    <div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
        {/*begin::Wrapper*/}
        <div className="d-flex flex-column align-items-start">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
                                    {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-25.jpg"/></div>{/*end::Avatar*/}
                    {/*begin::Details*/}
                    <div className="ms-3">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                        <span className="text-muted fs-7 mb-1">Just now</span>
                    </div>
                    {/*end::Details*/}
                 
            </div>
            {/*end::User*/}

            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                Right before vacation season we have the next Big Deal for you.            </div>
            {/*end::Text*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    {/*end::Message(template for in)*/}
            </div>
            {/*end::Messages*/}
        </div>
        {/*end::Card body*/}

        {/*begin::Card footer*/}
        <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
            {/*begin::Input*/}
            <textarea className="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message">
                
            </textarea>
            {/*end::Input*/}

            {/*begin:Toolbar*/}
            <div className="d-flex flex-stack">
                {/*begin::Actions*/}
                <div className="d-flex align-items-center me-2">
                    <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon"><i className="bi bi-paperclip fs-3"></i></button>
                    <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon"><i className="bi bi-upload fs-3"></i></button>
                </div>
                {/*end::Actions*/}

                {/*begin::Send*/}
                <button className="btn btn-primary" type="button" data-kt-element="send">Send</button>
                {/*end::Send*/}
            </div>
            {/*end::Toolbar*/}
        </div>
        {/*end::Card footer*/}
    </div>
    {/*end::Messenger*/}
</div>
{/*end::Chat drawer*/} 

{/*begin::Chat drawer*/}
<div 
    id="kt_shopping_cart"

    className="bg-body"
    data-kt-drawer="true" 
	data-kt-drawer-name="cart" 
	data-kt-drawer-activate="true" 
	data-kt-drawer-overlay="true" 
	data-kt-drawer-width="{default:'300px', 'md': '500px'}" 
	data-kt-drawer-direction="end" 
	data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle" 
	data-kt-drawer-close="#kt_drawer_shopping_cart_close">

    {/*begin::Messenger*/}
    <div className="card card-flush w-100 rounded-0">
        {/*begin::Card header*/}
        <div className="card-header">
            {/*begin::Title*/}
            <h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
            {/*end::Title*/}

            {/*begin::Card toolbar*/}
            <div className="card-toolbar">
                {/*begin::Close*/}
                <div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_shopping_cart_close">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
<span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
{/*end::Svg Icon*/}                </div>
                {/*end::Close*/}
            </div>
            {/*end::Card toolbar*/}
        </div>
        {/*end::Card header*/}

        {/*begin::Card body*/}
        <div className="card-body hover-scroll-overlay-y h-400px pt-5">
                            
                {/*begin::Item*/}
                <div className="d-flex flex-stack">                 
                    {/*begin::Wrapper*/}                                  
                    <div className="d-flex flex-column me-3">
                        {/*begin::Section*/}                                  
                        <div className="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Iblender</a>
                            
                            <span className="text-gray-400 fw-semibold d-block">The best kitchen gadget in 2022</span>
                        </div>                   
                        {/*end::Section*/}                    
                             
                        {/*begin::Section*/}      
                        <div className="d-flex align-items-center">
                            <span className="fw-bold text-gray-800 fs-5">$ 350</span>
                            <span className="text-muted mx-2">for</span>
                            <span className="fw-bold text-gray-800 fs-5 me-3">5</span>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>
                        </div>                          
                        {/*end::Wrapper*/} 
                    </div>                   
                    {/*end::Wrapper*/}                    

                    {/*begin::Pic*/} 
                    <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="/assets/media/stock/600x400/img-1.jpg" alt=""/>   
                    </div>                                       
                    {/*end::Pic*/}            
                </div>
                {/*end::Item*/}

                                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-6"></div>
                    {/*end::Separator*/}
                 
                            
                {/*begin::Item*/}
                <div className="d-flex flex-stack">                 
                    {/*begin::Wrapper*/}                                  
                    <div className="d-flex flex-column me-3">
                        {/*begin::Section*/}                                  
                        <div className="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">SmartCleaner</a>
                            
                            <span className="text-gray-400 fw-semibold d-block">Smart tool for cooking</span>
                        </div>                   
                        {/*end::Section*/}                    
                             
                        {/*begin::Section*/}      
                        <div className="d-flex align-items-center">
                            <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                            <span className="text-muted mx-2">for</span>
                            <span className="fw-bold text-gray-800 fs-5 me-3">4</span>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>
                        </div>                          
                        {/*end::Wrapper*/} 
                    </div>                   
                    {/*end::Wrapper*/}                    

                    {/*begin::Pic*/} 
                    <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="/assets/media/stock/600x400/img-3.jpg" alt=""/>   
                    </div>                                       
                    {/*end::Pic*/}            
                </div>
                {/*end::Item*/}

                                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-6"></div>
                    {/*end::Separator*/}
                 
                            
                {/*begin::Item*/}
                <div className="d-flex flex-stack">                 
                    {/*begin::Wrapper*/}                                  
                    <div className="d-flex flex-column me-3">
                        {/*begin::Section*/}                                  
                        <div className="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">CameraMaxr</a>
                            
                            <span className="text-gray-400 fw-semibold d-block">Professional camera for edge</span>
                        </div>                   
                        {/*end::Section*/}                    
                             
                        {/*begin::Section*/}      
                        <div className="d-flex align-items-center">
                            <span className="fw-bold text-gray-800 fs-5">$ 150</span>
                            <span className="text-muted mx-2">for</span>
                            <span className="fw-bold text-gray-800 fs-5 me-3">3</span>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>
                        </div>                          
                        {/*end::Wrapper*/} 
                    </div>                   
                    {/*end::Wrapper*/}                    

                    {/*begin::Pic*/} 
                    <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="/assets/media/stock/600x400/img-8.jpg" alt=""/>   
                    </div>                                       
                    {/*end::Pic*/}            
                </div>
                {/*end::Item*/}

                                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-6"></div>
                    {/*end::Separator*/}
                 
                            
                {/*begin::Item*/}
                <div className="d-flex flex-stack">                 
                    {/*begin::Wrapper*/}                                  
                    <div className="d-flex flex-column me-3">
                        {/*begin::Section*/}                                  
                        <div className="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
                            
                            <span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
                        </div>                   
                        {/*end::Section*/}                    
                             
                        {/*begin::Section*/}      
                        <div className="d-flex align-items-center">
                            <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
                            <span className="text-muted mx-2">for</span>
                            <span className="fw-bold text-gray-800 fs-5 me-3">7</span>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>
                        </div>                          
                        {/*end::Wrapper*/} 
                    </div>                   
                    {/*end::Wrapper*/}                    

                    {/*begin::Pic*/} 
                    <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="/assets/media/stock/600x400/img-26.jpg" alt=""/>   
                    </div>                                       
                    {/*end::Pic*/}            
                </div>
                {/*end::Item*/}

                                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-6"></div>
                    {/*end::Separator*/}
                 
                            
                {/*begin::Item*/}
                <div className="d-flex flex-stack">                 
                    {/*begin::Wrapper*/}                                  
                    <div className="d-flex flex-column me-3">
                        {/*begin::Section*/}                                  
                        <div className="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">MotionWire</a>
                            
                            <span className="text-gray-400 fw-semibold d-block">Perfect animation tool</span>
                        </div>                   
                        {/*end::Section*/}                    
                             
                        {/*begin::Section*/}      
                        <div className="d-flex align-items-center">
                            <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                            <span className="text-muted mx-2">for</span>
                            <span className="fw-bold text-gray-800 fs-5 me-3">7</span>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>
                        </div>                          
                        {/*end::Wrapper*/} 
                    </div>                   
                    {/*end::Wrapper*/}                    

                    {/*begin::Pic*/} 
                    <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="/assets/media/stock/600x400/img-21.jpg" alt=""/>   
                    </div>                                       
                    {/*end::Pic*/}            
                </div>
                {/*end::Item*/}

                                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-6"></div>
                    {/*end::Separator*/}
                 
                            
                {/*begin::Item*/}
                <div className="d-flex flex-stack">                 
                    {/*begin::Wrapper*/}                                  
                    <div className="d-flex flex-column me-3">
                        {/*begin::Section*/}                                  
                        <div className="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Samsung</a>
                            
                            <span className="text-gray-400 fw-semibold d-block">Profile info,Timeline etc</span>
                        </div>                   
                        {/*end::Section*/}                    
                             
                        {/*begin::Section*/}      
                        <div className="d-flex align-items-center">
                            <span className="fw-bold text-gray-800 fs-5">$ 720</span>
                            <span className="text-muted mx-2">for</span>
                            <span className="fw-bold text-gray-800 fs-5 me-3">6</span>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>
                        </div>                          
                        {/*end::Wrapper*/} 
                    </div>                   
                    {/*end::Wrapper*/}                    

                    {/*begin::Pic*/} 
                    <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="/assets/media/stock/600x400/img-34.jpg" alt=""/>   
                    </div>                                       
                    {/*end::Pic*/}            
                </div>
                {/*end::Item*/}

                                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-6"></div>
                    {/*end::Separator*/}
                 
                            
                {/*begin::Item*/}
                <div className="d-flex flex-stack">                 
                    {/*begin::Wrapper*/}                                  
                    <div className="d-flex flex-column me-3">
                        {/*begin::Section*/}                                  
                        <div className="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
                            
                            <span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
                        </div>                   
                        {/*end::Section*/}                    
                             
                        {/*begin::Section*/}      
                        <div className="d-flex align-items-center">
                            <span className="fw-bold text-gray-800 fs-5">$ 430</span>
                            <span className="text-muted mx-2">for</span>
                            <span className="fw-bold text-gray-800 fs-5 me-3">8</span>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>

                            <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
<span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/*end::Svg Icon*/}                            </a>
                        </div>                          
                        {/*end::Wrapper*/} 
                    </div>                   
                    {/*end::Wrapper*/}                    

                    {/*begin::Pic*/} 
                    <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="/assets/media/stock/600x400/img-27.jpg" alt=""/>   
                    </div>                                       
                    {/*end::Pic*/}            
                </div>
                {/*end::Item*/}

                 
              
        </div>
        {/*end::Card body*/} 

        {/*begin::Card footer*/}
        <div className="card-footer">
            {/*begin::Item*/}      
            <div className="d-flex flex-stack">
                <span className="fw-bold text-gray-600">Total</span>
                <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>                
            </div>                          
            {/*end::Item*/} 

            {/*begin::Item*/}      
            <div className="d-flex flex-stack">
                <span className="fw-bold text-gray-600">Sub total</span>
                <span className="text-primary fw-bolder fs-5">$ 246.35</span>                
            </div>                          
            {/*end::Item*/} 

            {/*end::Action*/}
            <div className="d-flex justify-content-end mt-9">
                <a href="#" className="btn btn-primary d-flex justify-content-end">Pleace Order</a>
            </div>
            {/*end::Action*/}
        </div>
        {/*end::Card footer*/} 
    </div>
    {/*end::Messenger*/}
</div>
{/*end::Chat drawer*/} 
{/*end::Drawers*/}
		{/*begin::Engage*/}
		<div className="app-engage " id="kt_app_engage">  
							{/*begin::Prebuilts toggle*/}
				<a href="#" data-bs-toggle="modal" data-bs-target="#kt_app_engage_prebuilts_modal" className="app-engage-btn hover-dark">			
					{/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
<span className="svg-icon svg-icon-1 pt-1 mb-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor"/>
<path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}					Prebuilts
				</a>
				{/*end::Prebuilts toggle*/}
			
			
							{/*begin::Get help*/}
				<a href="https://devs.keenthemes.com/" target="_blank" className="app-engage-btn hover-primary">			
					{/*begin::Svg Icon | path: icons/duotune/general/gen063.svg*/}
<span className="svg-icon svg-icon-1 pt-1 mb-2"><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.1721 9.90759L19.6663 8.3801C19.5613 8.27722 19.4783 8.15406 19.4225 8.0181C19.3666 7.88214 19.339 7.73623 19.3413 7.58926V5.4226C19.3399 5.12576 19.2798 4.83214 19.1646 4.55858C19.0494 4.28503 18.8812 4.03693 18.6698 3.82856C18.4584 3.62018 18.2079 3.45562 17.9327 3.34434C17.6576 3.23305 17.3631 3.17724 17.0663 3.1801H14.8996C14.7526 3.18241 14.6067 3.15479 14.4708 3.09892C14.3348 3.04304 14.2116 2.96009 14.1088 2.8551L12.5921 1.3276C12.1696 0.905532 11.5968 0.668457 10.9996 0.668457C10.4024 0.668457 9.82962 0.905532 9.40711 1.3276L7.87961 2.83343C7.77673 2.93842 7.65357 3.02138 7.51761 3.07725C7.38165 3.13312 7.23575 3.16074 7.08877 3.15843H4.92211C4.62528 3.15984 4.33165 3.21989 4.05809 3.33512C3.78454 3.45035 3.53645 3.6185 3.32807 3.82989C3.11969 4.04129 2.95513 4.29178 2.84385 4.56696C2.73257 4.84215 2.67675 5.13661 2.67961 5.43343V7.6001C2.68192 7.74707 2.6543 7.89297 2.59843 8.02893C2.54255 8.16489 2.4596 8.28805 2.35461 8.39093L0.827108 9.90759C0.405044 10.3301 0.167969 10.9029 0.167969 11.5001C0.167969 12.0973 0.405044 12.6701 0.827108 13.0926L2.33294 14.6201C2.43793 14.723 2.52089 14.8461 2.57676 14.9821C2.63263 15.118 2.66025 15.264 2.65794 15.4109V17.5776C2.65935 17.8744 2.7194 18.1681 2.83463 18.4416C2.94986 18.7152 3.11801 18.9633 3.32941 19.1716C3.5408 19.38 3.79129 19.5446 4.06647 19.6559C4.34166 19.7671 4.63612 19.823 4.93294 19.8201H7.09961C7.24658 19.8178 7.39249 19.8454 7.52844 19.9013C7.6644 19.9571 7.78757 20.0401 7.89044 20.1451L9.41794 21.6726C9.84045 22.0947 10.4132 22.3317 11.0104 22.3317C11.6076 22.3317 12.1804 22.0947 12.6029 21.6726L14.1196 20.1668C14.2225 20.0618 14.3456 19.9788 14.4816 19.9229C14.6176 19.8671 14.7635 19.8394 14.9104 19.8418H17.0771C17.6747 19.8418 18.2479 19.6044 18.6705 19.1818C19.093 18.7592 19.3304 18.1861 19.3304 17.5884V15.4218C19.3281 15.2748 19.3557 15.1289 19.4116 14.9929C19.4675 14.857 19.5504 14.7338 19.6554 14.6309L21.1829 13.1034C21.3928 12.8933 21.5591 12.6438 21.6723 12.3691C21.7854 12.0945 21.8431 11.8003 21.8421 11.5033C21.8411 11.2063 21.7814 10.9124 21.6664 10.6385C21.5514 10.3647 21.3834 10.1163 21.1721 9.90759Z" fill="currentColor" fillOpacity="0.8"/>
<path d="M7.90276 8.65088H6.81943C6.36471 8.65088 5.99609 9.0195 5.99609 9.47421V15.0317C5.99609 15.4864 6.36471 15.855 6.81943 15.855H7.90276C8.35748 15.855 8.72609 15.4864 8.72609 15.0317V9.47421C8.72609 9.0195 8.35748 8.65088 7.90276 8.65088Z" fill="currentColor" fillOpacity="0.8"/>
<path d="M8.69141 10.1459L10.7714 7.00425C10.9133 6.7749 11.1313 6.60279 11.3873 6.51808C11.6433 6.43338 11.921 6.44147 12.1717 6.54096C12.4223 6.64044 12.63 6.82497 12.7582 7.0622C12.8864 7.29942 12.9271 7.57422 12.8731 7.83842L12.6022 9.38759C12.5864 9.47635 12.5902 9.56749 12.6134 9.65462C12.6366 9.74175 12.6785 9.82275 12.7364 9.89193C12.7942 9.96111 12.8665 10.0168 12.9481 10.055C13.0297 10.0933 13.1187 10.1132 13.2089 10.1134H15.3322C15.4753 10.116 15.6159 10.1516 15.7431 10.2174C15.8702 10.2831 15.9805 10.3772 16.0653 10.4925C16.1502 10.6078 16.2074 10.741 16.2324 10.8819C16.2575 11.0229 16.2497 11.1676 16.2097 11.3051L14.8664 15.6926C14.7942 15.9256 14.651 16.1303 14.4567 16.2779C14.2625 16.4256 14.0269 16.5088 13.7831 16.5159H11.1072C10.7461 16.5132 10.3944 16.3997 10.0997 16.1909L8.73474 15.1076L8.69141 10.1459Z" fill="currentColor" fillOpacity="0.8"/>
</svg>
</span>
{/*end::Svg Icon*/}					Get Help
				</a>
				{/*end::Get help*/}
			
							{/*begin::Prebuilts toggle*/}
				<a href="https://1.envato.market/EA4JP" target="_blank" className="app-engage-btn hover-success">			
					{/*begin::Svg Icon | path: icons/duotune/general/gen064.svg*/}
<span className="svg-icon svg-icon-2 pt-1 mb-2"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M19.5997 3.52344H2.39639C2.09618 3.53047 1.8003 3.59658 1.52565 3.718C1.25101 3.83941 1.00298 4.01375 0.79573 4.23106C0.588484 4.44837 0.426087 4.70438 0.317815 4.98447C0.209544 5.26456 0.157521 5.56324 0.164719 5.86344C0.157521 6.16364 0.209544 6.46232 0.317815 6.74241C0.426087 7.0225 0.588484 7.27851 0.79573 7.49581C1.00298 7.71312 1.25101 7.88746 1.52565 8.00888C1.8003 8.1303 2.09618 8.19641 2.39639 8.20344H19.5997C19.8999 8.19641 20.1958 8.1303 20.4704 8.00888C20.7451 7.88746 20.9931 7.71312 21.2004 7.49581C21.4076 7.27851 21.57 7.0225 21.6783 6.74241C21.7866 6.46232 21.8386 6.16364 21.8314 5.86344C21.8386 5.56324 21.7866 5.26456 21.6783 4.98447C21.57 4.70438 21.4076 4.44837 21.2004 4.23106C20.9931 4.01375 20.7451 3.83941 20.4704 3.718C20.1958 3.59658 19.8999 3.53047 19.5997 3.52344Z" fill="currentColor" fillOpacity="0.8"/>
<path d="M2.39453 8.20361L4.01953 18.3111C4.15644 19.145 4.58173 19.9043 5.22121 20.4567C5.8607 21.009 6.6738 21.3194 7.5187 21.3336H14.5712C15.4215 21.3202 16.2395 21.006 16.8801 20.4468C17.5207 19.8875 17.9424 19.1193 18.0704 18.2786L19.5979 8.20361H2.39453ZM9.28453 16.3178C9.28453 16.5333 9.19893 16.7399 9.04656 16.8923C8.89418 17.0447 8.68752 17.1303 8.47203 17.1303C8.25654 17.1303 8.04988 17.0447 7.89751 16.8923C7.74513 16.7399 7.65953 16.5333 7.65953 16.3178V12.4069C7.65953 12.1915 7.74513 11.9848 7.89751 11.8324C8.04988 11.68 8.25654 11.5944 8.47203 11.5944C8.68752 11.5944 8.89418 11.68 9.04656 11.8324C9.19893 11.9848 9.28453 12.1915 9.28453 12.4069V16.3178ZM14.322 16.3178C14.322 16.5333 14.2364 16.7399 14.0841 16.8923C13.9317 17.0447 13.725 17.1303 13.5095 17.1303C13.294 17.1303 13.0874 17.0447 12.935 16.8923C12.7826 16.7399 12.697 16.5333 12.697 16.3178V12.4069C12.697 12.1915 12.7826 11.9848 12.935 11.8324C13.0874 11.68 13.294 11.5944 13.5095 11.5944C13.725 11.5944 13.9317 11.68 14.0841 11.8324C14.2364 11.9848 14.322 12.1915 14.322 12.4069V16.3178Z" fill="currentColor" fillOpacity="0.8"/>
<path d="M17.3895 4.87755C17.2529 4.87776 17.1185 4.84303 16.999 4.77667C16.8796 4.71031 16.7791 4.61452 16.707 4.49839L14.5945 1.24839C14.488 1.07063 14.4544 0.858502 14.5009 0.656521C14.5473 0.45454 14.6702 0.2784 14.8437 0.165055C15.0215 0.0626479 15.2311 0.0303209 15.4315 0.0744071C15.6319 0.118493 15.8086 0.235816 15.927 0.403388L18.0395 3.70755C18.1434 3.88599 18.1755 4.09728 18.1292 4.2985C18.0829 4.49972 17.9618 4.67577 17.7904 4.79089C17.6659 4.85225 17.5282 4.88202 17.3895 4.87755Z" fill="currentColor" fillOpacity="0.8"/>
<path d="M4.49988 4.8885C4.34679 4.8928 4.19591 4.85131 4.06655 4.76933C3.89514 4.65422 3.77399 4.47817 3.72771 4.27694C3.68143 4.07572 3.71349 3.86443 3.81738 3.686L5.98405 0.435999C6.09739 0.262485 6.27353 0.13961 6.47551 0.0931545C6.6775 0.0466989 6.88962 0.0802727 7.06738 0.186832C7.23676 0.303623 7.35627 0.479597 7.40239 0.680101C7.4485 0.880606 7.41788 1.09111 7.31655 1.27017L5.20405 4.52017C5.12881 4.63747 5.0243 4.73313 4.90082 4.79773C4.77733 4.86232 4.63914 4.8936 4.49988 4.8885Z" fill="currentColor" fillOpacity="0.8"/>
</svg>
</span>
{/*end::Svg Icon*/}					Buy Now
				</a>
				{/*end::Prebuilts toggle*/}
			
							{/*begin::Engage close*/}
				<a href="#" id="kt_app_engage_toggle_off" className="app-engage-btn app-engage-btn-toggle-off text-hover-primary p-0">			
					{/*begin::Svg Icon | path: icons/duotune/arrows/arr097.svg*/}
<span className="svg-icon svg-icon-2x"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9.39844" y="20.7144" width="16" height="2.66667" rx="1.33333" transform="rotate(-45 9.39844 20.7144)" fill="currentColor"/>
<rect x="11.2852" y="9.40039" width="16" height="2.66667" rx="1.33333" transform="rotate(45 11.2852 9.40039)" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}				</a>
				{/*end::Engage close*/}

				{/*begin::Engage close*/}
				<a href="#" id="kt_app_engage_toggle_on" className="app-engage-btn app-engage-btn-toggle-on text-hover-primary p-0" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-custom-classname="tooltip-inverse" data-bs-dimiss="click" title="Explore Metronic">		
					{/*begin::Svg Icon | path: icons/duotune/general/gen065.svg*/}
<span className="svg-icon svg-icon-2 text-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M22.9558 10.2848L21.3341 8.6398C21.221 8.52901 21.1317 8.39637 21.0715 8.24996C21.0114 8.10354 20.9816 7.94641 20.9841 7.78814V5.4548C20.9826 5.13514 20.9179 4.81893 20.7938 4.52433C20.6697 4.22973 20.4887 3.96255 20.261 3.73814C20.0333 3.51374 19.7636 3.33652 19.4672 3.21668C19.1709 3.09684 18.8538 3.03673 18.5341 3.0398H16.2008C16.0425 3.04229 15.8854 3.01255 15.739 2.95238C15.5925 2.89221 15.4599 2.80287 15.3491 2.6898L13.7158 1.0448C13.2608 0.590273 12.6439 0.334961 12.0008 0.334961C11.3576 0.334961 10.7408 0.590273 10.2858 1.0448L8.64078 2.66647C8.52999 2.77954 8.39735 2.86887 8.25094 2.92904C8.10452 2.98922 7.94739 3.01896 7.78911 3.01647H5.45578C5.13612 3.01799 4.8199 3.08266 4.5253 3.20675C4.23071 3.33085 3.96353 3.51193 3.73912 3.73959C3.51471 3.96724 3.3375 4.237 3.21766 4.53335C3.09781 4.82971 3.0377 5.14682 3.04078 5.46647V7.7998C3.04327 7.95808 3.01353 8.11521 2.95335 8.26163C2.89318 8.40804 2.80385 8.54068 2.69078 8.65147L1.04578 10.2848C0.591249 10.7398 0.335938 11.3567 0.335938 11.9998C0.335938 12.6429 0.591249 13.2598 1.04578 13.7148L2.66745 15.3598C2.78051 15.4706 2.86985 15.6032 2.93002 15.7496C2.99019 15.8961 3.01994 16.0532 3.01745 16.2115V18.5448C3.01897 18.8645 3.08363 19.1807 3.20773 19.4753C3.33182 19.7699 3.5129 20.0371 3.74056 20.2615C3.96822 20.4859 4.23798 20.6631 4.53433 20.7829C4.83068 20.9028 5.14779 20.9629 5.46745 20.9598H7.80078C7.95906 20.9573 8.11619 20.9871 8.2626 21.0472C8.40902 21.1074 8.54166 21.1967 8.65245 21.3098L10.2974 22.9548C10.7525 23.4093 11.3693 23.6646 12.0124 23.6646C12.6556 23.6646 13.2724 23.4093 13.7274 22.9548L15.3608 21.3331C15.4716 21.2201 15.6042 21.1307 15.7506 21.0706C15.897 21.0104 16.0542 20.9806 16.2124 20.9831H18.5458C19.1894 20.9831 19.8066 20.7275 20.2617 20.2724C20.7168 19.8173 20.9724 19.2001 20.9724 18.5565V16.2231C20.97 16.0649 20.9997 15.9077 21.0599 15.7613C21.12 15.6149 21.2094 15.4823 21.3224 15.3715L22.9674 13.7265C23.1935 13.5002 23.3726 13.2314 23.4944 12.9357C23.6162 12.64 23.6784 12.3231 23.6773 12.0032C23.6762 11.6834 23.6119 11.3669 23.4881 11.072C23.3643 10.7771 23.1834 10.5095 22.9558 10.2848Z" fill="currentColor"/>
<path d="M12.0039 15.4998C11.7012 15.4998 11.4109 15.38 11.1969 15.1668C10.9829 14.9535 10.8626 14.6643 10.8626 14.3627V13.9382C10.8467 13.2884 10.9994 12.6456 11.306 12.0718C11.6126 11.4981 12.0627 11.013 12.6126 10.6634C12.7969 10.561 12.9505 10.4114 13.0575 10.2302C13.1645 10.049 13.221 9.84266 13.2213 9.63242C13.2213 9.31073 13.0931 9.00223 12.8648 8.77476C12.6365 8.5473 12.3268 8.41951 12.0039 8.41951C11.6811 8.41951 11.3714 8.5473 11.1431 8.77476C10.9148 9.00223 10.7865 9.31073 10.7865 9.63242C10.7865 9.93399 10.6663 10.2232 10.4523 10.4365C10.2382 10.6497 9.94792 10.7695 9.64522 10.7695C9.34253 10.7695 9.05223 10.6497 8.83819 10.4365C8.62415 10.2232 8.50391 9.93399 8.50391 9.63242C8.50763 9.02196 8.67214 8.42317 8.98099 7.89592C9.28984 7.36868 9.7322 6.93145 10.2639 6.62796C10.7955 6.32447 11.3978 6.16535 12.0105 6.16651C12.6233 6.16767 13.225 6.32908 13.7554 6.63458C14.2859 6.94009 14.7266 7.37899 15.0335 7.9074C15.3403 8.43582 15.5025 9.03522 15.5039 9.64569C15.5053 10.2562 15.3458 10.8563 15.0414 11.3861C14.7369 11.9159 14.2983 12.3568 13.7692 12.6647C13.5645 12.8132 13.4003 13.0101 13.2913 13.2378C13.1824 13.4655 13.1322 13.7167 13.1453 13.9685V14.3931C13.1373 14.6894 13.0136 14.9708 12.8004 15.1776C12.5872 15.3843 12.3014 15.4999 12.0039 15.4998Z" fill="currentColor"/>
<path d="M12.0026 18.9998C12.6469 18.9998 13.1693 18.4775 13.1693 17.8332C13.1693 17.1888 12.6469 16.6665 12.0026 16.6665C11.3583 16.6665 10.8359 17.1888 10.8359 17.8332C10.8359 18.4775 11.3583 18.9998 12.0026 18.9998Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}				</a>
				{/*end::Engage close*/}
					</div>
		{/*end::Engage*/}

		{/*begin::Engage modals*/}
					{/*begin::Modal - Sitemap*/}
<div className="modal fade bg-dark bg-opacity-75" id="kt_app_engage_prebuilts_modal" tabIndex="-1" aria-hidden="true">
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-fullscreen p-5 p-lg-10" id="kt_engage_prebuilts_modal_dialog">
        {/*begin::Modal content*/}
        <div className="modal-content rounded-4">
            {/*begin::Modal header*/}
            <div className="modal-header flex-stack border-0 px-10 pt-5 pb-0" id="kt_engage_prebuilts_header">
                {/*begin::View menu*/}
<div id="kt_app_engage_prebuilts_view_menu" className="position-relative z-index-1">
	{/*begin::Toggle*/}
	<button type="button" data-kt-element="selected" className="btn btn-flex px-0 rotate-" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, -1px">
		{/*begin::Title*/}
		<span className="fs-6 fw-bold text-gray-600 me-2" data-kt-element="title">
			Image View
		</span>
		{/*end::Title*/}

		{/*begin::Arrow*/}
		{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
<span className="svg-icon svg-icon-4 svg-icon-gray-600 rotate-180-"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}		{/*end::Arrow*/}
	</button>
	{/*end::Toggle*/}

	{/*begin::Menu*/}
	<div className="menu menu-sub menu-sub-dropdown menu-column menu-active-bg menu-state-primary menu-gray-600 menu-rounded w-150px py-3 px-3" data-kt-menu="true">
		{/*begin::Menu item*/}
		<div className="menu-item">
			{/*begin::Menu link*/}
			<a href="#" className="menu-link px-4 py-2 active" data-kt-mode="image">
				Image View
			</a>
			{/*end::Menu link*/}
		</div>
		{/*end::Menu item*/}

		{/*begin::Menu item*/}
		<div className="menu-item">
			{/*begin::Menu link*/}
			<a href="#" className="menu-link px-4 py-2" data-kt-mode="text">
				Text View
			</a>
			{/*end::Menu link*/}
		</div>
		{/*end::Menu item*/}
	</div>
	{/*end::Menu*/}
</div>
{/*end::View menu*/}
                {/*begin::Close*/}
                <div className="btn btn-sm btn-icon btn-active-color-primary me-n2 position-relative z-index-1" data-bs-dismiss="modal">
                    {/*begin::Svg Icon | path: icons/duotune/general/gen034.svg*/}
<span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor"/>
<rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                </div>
                {/*end::Close*/}
            </div>
            {/*end::Modal header*/}

            {/*begin::Modal body*/}
            <div className="modal-body pt-0 pb-5 px-15 mt-n5" id="kt_app_engage_prebuilts_body">
                <div className="container-fluid">
                    
{/* <style>
	.app-prebuilts-thumbnail {
		border: 1px solid var(--kt-body-bg);
		filter: drop-shadow(0px 0px 50px rgba(49, 52, 122, 0.12));
	}
</style> */}

{/*begin::Image view*/}
<div className="d-block" id="kt_app_engage_prebuilts_view_image">
	{/*begin::Tabs wrapper*/}
	<div className="d-flex flex-center" id="kt_app_engage_prebuilts_view_image_tabs">
		{/*begin::Tabs*/}
		<ul className="nav nav-tabs border-0 mb-5">
							{/*begin::Tab item*/}
				<li className="nav-item px-2">
					{/*begin::Tab link*/}
					<a 
						className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_demos">
						
						Layouts					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
							{/*begin::Tab item*/}
				<li className="nav-item px-2">
					{/*begin::Tab link*/}
					<a 
						className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold 
						active" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_dashboards">
						
						Dashboards					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
							{/*begin::Tab item*/}
				<li className="nav-item px-2">
					{/*begin::Tab link*/}
					<a 
						className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages">
						
						Pages					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
							{/*begin::Tab item*/}
				<li className="nav-item px-2">
					{/*begin::Tab link*/}
					<a 
						className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_apps">
						
						Apps					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
					</ul>
		{/*end::Tabs*/}
	</div>
	{/*end::Tabs wrapper*/}

	{/*begin::Tab content*/}
	<div className="tab-content">
								<div className="pt-5 tab-pane fade " id="kt_app_engage_prebuilts_tab_demos" role="tabpanel">
				{/*begin::Scroll wrapper*/}
				<div 
					className="hover-scroll-y pe-12 me-n12" 
					data-kt-scroll="true" 
					data-kt-scroll-height="auto" 
					data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body" 
					data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_image_tabs" 
					data-kt-scroll-offset="215px">

					{/*begin::Row*/}
					<div className="row gy-10"> 
													
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo1/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Metronic Original	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo1.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo2/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		SaaS App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo2.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo30/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Sales Tracking App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo30.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo39/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Billing SaaS	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo39.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo31/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Marketing Automation	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo31.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="../index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Databox Dashboard	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo27.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo6/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Time Reporting	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo6.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo3/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		New Trend	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo3.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo23/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Member Dashboard	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo23.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo38/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Email Marketing	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo38.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo36/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Digital Marketing	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo36.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo10/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Project Grid	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo10.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo35/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Traffic Analytics	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo35.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo8/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Analytics App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo8.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo25/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Guiding App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo25.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo20/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		CRM Software	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo20.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo7/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		CRM Dashboard	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo7.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo43/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Healthcare Dashboard	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo43.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo32/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Delivery Management	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo32.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo42/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Calendar Workspace	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo42.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo44/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Recruit Automation	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo44.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo33/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Social Campaings	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo33.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo37/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Cloud Suite	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo37.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo11/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Finance Planner	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo11.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo16/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Podcast App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo16.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo26/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Planable App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo26.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo22/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Media Publisher	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo22.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo19/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Reports Panel	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo19.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo40/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		HR App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo40.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo29/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Project Workspace	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo29.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo24/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Helpdesk App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo24.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo4/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Jobs Site	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo4.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo41/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Business Intelligence	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo41.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo18/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Goal Tracking	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo18.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo21/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Monochrome App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo21.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo34/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Finance Analytics	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo34.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo15/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Crypto Planner	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo15.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo14/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Project Workplace	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo14.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo9/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Sales Manager	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo9.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo5/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Support Forum	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo5.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo13/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Classic Dashboard	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo13.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo12/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Data Analyzer	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo12.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo48/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Cloud ERP	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo48.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo28/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		eCommerce App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo28.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo17/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Events Scheduler	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo17.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
		
{/*begin::Preview*/}
<a 
	href="https://preview.keenthemes.com/metronic8/demo49/index.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		KPI Tracking	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo49.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
					
						  					
					</div>
					{/*end::Row*/}
				</div>
				{/*end::Scroll wrapper*/}
			</div>
								<div className="pt-5 tab-pane fade show active" id="kt_app_engage_prebuilts_tab_dashboards" role="tabpanel">
				{/*begin::Scroll wrapper*/}
				<div 
					className="hover-scroll-y pe-12 me-n12" 
					data-kt-scroll="true" 
					data-kt-scroll-height="auto" 
					data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body" 
					data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_image_tabs" 
					data-kt-scroll-offset="215px">

					{/*begin::Row*/}
					<div className="row gy-10"> 
						  
							
		
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="marketing.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Marketing	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/marketing.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="social.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Social	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/social.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="ecommerce.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Ecommerce	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/ecommerce.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="store-analytics.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Store-analytics	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/store-analytics.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="logistics.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Logistics	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/logistics.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="delivery.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Delivery	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/delivery.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="online-courses.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Online-courses	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/online-courses.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="school.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		School	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/school.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="crypto.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Crypto	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/crypto.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="finance-performance.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Finance-performance	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/finance-performance.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="website-analytics.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Website-analytics	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/website-analytics.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="bidding.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Bidding	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/bidding.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="podcast.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Podcast	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/podcast.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="projects.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Projects	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/projects.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="call-center.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Call-center	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/call-center.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-md-4">
		
{/*begin::Preview*/}
<a 
	href="pos.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		POS	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/pos.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
						  					
					</div>
					{/*end::Row*/}
				</div>
				{/*end::Scroll wrapper*/}
			</div>
											<div className="pt-5 tab-pane fade " id="kt_app_engage_prebuilts_tab_apps" role="tabpanel">
				{/*begin::Scroll wrapper*/}
				<div 
					className="hover-scroll-y pe-12 me-n12" 
					data-kt-scroll="true" 
					data-kt-scroll-height="auto" 
					data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body" 
					data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_image_tabs" 
					data-kt-scroll-offset="215px">

					{/*begin::Row*/}
					<div className="row gy-10"> 
						  
								
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/projects/list/list.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Projects	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/projects.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/ecommerce/catalog/products/products.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Ecommerce	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/ecommerce.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/customers/list/list.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Customers	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/customers.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/subscriptions/list/list.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Subscriptions	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/subscriptions.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/user-management/users/list/list.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Management	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/user-management.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/invoices/create/main.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Invoices	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/invoices.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/support-center/overview/main.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Support Center	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/support-center.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/chat/private.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Chat	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/chat.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/calendar/calendar.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Calendar	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/calendar.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/file-manager/list/folders.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		File Manager	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/file-manager.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/inbox/listing/listing.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Inbox	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/inbox.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
	
	{/*begin::Col*/}
	<div className="col-lg-4">
		
{/*begin::Preview*/}
<a 
	href="../apps/contacts/getting-started.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Contacts	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/contacts.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}	</div>
	{/*end::Col*/}
						  					
					</div>
					{/*end::Row*/}
				</div>
				{/*end::Scroll wrapper*/}
			</div>
		
		<div className="tab-pane fade" id="kt_app_engage_prebuilts_tab_pages">
			
{/*begin::Tabs wrapper*/}
<div className="d-flex flex-center mb-5">
	<div className="border-bottom">
		{/*begin::Tabs*/}
		<ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-6 fw-bold m-0 p-0 gap-4">
							{/*begin::Tab item*/}
				<li className="nav-item p-0 m-0">
					{/*begin::Tab link*/}
					<a 
						className="nav-link text-muted text-active-primary pt-0 pb-4 
						active" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_authentication">
						
						Authentication					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
							{/*begin::Tab item*/}
				<li className="nav-item p-0 m-0">
					{/*begin::Tab link*/}
					<a 
						className="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_general">
						
						General					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
							{/*begin::Tab item*/}
				<li className="nav-item p-0 m-0">
					{/*begin::Tab link*/}
					<a 
						className="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_account">
						
						Account					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
							{/*begin::Tab item*/}
				<li className="nav-item p-0 m-0">
					{/*begin::Tab link*/}
					<a 
						className="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_modals">
						
						Modals					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
							{/*begin::Tab item*/}
				<li className="nav-item p-0 m-0">
					{/*begin::Tab link*/}
					<a 
						className="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_wizards">
						
						Wizards					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
							{/*begin::Tab item*/}
				<li className="nav-item p-0 m-0">
					{/*begin::Tab link*/}
					<a 
						className="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_search">
						
						Search					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
							{/*begin::Tab item*/}
				<li className="nav-item p-0 m-0">
					{/*begin::Tab link*/}
					<a 
						className="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_widgets">
						
						Widgets					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
							{/*begin::Tab item*/}
				<li className="nav-item p-0 m-0">
					{/*begin::Tab link*/}
					<a 
						className="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_email-templates">
						
						Email Templates					</a>
					{/*end::Tab link*/}
				</li>
				{/*end::Tab item*/}
					</ul>
		{/*end::Tabs*/}
	</div>
</div>
{/*end::Tabs wrapper*/}

{/*begin::Scroll wrapper*/}
<div 
	className="hover-scroll-y pe-12 me-n12" 
	data-kt-scroll="true" 
	data-kt-scroll-height="auto" 
	data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body, #kt_app_engage_prebuilts_view_image" 
	data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_text_heading" 
	data-kt-scroll-offset="250px">

	{/*begin::Tab content*/}
	<div className="tab-content">
					<div className="tab-pane fade show active" id="kt_app_engage_prebuilts_tab_pages_authentication" role="tabpanel">

				
					{/*begin::Row*/}
<div className="row g-10"> 
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/layouts/corporate/sign-in.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Corporate	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-corporate.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/layouts/creative/sign-in.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Creative	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-creative.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/layouts/fancy/sign-in.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Fancy	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-fancy.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/layouts/overlay/sign-in.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Overlay	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-overlay.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/extended/multi-steps-sign-up.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Multi-step	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-multistep.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/extended/two-factor-auth.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		2 Factor Auth	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-2factor.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/general/password-confirmation.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Password Changed	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-passwordchanged.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/general/verify-email.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Verify Email	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-verifyemail.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/general/welcome.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Welcome	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-welcome.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/general/coming-soon.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Coming Soon	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-comingsoon.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/general/account-deactivated.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Account Deactivated	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-accountdeactivated.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/general/error-404.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		404 Page	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-404.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/general/error-500.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		505 Page	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-500.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
	</div>
{/*end::Row*/}					
				
			</div>
					<div className="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_general" role="tabpanel">

				
											<div className="mb-5">
							{/*begin::Collapse toggle*/}
<a 
	className="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible active" 
	data-bs-toggle="collapse" 
	href="#kt_app_engage_prebuilts_tab_pages_general_user-profile">
	
	<span className="fw-bolder fs-2">
		User Profile	</span>

	{/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
<span className="svg-icon toggle-off text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/} 
	{/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
<span className="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                        
</a>
{/*end::Collapse toggle*/}

{/*begin::Collapse content*/}
<div className="show" id="kt_app_engage_prebuilts_tab_pages_general_user-profile">
	{/*begin::Row*/}
	<div className="row g-10 pt-2 pb-5">
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/user-profile/overview.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Profile Overview	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-overview.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/user-profile/projects.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Projects	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-overview.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/user-profile/campaigns.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Campaigns	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-campaigns.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/user-profile/documents.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Documents	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-documents.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/user-profile/followers.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Followers	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-followers.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/user-profile/activity.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Activity	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-activity.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
			</div>
	{/*end::Row*/}
</div>
{/*end::Collapse content*/}						</div>
											<div className="mb-5">
							{/*begin::Collapse toggle*/}
<a 
	className="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible collapsed" 
	data-bs-toggle="collapse" 
	href="#kt_app_engage_prebuilts_tab_pages_general_corporate">
	
	<span className="fw-bolder fs-2">
		Corporate	</span>

	{/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
<span className="svg-icon toggle-off text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/} 
	{/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
<span className="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                        
</a>
{/*end::Collapse toggle*/}

{/*begin::Collapse content*/}
<div className="collapse" id="kt_app_engage_prebuilts_tab_pages_general_corporate">
	{/*begin::Row*/}
	<div className="row g-10 pt-2 pb-5">
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/about.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		About Us	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-aboutus.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/contact.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Contact Us	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-contactus.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/licenses.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		License	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-license.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/team.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Our Team	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-ourteam.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/sitemap.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Sitemap	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-sitemap.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
			</div>
	{/*end::Row*/}
</div>
{/*end::Collapse content*/}						</div>
											<div className="mb-5">
							{/*begin::Collapse toggle*/}
<a 
	className="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible collapsed" 
	data-bs-toggle="collapse" 
	href="#kt_app_engage_prebuilts_tab_pages_general_social">
	
	<span className="fw-bolder fs-2">
		Social	</span>

	{/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
<span className="svg-icon toggle-off text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/} 
	{/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
<span className="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                        
</a>
{/*end::Collapse toggle*/}

{/*begin::Collapse content*/}
<div className="collapse" id="kt_app_engage_prebuilts_tab_pages_general_social">
	{/*begin::Row*/}
	<div className="row g-10 pt-2 pb-5">
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/social/feeds.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Activity	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-activity.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/social/activity.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Feeds	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-feeds.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/social/followers.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Followers	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-followers.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/social/settings.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Settings	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-settings.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
			</div>
	{/*end::Row*/}
</div>
{/*end::Collapse content*/}						</div>
											<div className="mb-5">
							{/*begin::Collapse toggle*/}
<a 
	className="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible collapsed" 
	data-bs-toggle="collapse" 
	href="#kt_app_engage_prebuilts_tab_pages_general_others">
	
	<span className="fw-bolder fs-2">
		Others	</span>

	{/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
<span className="svg-icon toggle-off text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/} 
	{/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
<span className="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                        
</a>
{/*end::Collapse toggle*/}

{/*begin::Collapse content*/}
<div className="collapse" id="kt_app_engage_prebuilts_tab_pages_general_others">
	{/*begin::Row*/}
	<div className="row g-10 pt-2 pb-5">
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/faq/classic.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		FAQ Classic	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/faq-classic.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/faq/extended.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		FAQ Extended	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/faq-extended.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/blog/home.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Blog Home	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/blog-home.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
					
			{/*begin::Col*/}
			<div className="col-lg-4">
				
{/*begin::Preview*/}
<a 
	href="../pages/blog/post.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Blog Post	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/blog-post.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}			</div>
			{/*end::Col*/}
			</div>
	{/*end::Row*/}
</div>
{/*end::Collapse content*/}						</div>
					
				
			</div>
					<div className="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_account" role="tabpanel">

				
					{/*begin::Row*/}
<div className="row g-10"> 
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../account/overview.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Overview	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-overview.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../account/settings.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Settings	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-settings.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../account/billing.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Billing	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-billing.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../account/security.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Security	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-security.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../account/referrals.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Referrals	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-referrals.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../account/logs.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Logs	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-logs.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../account/api-keys.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		API Keys	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-apikeys.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../account/statements.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Statements	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-statements.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../account/billing.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Billing	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-billing.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
	</div>
{/*end::Row*/}					
				
			</div>
					<div className="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_modals" role="tabpanel">

				
					{/*begin::Row*/}
<div className="row g-10"> 
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/general/view-users.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		View Friends	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-viewfriends.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/general/upgrade-plan.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Upgrade Plan	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-upgradeplan.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/wizards/top-up-wallet.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Topup Wallet	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-topupwallet.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/general/share-earn.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Share & Earn	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-shareandearn.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/general/select-users.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Select User	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-selectuser.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/forms/bidding.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Place Bid	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-placeyourbid.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/wizards/offer-a-deal.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Offer Deal	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-offeradeal.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/forms/new-target.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		New Target	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-newtarget.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/forms/new-card.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		New Card	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-newcard.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/forms/new-address.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		New Address	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-newaddress.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/general/invite-friends.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Invite Friend	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-invitefriend.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/wizards/create-project.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Create Project	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createproject.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/wizards/create-campaign.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Create Campaign	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createcampaign.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/wizards/create-account.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Create Business Account	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createbusinessacc.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/wizards/create-app.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Create App	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createapp.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/forms/create-api-key.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Create Api Key	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createapikey.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/modals/wizards/two-factor-authentication.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		2 Factor Auth	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-2factorauth.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
	</div>
{/*end::Row*/}					
				
			</div>
					<div className="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_wizards" role="tabpanel">

				
					{/*begin::Row*/}
<div className="row g-10"> 
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/wizards/horizontal.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		2 Factor Auth	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/wizard-2factorauth.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/wizards/horizontal.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Horizontal	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/wizard-horizontal.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/wizards/vertical.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Vertical	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/wizard-vertical.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
	</div>
{/*end::Row*/}					
				
			</div>
					<div className="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_search" role="tabpanel">

				
					{/*begin::Row*/}
<div className="row g-10"> 
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/search/users.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Search Users	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-users.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/search/horizontal.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Search Horizontal	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-horizontal.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/search/vertical.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Search Vertical	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-vertical.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../utilities/search/select-location.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Search Location	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-location.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
	</div>
{/*end::Row*/}					
				
			</div>
					<div className="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_widgets" role="tabpanel">

				
					{/*begin::Row*/}
<div className="row g-10"> 
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../widgets/charts.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Charts	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-charts.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../widgets/feeds.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Feeds	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-feeds.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../widgets/lists.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Lists	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-lists.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../widgets/mixed.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Mixed	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-mixed.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../widgets/statistics.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Statistics	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-stats.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../widgets/tables.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Tables	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-tables.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
	</div>
{/*end::Row*/}					
				
			</div>
					<div className="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_email-templates" role="tabpanel">

				
					{/*begin::Row*/}
<div className="row g-10"> 
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/email/welcome-message.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Welcome	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-welcome.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/email/subscription-confirmed.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Subscription Confirmed	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-subscriptionconfirmed.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/email/reset-password.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Reset Password	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-resetpassword.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/email/card-declined.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Card Declined	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-creditcarddeclined.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/email/promo-1.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Promotion 1	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-promo1.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/email/promo-2.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Promotion 2	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-promo2.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
			
		{/*begin::Col*/}
		<div className="col-lg-4">
			
{/*begin::Preview*/}
<a 
	href="../authentication/email/promo-3.html" 
	data-kt-href="true" 
	className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	{/*begin::Title*/}
	<h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Promotion 3	</h3>
	{/*end::Title*/}

	{/*begin::Thumbnail*/}
	<span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="/assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-promo3.png" className="lozad w-100 rounded"/>
	</span>
	{/*end::Thumbnail*/}
</a>
{/*end::Preview*/}		</div>
		{/*end::Col*/}	
	</div>
{/*end::Row*/}					
				
			</div>
			</div>
	{/*end::Tab content*/}	
</div>
{/*end::Scroll wrapper*/}		</div>
	</div>
	{/*end::Tab content*/}
</div>
{/*end::Image view*/}                    
{/*begin::Text view*/}
<div className="pt-2 d-none" id="kt_app_engage_prebuilts_view_text">
	{/*begin::Heading*/}
	<h1 className="fs-2x text-dark fw-bolder text-center mb-4" id="kt_app_engage_prebuilts_view_text_heading">
		Sitemap
	</h1>
	{/*end::Heading*/}

	{/*begin::Wrapper*/}
	<div 
		id="kt_app_engage_prebuilts_view_text_heading" 
		className="hover-scroll-y pe-12 me-n12" 
		data-kt-scroll="true" 
		data-kt-scroll-height="auto" 
		data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body, #kt_app_engage_prebuilts_view_text" 
		data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_text_heading" 
		data-kt-scroll-offset="190px" 
	>
								{/*begin::Section*/}
			<div className="mb-10 mb-lg-17">
									
{/*begin::Title*/}
<h3 className="text-dark fw-bolder mb-7">
	Layouts
</h3>
{/*end::Title*/}

{/*begin::Row*/}
<div className="row">
			
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo1/index.html">
				Metronic Original			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo2/index.html">
				SaaS App			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo30/index.html">
				Sales Tracking App			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo39/index.html">
				Billing SaaS			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo31/index.html">
				Marketing Automation			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="../index.html">
				Databox Dashboard			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo6/index.html">
				Time Reporting			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo3/index.html">
				New Trend			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo23/index.html">
				Member Dashboard			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo38/index.html">
				Email Marketing			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo36/index.html">
				Digital Marketing			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo10/index.html">
				Project Grid			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
					
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo35/index.html">
				Traffic Analytics			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo8/index.html">
				Analytics App			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo25/index.html">
				User Guiding App			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo20/index.html">
				CRM Software			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo7/index.html">
				CRM Dashboard			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo43/index.html">
				Healthcare Dashboard			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo32/index.html">
				Delivery Management			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo42/index.html">
				Calendar Workspace			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo44/index.html">
				Recruit Automation			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo33/index.html">
				Social Campaings			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo37/index.html">
				Cloud Suite			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo11/index.html">
				Finance Planner			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
					
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo16/index.html">
				Podcast App			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo26/index.html">
				Planable App			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo22/index.html">
				Media Publisher			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo19/index.html">
				Reports Panel			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo40/index.html">
				HR App			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo29/index.html">
				Project Workspace			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo24/index.html">
				Helpdesk App			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo4/index.html">
				Jobs Site			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo41/index.html">
				Business Intelligence			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo18/index.html">
				Goal Tracking			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo21/index.html">
				Monochrome App			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo34/index.html">
				Finance Analytics			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
					
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo15/index.html">
				Crypto Planner			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo14/index.html">
				Project Workplace			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo9/index.html">
				Sales Manager			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo5/index.html">
				Support Forum			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo13/index.html">
				Classic Dashboard			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo12/index.html">
				Data Analyzer			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo48/index.html">
				Cloud ERP			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo28/index.html">
				eCommerce App			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo17/index.html">
				Events Scheduler			</a>

					
		
			
			<a className="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo49/index.html">
				KPI Tracking			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
			</div>
{/*end::Row*/}			
								
			</div>
			{/*end::Section*/}

			 

								{/*begin::Section*/}
			<div className="mb-10 mb-lg-17">
									
{/*begin::Title*/}
<h3 className="text-dark fw-bolder mb-7">
	Dashboards
</h3>
{/*end::Title*/}

{/*begin::Row*/}
<div className="row">
			
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			<a className="fw-6 fw-semibold" href="../index.html">
				Account			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="marketing.html">
				Marketing Dashboard			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="social.html">
				Social Dashboard			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="ecommerce.html">
				eCommerce Dashboard			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="store-analytics.html">
				Store Analytics			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
		
			
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			<a className="fw-6 fw-semibold" href="logistics.html">
				Logistics			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="delivery.html">
				Delivery			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="online-courses.html">
				Online Courses			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="school.html">
				Hello Tyler			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="crypto.html">
				My Balance: 37,045$			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
		
			
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			<a className="fw-6 fw-semibold" href="finance-performance.html">
				Finance Performance			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="website-analytics.html">
				Website Analytics			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="bidding.html">
				Bidding Dashboard			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="podcast.html">
				Podcast Dashboard			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="projects.html">
				Projects Dashboard			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
		
			
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			<a className="fw-6 fw-semibold" href="call-center.html">
				Call Center			</a>

		
			
		
			<a className="fw-6 fw-semibold" href="pos.html">
				POS System			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
		
	</div>
{/*end::Row*/}		
								
			</div>
			{/*end::Section*/}

			 

								{/*begin::Section*/}
			<div className="mb-10 mb-lg-17">
								
			</div>
			{/*end::Section*/}

							
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - Authentication		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../authentication/layouts/corporate/sign-in.html">
						Corporate					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/layouts/creative/sign-in.html">
						Creative					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/layouts/fancy/sign-in.html">
						Fancy					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/layouts/overlay/sign-in.html">
						Overlay					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../authentication/extended/multi-steps-sign-up.html">
						Multi-step					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/extended/two-factor-auth.html">
						2 Factor Auth					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/general/password-confirmation.html">
						Password Changed					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/general/verify-email.html">
						Verify Email					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../authentication/general/welcome.html">
						Welcome					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/general/coming-soon.html">
						Coming Soon					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/general/account-deactivated.html">
						Account Deactivated					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/general/error-404.html">
						404 Page					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../authentication/general/error-500.html">
						505 Page					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - Account		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../account/overview.html">
						Overview					</a>

											
				
					<a className="fw-6 fw-semibold" href="../account/settings.html">
						Settings					</a>

											
				
					<a className="fw-6 fw-semibold" href="../account/billing.html">
						Billing					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../account/security.html">
						Security					</a>

											
				
					<a className="fw-6 fw-semibold" href="../account/referrals.html">
						Referrals					</a>

											
				
					<a className="fw-6 fw-semibold" href="../account/logs.html">
						Logs					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../account/api-keys.html">
						API Keys					</a>

											
				
					<a className="fw-6 fw-semibold" href="../account/statements.html">
						Statements					</a>

											
				
					<a className="fw-6 fw-semibold" href="../account/billing.html">
						Billing					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - Modals		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/general/view-users.html">
						View Friends					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/general/upgrade-plan.html">
						Upgrade Plan					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/wizards/top-up-wallet.html">
						Topup Wallet					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/general/share-earn.html">
						Share & Earn					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/general/select-users.html">
						Select User					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/forms/bidding.html">
						Place Bid					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/wizards/offer-a-deal.html">
						Offer Deal					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/forms/new-target.html">
						New Target					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/forms/new-card.html">
						New Card					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/forms/new-address.html">
						New Address					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/general/invite-friends.html">
						Invite Friend					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/wizards/create-project.html">
						Create Project					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/wizards/create-campaign.html">
						Create Campaign					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/wizards/create-account.html">
						Create Business Account					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/wizards/create-app.html">
						Create App					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/forms/create-api-key.html">
						Create Api Key					</a>

											
				
					<a className="fw-6 fw-semibold" href="../utilities/modals/wizards/two-factor-authentication.html">
						2 Factor Auth					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - Wizards		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/wizards/horizontal.html">
						2 Factor Auth					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/wizards/horizontal.html">
						Horizontal					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/wizards/vertical.html">
						Vertical					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - Search		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/search/users.html">
						Search Users					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/search/horizontal.html">
						Search Horizontal					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/search/vertical.html">
						Search Vertical					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../utilities/search/select-location.html">
						Search Location					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - Widgets		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../widgets/charts.html">
						Charts					</a>

											
				
					<a className="fw-6 fw-semibold" href="../widgets/feeds.html">
						Feeds					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../widgets/lists.html">
						Lists					</a>

											
				
					<a className="fw-6 fw-semibold" href="../widgets/mixed.html">
						Mixed					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../widgets/statistics.html">
						Statistics					</a>

											
				
					<a className="fw-6 fw-semibold" href="../widgets/tables.html">
						Tables					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - Email Templates		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../authentication/email/welcome-message.html">
						Welcome					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/email/subscription-confirmed.html">
						Subscription Confirmed					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../authentication/email/reset-password.html">
						Reset Password					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/email/card-declined.html">
						Card Declined					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../authentication/email/promo-1.html">
						Promotion 1					</a>

											
				
					<a className="fw-6 fw-semibold" href="../authentication/email/promo-2.html">
						Promotion 2					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../authentication/email/promo-3.html">
						Promotion 3					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - General - User Profile		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/user-profile/overview.html">
						Profile Overview					</a>

											
				
					<a className="fw-6 fw-semibold" href="../pages/user-profile/projects.html">
						User Projects					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/user-profile/campaigns.html">
						User Campaigns					</a>

											
				
					<a className="fw-6 fw-semibold" href="../pages/user-profile/documents.html">
						User Documents					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/user-profile/followers.html">
						User Followers					</a>

											
				
					<a className="fw-6 fw-semibold" href="../pages/user-profile/activity.html">
						User Activity					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - General - Corporate		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/about.html">
						About Us					</a>

											
				
					<a className="fw-6 fw-semibold" href="../pages/contact.html">
						Contact Us					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/licenses.html">
						License					</a>

											
				
					<a className="fw-6 fw-semibold" href="../pages/team.html">
						Our Team					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/sitemap.html">
						Sitemap					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - General - Social		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/social/feeds.html">
						Activity					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/social/activity.html">
						Feeds					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/social/followers.html">
						Followers					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/social/settings.html">
						Settings					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
	{/*begin::Section*/}
	<div className="mb-10 mb-lg-17">
		{/*begin::Title*/}
		<h3 className="text-dark fw-bolder mb-7">
			Pages - General - Others		</h3>
		{/*end::Title*/}

		{/*begin::Row*/}
		<div className="row">
										
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/faq/classic.html">
						FAQ Classic					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/faq/extended.html">
						FAQ Extended					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/blog/home.html">
						Blog Home					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
											
									{/*begin::Col*/}
					<div className="col-lg-3">
						{/*begin::List*/}
						<div className="d-flex flex-column gap-3 gap-lg-5">
				
					<a className="fw-6 fw-semibold" href="../pages/blog/post.html">
						Blog Post					</a>

																</div>
						{/*end::List*/}
					</div>
					{/*end::Col*/}
									</div>
		{/*end::Row*/}
	</div>
	{/*end::Section*/}
			
			 

								{/*begin::Section*/}
			<div className="">
									
{/*begin::Title*/}
<h3 className="text-dark fw-bolder mb-7">
	Apps
</h3>
{/*end::Title*/}

{/*begin::Row*/}
<div className="row">
			
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			<a className="fw-6 fw-semibold" href="../apps/projects/list/list.html">
				Projects			</a>

					
		
			<a className="fw-6 fw-semibold" href="../apps/ecommerce/catalog/products/products.html">
				Ecommerce			</a>

					
		
			<a className="fw-6 fw-semibold" href="../apps/customers/list/list.html">
				Customers			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
					
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			<a className="fw-6 fw-semibold" href="../apps/subscriptions/list/list.html">
				Subscriptions			</a>

					
		
			<a className="fw-6 fw-semibold" href="../apps/user-management/users/list/list.html">
				User Management			</a>

					
		
			<a className="fw-6 fw-semibold" href="../apps/invoices/create/main.html">
				Invoices			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
					
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			<a className="fw-6 fw-semibold" href="../apps/support-center/overview/main.html">
				Support Center			</a>

					
		
			<a className="fw-6 fw-semibold" href="../apps/chat/private.html">
				Chat			</a>

					
		
			<a className="fw-6 fw-semibold" href="../apps/calendar/calendar.html">
				Calendar			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
					
					{/*begin::Col*/}
			<div className="col-lg-3">
				{/*begin::List*/}
				<div className="d-flex flex-column gap-3 gap-lg-5">
		
			<a className="fw-6 fw-semibold" href="../apps/file-manager/list/folders.html">
				File Manager			</a>

					
		
			<a className="fw-6 fw-semibold" href="../apps/inbox/listing/listing.html">
				Inbox			</a>

					
		
			<a className="fw-6 fw-semibold" href="../apps/contacts/getting-started.html">
				Contacts			</a>

										</div>
				{/*end::List*/}
			</div>
			{/*end::Col*/}
			</div>
{/*end::Row*/}	
								
			</div>
			{/*end::Section*/}

			 

			</div>
	{/*end::Wrapper*/}
</div>
{/*end::Text view-*/}                </div>
            </div>
            {/*end::Modal body*/}
        </div>
        {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
</div>
{/*end::Modal - Sitemap*/}				{/*end::Engage modals*/}
{/*begin::Scrolltop*/}
<div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
	{/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
<span className="svg-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}</div>
{/*end::Scrolltop*/}



<CampaignModal />




































<div className={`modal fade ${createApp == true ? "show" : ""}`} id="kt_modal_create_app" tabIndex="-1" style={{display: createApp == true ? 'block' : 'none'}} aria-modal="true" role="dialog">
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-dialog-centered mw-900px">
        {/*begin::Modal content*/}
        <div className="modal-content">
            {/*begin::Modal header*/}
            <div className="modal-header">
                {/*begin::Modal title*/}
                <h2>Create App</h2>
                {/*end::Modal title*/}

                {/*begin::Close*/}
                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
<span className="svg-icon svg-icon-1" onClick={()=>setCreateApp(false)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
{/*end::Svg Icon*/}                </div>
                {/*end::Close*/}
            </div>
            {/*end::Modal header*/}

            {/*begin::Modal body*/}
            <div className="modal-body py-lg-10 px-lg-10">
                {/*begin::Stepper*/}
                <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper" data-kt-stepper="true">
                    {/*begin::Aside*/}
                    <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                        {/*begin::Nav*/}
                        <div className="stepper-nav ps-lg-10">
                            {/*begin::Step 1*/}
                            <div className="stepper-item current" data-kt-stepper-element="nav">
                                {/*begin::Wrapper*/}  
                                <div className="stepper-wrapper">
                                    {/*begin::Icon*/}
                                    <div className="stepper-icon w-40px h-40px">
                                        <i className="stepper-check fas fa-check"></i>
                                        <span className="stepper-number">1</span>
                                    </div>
                                    {/*end::Icon*/}

                                    {/*begin::Label*/}
                                    <div className="stepper-label">
                                        <h3 className="stepper-title">
                                            Details
                                        </h3>

                                        <div className="stepper-desc">
                                            Name your App
                                        </div>
                                    </div>
                                    {/*end::Label*/}
                                </div>
                                {/*end::Wrapper*/} 
            
                                {/*begin::Line*/}
                                <div className="stepper-line h-40px"></div>
                                {/*end::Line*/}                                 
                            </div>
                            {/*end::Step 1*/}

                            {/*begin::Step 2*/}
                            <div className="stepper-item" data-kt-stepper-element="nav">
                                {/*begin::Wrapper*/}  
                                <div className="stepper-wrapper">
                                    {/*begin::Icon*/}
                                    <div className="stepper-icon w-40px h-40px">
                                        <i className="stepper-check fas fa-check"></i>
                                        <span className="stepper-number">2</span>
                                    </div>
                                    {/*begin::Icon*/}

                                    {/*begin::Label*/}
                                    <div className="stepper-label">
                                        <h3 className="stepper-title">
                                            Frameworks
                                        </h3>

                                        <div className="stepper-desc">
                                            Define your app framework
                                        </div>
                                    </div>
                                    {/*begin::Label*/}
                                </div>
                                {/*end::Wrapper*/} 
            
                                {/*begin::Line*/}
                                <div className="stepper-line h-40px"></div>
                                {/*end::Line*/}                               
                            </div>
                            {/*end::Step 2*/}

                            {/*begin::Step 3*/}
                            <div className="stepper-item" data-kt-stepper-element="nav">
                                {/*begin::Wrapper*/}  
                                <div className="stepper-wrapper">
                                    {/*begin::Icon*/}
                                    <div className="stepper-icon w-40px h-40px">
                                        <i className="stepper-check fas fa-check"></i>
                                        <span className="stepper-number">3</span>
                                    </div>
                                    {/*end::Icon*/}

                                    {/*begin::Label*/}
                                    <div className="stepper-label">
                                        <h3 className="stepper-title">
                                            Database
                                        </h3>

                                        <div className="stepper-desc">
                                            Select the app database type
                                        </div>
                                    </div>
                                    {/*end::Label*/}
                                </div>
                                {/*end::Wrapper*/} 
            
                                {/*begin::Line*/}
                                <div className="stepper-line h-40px"></div>
                                {/*end::Line*/}                            
                            </div>
                            {/*end::Step 3*/}

                            {/*begin::Step 4*/}
                            <div className="stepper-item" data-kt-stepper-element="nav">
                                {/*begin::Wrapper*/}  
                                <div className="stepper-wrapper">
                                    {/*begin::Icon*/}
                                    <div className="stepper-icon w-40px h-40px">
                                        <i className="stepper-check fas fa-check"></i>
                                        <span className="stepper-number">4</span>
                                    </div>
                                    {/*end::Icon*/}

                                    {/*begin::Label*/}
                                    <div className="stepper-label">
                                        <h3 className="stepper-title">
                                            Billing
                                        </h3>

                                        <div className="stepper-desc">
                                            Provide payment details
                                        </div>
                                    </div>
                                    {/*end::Label*/}
                                </div>
                                {/*end::Wrapper*/} 
            
                                {/*begin::Line*/}
                                <div className="stepper-line h-40px"></div>
                                {/*end::Line*/}                            
                            </div>
                            {/*end::Step 4*/}

                            {/*begin::Step 5*/}
                            <div className="stepper-item mark-completed" data-kt-stepper-element="nav">
                                {/*begin::Wrapper*/}  
                                <div className="stepper-wrapper">
                                    {/*begin::Icon*/}
                                    <div className="stepper-icon w-40px h-40px">
                                        <i className="stepper-check fas fa-check"></i>
                                        <span className="stepper-number">5</span>
                                    </div>
                                    {/*end::Icon*/}

                                    {/*begin::Label*/}
                                    <div className="stepper-label">
                                        <h3 className="stepper-title">
                                            Completed
                                        </h3>

                                        <div className="stepper-desc">
                                            Review and Submit
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
                    {/*begin::Aside*/}

                    {/*begin::Content*/}
                    <div className="flex-row-fluid py-lg-5 px-lg-15">
                        {/*begin::Form*/}
                        <form className="form fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate" id="kt_modal_create_app_form">
                            {/*begin::Step 1*/}
<div className="current" data-kt-stepper-element="content">
    <div className="w-100">
        {/*begin::Input group*/}
        <div className="fv-row mb-10 fv-plugins-icon-container">
            {/*begin::Label*/}
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                <span className="required">App Name</span>
                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Specify your unique app name" data-bs-original-title="Specify your unique app name" data-kt-initialized="1"></i>
            </label>
            {/*end::Label*/}

            {/*begin::Input*/}
            <input type="text" className="form-control form-control-lg form-control-solid" name="name" placeholder="" value="" />
            {/*end::Input*/}
        <div className="fv-plugins-message-container invalid-feedback"></div></div>
        {/*end::Input group*/}

        {/*begin::Input group*/}
        <div className="fv-row">
            {/*begin::Label*/}
            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                <span className="required">Category</span>

                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Select your app category" data-bs-original-title="Select your app category" data-kt-initialized="1"></i>
            </label>
            {/*end::Label*/}

            {/*begin:Options*/}
            <div className="fv-row fv-plugins-icon-container">
                {/*begin:Option*/}
                <label className="d-flex flex-stack mb-5 cursor-pointer">
                    {/*begin:Label*/}
                    <span className="d-flex align-items-center me-2">
                        {/*begin:Icon*/}
                        <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-primary">
                                {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
<span className="svg-icon svg-icon-1 svg-icon-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="currentColor"></path>
<path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="currentColor"></path>
</svg>
</span>
{/*end::Svg Icon*/}                            </span>
                        </span>
                        {/*end:Icon*/}

                        {/*begin:Info*/}
                        <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">Quick Online Courses</span>

                            <span className="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
                        </span>
                        {/*end:Info*/}
                    </span>
                    {/*end:Label*/}

                    {/*begin:Input*/}
                    <span className="form-check form-check-custom form-check-solid">
                        <input className="form-check-input" type="radio" name="category" value="1" />
                    </span>
                    {/*end:Input*/}
                </label>
                {/*end::Option*/}

                {/*begin:Option*/}
                <label className="d-flex flex-stack mb-5 cursor-pointer">
                    {/*begin:Label*/}
                    <span className="d-flex align-items-center me-2">
                        {/*begin:Icon*/}
                        <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger  ">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
<span className="svg-icon svg-icon-1 svg-icon-danger"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
</svg>
</span>
{/*end::Svg Icon*/}                            </span>
                        </span>
                        {/*end:Icon*/}

                        {/*begin:Info*/}
                        <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">Face to Face Discussions</span>

                            <span className="fs-7 text-muted">Creating a clear text structure is just one aspect</span>
                        </span>
                        {/*end:Info*/}
                    </span>
                    {/*end:Label*/}

                    {/*begin:Input*/}
                    <span className="form-check form-check-custom form-check-solid">
                        <input className="form-check-input" type="radio" name="category" value="2" />
                    </span>
                    {/*end:Input*/}
                </label>
                {/*end::Option*/}

                {/*begin:Option*/}
                <label className="d-flex flex-stack cursor-pointer">
                    {/*begin:Label*/}
                    <span className="d-flex align-items-center me-2">
                        {/*begin:Icon*/}
                        <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen013.svg*/}
<span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z" fill="currentColor"></path>
<path d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z" fill="currentColor"></path>
</svg>
</span>
{/*end::Svg Icon*/}                            </span>
                        </span>
                        {/*end:Icon*/}

                        {/*begin:Info*/}
                        <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">Full Intro Training</span>

                            <span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
                        </span>
                        {/*end:Info*/}
                    </span>
                    {/*end:Label*/}

                    {/*begin:Input*/}
                    <span className="form-check form-check-custom form-check-solid">
                        <input className="form-check-input" type="radio" name="category" value="3" />
                    </span>
                    {/*end:Input*/}
                </label>
                {/*end::Option*/}
            <div className="fv-plugins-message-container invalid-feedback"></div></div>
            {/*end:Options*/}
        </div>
        {/*end::Input group*/}
    </div>
</div>
{/*end::Step 1*/}
                            {/*begin::Step 2*/}
<div data-kt-stepper-element="content">
    <div className="w-100">
        {/*begin::Input group*/}
        <div className="fv-row fv-plugins-icon-container">
            {/*begin::Label*/}
            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                <span className="required">Select Framework</span>
                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Specify your apps framework" data-bs-original-title="Specify your apps framework" data-kt-initialized="1"></i>
            </label>
            {/*end::Label*/}

            {/*begin:Option*/}
            <label className="d-flex flex-stack cursor-pointer mb-5">
                {/*begin:Label*/}
                <span className="d-flex align-items-center me-2">
                    {/*begin:Icon*/}
                    <span className="symbol symbol-50px me-6">
                        <span className="symbol-label bg-light-warning">
                            <i className="fab fa-html5 text-warning fs-2x"></i>
                        </span>
                    </span>
                    {/*end:Icon*/}

                    {/*begin:Info*/}
                    <span className="d-flex flex-column">
                        <span className="fw-bold fs-6">HTML5</span>

                        <span className="fs-7 text-muted">Base Web Projec</span>
                    </span>
                    {/*end:Info*/}
                </span>
                {/*end:Label*/}

                {/*begin:Input*/}
                <span className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" checked="" name="framework" value="1" />
                </span>
                {/*end:Input*/}
            </label>
            {/*end::Option*/}

            {/*begin:Option*/}
            <label className="d-flex flex-stack cursor-pointer mb-5">
                {/*begin:Label*/}
                <span className="d-flex align-items-center me-2">
                    {/*begin:Icon*/}
                    <span className="symbol symbol-50px me-6">
                        <span className="symbol-label bg-light-success">
                            <i className="fab fa-react text-success fs-2x"></i>
                        </span>
                    </span>
                    {/*end:Icon*/}

                    {/*begin:Info*/}
                    <span className="d-flex flex-column">
                        <span className="fw-bold fs-6">ReactJS</span>
                        <span className="fs-7 text-muted">Robust and flexible app framework</span>
                    </span>
                    {/*end:Info*/}
                </span>
                {/*end:Label*/}

                {/*begin:Input*/}
                <span className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" name="framework" value="2" />
                </span>
                {/*end:Input*/}
            </label>
            {/*end::Option*/}

            {/*begin:Option*/}
            <label className="d-flex flex-stack cursor-pointer mb-5">
                {/*begin:Label*/}
                <span className="d-flex align-items-center me-2">
                    {/*begin:Icon*/}
                    <span className="symbol symbol-50px me-6">
                        <span className="symbol-label bg-light-danger">
                            <i className="fab fa-angular text-danger fs-2x"></i>
                        </span>
                    </span>
                    {/*end:Icon*/}

                    {/*begin:Info*/}
                    <span className="d-flex flex-column">
                        <span className="fw-bold fs-6">Angular</span>
                        <span className="fs-7 text-muted">Powerful data mangement</span>
                    </span>
                    {/*end:Info*/}
                </span>
                {/*end:Label*/}

                {/*begin:Input*/}
                <span className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" name="framework" value="3" />
                </span>
                {/*end:Input*/}
            </label>
            {/*end::Option*/}

            {/*begin:Option*/}
            <label className="d-flex flex-stack cursor-pointer">
                {/*begin:Label*/}
                <span className="d-flex align-items-center me-2">
                    {/*begin:Icon*/}
                    <span className="symbol symbol-50px me-6">
                        <span className="symbol-label bg-light-primary">
                            <i className="fab fa-vuejs text-primary fs-2x"></i>
                        </span>
                    </span>
                    {/*end:Icon*/}

                    {/*begin:Info*/}
                    <span className="d-flex flex-column">
                        <span className="fw-bold fs-6">Vue</span>
                        <span className="fs-7 text-muted">Lightweight and responsive framework</span>
                    </span>
                    {/*end:Info*/}
                </span>
                {/*end:Label*/}

                {/*begin:Input*/}
                <span className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" name="framework" value="4" />
                </span>
                {/*end:Input*/}
            </label>
            {/*end::Option*/}
        <div className="fv-plugins-message-container invalid-feedback"></div></div>
        {/*end::Input group*/}
    </div>
</div>
{/*end::Step 2*/}
                            {/*begin::Step 3*/}
<div data-kt-stepper-element="content">
    <div className="w-100">
        {/*begin::Input group*/}
        <div className="fv-row mb-10 fv-plugins-icon-container">
            {/*begin::Label*/}
            <label className="required fs-5 fw-semibold mb-2">
                Database Name
            </label>
            {/*end::Label*/}

            {/*begin::Input*/}
            <input type="text" className="form-control form-control-lg form-control-solid" name="dbname" placeholder="" value="master_db" />
            {/*end::Input*/}
        <div className="fv-plugins-message-container invalid-feedback"></div></div>
        {/*end::Input group*/}

        {/*begin::Input group*/}
        <div className="fv-row fv-plugins-icon-container">
            {/*begin::Label*/}
            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                <span className="required">Select Database Engine</span>

                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Select your app database engine" data-bs-original-title="Select your app database engine" data-kt-initialized="1"></i>
            </label>
            {/*end::Label*/}

            {/*begin:Option*/}
            <label className="d-flex flex-stack cursor-pointer mb-5">
                {/*begin::Label*/}
                <span className="d-flex align-items-center me-2">
                    {/*begin::Icon*/}
                    <span className="symbol symbol-50px me-6">
                        <span className="symbol-label bg-light-success">
                            <i className="fas fa-database text-success fs-2x"></i>
                        </span>
                    </span>
                    {/*end::Icon*/}

                    {/*begin::Info*/}
                    <span className="d-flex flex-column">
                        <span className="fw-bold fs-6">MySQL</span>

                        <span className="fs-7 text-muted">Basic MySQL database</span>
                    </span>
                    {/*end::Info*/}
                </span>
                {/*end::Label*/}

                {/*begin::Input*/}
                <span className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" name="dbengine" checked="" value="1" />
                </span>
                {/*end::Input*/}
            </label>
            {/*end::Option*/}

            {/*begin:Option*/}
            <label className="d-flex flex-stack cursor-pointer mb-5">
                {/*begin::Label*/}
                <span className="d-flex align-items-center me-2">
                    {/*begin::Icon*/}
                    <span className="symbol symbol-50px me-6">
                        <span className="symbol-label bg-light-danger">
                            <i className="fab fa-google text-danger fs-2x"></i>
                        </span>
                    </span>
                    {/*end::Icon*/}

                    {/*begin::Info*/}
                    <span className="d-flex flex-column">
                        <span className="fw-bold fs-6">Firebase</span>

                        <span className="fs-7 text-muted">Google based app data management</span>
                    </span>
                    {/*end::Info*/}
                </span>
                {/*end::Label*/}

                {/*begin::Input*/}
                <span className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" name="dbengine" value="2" />
                </span>
                {/*end::Input*/}
            </label>
            {/*end::Option*/}

            {/*begin:Option*/}
            <label className="d-flex flex-stack cursor-pointer">
                {/*begin::Label*/}
                <span className="d-flex align-items-center me-2">
                    {/*begin::Icon*/}
                    <span className="symbol symbol-50px me-6">
                        <span className="symbol-label bg-light-warning">
                            <i className="fab fa-amazon text-warning fs-2x"></i>
                        </span>
                    </span>
                    {/*end::Icon*/}

                    {/*begin::Info*/}
                    <span className="d-flex flex-column">
                        <span className="fw-bold fs-6">DynamoDB</span>

                        <span className="fs-7 text-muted">Amazon Fast NoSQL Database</span>
                    </span>
                    {/*end::Info*/}
                </span>
                {/*end::Label*/}

                {/*begin::Input*/}
                <span className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" name="dbengine" value="3" />
                </span>
                {/*end::Input*/}
            </label>
            {/*end::Option*/}
        <div className="fv-plugins-message-container invalid-feedback"></div></div>
        {/*end::Input group*/}
    </div>
</div>
{/*end::Step 3*/}
                            {/*begin::Step 4*/}
<div data-kt-stepper-element="content">
    <div className="w-100">
        {/*begin::Input group*/}
<div className="d-flex flex-column mb-7 fv-row fv-plugins-icon-container">
    {/*begin::Label*/}
    <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
        <span className="required">Name On Card</span>
        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Specify a card holder's name" data-bs-original-title="Specify a card holder's name" data-kt-initialized="1"></i>
    </label>
    {/*end::Label*/}

    <input type="text" className="form-control form-control-solid" placeholder="" name="card_name" value="Max Doe" />
<div className="fv-plugins-message-container invalid-feedback"></div></div>
{/*end::Input group*/}

{/*begin::Input group*/}
<div className="d-flex flex-column mb-7 fv-row fv-plugins-icon-container">
    {/*begin::Label*/}
    <label className="required fs-6 fw-semibold form-label mb-2">Card Number</label>
    {/*end::Label*/}
    
    {/*begin::Input wrapper*/}
    <div className="position-relative">
        {/*begin::Input*/}
        <input type="text" className="form-control form-control-solid" placeholder="Enter card number" name="card_number" value="4111 1111 1111 1111" />
        {/*end::Input*/}

        {/*begin::Card logos*/}
        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
            <img src="/assets/media/svg/card-logos/visa.svg" alt="" className="h-25px" />
            <img src="/assets/media/svg/card-logos/mastercard.svg" alt="" className="h-25px" />
            <img src="/assets/media/svg/card-logos/american-express.svg" alt="" className="h-25px" />
        </div>
        {/*end::Card logos*/}
    </div>
    {/*end::Input wrapper*/}
<div className="fv-plugins-message-container invalid-feedback"></div></div>
{/*end::Input group*/}

{/*begin::Input group*/}
<div className="row mb-10">
    {/*begin::Col*/}
    <div className="col-md-8 fv-row">
        {/*begin::Label*/}
        <label className="required fs-6 fw-semibold form-label mb-2">Expiration Date</label>
        {/*end::Label*/}

        {/*begin::Row*/}
        <div className="row fv-row fv-plugins-icon-container">
            {/*begin::Col*/}
            <div className="col-6">
                <select name="card_expiry_month" className="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-hide-search="true" data-placeholder="Month" data-select2-id="select2-data-28-8e9g" tabIndex="-1" aria-hidden="true" data-kt-initialized="1">
                    <option data-select2-id="select2-data-30-oaz8"></option>
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
                                    </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-29-wekl" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-card_expiry_month-fa-container" aria-controls="select2-card_expiry_month-fa-container"><span className="select2-selection__rendered" id="select2-card_expiry_month-fa-container" role="textbox" aria-readonly="true" title="Month"><span className="select2-selection__placeholder">Month</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
            <div className="fv-plugins-message-container invalid-feedback"></div></div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-6">
                <select name="card_expiry_year" className="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-hide-search="true" data-placeholder="Year" data-select2-id="select2-data-31-aifi" tabIndex="-1" aria-hidden="true" data-kt-initialized="1">
                    <option data-select2-id="select2-data-33-dro3"></option>
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
                                    </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-32-62cg" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-card_expiry_year-5m-container" aria-controls="select2-card_expiry_year-5m-container"><span className="select2-selection__rendered" id="select2-card_expiry_year-5m-container" role="textbox" aria-readonly="true" title="Year"><span className="select2-selection__placeholder">Year</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
            <div className="fv-plugins-message-container invalid-feedback"></div></div>
            {/*end::Col*/}
        </div>
        {/*end::Row*/}
    </div>
    {/*end::Col*/}

    {/*begin::Col*/}
    <div className="col-md-4 fv-row fv-plugins-icon-container">
        {/*begin::Label*/}
        <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">CVV</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Enter a card CVV code" data-bs-original-title="Enter a card CVV code" data-kt-initialized="1"></i>
        </label>
        {/*end::Label*/}

        {/*begin::Input wrapper*/}
        <div className="position-relative">
            {/*begin::Input*/}
            <input type="text" className="form-control form-control-solid" minlength="3" maxlength="4" placeholder="CVV" name="card_cvv" />
            {/*end::Input*/}

            {/*begin::CVV icon*/}
            <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
<span className="svg-icon svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 7H2V11H22V7Z" fill="currentColor"></path>
<path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="currentColor"></path>
</svg>
</span>
{/*end::Svg Icon*/}            </div>
            {/*end::CVV icon*/}
        </div>
        {/*end::Input wrapper*/}
    <div className="fv-plugins-message-container invalid-feedback"></div></div>
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
        <input className="form-check-input" type="checkbox" value="1" checked="checked" />
        <span className="form-check-label fw-semibold text-muted">
            Save Card
        </span>
    </label>
    {/*end::Switch*/}
</div>
{/*end::Input group*/}

    </div>
</div>
{/*end::Step 4*/}
                            {/*begin::Step 5*/}
<div data-kt-stepper-element="content">
    <div className="w-100 text-center">
        {/*begin::Heading*/}
           <h1 className="fw-bold text-dark mb-3">Release!</h1>
        {/*end::Heading*/}

        {/*begin::Description*/} 
        <div className="text-muted fw-semibold fs-3">
            Submit your app to kickstart your project.
        </div>
        {/*end::Description*/} 

        {/*begin::Illustration*/}
        <div className="text-center px-4 py-15">       
            <img src="/assets/media/illustrations/sketchy-1/9.png" alt="" className="mw-100 mh-300px" />
        </div>
        {/*end::Illustration*/}
    </div>
</div>
{/*end::Step 5*/}

 
                            {/*begin::Actions*/}
                            <div className="d-flex flex-stack pt-10">
                                {/*begin::Wrapper*/}
                                <div className="me-2">
                                    <button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
<span className="svg-icon svg-icon-3 me-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor"></rect>
<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor"></path>
</svg>
</span>
{/*end::Svg Icon*/}                                        Back
                                    </button>
                                </div>
                                {/*end::Wrapper*/}

                                {/*begin::Wrapper*/}
                                <div>
                                    <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                                        <span className="indicator-label">
                                            Submit
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
<span className="svg-icon svg-icon-3 ms-2 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path>
</svg>
</span>
{/*end::Svg Icon*/}                                        </span>
                                        <span className="indicator-progress">
                                            Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                        </span>
                                    </button>

                                    <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">
                                        Continue
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
<span className="svg-icon svg-icon-3 ms-1 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path>
</svg>
</span>
{/*end::Svg Icon*/}                                    </button>
                                </div>
                                {/*end::Wrapper*/}
                            </div>
                            {/*end::Actions*/}
                        </form>
                        {/*end::Form*/}
                    </div>
                    {/*end::Content*/}
                </div>
                {/*end::Stepper*/}
            </div>
            {/*end::Modal body*/}
        </div>
        {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
</div>

    </>
  )
}

export default Home