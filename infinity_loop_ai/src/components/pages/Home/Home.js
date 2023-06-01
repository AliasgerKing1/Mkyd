/*eslint-disable */
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { getSidebarRedux } from "../../../Redux/SidebarReducer"
import { getPostRedux } from '../../../Redux/PostReducer'
import {HomeChangeLinkRedux} from "../../../Redux/HomeChangeLinkReducer"

import Header from "../../shared/Header"
import Footer from "../../shared/Footer"
import Sidebar from "../../shared/Sidebar"
import Posts from '../../shared/Posts'
import Posts2 from '../../shared/Posts2'
import { getFirstPost } from '../../../services/SocialService'
const Home = () => {
    let state4 = useSelector(state=>state.HomeChangeLinkReducer)
    let state3 = useSelector(state=>state.PostReducer)
    let state = useSelector(state => state.SidebarReducer)
    let state2 = useSelector(state2 => state2.SignInReducer)
    let dispatch = useDispatch()
    let [message, setMessage] = useState("")
    let [showSpinner, setShowSpinner] = useState(false)
    const [isScrolledToFixedHeight, setIsScrolledToFixedHeight] = useState(false);
    const [pages, setPages] = useState(2);
    const [infheight, setInfHeight] = useState(700)
    const fixedHeight = infheight; // the fixed height to check against

    useEffect(()=> {
//         if(state3.length == 0) {
// getFirstPost().then(result => {
// dispatch(getPostRedux(result.data))
// })
//         }

//         function handleScroll() {
//             const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             const isFixedHeightReached = scrollTop >= fixedHeight;
//             setIsScrolledToFixedHeight(isFixedHeightReached);
//           }
      
//           window.addEventListener("scroll", handleScroll);
      
//           return () => {
//             window.removeEventListener("scroll", handleScroll);
//           };
    },[])

    useEffect(() => {
        // if (isScrolledToFixedHeight) {
            // setShowSpinner(true);
          // Calling API
    //       fetch(`http://localhost:4000/api/social/?limit=2&page=${pages}`)
    //         .then((response) => response.json())
    //         .then((newData) => {
    // console.log(newData)
    // dispatch(getPostRedux(newData));
    // setShowSpinner(false);
    // setPages(pages + 2);
    // setInfHeight(infheight + 500);
    //           });
    //     }
      }, [isScrolledToFixedHeight]);
    let sideBarTrue = () => {
        if (state.condition == true) {
            dispatch(getSidebarRedux(false))
        }
    }
    return (
        <>
            <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
                {/*begin::Page*/}
                <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">


                    {/*begin::Wrapper*/}
                    <div className="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">


                        {state.condition == true ? (<div>
                            {/* <div className='row'>
                            <div className='col-md-3'> */}
                            {/*begin::Sidebar*/}
                            <Sidebar />
                            {/* {/* end::Sidebar  */}
                            {/* </div>
                            <div className='col-md-9'>  */}
                            {/*begin::Header*/}
                            <Header />
                            {/*end::Header*/}
                            {/*begin::Main*/}
                            <div className="app-main flex-column flex-row-fluid" id="kt_app_main" onClick={sideBarTrue}>
                                {/*begin::Content wrapper*/}
                                <div className="d-flex flex-column flex-column-fluid">


                                    {/*begin::Content*/}
                                    <div id="kt_app_content" className="app-content  flex-column-fluid ">
                                        {/*begin::Content container*/}
                                        <div id="kt_app_content_container" className="app-container  container-fluid ">
                                            {/*begin::Social - Feeds */}
                                            <div className="d-flex flex-row">
                                                {/*begin::Start sidebar*/}
                                                <div className="d-lg-flex flex-column flex-lg-row-auto w-lg-325px" data-kt-drawer="true" data-kt-drawer-name="start-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '250px': '300px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_social_start_sidebar_toggle">



                                                    {/*begin::User menu*/}
                                                    <div className="card mb-5 mb-xl-8">
                                                        {/*begin::Body*/}
                                                        <div className="card-body pt-15 px-0">
                                                            {/*begin::Member*/}
                                                            <div className="d-flex flex-column text-center mb-9 px-9">
                                                                {/*begin::Photo*/}
                                                                <div className="symbol symbol-80px symbol-lg-150px mb-4">
                                                                    <img src={state2.profile_photo} className="" alt="" />
                                                                </div>
                                                                {/*end::Photo*/}

                                                                {/*begin::Info*/}
                                                                <div className="text-center">
                                                                    {/*begin::Name*/}
                                                                    <NavLink to="#" className="text-gray-800 fw-bold text-hover-primary fs-4">{state2 && state2.name}</NavLink>
                                                                    {/*end::Name*/}

                                                                    {/*begin::Position*/}
                                                                    <span className="text-muted d-block fw-semibold">Grade 8, AE3 Student</span>
                                                                    {/*end::Position*/}
                                                                </div>
                                                                {/*end::Info*/}
                                                            </div>
                                                            {/*end::Member*/}

                                                            {/*begin::Row*/}
                                                            <div className="row px-9 mb-4">
                                                                {/*begin::Col*/}
                                                                <div className="col-md-4 text-center">
                                                                    <div className="text-gray-800 fw-bold fs-3">
                                                                        <span className="m-0 counted" data-kt-countup="true" data-kt-countup-value="642" data-kt-initialized="1">642</span>
                                                                    </div>

                                                                    <span className="text-gray-500 fs-8 d-block fw-bold">POSTS</span>
                                                                </div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-md-4 text-center">
                                                                    <div className="text-gray-800 fw-bold fs-3">
                                                                        <span className="m-0 counted" data-kt-countup="true" data-kt-countup-value="24" data-kt-initialized="1">24</span> K
                                                                    </div>

                                                                    <span className="text-gray-500 fs-8 d-block fw-bold">FOLLOWERS</span>
                                                                </div>
                                                                {/*end::Col*/}

                                                                {/*begin::Col*/}
                                                                <div className="col-md-4 text-center">
                                                                    <div className="text-gray-800 fw-bold fs-3">
                                                                        <span className="m-0 counted" data-kt-countup="true" data-kt-countup-value="12" data-kt-initialized="1">12</span> K
                                                                    </div>

                                                                    <span className="text-gray-500 fs-8 d-block fw-bold">FOLLOWING</span>
                                                                </div>
                                                                {/*end::Col*/}
                                                            </div>
                                                            {/*end::Row*/}

                                                            {/*begin::Navbar*/}
                                                            <div className="m-0">
                                                                {/*begin::Navs*/}
                                                                <ul className="nav nav-pills nav-pills-custom flex-column border-transparent fs-5 fw-bold">
                                                                    {/*begin::Nav item*/}
                                                                    <li className="nav-item mt-5" onClick={() => dispatch(HomeChangeLinkRedux(1))}>
                                                                        <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${state4 == 1 ? "active" : ""}`}>
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen010.svg*/}
                                                                            <span className="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3" d="M2 21V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H3C2.4 22 2 21.6 2 21Z" fill="currentColor"></path>
                                                                                <path d="M2 10V3C2 2.4 2.4 2 3 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H3C2.4 11 2 10.6 2 10Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}

                                                                            Feeds
                                                                            {/*begin::Bullet*/}
                                                                            <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                                                                            {/*end::Bullet*/}
                                                                        </a>
                                                                    </li>
                                                                    {/*end::Nav item*/}
                                                                    {/*begin::Nav item*/}
                                                                    <li className="nav-item mt-5" onClick={() => dispatch(HomeChangeLinkRedux(2))}>
                                                                        <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${state4 == 2 ? "active" : ""}`}>
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr070.svg*/}
                                                                            <span className="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor"></rect>
                                                                                <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor"></rect>
                                                                                <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor"></rect>
                                                                                <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor"></rect>
                                                                            </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}

                                                                            Activity
                                                                            {/*begin::Bullet*/}
                                                                            <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                                                                            {/*end::Bullet */}
                                                                        </a>
                                                                    </li>
                                                                    {/*end::Nav item*/}
                                                                    {/*begin::Nav item*/}
                                                                    <li className="nav-item mt-5" onClick={() => dispatch(HomeChangeLinkRedux(3))}>
                                                                        <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${state4 == 3 ? "active" : ""}`}>
                                                                            {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                                            <span className="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"></path>
                                                                                <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"></path>
                                                                                <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"></rect>
                                                                            </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}

                                                                            Followers
                                                                            {/*begin::Bullet*/}
                                                                            <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                                                                            {/*end::Bullet*/}
                                                                        </a>
                                                                    </li>
                                                                    {/*end::Nav item*/}
                                                                    {/*begin::Nav item*/}
                                                                    <li className="nav-item mt-5" onClick={() => dispatch(HomeChangeLinkRedux(4))}>
                                                                        <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${state4 == 4 ? "active" : ""}`}>
                                                                            {/*begin::Svg Icon | path: icons/duotune/coding/cod001.svg*/}
                                                                            <span className="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="currentColor"></path>
                                                                                <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}

                                                                            Settings
                                                                            {/*begin::Bullet*/}
                                                                            <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                                                                            {/*end::Bullet*/}
                                                                        </a>
                                                                    </li>
                                                                    {/*end::Nav item*/}
                                                                </ul>
                                                                {/*begin::Navs*/}
                                                            </div>
                                                            {/*end::Navbar*/}
                                                        </div>
                                                        {/*end::Body*/}
                                                    </div>
                                                    {/*end::User menu*/}
                                                    {/*begin::List widget 14*/}
                                                    <div className="card card-flush ">
                                                        {/*begin::Header*/}
                                                        <div className="card-header pt-5">
                                                            {/*begin::Title*/}
                                                            <h3 className="card-title align-items-start flex-column">
                                                                <span className="card-label fw-bold text-dark">Timeline</span>
                                                                <span className="text-gray-400 pt-2 fw-semibold fs-6">Latest activities</span>
                                                            </h3>
                                                            {/*end::Title*/}

                                                            {/*begin::Toolbar*/}
                                                            <div className="card-toolbar">
                                                                {/*begin::Menu*/}
                                                                <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                                                                    <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
                                                                        <rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                        <rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                        <rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                    </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </button>


                                                                {/*begin::Menu 2*/}
                                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                                                    {/*begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                                                    </div>
                                                                    {/*end::Menu item*/}

                                                                    {/*begin::Menu separator*/}
                                                                    <div className="separator mb-3 opacity-75"></div>
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
                                                                            <span className="menu-arrow"></span>
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
                                                                    <div className="separator mt-3 opacity-75"></div>
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

                                                                {/*end::Menu*/}
                                                            </div>
                                                            {/*end::Toolbar*/}
                                                        </div>
                                                        {/*end::Header*/}

                                                        {/*begin::Body*/}
                                                        <div className="card-body pt-6">
                                                            {/*begin::Timeline*/}
                                                            <div className="timeline-label">
                                                                {/*begin::Item*/}
                                                                <div className="timeline-item">
                                                                    {/*begin::Label*/}
                                                                    <div className="timeline-label fw-bold text-gray-800 fs-6">08:42</div>
                                                                    {/*end::Label*/}

                                                                    {/*begin::Badge*/}
                                                                    <div className="timeline-badge">
                                                                        <i className="fa fa-genderless text-gray-600 fs-1"></i>
                                                                    </div>
                                                                    {/*end::Badge*/}

                                                                    {/*begin::Text*/}
                                                                    <div className="fw-semibold text-gray-700 ps-3 fs-7">
                                                                        Outlines keep you honest. Indulging in poorly driving and keep structure
                                                                    </div>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Item*/}

                                                                {/*begin::Item*/}
                                                                <div className="timeline-item d-flex align-items-center">
                                                                    {/*begin::Label*/}
                                                                    <div className="timeline-label fw-bold text-gray-800 fs-6">10:00</div>
                                                                    {/*end::Label*/}

                                                                    {/*begin::Badge*/}
                                                                    <div className="timeline-badge">
                                                                        <i className="fa fa-genderless text-success fs-1"></i>
                                                                    </div>
                                                                    {/*end::Badge*/}

                                                                    {/*begin::Content*/}
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="fw-bold text-gray-800 px-3">AEOL meeting with</span>

                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px me-3">
                                                                            <img src="../../assets/media/avatars/300-1.jpg" alt="" />
                                                                        </div>
                                                                        {/*end::Avatar*/}

                                                                        {/*begin::Avatar*/}
                                                                        <div className="symbol symbol-35px">
                                                                            <img src="../../assets/media/avatars/300-2.jpg" alt="" />
                                                                        </div>
                                                                        {/*end::Avatar*/}
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
                                                                        <i className="fa fa-genderless text-danger fs-1"></i>
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
                                                                        <i className="fa fa-genderless text-primary fs-1"></i>
                                                                    </div>
                                                                    {/*end::Badge*/}

                                                                    {/*begin::Text*/}
                                                                    <div className="fw-semibold text-gray-700 ps-3 fs-7">
                                                                        Outlines keep you honest. Indulging in poorly driving and keep structure keep you honest great
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
                                                                        <i className="fa fa-genderless text-warning fs-1"></i>
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
                                                                        <i className="fa fa-genderless text-info fs-1"></i>
                                                                    </div>
                                                                    {/*end::Badge*/}

                                                                    {/*begin::Text*/}
                                                                    <div className="fw-semibold text-gray-700 ps-3 fs-7">
                                                                        Outlines keep you honest. Indulging in poorly driving and keep structure
                                                                    </div>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Item*/}

                                                                {/*begin::Item*/}
                                                                <div className="timeline-item">
                                                                    {/*begin::Label*/}
                                                                    <div className="timeline-label fw-bold text-gray-800 fs-6">14:37</div>
                                                                    {/*end::Label*/}

                                                                    {/*begin::Badge*/}
                                                                    <div className="timeline-badge">
                                                                        <i className="fa fa-genderless text-danger fs-1"></i>
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
                                                            </div>
                                                            {/*end::Timeline*/}
                                                        </div>
                                                        {/*end: Card Body*/}
                                                    </div>
                                                    {/*end: List widget 14*/}
                                                </div>
                                                {/*end::Start sidebar*/}

                                                {/*begin::Content*/}
                                                <div className="w-100 flex-lg-row-fluid mx-lg-13">
                                                    {/*begin::Mobile toolbar*/}
                                                    <div className="d-flex d-lg-none align-items-center justify-content-end mb-10">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_social_start_sidebar_toggle">
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                                <span className="svg-icon svg-icon-1"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"></path>
                                                                    <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"></path>
                                                                    <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"></rect>
                                                                </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}        </div>

                                                            <div className="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_social_end_sidebar_toggle">
                                                                {/*begin::Svg Icon | path: icons/duotune/coding/cod002.svg*/}
                                                                <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M18 22C19.7 22 21 20.7 21 19C21 18.5 20.9 18.1 20.7 17.7L15.3 6.30005C15.1 5.90005 15 5.5 15 5C15 3.3 16.3 2 18 2H6C4.3 2 3 3.3 3 5C3 5.5 3.1 5.90005 3.3 6.30005L8.7 17.7C8.9 18.1 9 18.5 9 19C9 20.7 7.7 22 6 22H18Z" fill="currentColor"></path>
                                                                    <path d="M18 2C19.7 2 21 3.3 21 5H9C9 3.3 7.7 2 6 2H18Z" fill="currentColor"></path>
                                                                    <path d="M9 19C9 20.7 7.7 22 6 22C4.3 22 3 20.7 3 19H9Z" fill="currentColor"></path>
                                                                </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}        </div>
                                                        </div>
                                                    </div>
                                                    {/*end::Mobile toolbar*/}


                                                    {/*begin::Main form*/}
                                                    <div className="card card-flush mb-10">
                                                        {/*begin::Header*/}
                                                        <div className="card-header justify-content-start align-items-center pt-4">
                                                            {/*begin::Photo*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="../../assets/media/avatars/300-3.jpg" className="" alt="" />
                                                            </div>
                                                            {/*end::Photo*/}

                                                            <span className="text-gray-400 fw-semibold fs-6">What’s on your mind, {state2.name}?</span>
                                                        </div>
                                                        {/*end::Header*/}

                                                        {/*begin::Body*/}
                                                        <div className="card-body pt-2 pb-0">
                                                            {/*begin::Input*/}
                                                            <textarea className="form-control bg-transparent border-0 px-0" id="kt_social_feeds_post_input" name="message" data-kt-autosize="true" rows="1" placeholder="Type your message..." style={{ overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: '64px' }} data-kt-initialized="1">
                                                            </textarea>
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Body*/}

                                                        {/*begin::Footer*/}
                                                        <div className="card-footer d-flex justify-content-end pt-0">
                                                            {/*begin::Post action*/}
                                                            <a href="../blog/post.html" className="btn btn-sm btn-primary" id="kt_social_feeds_post_btn">

                                                                {/*begin::Indicator label*/}
                                                                <span className="indicator-label">
                                                                    Post</span>
                                                                {/*end::Indicator label*/}

                                                                {/*begin::Indicator progress*/}
                                                                <span className="indicator-progress">
                                                                    Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                </span>
                                                                {/*end::Indicator progress*/}        </a>
                                                            {/*end::Post action*/}
                                                        </div>
                                                        {/*end::Footer*/}
                                                    </div>
                                                    {/*end::Main form*/}
                                                    {/*begin::Posts*/}
                                                    <Posts />
                                                    {/*end::Posts*/}

                                                    {/*begin::New post template*/}
                                                    <div className="d-none" id="kt_social_feeds_new_post">
                                                        {/*begin::Post New*/}
                                                        {/*begin::Card*/}
                                                        <div className="card card-flush mb-10">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header pt-9">
                                                                {/*begin::Author*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-50px me-5">

                                                                        <img src="../../assets/media/avatars/300-3.jpg" className="" alt="" />

                                                                    </div>
                                                                    {/*end::Avatar*/}

                                                                    {/*begin::Info*/}
                                                                    <div className="flex-grow-1">
                                                                        {/*begin::Name*/}
                                                                        <a href="#" className="text-gray-800 text-hover-primary fs-4 fw-bold">Jerry Kane</a>
                                                                        {/*end::Name*/}

                                                                        {/*begin::Date*/}
                                                                        <span className="text-gray-400 fw-semibold d-block">Yestarday at 5:06 PM</span>
                                                                        {/*end::Date*/}
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::Author*/}

                                                                {/*begin::Card toolbar*/}
                                                                <div className="card-toolbar">
                                                                    {/*begin::Menu wrapper*/}
                                                                    <div className="m-0">
                                                                        {/*begin::Menu toggle*/}
                                                                        <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">

                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                                                                            <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
                                                                                <rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                                <rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                                <rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                            </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </button>
                                                                        {/*end::Menu toggle*/}


                                                                        {/*begin::Menu 2*/}
                                                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                                                            {/*begin::Menu item*/}
                                                                            <div className="menu-item px-3">
                                                                                <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                                                            </div>
                                                                            {/*end::Menu item*/}

                                                                            {/*begin::Menu separator*/}
                                                                            <div className="separator mb-3 opacity-75"></div>
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
                                                                                    <span className="menu-arrow"></span>
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
                                                                            <div className="separator mt-3 opacity-75"></div>
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
                                                                    {/*end::Menu wrapper*/}
                                                                </div>
                                                                {/*end::Card toolbar*/}
                                                            </div>
                                                            {/*end::Card header*/}

                                                            {/*begin::Card body*/}
                                                            <div className="card-body">


                                                                {/*begin::Post content*/}
                                                                <div className="fs-6 fw-normal text-gray-700" data-kt-post-element="content">
                                                                    You can either decide on your final headline before outstanding you
                                                                    write the most of the rest of your creative post
                                                                </div>
                                                                {/*end::Post content*/}

                                                            </div>
                                                            {/*end::Card body*/}

                                                            {/*begin::Card footer*/}
                                                            <div className="card-footer pt-0">
                                                                {/*begin::Info*/}
                                                                <div className="mb-6">
                                                                    {/*begin::Separator*/}
                                                                    <div className="separator separator-solid"></div>
                                                                    {/*end::Separator*/}

                                                                    {/*begin::Nav*/}
                                                                    <ul className="nav py-3">
                                                                        {/*begin::Item*/}
                                                                        <li className="nav-item">
                                                                            <a className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible " data-bs-toggle="collapse" href="#kt_social_feeds_comments_2">

                                                                                <i className="bi bi-chat-square fs-2 me-1"></i>
                                                                                0 Comment
                                                                            </a>
                                                                        </li>
                                                                        {/*end::Item*/}

                                                                        {/*begin::Item*/}
                                                                        <li className="nav-item">
                                                                            <a href="#" className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                                                                                <i className="bi bi-heart fs-2 me-1"></i>

                                                                                0 Like
                                                                            </a>
                                                                        </li>
                                                                        {/*end::Item*/}

                                                                        {/*begin::Item*/}
                                                                        <li className="nav-item">
                                                                            <a href="#" className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4">
                                                                                <i className="bi bi-bookmark fs-2 me-1"></i>

                                                                                0 Saves
                                                                            </a>
                                                                        </li>
                                                                        {/*end::Item*/}
                                                                    </ul>
                                                                    {/*end::Nav*/}

                                                                    {/*begin::Separator*/}
                                                                    <div className="separator separator-solid mb-1"></div>
                                                                    {/*end::Separator*/}

                                                                </div>
                                                                {/*end::Info*/}

                                                                {/*begin::Comment form*/}
                                                                <div className="d-flex align-items-center">
                                                                    {/*begin::Author*/}
                                                                    <div className="symbol symbol-35px me-3">
                                                                        <img src="../../assets/media/avatars/300-3.jpg" alt="" />
                                                                    </div>
                                                                    {/*end::Author*/}

                                                                    {/*begin::Input group*/}
                                                                    <div className="position-relative w-100">
                                                                        {/*begin::Input*/}
                                                                        <textarea type="text" className="form-control form-control-solid border ps-5" rows="1" name="search" value="" data-kt-autosize="true" placeholder="Write your comment.." style={{ overflow: 'hidden', overflowWrap: 'break-word', resize: 'none' }} data-kt-initialized="1">                </textarea>
                                                                        {/*end::Input*/}

                                                                        {/*begin::Actions*/}
                                                                        <div className="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">
                                                                            {/*begin::Btn*/}
                                                                            <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                                                                                <i className="fonticon-attach fs-2"></i>
                                                                            </button>
                                                                            {/*end::Btn*/}

                                                                            {/*begin::Btn*/}
                                                                            <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                                                                                <i className="fonticon-smile fs-2"></i>
                                                                            </button>
                                                                            {/*end::Btn*/}

                                                                            {/*begin::Btn*/}
                                                                            <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                                                                                <i className="fonticon-gallery fs-2"></i>
                                                                            </button>
                                                                            {/*end::Btn*/}

                                                                            {/*begin::Btn*/}
                                                                            <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                                                                                <i className="fonticon-location fs-2"></i>
                                                                            </button>
                                                                            {/*end::Btn*/}
                                                                        </div>
                                                                        {/*end::Actions*/}
                                                                    </div>
                                                                    {/*end::Input group*/}
                                                                </div>
                                                                {/*end::Comment form*/}
                                                            </div>
                                                            {/*end::Card footer*/}
                                                        </div>
                                                        {/*end::Card*/}
                                                        {/*end::Post New*/} </div>
                                                    {/*end::More posts*/}
                                                    {/*begin::Show more feeds*/}
                                                    <div class="spinner-border text-primary" role="status" style={{display : showSpinner == true ? "block" : "none"}}>
  <span class="visually-hidden">Loading...</span>
</div>

                                                    {/* <div className="d-flex flex-center">
                                                        <a href="#" className="btn btn-primary fw-bold px-6" id="kt_social_feeds_more_posts_btn"> */}

                                                            {/*begin::Indicator label*/}
                                                            {/* <span className="indicator-label">
                                                                Show more</span> */}
                                                            {/*end::Indicator label*/}

                                                            {/*begin::Indicator progress*/}
                                                            {/* <span className="indicator-progress">
                                                                Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                            </span> */}
                                                            {/*end::Indicator progress*/}    
                                                            {/* </a>
                                                    </div> */}
                                                    {/*end::Show more feeds*/}
                                                </div>
                                                {/*end::Content*/}

                                            </div>
                                            {/*end::Social - Feeds*/}
                                        </div>
                                        {/*end::Content container*/}
                                    </div>
                                    {/*end::Content*/}
                                </div>
                                {/*end::Content wrapper*/}


                                {/*begin::Footer*/}
                                <Footer />
                                {/*end::Footer*/}                            </div>
                            {/*end:::Main*/}
                            {/* </div>
                            </div>                                       */}
                        </div>) : (<div>
                            <div className='row'>
                                <div className='col-md-3'>
                                    {/*begin::Sidebar*/}
                                    <Sidebar />
                                    {/* {/* end::Sidebar  */}
                                </div>
                                <div className='col-md-9'>
                                    {/*begin::Header*/}
                                    <Header />
                                    {/*end::Header*/}
                                    {/*begin::Main*/}
                                    <div className="app-main flex-column flex-row-fluid" id="kt_app_main" onClick={sideBarTrue}>
                                        {/*begin::Content wrapper*/}
                                        <div className="d-flex flex-column flex-column-fluid">


                                                {/*begin::Content*/}
                                                <div id="kt_app_content" className="app-content  flex-column-fluid ">
                                                    {/*begin::Content container*/}
                                                    <div id="kt_app_content_container" className="app-container  container-fluid ">
                                                        {/*begin::Social - Feeds */}
                                                        <div className="d-flex flex-row">
                                                            {/*begin::Start sidebar*/}
                                                            <div className="d-lg-flex flex-column flex-lg-row-auto w-lg-325px" data-kt-drawer="true" data-kt-drawer-name="start-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '250px': '300px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_social_start_sidebar_toggle">



                                                                {/*begin::User menu*/}
                                                                <div className="card mb-5 mb-xl-8">
                                                                    {/*begin::Body*/}
                                                                    <div className="card-body pt-15 px-0">
                                                                        {/*begin::Member*/}
                                                                        <div className="d-flex flex-column text-center mb-9 px-9">
                                                                            {/*begin::Photo*/}
                                                                            <div className="symbol symbol-80px symbol-lg-150px mb-4">
                                                                                <img src={state2.profile_photo} className="" alt="" />
                                                                            </div>
                                                                            {/*end::Photo*/}

                                                                            {/*begin::Info*/}
                                                                            <div className="text-center">
                                                                                {/*begin::Name*/}
                                                                                <NavLink to="#" className="text-gray-800 fw-bold text-hover-primary fs-4">{state2 && state2.name}</NavLink>
                                                                                {/*end::Name*/}

                                                                                {/*begin::Position*/}
                                                                                <span className="text-muted d-block fw-semibold">Grade 8, AE3 Student</span>
                                                                                {/*end::Position*/}
                                                                            </div>
                                                                            {/*end::Info*/}
                                                                        </div>
                                                                        {/*end::Member*/}

                                                                        {/*begin::Row*/}
                                                                        <div className="row px-9 mb-4">
                                                                            {/*begin::Col*/}
                                                                            <div className="col-md-4 text-center">
                                                                                <div className="text-gray-800 fw-bold fs-3">
                                                                                    <span className="m-0 counted" data-kt-countup="true" data-kt-countup-value="642" data-kt-initialized="1">642</span>
                                                                                </div>

                                                                                <span className="text-gray-500 fs-8 d-block fw-bold">POSTS</span>
                                                                            </div>
                                                                            {/*end::Col*/}

                                                                            {/*begin::Col*/}
                                                                            <div className="col-md-4 text-center">
                                                                                <div className="text-gray-800 fw-bold fs-3">
                                                                                    <span className="m-0 counted" data-kt-countup="true" data-kt-countup-value="24" data-kt-initialized="1">24</span> K
                                                                                </div>

                                                                                <span className="text-gray-500 fs-8 d-block fw-bold">FOLLOWERS</span>
                                                                            </div>
                                                                            {/*end::Col*/}

                                                                            {/*begin::Col*/}
                                                                            <div className="col-md-4 text-center">
                                                                                <div className="text-gray-800 fw-bold fs-3">
                                                                                    <span className="m-0 counted" data-kt-countup="true" data-kt-countup-value="12" data-kt-initialized="1">12</span> K
                                                                                </div>

                                                                                <span className="text-gray-500 fs-8 d-block fw-bold">FOLLOWING</span>
                                                                            </div>
                                                                            {/*end::Col*/}
                                                                        </div>
                                                                        {/*end::Row*/}

                                                                        {/*begin::Navbar*/}
                                                                        <div className="m-0">
                                                                            {/*begin::Navs*/}
                                                                            <ul className="nav nav-pills nav-pills-custom flex-column border-transparent fs-5 fw-bold">
                                                                                {/*begin::Nav item*/}
                                                                                <li className="nav-item mt-5" onClick={() => dispatch(HomeChangeLinkRedux(1))}>
                                                                                    <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${state4 == 1 ? "active" : ""}`} href="#">
                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen010.svg*/}
                                                                                        <span className="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path opacity="0.3" d="M2 21V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H3C2.4 22 2 21.6 2 21Z" fill="currentColor"></path>
                                                                                            <path d="M2 10V3C2 2.4 2.4 2 3 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H3C2.4 11 2 10.6 2 10Z" fill="currentColor"></path>
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}

                                                                                        Feeds
                                                                                        {/*begin::Bullet*/}
                                                                                        <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                                                                                        {/*end::Bullet*/}
                                                                                    </a>
                                                                                </li>
                                                                                {/*end::Nav item*/}
                                                                                {/*begin::Nav item*/}
                                                                                <li className="nav-item mt-5" onClick={() => dispatch(HomeChangeLinkRedux(2))}>
                                                                                    <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${state4 == 2 ? "active" : ""}`} href="#">
                                                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr070.svg*/}
                                                                                        <span className="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor"></rect>
                                                                                            <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor"></rect>
                                                                                            <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor"></rect>
                                                                                            <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor"></rect>
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}

                                                                                        Activity
                                                                                        {/*begin::Bullet*/}
                                                                                        <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                                                                                        {/*end::Bullet*/}
                                                                                    </a>
                                                                                </li>
                                                                                {/*end::Nav item*/}
                                                                                {/*begin::Nav item*/}
                                                                                <li className="nav-item mt-5" onClick={() => dispatch(HomeChangeLinkRedux(3))}>
                                                                                    <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${state4 == 3 ? "active" : ""}`} href="#">
                                                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                                                        <span className="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"></path>
                                                                                            <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"></path>
                                                                                            <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"></rect>
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}

                                                                                        Search
                                                                                        {/*begin::Bullet*/}
                                                                                        <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                                                                                        {/*end::Bullet*/}
                                                                                    </a>
                                                                                </li>
                                                                                {/*end::Nav item*/}
                                                                                {/*begin::Nav item*/}
                                                                                <li className="nav-item mt-5" onClick={() => dispatch(HomeChangeLinkRedux(4))}>
                                                                                    <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${state4 == 4 ? "active" : ""}`} href="#">
                                                                                        {/*begin::Svg Icon | path: icons/duotune/coding/cod001.svg*/}
                                                                                        <span className="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="currentColor"></path>
                                                                                            <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="currentColor"></path>
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}

                                                                                        Settings
                                                                                        {/*begin::Bullet*/}
                                                                                        <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                                                                                        {/*end::Bullet*/}
                                                                                    </a>
                                                                                </li>
                                                                                {/*end::Nav item*/}
                                                                            </ul>
                                                                            {/*begin::Navs*/}
                                                                        </div>
                                                                        {/*end::Navbar*/}
                                                                    </div>
                                                                    {/*end::Body*/}
                                                                </div>
                                                                {/*end::User menu*/}
                                                                {/*begin::List widget 14*/}
                                                                <div className="card card-flush ">
                                                                    {/*begin::Header*/}
                                                                    <div className="card-header pt-5">
                                                                        {/*begin::Title*/}
                                                                        <h3 className="card-title align-items-start flex-column">
                                                                            <span className="card-label fw-bold text-dark">Timeline</span>
                                                                            <span className="text-gray-400 pt-2 fw-semibold fs-6">Latest activities</span>
                                                                        </h3>
                                                                        {/*end::Title*/}

                                                                        {/*begin::Toolbar*/}
                                                                        <div className="card-toolbar">
                                                                            {/*begin::Menu*/}
                                                                            <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                                                                                <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
                                                                                    <rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                                    <rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                                    <rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                                </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </button>


                                                                            {/*begin::Menu 2*/}
                                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                                                                </div>
                                                                                {/*end::Menu item*/}

                                                                                {/*begin::Menu separator*/}
                                                                                <div className="separator mb-3 opacity-75"></div>
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
                                                                                        <span className="menu-arrow"></span>
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
                                                                                <div className="separator mt-3 opacity-75"></div>
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

                                                                            {/*end::Menu*/}
                                                                        </div>
                                                                        {/*end::Toolbar*/}
                                                                    </div>
                                                                    {/*end::Header*/}

                                                                    {/*begin::Body*/}
                                                                    <div className="card-body pt-6">
                                                                        {/*begin::Timeline*/}
                                                                        <div className="timeline-label">
                                                                            {/*begin::Item*/}
                                                                            <div className="timeline-item">
                                                                                {/*begin::Label*/}
                                                                                <div className="timeline-label fw-bold text-gray-800 fs-6">08:42</div>
                                                                                {/*end::Label*/}

                                                                                {/*begin::Badge*/}
                                                                                <div className="timeline-badge">
                                                                                    <i className="fa fa-genderless text-gray-600 fs-1"></i>
                                                                                </div>
                                                                                {/*end::Badge*/}

                                                                                {/*begin::Text*/}
                                                                                <div className="fw-semibold text-gray-700 ps-3 fs-7">
                                                                                    Outlines keep you honest. Indulging in poorly driving and keep structure
                                                                                </div>
                                                                                {/*end::Text*/}
                                                                            </div>
                                                                            {/*end::Item*/}

                                                                            {/*begin::Item*/}
                                                                            <div className="timeline-item d-flex align-items-center">
                                                                                {/*begin::Label*/}
                                                                                <div className="timeline-label fw-bold text-gray-800 fs-6">10:00</div>
                                                                                {/*end::Label*/}

                                                                                {/*begin::Badge*/}
                                                                                <div className="timeline-badge">
                                                                                    <i className="fa fa-genderless text-success fs-1"></i>
                                                                                </div>
                                                                                {/*end::Badge*/}

                                                                                {/*begin::Content*/}
                                                                                <div className="d-flex align-items-center">
                                                                                    <span className="fw-bold text-gray-800 px-3">AEOL meeting with</span>

                                                                                    {/*begin::Avatar*/}
                                                                                    <div className="symbol symbol-35px me-3">
                                                                                        <img src="../../assets/media/avatars/300-1.jpg" alt="" />
                                                                                    </div>
                                                                                    {/*end::Avatar*/}

                                                                                    {/*begin::Avatar*/}
                                                                                    <div className="symbol symbol-35px">
                                                                                        <img src="../../assets/media/avatars/300-2.jpg" alt="" />
                                                                                    </div>
                                                                                    {/*end::Avatar*/}
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
                                                                                    <i className="fa fa-genderless text-danger fs-1"></i>
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
                                                                                    <i className="fa fa-genderless text-primary fs-1"></i>
                                                                                </div>
                                                                                {/*end::Badge*/}

                                                                                {/*begin::Text*/}
                                                                                <div className="fw-semibold text-gray-700 ps-3 fs-7">
                                                                                    Outlines keep you honest. Indulging in poorly driving and keep structure keep you honest great
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
                                                                                    <i className="fa fa-genderless text-warning fs-1"></i>
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
                                                                                    <i className="fa fa-genderless text-info fs-1"></i>
                                                                                </div>
                                                                                {/*end::Badge*/}

                                                                                {/*begin::Text*/}
                                                                                <div className="fw-semibold text-gray-700 ps-3 fs-7">
                                                                                    Outlines keep you honest. Indulging in poorly driving and keep structure
                                                                                </div>
                                                                                {/*end::Text*/}
                                                                            </div>
                                                                            {/*end::Item*/}

                                                                            {/*begin::Item*/}
                                                                            <div className="timeline-item">
                                                                                {/*begin::Label*/}
                                                                                <div className="timeline-label fw-bold text-gray-800 fs-6">14:37</div>
                                                                                {/*end::Label*/}

                                                                                {/*begin::Badge*/}
                                                                                <div className="timeline-badge">
                                                                                    <i className="fa fa-genderless text-danger fs-1"></i>
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
                                                                        </div>
                                                                        {/*end::Timeline*/}
                                                                    </div>
                                                                    {/*end: Card Body*/}
                                                                </div>
                                                                {/*end: List widget 14*/}
                                                            </div>
                                                            {/*end::Start sidebar*/}

                                                            {/*begin::Content*/}
                                                            <div className="w-100 flex-lg-row-fluid mx-lg-13">
                                                                {/*begin::Mobile toolbar*/}
                                                                <div className="d-flex d-lg-none align-items-center justify-content-end mb-10">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_social_start_sidebar_toggle">
                                                                            {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                                            <span className="svg-icon svg-icon-1"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"></path>
                                                                                <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"></path>
                                                                                <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"></rect>
                                                                            </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}        </div>

                                                                        <div className="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_social_end_sidebar_toggle">
                                                                            {/*begin::Svg Icon | path: icons/duotune/coding/cod002.svg*/}
                                                                            <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3" d="M18 22C19.7 22 21 20.7 21 19C21 18.5 20.9 18.1 20.7 17.7L15.3 6.30005C15.1 5.90005 15 5.5 15 5C15 3.3 16.3 2 18 2H6C4.3 2 3 3.3 3 5C3 5.5 3.1 5.90005 3.3 6.30005L8.7 17.7C8.9 18.1 9 18.5 9 19C9 20.7 7.7 22 6 22H18Z" fill="currentColor"></path>
                                                                                <path d="M18 2C19.7 2 21 3.3 21 5H9C9 3.3 7.7 2 6 2H18Z" fill="currentColor"></path>
                                                                                <path d="M9 19C9 20.7 7.7 22 6 22C4.3 22 3 20.7 3 19H9Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}        </div>
                                                                    </div>
                                                                </div>
                                                                {/*end::Mobile toolbar*/}


                                                                {/*begin::Main form*/}
                                                                <div className="card card-flush mb-10">
                                                                    {/*begin::Header*/}
                                                                    <div className="card-header justify-content-start align-items-center pt-4">
                                                                        {/*begin::Photo*/}
                                                                        <div className="symbol symbol-45px me-5">
                                                                            <img src={state2.profile_photo} className="" alt="" />
                                                                        </div>
                                                                        {/*end::Photo*/}

                                                                        <span className="text-gray-400 fw-semibold fs-6">What’s on your mind, {state2.name}?</span>
                                                                    </div>
                                                                    {/*end::Header*/}

                                                                    {/*begin::Body*/}
                                                                    <div className="card-body pt-2 pb-0">
                                                                        {/*begin::Input*/}
                                                                        <textarea className="form-control bg-transparent border-0 px-0" id="kt_social_feeds_post_input" name="message" data-kt-autosize="true" rows="1" placeholder="Type your message..." onChange={(e)=> setMessage(e.target.value)} value={message} style={{ overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: '64px' }} data-kt-initialized="1">
                                                                        </textarea>
                                                                        {/*end::Input*/}
                                                                    </div>
                                                                    {/*end::Body*/}

                                                                    {/*begin::Footer*/}
                                                                    <div className="card-footer d-flex justify-content-end pt-0">
                                                                        {/*begin::Post action*/}
                                                                        <a href="../blog/post.html" className="btn btn-sm btn-primary" id="kt_social_feeds_post_btn">

                                                                            {/*begin::Indicator label*/}
                                                                            <span className="indicator-label">
                                                                                Post</span>
                                                                            {/*end::Indicator label*/}

                                                                            {/*begin::Indicator progress*/}
                                                                            <span className="indicator-progress">
                                                                                Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                            </span>
                                                                            {/*end::Indicator progress*/}        </a>
                                                                        {/*end::Post action*/}
                                                                    </div>
                                                                    {/*end::Footer*/}
                                                                </div>
                                                                {/*end::Main form*/}
                                                                {/*begin::Posts*/}
                                                                <Posts2 />
                                                                {/*end::Posts*/}

                                                                {/*begin::New post template*/}
                                                                <div className="d-none" id="kt_social_feeds_new_post">
                                                                    {/*begin::Post New*/}
                                                                    {/*begin::Card*/}
                                                                    <div className="card card-flush mb-10">
                                                                        {/*begin::Card header*/}
                                                                        <div className="card-header pt-9">
                                                                            {/*begin::Author*/}
                                                                            <div className="d-flex align-items-center">
                                                                                {/*begin::Avatar*/}
                                                                                <div className="symbol symbol-50px me-5">

                                                                                    <img src="../../assets/media/avatars/300-3.jpg" className="" alt="" />

                                                                                </div>
                                                                                {/*end::Avatar*/}

                                                                                {/*begin::Info*/}
                                                                                <div className="flex-grow-1">
                                                                                    {/*begin::Name*/}
                                                                                    <a href="#" className="text-gray-800 text-hover-primary fs-4 fw-bold">Jerry Kane</a>
                                                                                    {/*end::Name*/}

                                                                                    {/*begin::Date*/}
                                                                                    <span className="text-gray-400 fw-semibold d-block">Yestarday at 5:06 PM</span>
                                                                                    {/*end::Date*/}
                                                                                </div>
                                                                                {/*end::Info*/}
                                                                            </div>
                                                                            {/*end::Author*/}

                                                                            {/*begin::Card toolbar*/}
                                                                            <div className="card-toolbar">
                                                                                {/*begin::Menu wrapper*/}
                                                                                <div className="m-0">
                                                                                    {/*begin::Menu toggle*/}
                                                                                    <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">

                                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                                                                                        <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
                                                                                            <rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                                            <rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                                            <rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
                                                                                        </svg>
                                                                                        </span>
                                                                                        {/*end::Svg Icon*/}
                                                                                    </button>
                                                                                    {/*end::Menu toggle*/}


                                                                                    {/*begin::Menu 2*/}
                                                                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                                                                        {/*begin::Menu item*/}
                                                                                        <div className="menu-item px-3">
                                                                                            <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                                                                        </div>
                                                                                        {/*end::Menu item*/}

                                                                                        {/*begin::Menu separator*/}
                                                                                        <div className="separator mb-3 opacity-75"></div>
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
                                                                                                <span className="menu-arrow"></span>
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
                                                                                        <div className="separator mt-3 opacity-75"></div>
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
                                                                                {/*end::Menu wrapper*/}
                                                                            </div>
                                                                            {/*end::Card toolbar*/}
                                                                        </div>
                                                                        {/*end::Card header*/}

                                                                        {/*begin::Card body*/}
                                                                        <div className="card-body">


                                                                            {/*begin::Post content*/}
                                                                            <div className="fs-6 fw-normal text-gray-700" data-kt-post-element="content">
                                                                                You can either decide on your final headline before outstanding you
                                                                                write the most of the rest of your creative post
                                                                            </div>
                                                                            {/*end::Post content*/}

                                                                        </div>
                                                                        {/*end::Card body*/}

                                                                        {/*begin::Card footer*/}
                                                                        <div className="card-footer pt-0">
                                                                            {/*begin::Info*/}
                                                                            <div className="mb-6">
                                                                                {/*begin::Separator*/}
                                                                                <div className="separator separator-solid"></div>
                                                                                {/*end::Separator*/}

                                                                                {/*begin::Nav*/}
                                                                                <ul className="nav py-3">
                                                                                    {/*begin::Item*/}
                                                                                    <li className="nav-item">
                                                                                        <a className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible " data-bs-toggle="collapse" href="#kt_social_feeds_comments_2">

                                                                                            <i className="bi bi-chat-square fs-2 me-1"></i>
                                                                                            0 Comment
                                                                                        </a>
                                                                                    </li>
                                                                                    {/*end::Item*/}

                                                                                    {/*begin::Item*/}
                                                                                    <li className="nav-item">
                                                                                        <a href="#" className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                                                                                            <i className="bi bi-heart fs-2 me-1"></i>

                                                                                            0 Like
                                                                                        </a>
                                                                                    </li>
                                                                                    {/*end::Item*/}

                                                                                    {/*begin::Item*/}
                                                                                    <li className="nav-item">
                                                                                        <a href="#" className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4">
                                                                                            <i className="bi bi-bookmark fs-2 me-1"></i>

                                                                                            0 Saves
                                                                                        </a>
                                                                                    </li>
                                                                                    {/*end::Item*/}
                                                                                </ul>
                                                                                {/*end::Nav*/}

                                                                                {/*begin::Separator*/}
                                                                                <div className="separator separator-solid mb-1"></div>
                                                                                {/*end::Separator*/}

                                                                            </div>
                                                                            {/*end::Info*/}

                                                                            {/*begin::Comment form*/}
                                                                            <div className="d-flex align-items-center">
                                                                                {/*begin::Author*/}
                                                                                <div className="symbol symbol-35px me-3">
                                                                                    <img src="../../assets/media/avatars/300-3.jpg" alt="" />
                                                                                </div>
                                                                                {/*end::Author*/}

                                                                                {/*begin::Input group*/}
                                                                                <div className="position-relative w-100">
                                                                                    {/*begin::Input*/}
                                                                                    <textarea type="text" className="form-control form-control-solid border ps-5" rows="1" name="search" value="" data-kt-autosize="true" placeholder="Write your comment.." style={{ overflow: 'hidden', overflowWrap: 'break-word', resize: 'none' }} data-kt-initialized="1">                </textarea>
                                                                                    {/*end::Input*/}

                                                                                    {/*begin::Actions*/}
                                                                                    <div className="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">
                                                                                        {/*begin::Btn*/}
                                                                                        <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                                                                                            <i className="fonticon-attach fs-2"></i>
                                                                                        </button>
                                                                                        {/*end::Btn*/}

                                                                                        {/*begin::Btn*/}
                                                                                        <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                                                                                            <i className="fonticon-smile fs-2"></i>
                                                                                        </button>
                                                                                        {/*end::Btn*/}

                                                                                        {/*begin::Btn*/}
                                                                                        <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                                                                                            <i className="fonticon-gallery fs-2"></i>
                                                                                        </button>
                                                                                        {/*end::Btn*/}

                                                                                        {/*begin::Btn*/}
                                                                                        <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                                                                                            <i className="fonticon-location fs-2"></i>
                                                                                        </button>
                                                                                        {/*end::Btn*/}
                                                                                    </div>
                                                                                    {/*end::Actions*/}
                                                                                </div>
                                                                                {/*end::Input group*/}
                                                                            </div>
                                                                            {/*end::Comment form*/}
                                                                        </div>
                                                                        {/*end::Card footer*/}
                                                                    </div>
                                                                    {/*end::Card*/}
                                                                    {/*end::Post New*/} </div>
                                                                {/*end::More posts*/}
                                                                {/*begin::Show more feeds*/}
                                                                <div class="spinner-border text-primary" role="status" style={{display : showSpinner == true ? "block" : "none"}}>
  <span class="visually-hidden">Loading...</span>
</div>

                                                                {/* <div className="d-flex flex-center">
                                                                    <a href="#" className="btn btn-primary fw-bold px-6" id="kt_social_feeds_more_posts_btn"> */}

                                                                        {/*begin::Indicator label*/}
                                                                        {/* <span className="indicator-label">
                                                                            Show more</span> */}
                                                                        {/*end::Indicator label*/}

                                                                        {/*begin::Indicator progress*/}
                                                                        {/* <span className="indicator-progress">
                                                                            Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                        </span> */}
                                                                        {/*end::Indicator progress*/} 
                                                                           {/* </a>
                                                                </div> */}
                                                                {/*end::Show more feeds*/}
                                                            </div>
                                                            {/*end::Content*/}

                                                        </div>
                                                        {/*end::Social - Feeds*/}
                                                    </div>
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
                            </div>
                        </div>)}


                    </div>
                    {/*end::Wrapper*/}


                </div>
                {/*end::Page*/}
            </div>
        </>
    )
}
export default Home