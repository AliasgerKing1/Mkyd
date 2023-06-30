
/*eslint-disable */
import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from "../../shared/Sidebar"
const Calender = () => {
    return (
        <>
 {/*begin::Body*/}
<div id="kt_app_body" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" className="app-default">
  {/*begin::Theme mode setup on page load*/}      
  {/*begin::App*/}
  <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
    {/*begin::Page*/}
    <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">     
    <div className="row">
              <div className="col-md-3">
                <Sidebar />
              </div>
              <div className="col-md-9">
                      {/*begin::Header*/}
      <div id="kt_app_header" className="app-header " data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">
        {/*begin::Header container*/}
        <div className="app-container  container-fluid d-flex flex-stack " id="kt_app_header_container">
          {/*begin::Sidebar toggle*/}
          <div className="d-flex align-items-center d-block d-lg-none ms-n3" title="Show sidebar menu">
            <div className="btn btn-icon btn-active-color-primary w-35px h-35px me-2" id="kt_app_sidebar_mobile_toggle">
              {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
              <span className="svg-icon svg-icon-2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                  <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}	</div>
            {/*begin::Logo image*/}
            <NavLink to="/auth/home">
              <img alt="Logo" src="/assets/media/logos/default-small.svg" className="h-30px theme-light-show" />
              <img alt="Logo" src="/assets/media/logos/default-small-dark.svg" className="h-30px theme-dark-show" />
            </NavLink>
            {/*end::Logo image*/}
          </div>
          {/*end::Sidebar toggle*/}
          {/*begin::Header wrapper*/}
          <div className="d-flex flex-stack flex-lg-row-fluid" id="kt_app_header_wrapper">
            {/*begin::Page title*/}
            <div className="page-title gap-4 me-3 mb-5 mb-lg-0" data-kt-swapper="true" data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_wrapper'}">
              {/*begin::Breadcrumb*/}
              <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 mb-2">        
                {/*begin::Item*/}
                <li className="breadcrumb-item text-gray-600 fw-bold lh-1">
                  <NavLink to="/auth/home" className="text-gray-700 text-hover-primary me-1">
                    <i className="fonticon-home text-gray-700 fs-3" />
                  </NavLink>
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="breadcrumb-item">
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                  <span className="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}                  </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="breadcrumb-item text-gray-600 fw-bold lh-1">
                  Apps                                          </li>
                {/*end::Item*/}
              </ul>
              {/*end::Breadcrumb*/}
              {/*begin::Title*/}
              <h1 className="text-gray-900 fw-bolder m-0">
                Calendar         
              </h1>
              {/*end::Title*/} 
            </div>
            {/*end::Page title*/}
            {/*begin::Action*/}	
            <a href="#" className="btn btn-primary d-flex flex-center h-35px h-lg-40px" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
              Create <span className="d-none d-sm-inline ps-2">New</span> 
            </a>	 
            {/*end::Action*/}
          </div>
          {/*end::Header wrapper*/}          </div>
        {/*end::Header container*/}
      </div>
      {/*end::Header*/} 
              </div>
              </div>       
      {/*begin::Wrapper*/}
      <div className="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">
        {/*begin::Sidebar*/}
<Sidebar />
        {/*end::Sidebar*/}                
        {/*begin::Main*/}
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
          {/*begin::Content wrapper*/}
          <div className="d-flex flex-column flex-column-fluid">
            {/*begin::Content*/}
            <div id="kt_app_content" className="app-content  flex-column-fluid ">
              {/*begin::Content container*/}
              <div id="kt_app_content_container" className="app-container  container-fluid ">
                {/*begin::Card*/}
                <div className="card ">
                  {/*begin::Card header*/}
                  <div className="card-header">
                    <h2 className="card-title fw-bold">
                      Calendar
                    </h2>
                    <div className="card-toolbar">
                      <button className="btn btn-flex btn-primary" data-kt-calendar="add">
                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                        <span className="svg-icon svg-icon-2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="11.364" y="20.364" width={16} height={2} rx={1} transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                            <rect x="4.36396" y="11.364" width={16} height={2} rx={1} fill="currentColor" />
                          </svg></span>
                        {/*end::Svg Icon*/} 
                        Add Event
                      </button>
                    </div>
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}


                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}					
          </div>
          {/*end::Content wrapper*/}
          {/*begin::Footer*/}
          <div id="kt_app_footer" className="app-footer ">
            {/*begin::Footer container*/}
            <div className="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
              {/*begin::Copyright*/}
              <div className="text-dark order-2 order-md-1">
                <span className="text-muted fw-semibold me-1">2023©</span>
                <a href="https://keenthemes.com/" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
              </div>
              {/*end::Copyright*/}
              {/*begin::Menu*/}
              <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                <li className="menu-item"><a href="https://keenthemes.com/" target="_blank" className="menu-link px-2">About</a></li>
                <li className="menu-item"><a href="https://devs.keenthemes.com/" target="_blank" className="menu-link px-2">Support</a></li>
                <li className="menu-item"><a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a></li>
              </ul>
              {/*end::Menu*/}      </div>
            {/*end::Footer container*/}
          </div>
          {/*end::Footer*/}                          </div>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    {/*end::Page*/}
  </div>
  {/*end::App*/}
</div>
{/*end::Body*/}

    </>
    )
}

export default Calender
