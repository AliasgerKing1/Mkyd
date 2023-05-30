/*eslint-disable */
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"


import { useDispatch } from "react-redux"
import { getSidebarRedux } from "../../../Redux/SidebarReducer"
import { PlanSelectedRedux } from "../../../Redux/PlanSelectedReducer"
import Footer from "../../shared/Footer"
import Sidebar from "../../shared/Sidebar"
const Pricing = () => {
    let dispatch = useDispatch()
    let [yearly, setYearly] = useState(false)
    let [plans, setPlans] = useState("")
    let sideBarTrue = () => {
        dispatch(getSidebarRedux(true))
    }
    let sideBarFalse = () => {
        dispatch(getSidebarRedux(false))
    }
    let setPlan = (plan) => {
        dispatch(PlanSelectedRedux(plan))
    }
    return (
        <>

            {/*begin::Body */}
            < div id="kt_app_body" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" className="app-default" >
                {/*begin::Theme mode setup on page load*/}


                {/*begin::App*/}
                <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
                    {/*begin::Page*/}
                    <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">


                        <div className="row">
                            <div className="col-md-3">
                                {/*begin::Sidebar*/}
                                <Sidebar />
                                {/*end::Sidebar*/}
                            </div>
                            <div className="col-md-9">
                                {/*begin::Header*/}
                                <div id="kt_app_header" className="app-header "
                                    data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}"
                                >

                                    {/*begin::Header container*/}
                                    <div className="app-container  container-fluid d-flex flex-stack " id="kt_app_header_container">
                                        {/*begin::Sidebar toggle*/}
                                        <div className="d-flex align-items-center d-block d-lg-none ms-n3" title="Show sidebar menu">
                                            <div className="btn btn-icon btn-active-color-primary w-35px h-35px me-2" id="kt_app_sidebar_mobile_toggle" onClick={sideBarTrue}>
                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                                                <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                                                    <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                                                </svg>
                                                </span>
                                                {/*end::Svg Icon*/} </div>

                                            {/*begin::Logo image*/}
                                            <a href="../../index.html">
                                                <img alt="Logo" src="../../assets/media/logos/default-small.svg" className="h-30px theme-light-show" />
                                                <img alt="Logo" src="../../assets/media/logos/default-small-dark.svg" className="h-30px theme-dark-show" />
                                            </a>
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
                                                            <i className="fonticon-home text-gray-700 fs-3"></i>
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Item*/}

                                                    {/*begin::Item*/}
                                                    <li className="breadcrumb-item">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                        <span className="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
                                                        </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}                    </li>
                                                    {/*end::Item*/}

                                                    {/*begin::Item*/}
                                                    <li className="breadcrumb-item text-gray-600 fw-bold lh-1">
                                                        general                                            </li>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <li className="breadcrumb-item">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                        <span className="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
                                                        </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}                    </li>
                                                    {/*end::Item*/}

                                                    {/*begin::Item*/}
                                                    <li className="breadcrumb-item text-gray-600 fw-bold lh-1">
                                                        pricing                                            </li>
                                                    {/*end::Item*/}


                                                </ul>
                                                {/*end::Breadcrumb*/}

                                                {/*begin::Title*/}
                                                <h1 className="text-gray-900 fw-bolder m-0">
                                                    pricing
                                                </h1>
                                                {/*end::Title*/}
                                            </div>
                                            {/*end::Page title*/}
                                            {/*begin::Action*/}
                                            <NavLink to="/auth/create/design" className="btn btn-primary d-flex flex-center h-35px h-lg-40px">
                                                Create <span className="d-none d-sm-inline ps-2">New Design</span>
                                            </NavLink>
                                            {/*end::Action*/}
                                        </div>
                                        {/*end::Header wrapper*/}            </div>
                                    {/*end::Header container*/}
                                </div>
                                {/*end::Header*/}
                                <div className="app-wrapper flex-column flex-row-fluid " id="kt_app_wrapper" style={{ marginLeft: '0px' }}>

                                    {/*begin::Wrapper*/}

                                    {/*begin::Main*/}
                                    <div className="app-main flex-column flex-row-fluid" id="kt_app_main" onClick={sideBarFalse}>
                                        {/*begin::Content wrapper*/}
                                        <div className="d-flex flex-column flex-column-fluid">


                                            {/*begin::Content*/}
                                            <div id="kt_app_content" className="app-content  flex-column-fluid " >
                                                {/*begin::Content container*/}
                                                <div id="kt_app_content_container" className="app-container  container-fluid ">

                                                    {/*begin::Pricing card*/}
                                                    <div className="card" id="kt_pricing">
                                                        {/*begin::Card body*/}
                                                        <div className="card-body p-lg-17">
                                                            {/*begin::Plans*/}
                                                            <div className="d-flex flex-column">
                                                                {/*begin::Heading*/}
                                                                <div className="mb-13 text-center">
                                                                    <h1 className="fs-2hx fw-bold mb-5">Choose Your Plan</h1>

                                                                    <div className="text-gray-400 fw-semibold fs-5">
                                                                        If you need more info about our pricing, please check <a href="#" className="link-primary fw-bold">&nbsp;Pricing Guidelines</a>.
                                                                    </div>
                                                                </div>
                                                                {/*end::Heading*/}

                                                                {/*begin::Nav group*/}
                                                                <div className="nav-group nav-group-outline mx-auto mb-15" data-kt-buttons="true">
                                                                    <button onClick={() => setYearly(false)} className={`btn btn-color-gray-400 px-6 py-3 btn-active btn-active-secondary ${yearly != true ? "active" : ""}`} data-kt-plan="month">
                                                                        Monthly
                                                                    </button>

                                                                    <button onClick={() => setYearly(true)} className={`btn btn-color-gray-400 px-6 py-3 btn-active btn-active-secondary ${yearly == true ? "active" : ""}`} data-kt-plan="annual">
                                                                        Annual
                                                                    </button>
                                                                </div>
                                                                {/*end::Nav group*/}

                                                                {/*begin::Row*/}
                                                                <div className="row g-10">
                                                                    {/*begin::Col*/}
                                                                    <div className="col-xl-4">
                                                                        <div className="d-flex h-100 align-items-center">
                                                                            {/*begin::Option*/}
                                                                            <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-15 px-10">
                                                                                {/*begin::Heading*/}
                                                                                <div className="mb-7 text-center">
                                                                                    {/*begin::Title*/}
                                                                                    <h1 className="text-dark mb-5 fw-bolder">Free</h1>
                                                                                    {/*end::Title*/}

                                                                                    {/*begin::Description*/}
                                                                                    <div className="text-gray-400 fw-semibold mb-5">
                                                                                        Optimal for Individual
                                                                                    </div>
                                                                                    {/*end::Description*/}

                                                                                    {/*begin::Price*/}
                                                                                    <div className="text-center">
                                                                                        <span className="mb-2 text-primary">$</span>

                                                                                        <span className="fs-3x fw-bold text-primary" data-kt-plan-price-month="39" data-kt-plan-price-annual="399">
                                                                                            0 </span>

                                                                                        <span className="fs-7 fw-semibold opacity-50">/
                                                                                            <span data-kt-element="period">Mon</span>
                                                                                        </span>
                                                                                    </div>
                                                                                    {/*end::Price*/}
                                                                                </div>
                                                                                {/*end::Heading*/}

                                                                                {/*begin::Features*/}
                                                                                <div className="w-100 mb-10">
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Up to 10 Active Users                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Up to 30 Project Integrations                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Analytics Module                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-400 flex-grow-1">
                                                                                            Finance Module                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                                                                                        <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor" />
                                                                                            <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-400 flex-grow-1">
                                                                                            Accounting Module                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                                                                                        <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor" />
                                                                                            <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-400 flex-grow-1">
                                                                                            Network Platform                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                                                                                        <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor" />
                                                                                            <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center ">
                                                                                        <span className="fw-semibold fs-6 text-gray-400 flex-grow-1">
                                                                                            Unlimited Cloud Space                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                                                                                        <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor" />
                                                                                            <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}

                                                                                </div>
                                                                                {/*end::Features*/}

                                                                                {/*begin::Select*/}
                                                                                <button type="button" className="btn btn-sm btn-primary" onClick={() => setPlan("free")}>Select</button>
                                                                                {/*end::Select*/}
                                                                            </div>
                                                                            {/*end::Option*/}
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                    {/*begin::Col*/}
                                                                    <div className="col-xl-4">
                                                                        <div className="d-flex h-100 align-items-center">
                                                                            {/*begin::Option*/}
                                                                            <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-20 px-10">
                                                                                {/*begin::Heading*/}
                                                                                <div className="mb-7 text-center">
                                                                                    {/*begin::Title*/}
                                                                                    <h1 className="text-dark mb-5 fw-bolder">Startup</h1>
                                                                                    {/*end::Title*/}

                                                                                    {/*begin::Description*/}
                                                                                    <div className="text-gray-400 fw-semibold mb-5">
                                                                                        Optimal for 10+ team siz<br />e and grown company
                                                                                    </div>
                                                                                    {/*end::Description*/}

                                                                                    {/*begin::Price*/}
                                                                                    <div className="text-center">
                                                                                        <span className="mb-2 text-primary">$</span>

                                                                                        <span className="fs-3x fw-bold text-primary" data-kt-plan-price-month="339" data-kt-plan-price-annual="3399">
                                                                                            {yearly != true ? "10" : "90"}                                        </span>

                                                                                        <span className="fs-7 fw-semibold opacity-50">/
                                                                                            <span data-kt-element="period">Mon</span>
                                                                                        </span>
                                                                                    </div>
                                                                                    {/*end::Price*/}
                                                                                </div>
                                                                                {/*end::Heading*/}

                                                                                {/*begin::Features*/}
                                                                                <div className="w-100 mb-10">
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Up to 10 Active Users                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Up to 30 Project Integrations                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Analytics Module                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Finance Module                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Accounting Module                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-400 flex-grow-1">
                                                                                            Network Platform                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                                                                                        <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor" />
                                                                                            <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center ">
                                                                                        <span className="fw-semibold fs-6 text-gray-400 flex-grow-1">
                                                                                            Unlimited Cloud Space                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                                                                                        <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor" />
                                                                                            <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}

                                                                                </div>
                                                                                {/*end::Features*/}

                                                                                {/*begin::Select*/}
                                                                                <button type="button" className="btn btn-sm btn-primary" onClick={() => setPlan("startup")}>Select</button>
                                                                                {/*end::Select*/}
                                                                            </div>
                                                                            {/*end::Option*/}
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                    {/*begin::Col*/}
                                                                    <div className="col-xl-4">
                                                                        <div className="d-flex h-100 align-items-center">
                                                                            {/*begin::Option*/}
                                                                            <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-15 px-10">
                                                                                {/*begin::Heading*/}
                                                                                <div className="mb-7 text-center">
                                                                                    {/*begin::Title*/}
                                                                                    <h1 className="text-dark mb-5 fw-bolder">Enterprise</h1>
                                                                                    {/*end::Title*/}

                                                                                    {/*begin::Description*/}
                                                                                    <div className="text-gray-400 fw-semibold mb-5">
                                                                                        Optimal for 100+ team<br /> and enterpise
                                                                                    </div>
                                                                                    {/*end::Description*/}

                                                                                    {/*begin::Price*/}
                                                                                    <div className="text-center">
                                                                                        <span className="mb-2 text-primary">$</span>

                                                                                        <span className="fs-3x fw-bold text-primary" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">
                                                                                            {yearly != true ? "50" : "450"}                                          </span>

                                                                                        <span className="fs-7 fw-semibold opacity-50">/
                                                                                            <span data-kt-element="period">Mon</span>
                                                                                        </span>
                                                                                    </div>
                                                                                    {/*end::Price*/}
                                                                                </div>
                                                                                {/*end::Heading*/}

                                                                                {/*begin::Features*/}
                                                                                <div className="w-100 mb-10">
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Up to 10 Active Users                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Up to 30 Project Integrations                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Analytics Module                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Finance Module                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Accounting Module                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center mb-5">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Network Platform                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}
                                                                                    {/*begin::Item*/}
                                                                                    <div className="d-flex align-items-center ">
                                                                                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                                                                                            Unlimited Cloud Space                                                </span>
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                                                                                        <span className="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Item*/}

                                                                                </div>
                                                                                {/*end::Features*/}

                                                                                {/*begin::Select*/}
                                                                                <button type="button" className="btn btn-sm btn-primary" onClick={() => setPlan("enterprise")}>Select</button>
                                                                                {/*end::Select*/}
                                                                            </div>
                                                                            {/*end::Option*/}
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Col*/}
                                                                </div>
                                                                {/*end::Row*/}
                                                            </div>
                                                            {/*end::Plans*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Pricing card*/}        </div>
                                                {/*end::Content container*/}
                                            </div>
                                            {/*end::Content*/}
                                        </div>
                                        {/*end::Content wrapper*/}


                                        {/*begin::Footer*/}
                                        <Footer />
                                        {/*end::Footer*/}                            </div>
                                    {/*end:::Main*/}


                                </div>
                                {/*end::Wrapper*/}
                            </div>
                        </div>




                    </div>
                    {/*end::Page*/}
                </div>
                {/*end::App*/}
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
                    data-kt-drawer-close="#kt_activities_close"
                >

                    <div className="card shadow-none border-0 rounded-0">
                        {/*begin::Header*/}
                        <div className="card-header" id="kt_activities_header">
                            <h3 className="card-title fw-bold text-dark">Activity Logs</h3>

                            <div className="card-toolbar">
                                <button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                    <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
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
                                                    <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor" />
                                                    <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor" />
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
                                                        <img src="../../assets/media/avatars/300-14.jpg" alt="img" />
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
                                                    <a href="../../apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>
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
                                                            <img src="../../assets/media/avatars/300-2.jpg" alt="img" />
                                                        </div>
                                                        {/*end::User*/}

                                                        {/*begin::User*/}
                                                        <div className="symbol symbol-circle symbol-25px">
                                                            <img src="../../assets/media/avatars/300-14.jpg" alt="img" />
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
                                                    <a href="../../apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                                                    {/*end::Action*/}
                                                </div>
                                                {/*end::Record*/}

                                                {/*begin::Record*/}
                                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                                                    {/*begin::Title*/}
                                                    <a href="../../apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>
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
                                                            <img src="../../assets/media/avatars/300-20.jpg" alt="img" />
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
                                                    <a href="../../apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
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
                                                    <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor" />
                                                    <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor" />
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
                                                        <img src="../../assets/media/avatars/300-1.jpg" alt="img" />
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
                                                    <path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor" />
                                                    <path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor" />
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
                                                        <img src="../../assets/media/avatars/300-23.jpg" alt="img" />
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
                                                        <img alt="" className="w-30px me-3" src="../../assets/media/svg/files/pdf.svg" />
                                                        {/*end::Icon*/}

                                                        {/*begin::Info*/}
                                                        <div className="ms-1 fw-semibold">
                                                            {/*begin::Desc*/}
                                                            <a href="../../apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
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
                                                        <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="../../assets/media/svg/files/doc.svg" />
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
                                                        <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="../../assets/media/svg/files/css.svg" />
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
                                                    <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                                                    <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
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
                                                        <img src="../../assets/media/avatars/300-14.jpg" alt="img" />
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
                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
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
                                                        <img src="../../assets/media/avatars/300-2.jpg" alt="img" />
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
                                                            <img alt="img" className="rounded w-150px" src="../../assets/media/stock/600x400/img-29.jpg" />
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
                                                            <img alt="img" className="rounded w-150px" src="../../assets/media/stock/600x400/img-31.jpg" />
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
                                                            <img alt="img" className="rounded w-150px" src="../../assets/media/stock/600x400/img-40.jpg" />
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
                                                    <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                                                    <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
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
                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
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
                                                        <img src="../../assets/media/avatars/300-4.jpg" alt="img" />
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
                                                        <path opacity="0.3" d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z" fill="currentColor" />
                                                        <path d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z" fill="currentColor" />
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
                                                    <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                                                    <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                                                    <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
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
                            <a href="../user-profile/activity.html" className="btn btn-bg-body text-primary">
                                View All Activities {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                <span className="svg-icon svg-icon-3 svg-icon-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
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
                                            <a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">
                                                Add Contact
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}

                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
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
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
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
                                            {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../../assets/media/avatars/300-25.jpg" /></div>{/*end::Avatar*/}
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

                                            {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../../assets/media/avatars/300-1.jpg" /></div>{/*end::Avatar*/}
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
                                            {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../../assets/media/avatars/300-25.jpg" /></div>{/*end::Avatar*/}
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

                                            {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../../assets/media/avatars/300-1.jpg" /></div>{/*end::Avatar*/}
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
                                            {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../../assets/media/avatars/300-25.jpg" /></div>{/*end::Avatar*/}
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

                                            {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../../assets/media/avatars/300-1.jpg" /></div>{/*end::Avatar*/}
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
                                            {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../../assets/media/avatars/300-25.jpg" /></div>{/*end::Avatar*/}
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

                                            {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../../assets/media/avatars/300-1.jpg" /></div>{/*end::Avatar*/}
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
                                            {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../../assets/media/avatars/300-25.jpg" /></div>{/*end::Avatar*/}
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
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
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
                                        <a href="../../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Iblender</a>

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
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>

                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                            <span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Wrapper*/}

                                {/*begin::Pic*/}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="../../assets/media/stock/600x400/img-1.jpg" alt="" />
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
                                        <a href="../../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">SmartCleaner</a>

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
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>

                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                            <span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Wrapper*/}

                                {/*begin::Pic*/}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="../../assets/media/stock/600x400/img-3.jpg" alt="" />
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
                                        <a href="../../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">CameraMaxr</a>

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
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>

                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                            <span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Wrapper*/}

                                {/*begin::Pic*/}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="../../assets/media/stock/600x400/img-8.jpg" alt="" />
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
                                        <a href="../../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>

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
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>

                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                            <span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Wrapper*/}

                                {/*begin::Pic*/}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="../../assets/media/stock/600x400/img-26.jpg" alt="" />
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
                                        <a href="../../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">MotionWire</a>

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
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>

                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                            <span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Wrapper*/}

                                {/*begin::Pic*/}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="../../assets/media/stock/600x400/img-21.jpg" alt="" />
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
                                        <a href="../../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Samsung</a>

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
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>

                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                            <span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Wrapper*/}

                                {/*begin::Pic*/}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="../../assets/media/stock/600x400/img-34.jpg" alt="" />
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
                                        <a href="../../apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>

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
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>

                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                            <span className="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg></span>
                                            {/*end::Svg Icon*/}                            </a>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Wrapper*/}

                                {/*begin::Pic*/}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="../../assets/media/stock/600x400/img-27.jpg" alt="" />
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

                {/*begin::Engage modals*/}
                {/*begin::Modal - Sitemap*/}
                <div className="modal fade bg-dark bg-opacity-75" id="kt_app_engage_prebuilts_modal" tabindex="-1" aria-hidden="true">
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
                                            <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
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
                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                        <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor" />
                                        <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo1.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo2.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo30.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo39.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo31.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">


                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../index.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Databox Dashboard	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo27.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo6.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo3.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo23.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo38.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo36.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo10.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo35.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo8.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo25.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo20.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo7.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo43.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo32.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo42.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo44.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo33.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo37.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo11.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo16.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo26.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo22.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo19.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo40.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo29.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo24.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo4.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo41.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo18.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo21.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo34.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo15.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo14.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo9.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo5.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo13.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo12.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo48.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo28.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo17.png" className="lozad w-100 rounded" />
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
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo49.png" className="lozad w-100 rounded" />
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
                                                                href="../../dashboards/marketing.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Marketing	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/marketing.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/social.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Social	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/social.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/ecommerce.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Ecommerce	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/ecommerce.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/store-analytics.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Store-analytics	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/store-analytics.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/logistics.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Logistics	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/logistics.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/delivery.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Delivery	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/delivery.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/online-courses.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Online-courses	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/online-courses.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/school.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    School	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/school.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/crypto.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Crypto	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/crypto.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/finance-performance.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Finance-performance	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/finance-performance.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/website-analytics.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Website-analytics	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/website-analytics.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/bidding.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Bidding	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/bidding.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/podcast.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Podcast	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/podcast.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/projects.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Projects	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/projects.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/call-center.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Call-center	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/call-center.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../dashboards/pos.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    POS	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/pos.png" className="lozad w-100 rounded" />
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
                                                                href="../../apps/projects/list/list.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Projects	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/projects.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/ecommerce/catalog/products/products.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Ecommerce	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/ecommerce.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/customers/list/list.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Customers	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/customers.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/subscriptions/list/list.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Subscriptions	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/subscriptions.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/user-management/users/list/list.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    User Management	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/user-management.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/invoices/create/main.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Invoices	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/invoices.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/support-center/overview/main.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Support Center	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/support-center.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/chat/private.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Chat	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/chat.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/calendar/calendar.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Calendar	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/calendar.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/file-manager/list/folders.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    File Manager	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/file-manager.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/inbox/listing/listing.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Inbox	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/inbox.png" className="lozad w-100 rounded" />
                                                                </span>
                                                                {/*end::Thumbnail*/}
                                                            </a>
                                                            {/*end::Preview*/}	</div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-lg-4">

                                                            {/*begin::Preview*/}
                                                            <a
                                                                href="../../apps/contacts/getting-started.html"
                                                                data-kt-href="true"
                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                            >
                                                                {/*begin::Title*/}
                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                    Contacts	</h3>
                                                                {/*end::Title*/}

                                                                {/*begin::Thumbnail*/}
                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/contacts.png" className="lozad w-100 rounded" />
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
                                                                        href="../../authentication/layouts/corporate/sign-in.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Corporate	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-corporate.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/layouts/creative/sign-in.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Creative	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-creative.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/layouts/fancy/sign-in.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Fancy	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-fancy.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/layouts/overlay/sign-in.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Overlay	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-overlay.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/extended/multi-steps-sign-up.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Multi-step	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-multistep.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/extended/two-factor-auth.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            2 Factor Auth	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-2factor.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/general/password-confirmation.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Password Changed	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-passwordchanged.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/general/verify-email.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Verify Email	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-verifyemail.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/general/welcome.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Welcome	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-welcome.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/general/coming-soon.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Coming Soon	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-comingsoon.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/general/account-deactivated.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Account Deactivated	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-accountdeactivated.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/general/error-404.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            404 Page	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-404.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/general/error-500.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            505 Page	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-500.png" className="lozad w-100 rounded" />
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
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                                                        <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                                                        <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                                                                    </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                                                        <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
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
                                                                                href="../user-profile/overview.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    Profile Overview	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-overview.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../user-profile/projects.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    User Projects	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-overview.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../user-profile/campaigns.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    User Campaigns	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-campaigns.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../user-profile/documents.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    User Documents	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-documents.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../user-profile/followers.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    User Followers	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-followers.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../user-profile/activity.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    User Activity	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-activity.png" className="lozad w-100 rounded" />
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
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                                                        <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                                                        <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                                                                    </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                                                        <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
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
                                                                                href="../about.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    About Us	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-aboutus.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../contact.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    Contact Us	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-contactus.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../licenses.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    License	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-license.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../team.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    Our Team	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-ourteam.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../sitemap.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    Sitemap	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-sitemap.png" className="lozad w-100 rounded" />
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
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                                                        <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                                                        <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                                                                    </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                                                        <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
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
                                                                                href="../social/feeds.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    Activity	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-activity.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../social/activity.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    Feeds	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-feeds.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../social/followers.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    Followers	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-followers.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../social/settings.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    Settings	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-settings.png" className="lozad w-100 rounded" />
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
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                                                        <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                                                        <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                                                                    </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                                                    <span className="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                                                        <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
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
                                                                                href="../faq/classic.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    FAQ Classic	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/faq-classic.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../faq/extended.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    FAQ Extended	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/faq-extended.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../blog/home.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    Blog Home	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/blog-home.png" className="lozad w-100 rounded" />
                                                                                </span>
                                                                                {/*end::Thumbnail*/}
                                                                            </a>
                                                                            {/*end::Preview*/}			</div>
                                                                        {/*end::Col*/}

                                                                        {/*begin::Col*/}
                                                                        <div className="col-lg-4">

                                                                            {/*begin::Preview*/}
                                                                            <a
                                                                                href="../blog/post.html"
                                                                                data-kt-href="true"
                                                                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                            >
                                                                                {/*begin::Title*/}
                                                                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                                    Blog Post	</h3>
                                                                                {/*end::Title*/}

                                                                                {/*begin::Thumbnail*/}
                                                                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                                    <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/blog-post.png" className="lozad w-100 rounded" />
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
                                                                        href="../../account/overview.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Overview	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-overview.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../account/settings.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Settings	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-settings.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../account/billing.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Billing	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-billing.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../account/security.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Security	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-security.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../account/referrals.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Referrals	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-referrals.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../account/logs.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Logs	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-logs.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../account/api-keys.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            API Keys	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-apikeys.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../account/statements.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Statements	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-statements.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../account/billing.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Billing	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-billing.png" className="lozad w-100 rounded" />
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
                                                                        href="../../utilities/modals/general/view-users.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            View Friends	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-viewfriends.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/general/upgrade-plan.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Upgrade Plan	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-upgradeplan.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/wizards/top-up-wallet.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Topup Wallet	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-topupwallet.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/general/share-earn.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Share & Earn	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-shareandearn.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/general/select-users.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Select User	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-selectuser.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/forms/bidding.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Place Bid	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-placeyourbid.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/wizards/offer-a-deal.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Offer Deal	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-offeradeal.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/forms/new-target.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            New Target	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-newtarget.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/forms/new-card.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            New Card	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-newcard.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/forms/new-address.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            New Address	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-newaddress.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/general/invite-friends.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Invite Friend	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-invitefriend.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/wizards/create-project.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Create Project	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createproject.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/wizards/create-campaign.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Create Campaign	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createcampaign.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/wizards/create-account.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Create Business Account	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createbusinessacc.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/wizards/create-app.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Create App	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createapp.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/forms/create-api-key.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Create Api Key	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createapikey.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/modals/wizards/two-factor-authentication.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            2 Factor Auth	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-2factorauth.png" className="lozad w-100 rounded" />
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
                                                                        href="../../utilities/wizards/horizontal.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            2 Factor Auth	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/wizard-2factorauth.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/wizards/horizontal.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Horizontal	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/wizard-horizontal.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/wizards/vertical.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Vertical	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/wizard-vertical.png" className="lozad w-100 rounded" />
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
                                                                        href="../../utilities/search/users.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Search Users	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-users.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/search/horizontal.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Search Horizontal	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-horizontal.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/search/vertical.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Search Vertical	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-vertical.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../utilities/search/select-location.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Search Location	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-location.png" className="lozad w-100 rounded" />
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
                                                                        href="../../widgets/charts.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Charts	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-charts.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../widgets/feeds.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Feeds	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-feeds.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../widgets/lists.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Lists	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-lists.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../widgets/mixed.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Mixed	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-mixed.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../widgets/statistics.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Statistics	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-stats.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../widgets/tables.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Tables	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-tables.png" className="lozad w-100 rounded" />
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
                                                                        href="../../authentication/email/welcome-message.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Welcome	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-welcome.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/email/subscription-confirmed.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Subscription Confirmed	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-subscriptionconfirmed.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/email/reset-password.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Reset Password	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-resetpassword.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/email/card-declined.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Card Declined	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-creditcarddeclined.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/email/promo-1.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Promotion 1	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-promo1.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/email/promo-2.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Promotion 2	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-promo2.png" className="lozad w-100 rounded" />
                                                                        </span>
                                                                        {/*end::Thumbnail*/}
                                                                    </a>
                                                                    {/*end::Preview*/}		</div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-lg-4">

                                                                    {/*begin::Preview*/}
                                                                    <a
                                                                        href="../../authentication/email/promo-3.html"
                                                                        data-kt-href="true"
                                                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                                                    >
                                                                        {/*begin::Title*/}
                                                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                                                            Promotion 3	</h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Thumbnail*/}
                                                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                                                            <img src="../../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-promo3.png" className="lozad w-100 rounded" />
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




                                                            <a className="fw-6 fw-semibold" href="../../index.html">
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

                                                            <a className="fw-6 fw-semibold" href="../../index.html">
                                                                Account			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/marketing.html">
                                                                Marketing Dashboard			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/social.html">
                                                                Social Dashboard			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/ecommerce.html">
                                                                eCommerce Dashboard			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/store-analytics.html">
                                                                Store Analytics			</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}


                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../dashboards/logistics.html">
                                                                Logistics			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/delivery.html">
                                                                Delivery			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/online-courses.html">
                                                                Online Courses			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/school.html">
                                                                Hello Tyler			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/crypto.html">
                                                                My Balance: 37,045$			</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}


                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../dashboards/finance-performance.html">
                                                                Finance Performance			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/website-analytics.html">
                                                                Website Analytics			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/bidding.html">
                                                                Bidding Dashboard			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/podcast.html">
                                                                Podcast Dashboard			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/projects.html">
                                                                Projects Dashboard			</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}


                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../dashboards/call-center.html">
                                                                Call Center			</a>




                                                            <a className="fw-6 fw-semibold" href="../../dashboards/pos.html">
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

                                                            <a className="fw-6 fw-semibold" href="../../authentication/layouts/corporate/sign-in.html">
                                                                Corporate					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/layouts/creative/sign-in.html">
                                                                Creative					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/layouts/fancy/sign-in.html">
                                                                Fancy					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/layouts/overlay/sign-in.html">
                                                                Overlay					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../authentication/extended/multi-steps-sign-up.html">
                                                                Multi-step					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/extended/two-factor-auth.html">
                                                                2 Factor Auth					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/general/password-confirmation.html">
                                                                Password Changed					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/general/verify-email.html">
                                                                Verify Email					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../authentication/general/welcome.html">
                                                                Welcome					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/general/coming-soon.html">
                                                                Coming Soon					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/general/account-deactivated.html">
                                                                Account Deactivated					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/general/error-404.html">
                                                                404 Page					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../authentication/general/error-500.html">
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

                                                            <a className="fw-6 fw-semibold" href="../../account/overview.html">
                                                                Overview					</a>



                                                            <a className="fw-6 fw-semibold" href="../../account/settings.html">
                                                                Settings					</a>



                                                            <a className="fw-6 fw-semibold" href="../../account/billing.html">
                                                                Billing					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../account/security.html">
                                                                Security					</a>



                                                            <a className="fw-6 fw-semibold" href="../../account/referrals.html">
                                                                Referrals					</a>



                                                            <a className="fw-6 fw-semibold" href="../../account/logs.html">
                                                                Logs					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../account/api-keys.html">
                                                                API Keys					</a>



                                                            <a className="fw-6 fw-semibold" href="../../account/statements.html">
                                                                Statements					</a>



                                                            <a className="fw-6 fw-semibold" href="../../account/billing.html">
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

                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/general/view-users.html">
                                                                View Friends					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/general/upgrade-plan.html">
                                                                Upgrade Plan					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/wizards/top-up-wallet.html">
                                                                Topup Wallet					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/general/share-earn.html">
                                                                Share & Earn					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/general/select-users.html">
                                                                Select User					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/forms/bidding.html">
                                                                Place Bid					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/wizards/offer-a-deal.html">
                                                                Offer Deal					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/forms/new-target.html">
                                                                New Target					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/forms/new-card.html">
                                                                New Card					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/forms/new-address.html">
                                                                New Address					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/general/invite-friends.html">
                                                                Invite Friend					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/wizards/create-project.html">
                                                                Create Project					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/wizards/create-campaign.html">
                                                                Create Campaign					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/wizards/create-account.html">
                                                                Create Business Account					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/wizards/create-app.html">
                                                                Create App					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/forms/create-api-key.html">
                                                                Create Api Key					</a>



                                                            <a className="fw-6 fw-semibold" href="../../utilities/modals/wizards/two-factor-authentication.html">
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

                                                            <a className="fw-6 fw-semibold" href="../../utilities/wizards/horizontal.html">
                                                                2 Factor Auth					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../utilities/wizards/horizontal.html">
                                                                Horizontal					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../utilities/wizards/vertical.html">
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

                                                            <a className="fw-6 fw-semibold" href="../../utilities/search/users.html">
                                                                Search Users					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../utilities/search/horizontal.html">
                                                                Search Horizontal					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../utilities/search/vertical.html">
                                                                Search Vertical					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../utilities/search/select-location.html">
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

                                                            <a className="fw-6 fw-semibold" href="../../widgets/charts.html">
                                                                Charts					</a>



                                                            <a className="fw-6 fw-semibold" href="../../widgets/feeds.html">
                                                                Feeds					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../widgets/lists.html">
                                                                Lists					</a>



                                                            <a className="fw-6 fw-semibold" href="../../widgets/mixed.html">
                                                                Mixed					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../widgets/statistics.html">
                                                                Statistics					</a>



                                                            <a className="fw-6 fw-semibold" href="../../widgets/tables.html">
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

                                                            <a className="fw-6 fw-semibold" href="../../authentication/email/welcome-message.html">
                                                                Welcome					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/email/subscription-confirmed.html">
                                                                Subscription Confirmed					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../authentication/email/reset-password.html">
                                                                Reset Password					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/email/card-declined.html">
                                                                Card Declined					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../authentication/email/promo-1.html">
                                                                Promotion 1					</a>



                                                            <a className="fw-6 fw-semibold" href="../../authentication/email/promo-2.html">
                                                                Promotion 2					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../authentication/email/promo-3.html">
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

                                                            <a className="fw-6 fw-semibold" href="../user-profile/overview.html">
                                                                Profile Overview					</a>



                                                            <a className="fw-6 fw-semibold" href="../user-profile/projects.html">
                                                                User Projects					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../user-profile/campaigns.html">
                                                                User Campaigns					</a>



                                                            <a className="fw-6 fw-semibold" href="../user-profile/documents.html">
                                                                User Documents					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../user-profile/followers.html">
                                                                User Followers					</a>



                                                            <a className="fw-6 fw-semibold" href="../user-profile/activity.html">
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

                                                            <a className="fw-6 fw-semibold" href="../about.html">
                                                                About Us					</a>



                                                            <a className="fw-6 fw-semibold" href="../contact.html">
                                                                Contact Us					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../licenses.html">
                                                                License					</a>



                                                            <a className="fw-6 fw-semibold" href="../team.html">
                                                                Our Team					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../sitemap.html">
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

                                                            <a className="fw-6 fw-semibold" href="../social/feeds.html">
                                                                Activity					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../social/activity.html">
                                                                Feeds					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../social/followers.html">
                                                                Followers					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../social/settings.html">
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

                                                            <a className="fw-6 fw-semibold" href="../faq/classic.html">
                                                                FAQ Classic					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../faq/extended.html">
                                                                FAQ Extended					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../blog/home.html">
                                                                Blog Home					</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../blog/post.html">
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

                                                            <a className="fw-6 fw-semibold" href="../../apps/projects/list/list.html">
                                                                Projects			</a>



                                                            <a className="fw-6 fw-semibold" href="../../apps/ecommerce/catalog/products/products.html">
                                                                Ecommerce			</a>



                                                            <a className="fw-6 fw-semibold" href="../../apps/customers/list/list.html">
                                                                Customers			</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../apps/subscriptions/list/list.html">
                                                                Subscriptions			</a>



                                                            <a className="fw-6 fw-semibold" href="../../apps/user-management/users/list/list.html">
                                                                User Management			</a>



                                                            <a className="fw-6 fw-semibold" href="../../apps/invoices/create/main.html">
                                                                Invoices			</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../apps/support-center/overview/main.html">
                                                                Support Center			</a>



                                                            <a className="fw-6 fw-semibold" href="../../apps/chat/private.html">
                                                                Chat			</a>



                                                            <a className="fw-6 fw-semibold" href="../../apps/calendar/calendar.html">
                                                                Calendar			</a>

                                                        </div>
                                                        {/*end::List*/}
                                                    </div>
                                                    {/*end::Col*/}

                                                    {/*begin::Col*/}
                                                    <div className="col-lg-3">
                                                        {/*begin::List*/}
                                                        <div className="d-flex flex-column gap-3 gap-lg-5">

                                                            <a className="fw-6 fw-semibold" href="../../apps/file-manager/list/folders.html">
                                                                File Manager			</a>



                                                            <a className="fw-6 fw-semibold" href="../../apps/inbox/listing/listing.html">
                                                                Inbox			</a>



                                                            <a className="fw-6 fw-semibold" href="../../apps/contacts/getting-started.html">
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
                {/*end::Modal - Sitemap*/} {/*end::Engage modals*/}
                {/*begin::Scrolltop*/}
                <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                    <span className="svg-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                    </svg>
                    </span>
                    {/*end::Svg Icon*/}</div>
                {/*end::Scrolltop*/}

                {/*begin::Modals*/}
                {/*begin::Modal - Create Campaign*/}
                <div className="modal fade" id="kt_modal_create_campaign" tabindex="-1" aria-hidden="true">
                    {/*begin::Modal dialog*/}
                    <div className="modal-dialog modal-fullscreen p-9">
                        {/*begin::Modal content*/}
                        <div className="modal-content modal-rounded">
                            {/*begin::Modal header*/}
                            <div className="modal-header py-7 d-flex justify-content-between">
                                {/*begin::Modal title*/}
                                <h2>Create Campaign</h2>
                                {/*end::Modal title*/}

                                {/*begin::Close*/}
                                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                    <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                    </svg>

                                    </span>
                                    {/*end::Svg Icon*/}                </div>
                                {/*end::Close*/}
                            </div>
                            {/*begin::Modal header*/}

                            {/*begin::Modal body*/}
                            <div className="modal-body scroll-y m-5">
                                {/*begin::Stepper*/}
                                <div className="stepper stepper-links d-flex flex-column" id="kt_modal_create_campaign_stepper">
                                    {/*begin::Nav*/}
                                    <div className="stepper-nav justify-content-center py-2">
                                        {/*begin::Step 1*/}
                                        <div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                                            <h3 className="stepper-title">
                                                Campaign Details
                                            </h3>
                                        </div>
                                        {/*end::Step 1*/}

                                        {/*begin::Step 2*/}
                                        <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                            <h3 className="stepper-title">
                                                Creative Uploads
                                            </h3>
                                        </div>
                                        {/*end::Step 2*/}

                                        {/*begin::Step 3*/}
                                        <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                            <h3 className="stepper-title">
                                                Audiences
                                            </h3>
                                        </div>
                                        {/*end::Step 3*/}

                                        {/*begin::Step 4*/}
                                        <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                            <h3 className="stepper-title">
                                                Budget Estimates
                                            </h3>
                                        </div>
                                        {/*end::Step 4*/}

                                        {/*begin::Step 5*/}
                                        <div className="stepper-item" data-kt-stepper-element="nav">
                                            <h3 className="stepper-title">
                                                Completed
                                            </h3>
                                        </div>
                                        {/*end::Step 5*/}
                                    </div>
                                    {/*end::Nav*/}

                                    {/*begin::Form*/}
                                    <form className="mx-auto w-100 mw-600px pt-15 pb-10" novalidate="novalidate" id="kt_modal_create_campaign_stepper_form">

                                        {/*begin::Step 1*/}
                                        <div className="current" data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-10 pb-lg-15">
                                                    {/*begin::Title*/}
                                                    <h2 className="fw-bold d-flex align-items-center text-dark">
                                                        Setup Campaign Details
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Campaign name will be used as reference within your campaign reports"></i>
                                                    </h2>
                                                    {/*end::Title*/}

                                                    {/*begin::Notice*/}
                                                    <div className="text-muted fw-semibold fs-6">
                                                        If you need more info, please check out
                                                        <a href="#" className="link-primary fw-bold">Help Page</a>.
                                                    </div>
                                                    {/*end::Notice*/}
                                                </div>
                                                {/*end::Heading*/}

                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label mb-3">Campaign Name</label>
                                                    {/*end::Label*/}

                                                    {/*begin::Input*/}
                                                    <input type="text" className="form-control form-control-lg form-control-solid" name="campaign_name" placeholder="" value="" />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="d-block fw-semibold fs-6 mb-5">
                                                        <span className="required">Company Logo</span>
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="E.g. Select a logo to represent the company that's running the campaign."></i>
                                                    </label>
                                                    {/*end::Label*/}

                                                    {/*begin::Image input placeholder*/}
                                                    {/* <style>
                                        .image-input-placeholder {
                                            background - image: url('../../assets/media/svg/files/blank-image.svg');
                }

                                        [data-bs-theme="dark"] .image-input-placeholder {
                                            background - image: url('../../assets/media/svg/files/blank-image-dark.svg');
                }
                                    </style> */}
                                                    {/*end::Image input placeholder*/}

                                                    {/*begin::Image input*/}
                                                    <div className="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">
                                                        {/*begin::Preview existing avatar*/}
                                                        <div className="image-input-wrapper w-125px h-125px"></div>
                                                        {/*end::Preview existing avatar*/}

                                                        {/*begin::Label*/}
                                                        <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                            <i className="bi bi-pencil-fill fs-7"></i>

                                                            {/*begin::Inputs*/}
                                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                            <input type="hidden" name="avatar_remove" />
                                                            {/*end::Inputs*/}
                                                        </label>
                                                        {/*end::Label*/}

                                                        {/*begin::Cancel*/}
                                                        <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                            <i className="bi bi-x fs-2"></i>
                                                        </span>
                                                        {/*end::Cancel*/}

                                                        {/*begin::Remove*/}
                                                        <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                            <i className="bi bi-x fs-2"></i>
                                                        </span>
                                                        {/*end::Remove*/}
                                                    </div>
                                                    {/*end::Image input*/}

                                                    {/*begin::Hint*/}
                                                    <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                                                    {/*end::Hint*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Input group*/}
                                                <div className="mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="required fw-semibold fs-6 mb-5">Campaign Goal</label>
                                                    {/*end::Label*/}

                                                    {/*begin::Roles*/}
                                                    {/*begin::Input row*/}
                                                    <div className="d-flex fv-row">
                                                        {/*begin::Radio*/}
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            {/*begin::Input*/}
                                                            <input className="form-check-input me-3" name="user_role" type="radio" value="0" id="kt_modal_update_role_option_0" checked='checked' />
                                                            {/*end::Input*/}

                                                            {/*begin::Label*/}
                                                            <label className="form-check-label" for="kt_modal_update_role_option_0">
                                                                <div className="fw-bold text-gray-800">Get more visitors</div>
                                                                <div className="text-gray-600">Increase impression traffic onto the platform</div>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        {/*end::Radio*/}
                                                    </div>
                                                    {/*end::Input row*/}

                                                    <div className='separator separator-dashed my-5'></div>                            {/*begin::Input row*/}
                                                    <div className="d-flex fv-row">
                                                        {/*begin::Radio*/}
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            {/*begin::Input*/}
                                                            <input className="form-check-input me-3" name="user_role" type="radio" value="1" id="kt_modal_update_role_option_1" />
                                                            {/*end::Input*/}

                                                            {/*begin::Label*/}
                                                            <label className="form-check-label" for="kt_modal_update_role_option_1">
                                                                <div className="fw-bold text-gray-800">Get more messages on chat</div>
                                                                <div className="text-gray-600">Increase community interaction and communication</div>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        {/*end::Radio*/}
                                                    </div>
                                                    {/*end::Input row*/}

                                                    <div className='separator separator-dashed my-5'></div>                            {/*begin::Input row*/}
                                                    <div className="d-flex fv-row">
                                                        {/*begin::Radio*/}
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            {/*begin::Input*/}
                                                            <input className="form-check-input me-3" name="user_role" type="radio" value="2" id="kt_modal_update_role_option_2" />
                                                            {/*end::Input*/}

                                                            {/*begin::Label*/}
                                                            <label className="form-check-label" for="kt_modal_update_role_option_2">
                                                                <div className="fw-bold text-gray-800">Get more calls</div>
                                                                <div className="text-gray-600">Boost telecommunication feedback to provide precise and accurate information</div>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        {/*end::Radio*/}
                                                    </div>
                                                    {/*end::Input row*/}

                                                    <div className='separator separator-dashed my-5'></div>                            {/*begin::Input row*/}
                                                    <div className="d-flex fv-row">
                                                        {/*begin::Radio*/}
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            {/*begin::Input*/}
                                                            <input className="form-check-input me-3" name="user_role" type="radio" value="3" id="kt_modal_update_role_option_3" />
                                                            {/*end::Input*/}

                                                            {/*begin::Label*/}
                                                            <label className="form-check-label" for="kt_modal_update_role_option_3">
                                                                <div className="fw-bold text-gray-800">Get more likes</div>
                                                                <div className="text-gray-600">Increase positive interactivity on social media platforms</div>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        {/*end::Radio*/}
                                                    </div>
                                                    {/*end::Input row*/}

                                                    <div className='separator separator-dashed my-5'></div>                            {/*begin::Input row*/}
                                                    <div className="d-flex fv-row">
                                                        {/*begin::Radio*/}
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            {/*begin::Input*/}
                                                            <input className="form-check-input me-3" name="user_role" type="radio" value="4" id="kt_modal_update_role_option_4" />
                                                            {/*end::Input*/}

                                                            {/*begin::Label*/}
                                                            <label className="form-check-label" for="kt_modal_update_role_option_4">
                                                                <div className="fw-bold text-gray-800">Lead generation</div>
                                                                <div className="text-gray-600">Collect contact information for potential customers</div>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        {/*end::Radio*/}
                                                    </div>
                                                    {/*end::Input row*/}

                                                    {/*end::Roles*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Step 1*/}

                                        {/*begin::Step 2*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-10 pb-lg-12">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bold text-dark">Upload Files</h1>
                                                    {/*end::Title*/}

                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-semibold fs-4">
                                                        If you need more info, please check
                                                        <a href="#" className="link-primary">Campaign Guidelines</a>
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Dropzone*/}
                                                    <div className="dropzone" id="kt_modal_create_campaign_files_upload">
                                                        {/*begin::Message*/}
                                                        <div className="dz-message needsclick">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/files/fil010.svg*/}
                                                            <span className="svg-icon svg-icon-3hx svg-icon-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z" fill="currentColor" />
                                                                <path d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z" fill="currentColor" />
                                                                <path d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z" fill="currentColor" />
                                                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                                                            </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}                    {/*end::Icon*/}

                                                            {/*begin::Info*/}
                                                            <div className="ms-4">
                                                                <h3 className="dfs-3 fw-bold text-gray-900 mb-1">Drop campaign files here or click to upload.</h3>
                                                                <span className="fw-semibold fs-4 text-muted">Upload up to 10 files</span>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Dropzone*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Input group*/}
                                                <div className="mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-semibold mb-2">Uploaded File</label>
                                                    {/*End::Label*/}

                                                    {/*begin::Files*/}
                                                    <div className="mh-300px scroll-y me-n7 pe-7">
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img src="../../assets/media/svg/files/pdf.svg" alt="icon" />
                                                                </div>
                                                                {/*end::Avatar*/}

                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Product Specifications</a>
                                                                    <div className="fw-semibold text-muted">230kb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>

                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                    <option></option>
                                                                    <option value="1">Remove</option>
                                                                    <option value="2">Modify</option>
                                                                    <option value="3">Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img src="../../assets/media/svg/files/tif.svg" alt="icon" />
                                                                </div>
                                                                {/*end::Avatar*/}

                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Creative Poster</a>
                                                                    <div className="fw-semibold text-muted">2.4mb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>

                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                    <option></option>
                                                                    <option value="1">Remove</option>
                                                                    <option value="2">Modify</option>
                                                                    <option value="3">Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img src="../../assets/media/svg/files/folder-document.svg" alt="icon" />
                                                                </div>
                                                                {/*end::Avatar*/}

                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Landing Page Source</a>
                                                                    <div className="fw-semibold text-muted">1.12mb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>

                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                    <option></option>
                                                                    <option value="1">Remove</option>
                                                                    <option value="2">Modify</option>
                                                                    <option value="3">Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img src="../../assets/media/svg/files/css.svg" alt="icon" />
                                                                </div>
                                                                {/*end::Avatar*/}

                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Landing Page Styling</a>
                                                                    <div className="fw-semibold text-muted">85kb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>

                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                    <option></option>
                                                                    <option value="1">Remove</option>
                                                                    <option value="2">Modify</option>
                                                                    <option value="3">Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img src="../../assets/media/svg/files/ai.svg" alt="icon" />
                                                                </div>
                                                                {/*end::Avatar*/}

                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Design Source Files</a>
                                                                    <div className="fw-semibold text-muted">48mb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>

                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                    <option></option>
                                                                    <option value="1">Remove</option>
                                                                    <option value="2">Modify</option>
                                                                    <option value="3">Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                        {/*begin::File*/}
                                                        <div className="d-flex flex-stack py-4 ">
                                                            <div className="d-flex align-items-center">
                                                                {/*begin::Avatar*/}
                                                                <div className="symbol symbol-35px">
                                                                    <img src="../../assets/media/svg/files/doc.svg" alt="icon" />
                                                                </div>
                                                                {/*end::Avatar*/}

                                                                {/*begin::Details*/}
                                                                <div className="ms-6">
                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Plan Document</a>
                                                                    <div className="fw-semibold text-muted">27kb</div>
                                                                </div>
                                                                {/*end::Details*/}
                                                            </div>

                                                            {/*begin::Menu*/}
                                                            <div className="min-w-100px">
                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                    <option></option>
                                                                    <option value="1">Remove</option>
                                                                    <option value="2">Modify</option>
                                                                    <option value="3">Select</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Menu*/}
                                                        </div>
                                                        {/*end::File*/}
                                                    </div>
                                                    {/*end::Files*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Step 2*/}
                                        {/*begin::Step 3*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-10 pb-lg-12">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bold text-dark">Configure Audiences</h1>
                                                    {/*end::Title*/}

                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-semibold fs-4">
                                                        If you need more info, please check
                                                        <a href="#" className="link-primary">Campaign Guidelines</a>
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Gender
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Show your ads to either men or women, or select 'All' for both"></i>
                                                    </label>
                                                    {/*End::Label*/}

                                                    {/*begin::Row*/}
                                                    <div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                                                        {/*begin::Col*/}
                                                        <div className="col">
                                                            {/*begin::Option*/}
                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
                                                                {/*begin::Radio*/}
                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                    <input className="form-check-input" type="radio" name="campaign_gender" value="1" checked="checked" />
                                                                </span>
                                                                {/*end::Radio*/}

                                                                {/*begin::Info*/}
                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bold text-gray-800 d-block">All</span>
                                                                </span>
                                                                {/*end::Info*/}
                                                            </label>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col">
                                                            {/*begin::Option*/}
                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                                                                {/*begin::Radio*/}
                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                    <input className="form-check-input" type="radio" name="campaign_gender" value="2" />
                                                                </span>
                                                                {/*end::Radio*/}

                                                                {/*begin::Info*/}
                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bold text-gray-800 d-block">Male</span>
                                                                </span>
                                                                {/*end::Info*/}
                                                            </label>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col">
                                                            {/*begin::Option*/}
                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                                                                {/*begin::Radio*/}
                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                    <input className="form-check-input" type="radio" name="campaign_gender" value="3" />
                                                                </span>
                                                                {/*end::Radio*/}

                                                                {/*begin::Info*/}
                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bold text-gray-800 d-block">Female</span>
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

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Age
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select the minimum and maximum age of the people who will find your ad relevant."></i>
                                                    </label>
                                                    {/*End::Label*/}

                                                    {/*begin::Slider*/}
                                                    <div className="d-flex flex-stack">
                                                        <div id="kt_modal_create_campaign_age_min" className="fs-7 fw-semibold text-muted"></div>
                                                        <div id="kt_modal_create_campaign_age_slider" className="noUi-sm w-100 ms-5 me-8"></div>
                                                        <div id="kt_modal_create_campaign_age_max" className="fs-7 fw-semibold text-muted"></div>
                                                    </div>
                                                    {/*end::Slider*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Location
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter one or more location points for more specific targeting."></i>
                                                    </label>
                                                    {/*End::Label*/}

                                                    {/*begin::Tagify*/}
                                                    <input className="form-control d-flex align-items-center" value="" id="kt_modal_create_campaign_location" data-kt-flags-path="/metronic8/demo27/assets/media/flags/" />
                                                    {/*end::Tagify*/}
                                                </div>
                                                {/*end::Input group*/}

                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Step 3*/}
                                        {/*begin::Step 4*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-10 pb-lg-12">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bold text-dark">Budget Estimates</h1>
                                                    {/*end::Title*/}

                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-semibold fs-4">
                                                        If you need more info, please check
                                                        <a href="#" className="link-primary">Campaign Guidelines</a>
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Campaign Duration
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Choose how long you want your ad to run for"></i>
                                                    </label>
                                                    {/*end::Label*/}

                                                    {/*begin::Duration option*/}
                                                    <div className="d-flex gap-9 mb-7">
                                                        {/*begin::Button*/}
                                                        <button type="button" className="btn btn-outline btn-outline-dashed btn-active-light-primary active" id="kt_modal_create_campaign_duration_all">
                                                            Continuous duration<br />
                                                            <span className="fs-7">Your ad will run continuously for a daily budget.</span>
                                                        </button>
                                                        {/*end::Button*/}

                                                        {/*begin::Button*/}
                                                        <button type="button" className="btn btn-outline btn-outline-dashed btn-active-light-primary btn-outline-default" id="kt_modal_create_campaign_duration_fixed">
                                                            Fixed duration<br />
                                                            <span className="fs-7">Your ad will run on the specified dates only.</span>
                                                        </button>
                                                        {/*end::Button*/}
                                                    </div>
                                                    {/*end::Duration option*/}

                                                    {/*begin::Datepicker*/}
                                                    <input className="form-control form-control-solid d-none" placeholder="Pick date & time" id="kt_modal_create_campaign_datepicker" />
                                                    {/*end::Datepicker*/}
                                                </div>
                                                {/*end::Input group*/}


                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Daily Budget
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Choose the budget allocated for each day. Higher budget will generate better results"></i>
                                                    </label>
                                                    {/*end::Label*/}

                                                    {/*begin::Slider*/}
                                                    <div className="d-flex flex-column text-center">
                                                        <div className="d-flex align-items-start justify-content-center mb-7">
                                                            <span className="fw-bold fs-4 mt-1 me-2">$</span>
                                                            <span className="fw-bold fs-3x" id="kt_modal_create_campaign_budget_label"></span>
                                                            <span className="fw-bold fs-3x">.00</span>
                                                        </div>
                                                        <div id="kt_modal_create_campaign_budget_slider" className="noUi-sm"></div>
                                                    </div>
                                                    {/*end::Slider*/}

                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Step 4*/}
                                        {/*begin::Step 5*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="pb-12 text-center">
                                                    {/*begin::Title*/}
                                                    <h1 className="fw-bold text-dark">Campaign Created!</h1>
                                                    {/*end::Title*/}

                                                    {/*begin::Description*/}
                                                    <div className="fw-semibold text-muted fs-4">
                                                        You will receive an email with with the summary of your newly created campaign!
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}

                                                {/*begin::Actions*/}
                                                <div className="d-flex flex-center pb-20">
                                                    <button id="kt_modal_create_campaign_create_new" type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">
                                                        Create New Campaign
                                                    </button>

                                                    <a href="#" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">
                                                        View Campaign
                                                    </a>
                                                </div>
                                                {/*end::Actions*/}

                                                {/*begin::Illustration*/}
                                                <div className="text-center px-4">
                                                    <img src="../../assets/media/illustrations/sketchy-1/9.png" alt="" className="mww-100 mh-350px" />
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
                                                        <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor" />
                                                        <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor" />
                                                    </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}                                    Back
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
                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                        </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}                                    </span>
                                                    <span className="indicator-progress">
                                                        Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                    </span>
                                                </button>

                                                <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">
                                                    Continue
                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                    <span className="svg-icon svg-icon-3 ms-1 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                    </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}                                </button>
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Actions*/}
                                    </form>
                                    {/*end::Form*/}
                                </div>
                                {/*end::Stepper*/}
                            </div>
                            {/*begin::Modal body*/}
                        </div>
                    </div>
                </div>
                {/*end::Modal - Create Campaign*/} {/*begin::Modal - Users Search*/}
                <div className="modal fade" id="kt_modal_users_search" tabindex="-1" aria-hidden="true">
                    {/*begin::Modal dialog*/}
                    <div className="modal-dialog modal-dialog-centered mw-650px">
                        {/*begin::Modal content*/}
                        <div className="modal-content">
                            {/*begin::Modal header*/}
                            <div className="modal-header pb-0 border-0 justify-content-end">
                                {/*begin::Close*/}
                                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                    <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                    </svg>

                                    </span>
                                    {/*end::Svg Icon*/}                </div>
                                {/*end::Close*/}
                            </div>
                            {/*begin::Modal header*/}

                            {/*begin::Modal body*/}
                            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                                {/*begin::Content*/}
                                <div className="text-center mb-13">
                                    <h1 className="mb-3">Search Users</h1>

                                    <div className="text-muted fw-semibold fs-5">
                                        Invite Collaborators To Your Project
                                    </div>
                                </div>
                                {/*end::Content*/}

                                {/*begin::Search*/}
                                <div
                                    id="kt_modal_users_search_handler"

                                    data-kt-search-keypress="true"
                                    data-kt-search-min-length="2"
                                    data-kt-search-enter="enter"
                                    data-kt-search-layout="inline">

                                    {/*begin::Form*/}
                                    <form data-kt-search-element="form" className="w-100 position-relative mb-5" autocomplete="off">
                                        {/*begin::Hidden input(Added to disable form autocomplete)*/}
                                        <input type="hidden" />
                                        {/*end::Hidden input*/}

                                        {/*begin::Icon*/}
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                        <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                                        </svg>
                                        </span>
                                        {/*end::Svg Icon*/}                        {/*end::Icon*/}

                                        {/*begin::Input*/}
                                        <input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input" />
                                        {/*end::Input*/}

                                        {/*begin::Spinner*/}
                                        <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                                            <span className="spinner-border h-15px w-15px align-middle text-muted"></span>
                                        </span>
                                        {/*end::Spinner*/}

                                        {/*begin::Reset*/}
                                        <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                            <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                            </svg>

                                            </span>
                                            {/*end::Svg Icon*/}                        </span>
                                        {/*end::Reset*/}
                                    </form>
                                    {/*end::Form*/}

                                    {/*begin::Wrapper*/}
                                    <div className="py-5">
                                        {/*begin::Suggestions*/}
                                        <div data-kt-search-element="suggestions">
                                            {/*begin::Heading*/}
                                            <h3 className="fw-semibold mb-5">Recently searched:</h3>
                                            {/*end::Heading*/}

                                            {/*begin::Users*/}
                                            <div className="mh-375px scroll-y me-n7 pe-7">
                                                {/*begin::User*/}
                                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle me-5">
                                                        <img alt="Pic" src="../../assets/media/avatars/300-6.jpg" />
                                                    </div>
                                                    {/*end::Avatar*/}

                                                    {/*begin::Info*/}
                                                    <div className="fw-semibold">
                                                        <span className="fs-6 text-gray-800 me-2">Emma Smith</span>
                                                        <span className="badge badge-light">Art Director</span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </a>
                                                {/*end::User*/}
                                                {/*begin::User*/}
                                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle me-5">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                            M                        </span>
                                                    </div>
                                                    {/*end::Avatar*/}

                                                    {/*begin::Info*/}
                                                    <div className="fw-semibold">
                                                        <span className="fs-6 text-gray-800 me-2">Melody Macy</span>
                                                        <span className="badge badge-light">Marketing Analytic</span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </a>
                                                {/*end::User*/}
                                                {/*begin::User*/}
                                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle me-5">
                                                        <img alt="Pic" src="../../assets/media/avatars/300-1.jpg" />
                                                    </div>
                                                    {/*end::Avatar*/}

                                                    {/*begin::Info*/}
                                                    <div className="fw-semibold">
                                                        <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                                                        <span className="badge badge-light">Software Enginer</span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </a>
                                                {/*end::User*/}
                                                {/*begin::User*/}
                                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle me-5">
                                                        <img alt="Pic" src="../../assets/media/avatars/300-5.jpg" />
                                                    </div>
                                                    {/*end::Avatar*/}

                                                    {/*begin::Info*/}
                                                    <div className="fw-semibold">
                                                        <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                                                        <span className="badge badge-light">Web Developer</span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </a>
                                                {/*end::User*/}
                                                {/*begin::User*/}
                                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle me-5">
                                                        <img alt="Pic" src="../../assets/media/avatars/300-25.jpg" />
                                                    </div>
                                                    {/*end::Avatar*/}

                                                    {/*begin::Info*/}
                                                    <div className="fw-semibold">
                                                        <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                                                        <span className="badge badge-light">UI/UX Designer</span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </a>
                                                {/*end::User*/}
                                            </div>
                                            {/*end::Users*/}
                                        </div>
                                        {/*end::Suggestions*/}

                                        {/*begin::Results(add d-none to below element to hide the users list by default)*/}
                                        <div data-kt-search-element="results" className="d-none">
                                            {/*begin::Users*/}
                                            <div className="mh-375px scroll-y me-n7 pe-7">
                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="../../assets/media/avatars/300-6.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>

                                                            <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" selected>Owner</option>
                                                            <option value="3" >Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                                M                            </span>
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>

                                                            <div className="fw-semibold text-muted">melody@altbox.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" selected>Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" >Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="../../assets/media/avatars/300-1.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>

                                                            <div className="fw-semibold text-muted">max@kt.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" selected>Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="../../assets/media/avatars/300-5.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>

                                                            <div className="fw-semibold text-muted">sean@dellito.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" selected>Owner</option>
                                                            <option value="3" >Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="../../assets/media/avatars/300-25.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>

                                                            <div className="fw-semibold text-muted">brian@exchange.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" selected>Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                                                C                            </span>
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>

                                                            <div className="fw-semibold text-muted">mik@pex.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" selected>Owner</option>
                                                            <option value="3" >Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="../../assets/media/avatars/300-9.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>

                                                            <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" selected>Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                                O                            </span>
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>

                                                            <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" selected>Owner</option>
                                                            <option value="3" >Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                                                N                            </span>
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>

                                                            <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" selected>Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" >Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="../../assets/media/avatars/300-23.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>

                                                            <div className="fw-semibold text-muted">dam@consilting.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" selected>Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                                E                            </span>
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>

                                                            <div className="fw-semibold text-muted">emma@intenso.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" selected>Owner</option>
                                                            <option value="3" >Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="../../assets/media/avatars/300-12.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>

                                                            <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" selected>Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" >Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-info text-info fw-semibold">
                                                                A                            </span>
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>

                                                            <div className="fw-semibold text-muted">robert@benko.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" selected>Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="../../assets/media/avatars/300-13.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>

                                                            <div className="fw-semibold text-muted">miller@mapple.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" selected>Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-success text-success fw-semibold">
                                                                L                            </span>
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>

                                                            <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" selected>Owner</option>
                                                            <option value="3" >Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="../../assets/media/avatars/300-21.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>

                                                            <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" selected>Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" >Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}

                                                {/*begin::Separator*/}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/*end::Separator*/}

                                                {/*begin::User*/}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">
                                                    {/*begin::Details*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16" />
                                                        </label>
                                                        {/*end::Checkbox*/}

                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="../../assets/media/avatars/300-12.jpg" />
                                                        </div>
                                                        {/*end::Avatar*/}

                                                        {/*begin::Details*/}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>

                                                            <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                                        </div>
                                                        {/*end::Details*/}
                                                    </div>
                                                    {/*end::Details*/}

                                                    {/*begin::Access menu*/}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" >Guest</option>
                                                            <option value="2" >Owner</option>
                                                            <option value="3" selected>Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/*end::Access menu*/}
                                                </div>
                                                {/*end::User*/}


                                            </div>
                                            {/*end::Users*/}

                                            {/*begin::Actions*/}
                                            <div className="d-flex flex-center mt-15">
                                                <button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">
                                                    Cancel
                                                </button>

                                                <button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">
                                                    Add Selected Users
                                                </button>
                                            </div>
                                            {/*end::Actions*/}
                                        </div>
                                        {/*end::Results*/}
                                        {/*begin::Empty*/}
                                        <div data-kt-search-element="empty" className="text-center d-none">
                                            {/*begin::Message*/}
                                            <div className="fw-semibold py-10">
                                                <div className="text-gray-600 fs-3 mb-2">No users found</div>

                                                <div className="text-muted fs-6">Try to search by username, full name or email...</div>
                                            </div>
                                            {/*end::Message*/}

                                            {/*begin::Illustration*/}
                                            <div className="text-center px-5">
                                                <img src="../../assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
                                            </div>
                                            {/*end::Illustration*/}
                                        </div>
                                        {/*end::Empty*/}                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Search*/}
                            </div>
                            {/*end::Modal body*/}
                        </div>
                        {/*end::Modal content*/}
                    </div>
                    {/*end::Modal dialog*/}
                </div>
                {/*end::Modal - Users Search*/}
                {/*begin::Modal - Invite Friends*/}
                <div className="modal fade" id="kt_modal_invite_friends" tabindex="-1" aria-hidden="true">
                    {/*begin::Modal dialog*/}
                    <div className="modal-dialog mw-650px">
                        {/*begin::Modal content*/}
                        <div className="modal-content">
                            {/*begin::Modal header*/}
                            <div className="modal-header pb-0 border-0 justify-content-end">
                                {/*begin::Close*/}
                                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                    <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                    </svg>

                                    </span>
                                    {/*end::Svg Icon*/}                </div>
                                {/*end::Close*/}
                            </div>
                            {/*begin::Modal header*/}

                            {/*begin::Modal body*/}
                            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                                {/*begin::Heading*/}
                                <div className="text-center mb-13">
                                    {/*begin::Title*/}
                                    <h1 className="mb-3">Invite a Friend</h1>
                                    {/*end::Title*/}

                                    {/*begin::Description*/}
                                    <div className="text-muted fw-semibold fs-5">
                                        If you need more info, please check out
                                        <a href="#" className="link-primary fw-bold">FAQ Page</a>.
                                    </div>
                                    {/*end::Description*/}
                                </div>
                                {/*end::Heading*/}

                                {/*begin::Google Contacts Invite*/}
                                <div className="btn btn-light-primary fw-bold w-100 mb-8">
                                    <img alt="Logo" src="../../assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />
                                    Invite Gmail Contacts
                                </div>
                                {/*end::Google Contacts Invite*/}

                                {/*begin::Separator*/}
                                <div className="separator d-flex flex-center mb-8">
                                    <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">or</span>
                                </div>
                                {/*end::Separator*/}

                                {/*begin::Textarea*/}
                                <textarea className="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here">
                                </textarea>
                                {/*end::Textarea*/}

                                {/*begin::Users*/}
                                <div className="mb-10">
                                    {/*begin::Heading*/}
                                    <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                                    {/*end::Heading*/}

                                    {/*begin::List*/}
                                    <div className="mh-300px scroll-y me-n7 pe-7">
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../../assets/media/avatars/300-6.jpg" />
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>

                                                    <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" selected>Owner</option>
                                                    <option value="3" >Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                        M                                            </span>
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>

                                                    <div className="fw-semibold text-muted">melody@altbox.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" selected>Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" >Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../../assets/media/avatars/300-1.jpg" />
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>

                                                    <div className="fw-semibold text-muted">max@kt.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" selected>Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../../assets/media/avatars/300-5.jpg" />
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>

                                                    <div className="fw-semibold text-muted">sean@dellito.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" selected>Owner</option>
                                                    <option value="3" >Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../../assets/media/avatars/300-25.jpg" />
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>

                                                    <div className="fw-semibold text-muted">brian@exchange.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" selected>Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                                        C                                            </span>
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>

                                                    <div className="fw-semibold text-muted">mik@pex.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" selected>Owner</option>
                                                    <option value="3" >Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../../assets/media/avatars/300-9.jpg" />
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>

                                                    <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" selected>Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                        O                                            </span>
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>

                                                    <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" selected>Owner</option>
                                                    <option value="3" >Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                                        N                                            </span>
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>

                                                    <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" selected>Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" >Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../../assets/media/avatars/300-23.jpg" />
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>

                                                    <div className="fw-semibold text-muted">dam@consilting.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" selected>Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                        E                                            </span>
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>

                                                    <div className="fw-semibold text-muted">emma@intenso.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" selected>Owner</option>
                                                    <option value="3" >Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../../assets/media/avatars/300-12.jpg" />
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>

                                                    <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" selected>Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" >Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-info text-info fw-semibold">
                                                        A                                            </span>
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>

                                                    <div className="fw-semibold text-muted">robert@benko.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" selected>Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../../assets/media/avatars/300-13.jpg" />
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>

                                                    <div className="fw-semibold text-muted">miller@mapple.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" selected>Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-success text-success fw-semibold">
                                                        L                                            </span>
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>

                                                    <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" selected>Owner</option>
                                                    <option value="3" >Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../../assets/media/avatars/300-21.jpg" />
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>

                                                    <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" selected>Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" >Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        <div className="d-flex flex-stack py-4 ">
                                            {/*begin::Details*/}
                                            <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../../assets/media/avatars/300-6.jpg" />
                                                </div>
                                                {/*end::Avatar*/}

                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>

                                                    <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                                </div>
                                                {/*end::Details*/}
                                            </div>
                                            {/*end::Details*/}

                                            {/*begin::Access menu*/}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" >Guest</option>
                                                    <option value="2" >Owner</option>
                                                    <option value="3" selected>Can Edit</option>
                                                </select>
                                            </div>
                                            {/*end::Access menu*/}
                                        </div>
                                        {/*end::User*/}
                                    </div>
                                    {/*end::List*/}
                                </div>
                                {/*end::Users*/}

                                {/*begin::Notice*/}
                                <div className="d-flex flex-stack">
                                    {/*begin::Label*/}
                                    <div className="me-5 fw-semibold">
                                        <label className="fs-6">Adding Users by Team Members</label>
                                        <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
                                    </div>
                                    {/*end::Label*/}

                                    {/*begin::Switch*/}
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="1" checked="checked" />

                                        <span className="form-check-label fw-semibold text-muted">
                                            Allowed
                                        </span>
                                    </label>
                                    {/*end::Switch*/}
                                </div>
                                {/*end::Notice*/}
                            </div>
                            {/*end::Modal body*/}
                        </div>
                        {/*end::Modal content*/}
                    </div>
                    {/*end::Modal dialog*/}
                </div>
                {/*end::Modal - Invite Friend*/} {/*end::Modals*/}
            </div >
            {/*end::Body*/}

        </>
    )
}

export default Pricing