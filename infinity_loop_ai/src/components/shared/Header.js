/*eslint-disable */
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getSidebarRedux } from "../../Redux/SidebarReducer"
import { NavLink } from 'react-router-dom'

const Header = () => {
    let dispatch = useDispatch()
    let state = useSelector(state => state.SignInReducer)
    let sideBarTrue = () => {
        dispatch(getSidebarRedux(true))
    }
    return (
        <>
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
                                    Social                                            </li>
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
                                    Designs                                            </li>
                                {/*end::Item*/}


                            </ul>
                            {/*end::Breadcrumb*/}

                            {/*begin::Title*/}
                            <h1 className="text-gray-900 fw-bolder m-0">
                                Designs
                            </h1>
                            {/*end::Title*/}
                        </div>
                        {/*end::Page title*/}
                        {/*begin::Action*/}
                        { state.plan == "free" ?(<NavLink to="/auth/create/design" className="btn btn-primary d-flex flex-center h-35px h-lg-40px">
                            Create <span className="d-none d-sm-inline ps-2">New Design</span>
                        </NavLink>) : (<NavLink to="/auth/create/design/react" className="btn btn-primary d-flex flex-center h-35px h-lg-40px">
                            Create <span className="d-none d-sm-inline ps-2">New Design</span>
                        </NavLink>)}
                        {/*end::Action*/}
                    </div>
                    {/*end::Header wrapper*/}            </div>
                {/*end::Header container*/}
            </div>
        </>
    )
}

export default Header