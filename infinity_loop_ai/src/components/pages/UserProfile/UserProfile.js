/*eslint-disable */
import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import { useSelector } from "react-redux"
import Sidebar from "../../shared/Sidebar"
import Footer from "../../shared/Footer"
const UserProfile = () => {
  let state = useSelector(state => state.SignInReducer)
  let [menu, setMenu] = useState(false)
  let [internalMenu, setinternalMenu] = useState(false)
  let [followersPost, setFollowersPost] = useState("")
  let [followingsPost, setFollowingsPost] = useState("")
  let [followers, setFollowers] = useState(0)
  let [followings, setFollowings] = useState(0)

  useEffect(()=> {
    if(state) {
      let follower = state.social[0].followers
      let following = state.social[0].followings
      if(follower == 0) {
        setFollowersPost("")
        setFollowers(0)
      }else if(follower > 100 && follower < 1000) {
        setFollowersPost("Hundred")
        setFollowers(follower / 100)

      }else if(follower > 1000 && follower < 100000) {
        setFollowersPost("Thousand")
        setFollowers(follower / 1000)

      }else if(follower > 100000 && follower < 10000000) {
        setFollowersPost("Lakh")
        setFollowers(follower / 100000)

      }else if(follower > 10000000 && follower < 1000000000) {
        setFollowersPost("Crore")
        setFollowers(follower / 10000000)

      }


      if(following == 0) {
        setFollowingsPost("")
        setFollowings(0)
    }else if(following > 100 && following < 1000) {
        setFollowingsPost("Hundred")
        setFollowings(following / 100)

      }else if(following > 1000 && following < 100000) {
        setFollowingsPost("Thousand")
        setFollowings(following / 1000)

      }else if(following > 100000 && following < 10000000) {
        setFollowingsPost("Lakh")
        setFollowings(following / 100000)

      }else if(following > 10000000 && following < 1000000000) {
        setFollowingsPost("Crore")
        setFollowings(following / 10000000)

      }
      // console.log(following)
    }
  }, [state && state.social[0]])
  return (
    <>
      {/*begin::Body*/}
      <div id="kt_app_body" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" className="app-default">
        {/*begin::App*/}
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
          {/*begin::Page*/}
          <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">
            <div className="row">
              <div className="col-md-3" onClick={() => setMenu(false)}>
                <Sidebar />
              </div>
              <div className="col-md-9" onClick={() => setMenu(false)}>
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
                            General                                          </li>
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
                            Profile                                          </li>
                          {/*end::Item*/}
                        </ul>
                        {/*end::Breadcrumb*/}
                        {/*begin::Title*/}
                        <h1 className="text-gray-900 fw-bolder m-0">
                          Overview
                        </h1>
                        {/*end::Title*/}
                      </div>
                      {/*end::Page title*/}
                      {/*begin::Action*/}
                      <NavLink to="/auth/create/design" className="btn btn-primary d-flex flex-center h-35px h-lg-40px" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
                        Create <span className="d-none d-sm-inline ps-2">New Design</span>
                      </NavLink>
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
              {/*begin::Main*/}
              <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                {/*begin::Content wrapper*/}
                <div className="d-flex flex-column flex-column-fluid">
                  {/*begin::Content*/}
                  <div id="kt_app_content" className="app-content  flex-column-fluid ">
                    {/*begin::Content container*/}
                    <div id="kt_app_content_container" className="app-container  container-fluid ">
                      {/*begin::Navbar*/}
                      <div className="card mb-5 mb-xxl-8">
                        <div className="card-body pt-9 pb-0">
                          {/*begin::Details*/}
                          <div className="d-flex flex-wrap flex-sm-nowrap">
                            {/*begin: Pic*/}
                            <div className="me-7 mb-4">
                              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">

                                                                <span className="symbol-label  bg-light-danger text-danger fs-1 fw-bolder">{state && state.profile_photo}</span>
                                <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px" />
                              </div>
                            </div>
                            {/*end::Pic*/}
                            {/*begin::Info*/}
                            <div className="flex-grow-1" >
                              {/*begin::Title*/}
                              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                {/*begin::User*/}
                                <div className="d-flex flex-column" onClick={() => setMenu(false)}>
                                  {/*begin::Name*/}
                                  <div className="d-flex align-items-center mb-2">
                                    <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">{state && state.name}</a>
                                    <a href="#">{/*begin::Svg Icon | path: icons/duotune/general/gen026.svg*/}
                                      <span className="svg-icon svg-icon-1 svg-icon-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                        <path d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z" fill="currentColor" />
                                        <path d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z" fill="white" />
                                      </svg></span>
                                      {/*end::Svg Icon*/}</a>
                                  </div>
                                  {/*end::Name*/}
                                  {/*begin::Info*/}
                                  <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                    <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                      {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                      <span className="svg-icon svg-icon-4 me-1"><svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                                        <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                                        <rect x={7} y={6} width={4} height={4} rx={2} fill="currentColor" />
                                      </svg>
                                      </span>
                                      {/*end::Svg Icon*/}                                Developer
                                    </a>
                                    <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                      {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                      <span className="svg-icon svg-icon-4 me-1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                                        <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                                      </svg>
                                      </span>
                                      {/*end::Svg Icon*/}                                SF, Bay Area
                                    </a>
                                    <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                      {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                                      <span className="svg-icon svg-icon-4 me-1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor" />
                                        <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor" />
                                      </svg>
                                      </span>
                                      {/*end::Svg Icon*/}                                {state && state.email}
                                    </a>
                                  </div>
                                  {/*end::Info*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Actions*/}
                                <div className="d-flex my-4">
                                  {/* <a href="#" className="btn btn-sm btn-light me-2" id="kt_user_follow_button"> */}
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
                                  {/* <span className="svg-icon svg-icon-3 d-none"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                                  <path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                                </svg>
                              </span> */}
                                  {/*end::Svg Icon*/}
                                  {/*begin::Indicator label*/}
                                  {/* <span className="indicator-label">
                                Follow</span> */}
                                  {/*end::Indicator label*/}
                                  {/*begin::Indicator progress*/}
                                  {/* <span className="indicator-progress">
                                Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                              </span> */}
                                  {/*end::Indicator progress*/}
                                  {/* </a> */}
                                  {/* <a href="#" className="btn btn-sm btn-primary me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a> */}
                                  {/*begin::Menu*/}
                                  <div className="me-0">
                                    <button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" onClick={() => setMenu(true)}>
                                      <i className="bi bi-three-dots fs-3" />
                                    </button>
                                    {/*begin::Menu 3*/}
                                    <div className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3 ${menu == true ? "show" : ""}`} data-kt-menu="true">
                                      {/*begin::Heading*/}
                                      <div className="menu-item px-3">
                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                          Payments
                                        </div>
                                      </div>
                                      {/*end::Heading*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">
                                          Create Invoice
                                        </a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link flex-stack px-3">
                                          Create Payment
                                          <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" />
                                        </a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">
                                          Generate Bill
                                        </a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                        <a href="#" className="menu-link px-3" onMouseEnter={() => setinternalMenu(true)}>
                                          <span className="menu-title">Subscription</span>
                                          <span className="menu-arrow" />
                                        </a>
                                        {/*begin::Menu sub*/}
                                        <div className={`menu-sub menu-sub-dropdown w-175px py-4 ${internalMenu == true ? "show" : ""}`} style={{ zIndex: '108', position: "fixed", inset: "auto 0px 0px auto", margin: "0px", transform: "translate(-200px, -57px)" }} data-popper-placement="left-end" onMouseLeave={() => setinternalMenu(false)}>
                                          {/*begin::Menu item*/}
                                          <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">
                                              Plans
                                            </a>
                                          </div>
                                          {/*end::Menu item*/}
                                          {/*begin::Menu item*/}
                                          <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">
                                              Billing
                                            </a>
                                          </div>
                                          {/*end::Menu item*/}
                                          {/*begin::Menu item*/}
                                          <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">
                                              Statements
                                            </a>
                                          </div>
                                          {/*end::Menu item*/}
                                          {/*begin::Menu separator*/}
                                          <div className="separator my-2" />
                                          {/*end::Menu separator*/}
                                          {/*begin::Menu item*/}
                                          <div className="menu-item px-3">
                                            <div className="menu-content px-3">
                                              {/*begin::Switch*/}
                                              <label className="form-check form-switch form-check-custom form-check-solid">
                                                {/*begin::Input*/}
                                                <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                                                {/*end::Input*/}
                                                {/*end::Label*/}
                                                <span className="form-check-label text-muted fs-6">
                                                  Recuring
                                                </span>
                                                {/*end::Label*/}
                                              </label>
                                              {/*end::Switch*/}
                                            </div>
                                          </div>
                                          {/*end::Menu item*/}
                                        </div>
                                        {/*end::Menu sub*/}
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3 my-1">
                                        <a href="#" className="menu-link px-3">
                                          Settings
                                        </a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu 3*/}
                                  </div>
                                  {/*end::Menu*/}
                                </div>
                                {/*end::Actions*/}
                              </div>
                              {/*end::Title*/}
                              {/*begin::Stats*/}
                              <div className="d-flex flex-wrap flex-stack" onClick={() => setMenu(false)}>
                                {/*begin::Wrapper*/}
                                <div className="d-flex flex-column flex-grow-1 pe-8">
                                  {/*begin::Stats*/}
                                  <div className="d-flex flex-wrap">
                                    {/*begin::Stat*/}
                                    {/*end::Stat*/}
                                    {/*begin::Stat*/}
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                      {/*begin::Number*/}
                                      <div className="d-flex align-items-center">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                        {/* <span className="svg-icon svg-icon-3 svg-icon-danger me-2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                          <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                        </svg>
                                        </span> */}
                                        {/*end::Svg Icon*/}                                    <div className="fs-2 fw-bold">{`${followers} ${followersPost}`}</div>
                                      </div>
                                      {/*end::Number*/}
                                      {/*begin::Label*/}
                                      <div className="fw-semibold fs-6 text-gray-400">Followers</div>
                                      {/*end::Label*/}
                                    </div>
                                    {/*end::Stat*/}
                                    {/*begin::Stat*/}
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                      {/*begin::Number*/}
                                      <div className="d-flex align-items-center">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                        {/* <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                          <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                        </svg>
                                        </span> */}
                                        {/*end::Svg Icon*/}                                    <div className="fs-2 fw-bold">{`${followings} ${followingsPost}`}</div>
                                      </div>
                                      {/*end::Number*/}
                                      {/*begin::Label*/}
                                      <div className="fw-semibold fs-6 text-gray-400">Followings</div>
                                      {/*end::Label*/}
                                    </div>
                                    {/*end::Stat*/}
                                  </div>
                                  {/*end::Stats*/}
                                </div>
                                {/*end::Wrapper*/}
                                {/*begin::Progress*/}
                                <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                  <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                    <span className="fw-semibold fs-6 text-gray-400">Profile Compleation</span>
                                    <span className="fw-bold fs-6">50%</span>
                                  </div>
                                  <div className="h-5px mx-3 w-100 bg-light mb-3">
                                    <div className="bg-success rounded h-5px" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                </div>
                                {/*end::Progress*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Navs*/}
                          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold" onClick={() => setMenu(false)}>
                            {/*begin::Nav item*/}
                            <li className="nav-item mt-2">
                              <a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="overview.html">
                                Overview                  </a>
                            </li>
                            {/*end::Nav item*/}
                            {/*begin::Nav item*/}
                            <li className="nav-item mt-2">
                              <a className="nav-link text-active-primary ms-0 me-10 py-5 " href="projects.html">
                                Projects                  </a>
                            </li>
                            {/*end::Nav item*/}
                            {/*begin::Nav item*/}
                            <li className="nav-item mt-2">
                              <a className="nav-link text-active-primary ms-0 me-10 py-5 " href="campaigns.html">
                                Campaigns                  </a>
                            </li>
                            {/*end::Nav item*/}
                            {/*begin::Nav item*/}
                            <li className="nav-item mt-2">
                              <a className="nav-link text-active-primary ms-0 me-10 py-5 " href="documents.html">
                                Documents                  </a>
                            </li>
                            {/*end::Nav item*/}
                            {/*begin::Nav item*/}
                            <li className="nav-item mt-2">
                              <a className="nav-link text-active-primary ms-0 me-10 py-5 " href="followers.html">
                                Followers                  </a>
                            </li>
                            {/*end::Nav item*/}
                            {/*begin::Nav item*/}
                            <li className="nav-item mt-2">
                              <a className="nav-link text-active-primary ms-0 me-10 py-5 " href="activity.html">
                                Activity                  </a>
                            </li>
                            {/*end::Nav item*/}
                          </ul>
                          {/*begin::Navs*/}
                        </div>
                      </div>
                      {/*end::Navbar*/}
                      {/*begin::Row*/}
                      <div className="row g-5 g-xxl-8" onClick={() => setMenu(false)}>
                        {/*begin::Col*/}
                        <div className="col-xl-6">
                          {/*begin::Feeds Widget 1*/}
                          <div className="card mb-5 mb-xxl-8">
                            {/*begin::Body*/}
                            <div className="card-body pb-0">
                              {/*begin::Header*/}
                              <div className="d-flex align-items-center">
                                {/*begin::User*/}
                                <div className="d-flex align-items-center flex-grow-1">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-45px me-5">
                                    <img src="/assets/media/avatars/300-6.jpg" alt />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="d-flex flex-column">
                                    <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Grace Green</a>
                                    <span className="text-gray-400 fw-bold">PHP, SQLite, Artisan CLI</span>
                                  </div>
                                  {/*end::Info*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Menu*/}
                                <div className="my-0">
                                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                    <span className="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                      </g>
                                    </svg></span>
                                    {/*end::Svg Icon*/}              </button>
                                  {/*begin::Menu 2*/}
                                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator mb-3 opacity-75" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Ticket
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Customer
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                      {/*begin::Menu item*/}
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">New Group</span>
                                        <span className="menu-arrow" />
                                      </a>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu sub*/}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Admin Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Staff Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Member Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                      </div>
                                      {/*end::Menu sub*/}
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Contact
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator mt-3 opacity-75" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3 py-3">
                                        <a className="btn btn-primary  btn-sm px-4" href="#">
                                          Generate Reports
                                        </a>
                                      </div>
                                    </div>
                                    {/*end::Menu item*/}
                                  </div>
                                  {/*end::Menu 2*/}
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::Header*/}
                              {/*begin::Form*/}
                              <form id="kt_forms_widget_1_form" className="ql-quil ql-quil-plain pb-3">
                                {/*begin::Editor*/}
                                <div id="kt_forms_widget_1_editor" className="py-6 ql-container ql-snow"><div className="ql-editor ql-blank" data-gramm="false" data-placeholder="What is on your mind ?" contentEditable="true"><p><br /></p></div><div className="ql-clipboard" tabIndex={-1} contentEditable="true" /><div className="ql-tooltip ql-hidden"><a className="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank" /><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" /><a className="ql-action" /><a className="ql-remove" /></div></div>
                                {/*end::Editor*/}
                                <div className="separator" />
                                {/*begin::Toolbar*/}
                                <div id="kt_forms_widget_1_editor_toolbar" className="ql-toolbar d-flex flex-stack py-2 ql-snow">
                                  <div className="me-2">
                                    <span className="ql-formats ql-size ms-0">
                                      <span className="ql-size w-75px ql-picker"><span className="ql-picker-label" tabIndex={0} role="button" aria-expanded="false" aria-controls="ql-picker-options-0"><svg viewBox="0 0 18 18"> <polygon className="ql-stroke" points="7 11 9 13 11 11 7 11" /> <polygon className="ql-stroke" points="7 7 9 5 11 7 7 7" /> </svg></span><span className="ql-picker-options" aria-hidden="true" tabIndex={-1} id="ql-picker-options-0"><span tabIndex={0} role="button" className="ql-picker-item" data-value="small" /><span tabIndex={0} role="button" className="ql-picker-item ql-selected" /><span tabIndex={0} role="button" className="ql-picker-item" data-value="large" /><span tabIndex={0} role="button" className="ql-picker-item" data-value="huge" /></span></span><select className="ql-size w-75px" style={{ display: 'none' }}><option value="small" /><option selected="selected" /><option value="large" /><option value="huge" /></select>
                                    </span>
                                    <span className="ql-formats">
                                      <button className="ql-bold" type="button"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z" /> <path className="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z" /> </svg></button>
                                      <button className="ql-italic" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1={7} x2={13} y1={4} y2={4} /> <line className="ql-stroke" x1={5} x2={11} y1={14} y2={14} /> <line className="ql-stroke" x1={8} x2={10} y1={14} y2={4} /> </svg></button>
                                      <button className="ql-underline" type="button"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3" /> <rect className="ql-fill" height={1} rx="0.5" ry="0.5" width={12} x={3} y={15} /> </svg></button>
                                      <button className="ql-strike" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5" /> <path className="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z" /> <path className="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z" /> </svg></button>
                                      <button className="ql-image" type="button"><svg viewBox="0 0 18 18"> <rect className="ql-stroke" height={10} width={12} x={3} y={4} /> <circle className="ql-fill" cx={6} cy={7} r={1} /> <polyline className="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12" /> </svg></button>
                                      <button className="ql-link" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1={7} x2={11} y1={7} y2={11} /> <path className="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z" /> <path className="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z" /> </svg></button>
                                      <button className="ql-clean" type="button"><svg className viewBox="0 0 18 18"> <line className="ql-stroke" x1={5} x2={13} y1={3} y2={3} /> <line className="ql-stroke" x1={6} x2="9.35" y1={12} y2={3} /> <line className="ql-stroke" x1={11} x2={15} y1={11} y2={15} /> <line className="ql-stroke" x1={15} x2={11} y1={11} y2={15} /> <rect className="ql-fill" height={1} rx="0.5" ry="0.5" width={7} x={2} y={14} /> </svg></button>
                                    </span>
                                  </div>
                                  <div className="me-n3">
                                    <span className="btn btn-icon btn-sm btn-active-color-primary">
                                      <i className="flaticon2-clip-symbol icon-ms" />
                                    </span>
                                    <span className="btn btn-icon btn-sm btn-active-color-primary">
                                      <i className="flaticon2-pin icon-ms" />
                                    </span>
                                  </div>
                                </div>
                                {/*end::Toolbar*/}
                              </form>
                              {/*end::Form*/}
                            </div>
                            {/*end::Body*/}
                          </div>

                          {/*end::Feeds Widget 1*/}
                          {/*begin::Feeds Widget 2*/}
                          <div className="card mb-5 mb-xxl-8">
                            {/*begin::Body*/}
                            <div className="card-body pb-0">
                              {/*begin::Header*/}
                              <div className="d-flex align-items-center mb-5">
                                {/*begin::User*/}
                                <div className="d-flex align-items-center flex-grow-1">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-45px me-5">
                                    <img src="/assets/media/avatars/300-23.jpg" alt />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="d-flex flex-column">
                                    <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Nick Logan</a>
                                    <span className="text-gray-400 fw-bold">PHP, SQLite, Artisan CLI</span>
                                  </div>
                                  {/*end::Info*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Menu*/}
                                <div className="my-0">
                                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                    <span className="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                      </g>
                                    </svg></span>
                                    {/*end::Svg Icon*/}              </button>
                                  {/*begin::Menu 2*/}
                                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator mb-3 opacity-75" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Ticket
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Customer
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                      {/*begin::Menu item*/}
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">New Group</span>
                                        <span className="menu-arrow" />
                                      </a>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu sub*/}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Admin Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Staff Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Member Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                      </div>
                                      {/*end::Menu sub*/}
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Contact
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator mt-3 opacity-75" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3 py-3">
                                        <a className="btn btn-primary  btn-sm px-4" href="#">
                                          Generate Reports
                                        </a>
                                      </div>
                                    </div>
                                    {/*end::Menu item*/}
                                  </div>
                                  {/*end::Menu 2*/}
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::Header*/}
                              {/*begin::Post*/}
                              <div className="mb-5">
                                {/*begin::Text*/}
                                <p className="text-gray-800 fw-normal mb-5">
                                  Outlines keep you honest. They stop you from indulging in
                                  poorly thought-out metaphors about driving and keep you
                                  focused on the overall structure of your post
                                </p>
                                {/*end::Text*/}
                                {/*begin::Toolbar*/}
                                <div className="d-flex align-items-center mb-5">
                                  <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                    <span className="svg-icon svg-icon-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                      <rect x={6} y={12} width={7} height={2} rx={1} fill="currentColor" />
                                      <rect x={6} y={7} width={12} height={2} rx={1} fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}                    120
                                  </a>
                                  <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                    <span className="svg-icon svg-icon-2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}                    15
                                  </a>
                                </div>
                                {/*end::Toolbar*/}
                              </div>
                              {/*end::Post*/}
                              {/*begin::Separator*/}
                              <div className="separator mb-4" />
                              {/*end::Separator*/}
                              {/*begin::Reply input*/}
                              <form className="position-relative mb-6">
                                <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows={1} placeholder="Reply.." defaultValue={""} />
                                <div className="position-absolute top-0 end-0 me-n5">
                                  <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                    <span className="svg-icon svg-icon-3 mb-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                                      <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}				</span>
                                  <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                    <span className="svg-icon svg-icon-2 mb-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                                      <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}				</span>
                                </div>
                              </form>
                              {/*edit::Reply input*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Feeds Widget 2*/}
                          {/*begin::Feeds Widget 3*/}
                          <div className="card mb-5 mb-xxl-8">
                            {/*begin::Body*/}
                            <div className="card-body pb-0">
                              {/*begin::Header*/}
                              <div className="d-flex align-items-center mb-3">
                                {/*begin::User*/}
                                <div className="d-flex align-items-center flex-grow-1">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-45px me-5">
                                    <img src="/assets/media/avatars/300-21.jpg" alt />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="d-flex flex-column">
                                    <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Carles Nilson</a>
                                    <span className="text-gray-400 fw-bold">Yestarday at 5:06 PM</span>
                                  </div>
                                  {/*end::Info*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Menu*/}
                                <div className="my-0">
                                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                    <span className="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                      </g>
                                    </svg></span>
                                    {/*end::Svg Icon*/}              </button>
                                  {/*begin::Menu 2*/}
                                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator mb-3 opacity-75" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Ticket
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Customer
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                      {/*begin::Menu item*/}
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">New Group</span>
                                        <span className="menu-arrow" />
                                      </a>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu sub*/}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Admin Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Staff Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Member Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                      </div>
                                      {/*end::Menu sub*/}
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Contact
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator mt-3 opacity-75" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3 py-3">
                                        <a className="btn btn-primary  btn-sm px-4" href="#">
                                          Generate Reports
                                        </a>
                                      </div>
                                    </div>
                                    {/*end::Menu item*/}
                                  </div>
                                  {/*end::Menu 2*/}
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::Header*/}
                              {/*begin::Post*/}
                              <div className="mb-7">
                                {/*begin::Text*/}
                                <div className="text-gray-800 mb-5">
                                  Outlines keep you honest. They stop you from indulging in
                                  poorly thought-out metaphors about driving and keep you
                                  focused on the overall structure of your post
                                </div>
                                {/*end::Text*/}
                                {/*begin::Toolbar*/}
                                <div className="d-flex align-items-center mb-5">
                                  <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                    <span className="svg-icon svg-icon-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                      <rect x={6} y={12} width={7} height={2} rx={1} fill="currentColor" />
                                      <rect x={6} y={7} width={12} height={2} rx={1} fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}                    12
                                  </a>
                                  <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                    <span className="svg-icon svg-icon-2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}                    150
                                  </a>
                                </div>
                                {/*end::Toolbar*/}
                              </div>
                              {/*end::Post*/}
                              {/*begin::Replies*/}
                              <div className="mb-7">
                                {/*begin::Reply*/}
                                <div className="d-flex mb-5">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-45px me-5">
                                    <img src="/assets/media/avatars/300-14.jpg" alt />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="d-flex flex-column flex-row-fluid">
                                    {/*begin::Info*/}
                                    <div className="d-flex align-items-center flex-wrap mb-1">
                                      <a href="#" className="text-gray-800 text-hover-primary fw-bold me-2">Alice Danchik</a>
                                      <span className="text-gray-400 fw-semibold fs-7">1 day</span>
                                      <a href="#" className="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    </div>
                                    {/*end::Info*/}
                                    {/*begin::Post*/}
                                    <span className="text-gray-800 fs-7 fw-normal pt-1">
                                      Long before you sit dow to put digital pen to
                                      paper you need to make sure you have to sit down and write.
                                    </span>
                                    {/*end::Post*/}
                                  </div>
                                  {/*end::Info*/}
                                </div>
                                {/*end::Reply*/}
                                {/*begin::Reply*/}
                                <div className="d-flex">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-45px me-5">
                                    <img src="/assets/media/avatars/300-9.jpg" alt />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="d-flex flex-column flex-row-fluid">
                                    {/*begin::Info*/}
                                    <div className="d-flex align-items-center flex-wrap mb-1">
                                      <a href="#" className="text-gray-800 text-hover-primary fw-bold me-2">Harris Bold</a>
                                      <span className="text-gray-400 fw-semibold fs-7">2 days</span>
                                      <a href="#" className="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    </div>
                                    {/*end::Info*/}
                                    {/*begin::Post*/}
                                    <span className="text-gray-800 fs-7 fw-normal pt-1">
                                      Outlines keep you honest. They stop you from indulging in poorly
                                    </span>
                                    {/*end::Post*/}
                                  </div>
                                  {/*end::Info*/}
                                </div>
                                {/*end::Reply*/}
                              </div>
                              {/*end::Replies*/}
                              {/*begin::Separator*/}
                              <div className="separator mb-4" />
                              {/*end::Separator*/}
                              {/*begin::Reply input*/}
                              <form className="position-relative mb-6">
                                <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows={1} placeholder="Reply.." defaultValue={""} />
                                <div className="position-absolute top-0 end-0 me-n5">
                                  <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                    <span className="svg-icon svg-icon-3 mb-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                                      <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}				</span>
                                  <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                    <span className="svg-icon svg-icon-2 mb-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                                      <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}				</span>
                                </div>
                              </form>
                              {/*edit::Reply input*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Feeds Widget 3*/}
                          {/*begin::Feeds Widget 4*/}
                          <div className="card mb-5 mb-xxl-8">
                            {/*begin::Body*/}
                            <div className="card-body pb-0">
                              {/*begin::Header*/}
                              <div className="d-flex align-items-center mb-5">
                                {/*begin::User*/}
                                <div className="d-flex align-items-center flex-grow-1">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-45px me-5">
                                    <img src="/assets/media/avatars/300-7.jpg" alt />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="d-flex flex-column">
                                    <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Carles Nilson</a>
                                    <span className="text-gray-400 fw-bold">Last week at 10:00 PM</span>
                                  </div>
                                  {/*end::Info*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Menu*/}
                                <div className="my-0">
                                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                    <span className="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                      </g>
                                    </svg></span>
                                    {/*end::Svg Icon*/}              </button>
                                  {/*begin::Menu 3*/}
                                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                    {/*begin::Heading*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                        Payments
                                      </div>
                                    </div>
                                    {/*end::Heading*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Create Invoice
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link flex-stack px-3">
                                        Create Payment
                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" />
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Generate Bill
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">Subscription</span>
                                        <span className="menu-arrow" />
                                      </a>
                                      {/*begin::Menu sub*/}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Plans
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Billing
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Statements
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu separator*/}
                                        <div className="separator my-2" />
                                        {/*end::Menu separator*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <div className="menu-content px-3">
                                            {/*begin::Switch*/}
                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                              {/*begin::Input*/}
                                              <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                                              {/*end::Input*/}
                                              {/*end::Label*/}
                                              <span className="form-check-label text-muted fs-6">
                                                Recuring
                                              </span>
                                              {/*end::Label*/}
                                            </label>
                                            {/*end::Switch*/}
                                          </div>
                                        </div>
                                        {/*end::Menu item*/}
                                      </div>
                                      {/*end::Menu sub*/}
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3 my-1">
                                      <a href="#" className="menu-link px-3">
                                        Settings
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                  </div>
                                  {/*end::Menu 3*/}
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::Header*/}
                              {/*begin::Post*/}
                              <div className="mb-7">
                                {/*begin::Text*/}
                                <div className="text-gray-800 mb-5">
                                  Outlines keep you honest. They stop you from indulging in
                                  poorly thought-out metaphors about driving and keep you
                                  focused on the overall structure of your post
                                </div>
                                {/*end::Text*/}
                                {/*begin::Toolbar*/}
                                <div className="d-flex align-items-center mb-5">
                                  <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                    <span className="svg-icon svg-icon-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                      <rect x={6} y={12} width={7} height={2} rx={1} fill="currentColor" />
                                      <rect x={6} y={7} width={12} height={2} rx={1} fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}                    22
                                  </a>
                                  <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                    <span className="svg-icon svg-icon-2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}                    59
                                  </a>
                                </div>
                                {/*end::Toolbar*/}
                              </div>
                              {/*end::Post*/}
                              {/*begin::Separator*/}
                              <div className="separator mb-4" />
                              {/*end::Separator*/}
                              {/*begin::Reply input*/}
                              <form className="position-relative mb-6">
                                <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows={1} placeholder="Reply.." defaultValue={""} />
                                <div className="position-absolute top-0 end-0 me-n5">
                                  <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                    <span className="svg-icon svg-icon-3 mb-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                                      <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}				</span>
                                  <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                    <span className="svg-icon svg-icon-2 mb-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                                      <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}				</span>
                                </div>
                              </form>
                              {/*edit::Reply input*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Feeds Widget 4*/}
                          {/*begin::Feeds widget 5*/}
                          <div className="card d-none" id="kt_widget_5">
                            {/*begin::Body*/}
                            <div className="card-body pb-0">
                              {/*begin::Header*/}
                              <div className="d-flex align-items-center mb-5">
                                {/*begin::User*/}
                                <div className="d-flex align-items-center flex-grow-1">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-45px me-5">
                                    <img src="/assets/media/avatars/300-7.jpg" alt />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="d-flex flex-column">
                                    <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Carles Nilson</a>
                                    <span className="text-gray-400 fw-bold">Last week at 10:00 PM</span>
                                  </div>
                                  {/*end::Info*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Menu*/}
                                <div className="my-0">
                                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                    <span className="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                      </g>
                                    </svg></span>
                                    {/*end::Svg Icon*/}              </button>
                                  {/*begin::Menu 2*/}
                                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator mb-3 opacity-75" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Ticket
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Customer
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                      {/*begin::Menu item*/}
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">New Group</span>
                                        <span className="menu-arrow" />
                                      </a>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu sub*/}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Admin Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Staff Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                          <a href="#" className="menu-link px-3">
                                            Member Group
                                          </a>
                                        </div>
                                        {/*end::Menu item*/}
                                      </div>
                                      {/*end::Menu sub*/}
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Contact
                                      </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator mt-3 opacity-75" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3 py-3">
                                        <a className="btn btn-primary  btn-sm px-4" href="#">
                                          Generate Reports
                                        </a>
                                      </div>
                                    </div>
                                    {/*end::Menu item*/}
                                  </div>
                                  {/*end::Menu 2*/}
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::Header*/}
                              {/*begin::Post*/}
                              <div className="mb-7">
                                {/*begin::Image*/}
                                <div className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5" style={{ backgroundImage: 'url("/assets/media/stock/900x600/19.jpg")' }}>
                                </div>
                                {/*end::Image*/}
                                {/*begin::Text*/}
                                <div className="text-gray-800 mb-5">
                                  Outlines keep you honest. They stop you from indulging in
                                  poorly thought-out metaphors about driving and keep you
                                  focused on the overall structure of your post
                                </div>
                                {/*end::Text*/}
                                {/*begin::Toolbar*/}
                                <div className="d-flex align-items-center mb-5">
                                  <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                    <span className="svg-icon svg-icon-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                      <rect x={6} y={12} width={7} height={2} rx={1} fill="currentColor" />
                                      <rect x={6} y={7} width={12} height={2} rx={1} fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}                    20
                                  </a>
                                  <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                    <span className="svg-icon svg-icon-2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}                    50
                                  </a>
                                </div>
                                {/*end::Toolbar*/}
                              </div>
                              {/*end::Post*/}
                              {/*begin::Separator*/}
                              <div className="separator mb-4" />
                              {/*end::Separator*/}
                              {/*begin::Reply input*/}
                              <form className="position-relative mb-6">
                                <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows={1} placeholder="Reply.." defaultValue={""} />
                                <div className="position-absolute top-0 end-0 me-n5">
                                  <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                    <span className="svg-icon svg-icon-3 mb-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                                      <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}				</span>
                                  <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                    <span className="svg-icon svg-icon-2 mb-3"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                                      <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}				</span>
                                </div>
                              </form>
                              {/*edit::Reply input*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Feeds widget 5*/}
                          {/*begin::Feeds widget 4, 5 load more*/}
                          <button className="btn btn-primary w-100 text-center" id="kt_widget_5_load_more_btn">
                            <span className="indicator-label">
                              More Feeds
                            </span>
                            <span className="indicator-progress">
                              Loading... <span className="spinner-border spinner-border-sm align-middle ms-2" />
                            </span>
                          </button>
                          {/*end::Feeds widget 4, 5 load more*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-xl-6">
                          {/*begin::Charts Widget 1*/}
                          <div className="card mb-5 mb-xxl-8">
                            {/*begin::Header*/}
                            <div className="card-header border-0 pt-5">
                              {/*begin::Title*/}
                              <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold fs-3 mb-1">Recent Statistics</span>
                                <span className="text-muted fw-semibold fs-7">More than 400 new members</span>
                              </h3>
                              {/*end::Title*/}
                              {/*begin::Toolbar*/}
                              <div className="card-toolbar">
                                {/*begin::Menu*/}
                                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                  <span className="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                                      <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                      <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                      <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                    </g>
                                  </svg></span>
                                  {/*end::Svg Icon*/}          </button>
                                {/*begin::Menu 1*/}
                                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63eda864470ef">
                                  {/*begin::Header*/}
                                  <div className="px-7 py-5">
                                    <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                  </div>
                                  {/*end::Header*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator border-gray-200" />
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
                                        <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63eda864470ef" data-allow-clear="true">
                                          <option />
                                          <option value={1}>Approved</option>
                                          <option value={2}>Pending</option>
                                          <option value={2}>In Process</option>
                                          <option value={2}>Rejected</option>
                                        </select>
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
                                          <input className="form-check-input" type="checkbox" defaultValue={1} />
                                          <span className="form-check-label">
                                            Author
                                          </span>
                                        </label>
                                        {/*end::Options*/}
                                        {/*begin::Options*/}
                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                          <input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
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
                                        <input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked />
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
                              {/*end::Toolbar*/}
                            </div>
                            {/*end::Header*/}
                            {/*begin::Body*/}
                            <div className="card-body">
                              {/*begin::Chart*/}
                              <div id="kt_charts_widget_1_chart" style={{ height: 350 }} />
                              {/*end::Chart*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Charts Widget 1*/}
                          {/*begin::List Widget 5*/}
                          <div className="card mb-5 mb-xxl-8">
                            {/*begin::Header*/}
                            <div className="card-header align-items-center border-0 mt-4">
                              <h3 className="card-title align-items-start flex-column">
                                <span className="fw-bold mb-2 text-dark">Activities</span>
                                <span className="text-muted fw-semibold fs-7">890,344 Sales</span>
                              </h3>
                              <div className="card-toolbar">
                                {/*begin::Menu*/}
                                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                  <span className="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                                      <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                      <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                      <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                                    </g>
                                  </svg></span>
                                  {/*end::Svg Icon*/}          </button>
                                {/*begin::Menu 1*/}
                                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63eda86447122">
                                  {/*begin::Header*/}
                                  <div className="px-7 py-5">
                                    <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                  </div>
                                  {/*end::Header*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator border-gray-200" />
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
                                        <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63eda86447122" data-allow-clear="true">
                                          <option />
                                          <option value={1}>Approved</option>
                                          <option value={2}>Pending</option>
                                          <option value={2}>In Process</option>
                                          <option value={2}>Rejected</option>
                                        </select>
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
                                          <input className="form-check-input" type="checkbox" defaultValue={1} />
                                          <span className="form-check-label">
                                            Author
                                          </span>
                                        </label>
                                        {/*end::Options*/}
                                        {/*begin::Options*/}
                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                          <input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
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
                                        <input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked />
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
                              {/*begin::Timeline*/}
                              <div className="timeline-label">
                                {/*begin::Item*/}
                                <div className="timeline-item">
                                  {/*begin::Label*/}
                                  <div className="timeline-label fw-bold text-gray-800 fs-6">08:42</div>
                                  {/*end::Label*/}
                                  {/*begin::Badge*/}
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-warning fs-1" />
                                  </div>
                                  {/*end::Badge*/}
                                  {/*begin::Text*/}
                                  <div className="fw-mormal timeline-content text-muted ps-3">
                                    Outlines keep you honest. And keep structure
                                  </div>
                                  {/*end::Text*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="timeline-item">
                                  {/*begin::Label*/}
                                  <div className="timeline-label fw-bold text-gray-800 fs-6">10:00</div>
                                  {/*end::Label*/}
                                  {/*begin::Badge*/}
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-success fs-1" />
                                  </div>
                                  {/*end::Badge*/}
                                  {/*begin::Content*/}
                                  <div className="timeline-content d-flex">
                                    <span className="fw-bold text-gray-800 ps-3">AEOL meeting</span>
                                  </div>
                                  {/*end::Content*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="timeline-item">
                                  {/*begin::Label*/}
                                  <div className="timeline-label fw-bold text-gray-800 fs-6">14:37</div>
                                  {/*end::Label*/}
                                  {/*begin::Badge*/}
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-danger fs-1" />
                                  </div>
                                  {/*end::Badge*/}
                                  {/*begin::Desc*/}
                                  <div className="timeline-content fw-bold text-gray-800 ps-3">
                                    Make deposit
                                    <a href="#" className="text-primary">USD 700</a>.
                                    to ESL
                                  </div>
                                  {/*end::Desc*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="timeline-item">
                                  {/*begin::Label*/}
                                  <div className="timeline-label fw-bold text-gray-800 fs-6">16:50</div>
                                  {/*end::Label*/}
                                  {/*begin::Badge*/}
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-primary fs-1" />
                                  </div>
                                  {/*end::Badge*/}
                                  {/*begin::Text*/}
                                  <div className="timeline-content fw-mormal text-muted ps-3">
                                    Indulging in poorly driving and keep structure keep great
                                  </div>
                                  {/*end::Text*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="timeline-item">
                                  {/*begin::Label*/}
                                  <div className="timeline-label fw-bold text-gray-800 fs-6">21:03</div>
                                  {/*end::Label*/}
                                  {/*begin::Badge*/}
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-danger fs-1" />
                                  </div>
                                  {/*end::Badge*/}
                                  {/*begin::Desc*/}
                                  <div className="timeline-content fw-semibold text-gray-800 ps-3">
                                    New order placed <a href="#" className="text-primary">#XF-2356</a>.
                                  </div>
                                  {/*end::Desc*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="timeline-item">
                                  {/*begin::Label*/}
                                  <div className="timeline-label fw-bold text-gray-800 fs-6">16:50</div>
                                  {/*end::Label*/}
                                  {/*begin::Badge*/}
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-primary fs-1" />
                                  </div>
                                  {/*end::Badge*/}
                                  {/*begin::Text*/}
                                  <div className="timeline-content fw-mormal text-muted ps-3">
                                    Indulging in poorly driving and keep structure keep great
                                  </div>
                                  {/*end::Text*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="timeline-item">
                                  {/*begin::Label*/}
                                  <div className="timeline-label fw-bold text-gray-800 fs-6">21:03</div>
                                  {/*end::Label*/}
                                  {/*begin::Badge*/}
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-danger fs-1" />
                                  </div>
                                  {/*end::Badge*/}
                                  {/*begin::Desc*/}
                                  <div className="timeline-content fw-semibold text-gray-800 ps-3">
                                    New order placed <a href="#" className="text-primary">#XF-2356</a>.
                                  </div>
                                  {/*end::Desc*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="timeline-item">
                                  {/*begin::Label*/}
                                  <div className="timeline-label fw-bold text-gray-800 fs-6">10:30</div>
                                  {/*end::Label*/}
                                  {/*begin::Badge*/}
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-success fs-1" />
                                  </div>
                                  {/*end::Badge*/}
                                  {/*begin::Text*/}
                                  <div className="timeline-content fw-mormal text-muted ps-3">
                                    Finance KPI Mobile app launch preparion meeting
                                  </div>
                                  {/*end::Text*/}
                                </div>
                                {/*end::Item*/}
                              </div>
                              {/*end::Timeline*/}
                            </div>
                            {/*end: Card Body*/}
                          </div>
                          {/*end: List Widget 5*/}
                        </div>
                        {/*end::Col*/}
                      </div>
                      {/*end::Row*/}
                    </div>
                    {/*end::Content container*/}
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Content wrapper*/}
                {/*begin::Footer*/}
                <Footer />
                {/*end::Footer*/}                          </div>
              {/*end:::Main*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Page*/}
        </div>
        {/*end::App*/}
      </div>

    </>
  )
}

export default UserProfile