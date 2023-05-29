/*eslint-disable */
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getSidebarConditionRedux } from "../../Redux/SidebarReducer"
const Sidebar = () => {
    let state = useSelector(state => state.SidebarReducer)
    let dispatch = useDispatch()
    let [isMenu, setIsMenu] = useState(false);
    let [isChangeWorkSpace, setIsChangeWorkSpace] = useState(false);
    let [isInternalMenu1, setIsInternalMenu1] = useState(false);
    let [isInternalMenu2, setIsInternalMenu2] = useState(false);
    let [isInternalMenu3, setIsInternalMenu3] = useState(false);
    let [drawer, setDrawer] = useState(false);
    let [showDashboard, setShowDashboard] = useState(false)
    let [showPages, setShowPages] = useState(false)
    let [showApps, setShowApps] = useState(false)
    let [showUtilities, setShowUtilities] = useState(false)
    let [showHelp, setShowHelp] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }
        if (screenWidth > 991) {
            setDrawer(false)
            dispatch(getSidebarConditionRedux(false))
        } else {
            setDrawer(true)
            dispatch(getSidebarConditionRedux(true))
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <div id="kt_app_sidebar" className={`app-sidebar  flex-column drawer drawer-start ${state && state.stateVar == true ? "drawer-on" : ""}`}
                data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
                style={{ width: '250px !important', transform: drawer == true && state.stateVar == false ? "translateX(-100%)" : "none" }}
            >

                {/*begin::Header*/}
                <div className={`app-sidebar-header d-none d-lg-flex px-6 pt-8 pb-4 ${state && state.stateVar == true ? "d-none" : ""}`} id="kt_app_sidebar_header">
                    {/*begin::Toggle*/}
                    <button type="button" data-kt-element="selected" className="btn btn-outline btn-custom btn-flex w-100 show menu-dropdown" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, -1px" onClick={() => isChangeWorkSpace == false ? setIsChangeWorkSpace(true) : setIsChangeWorkSpace(false)}>
                        {/*begin::Logo*/}
                        <span className="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="/assets/media/logos/default-small.svg" data-kt-element="logo" className="h-30px" />
                        </span>
                        {/*end::Logo*/}

                        {/*begin::Info*/}
                        <span className="d-flex flex-column align-items-start flex-grow-1">
                            <span className="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                Metronic            </span>
                            <span className="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                Workspace            </span>
                        </span>
                        {/*end::Info*/}

                        {/*begin::Arrows*/}
                        <span className="d-flex flex-column me-n4">
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr073.svg*/}
                            <span className="svg-icon svg-icon-3 svg-icon-gray-700">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5657 11.3657L16.75 15.55C17.1642 15.9643 17.8358 15.9643 18.25 15.55C18.6642 15.1358 18.6642 14.4643 18.25 14.05L12.7071 8.50716C12.3166 8.11663 11.6834 8.11663 11.2929 8.50715L5.75 14.05C5.33579 14.4643 5.33579 15.1358 5.75 15.55C6.16421 15.9643 6.83579 15.9643 7.25 15.55L11.4343 11.3657C11.7467 11.0533 12.2533 11.0533 12.5657 11.3657Z" fill="currentColor" />
                            </svg>
                            </span>
                            {/*end::Svg Icon*/}            {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                            <span className="svg-icon svg-icon-3 svg-icon-gray-700"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                            </svg>
                            </span>
                            {/*end::Svg Icon*/}        </span>
                        {/*end::Arrows*/}
                    </button>
                    {/*end::Toggle*/}

                    {/*begin::Menu*/}
                    <div className={`menu menu-sub menu-sub-dropdown menu-column menu-state-bg menu-rounded w-300px ps-3 ${isChangeWorkSpace == true ? "show" : ""}`} data-kt-menu="true" style={{ zIndex: '107', position: 'fixed', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(20px, 85px)' }} data-popper-placement="bottom-start">
                        {/*begin::Menu wrapper*/}
                        <div className="hover-scroll-y h-250px my-3 pe-5 me-n1">
                            {/*begin::Menu item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a href="#" className="menu-link px-3 py-3 active" data-kt-element="project">
                                    {/*begin::Logo*/}
                                    <span className="d-flex flex-center flex-shrink-0 w-40px me-3">
                                        <img alt="Logo" src="/assets/media/logos/default-small.svg" data-kt-element="logo" className="h-30px" />
                                    </span>
                                    {/*end::Logo*/}

                                    {/*begin::Info*/}
                                    <span className="d-flex flex-column align-items-start">
                                        <span className="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                            Metronic                            </span>
                                        <span className="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                            Workspace                            </span>
                                    </span>
                                    {/*end::Info*/}
                                </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a href="#" className="menu-link px-3 py-3 " data-kt-element="project">
                                    {/*begin::Logo*/}
                                    <span className="d-flex flex-center flex-shrink-0 w-40px me-3">
                                        <img alt="Logo" src="/assets/media/svg/brand-logos/slack-icon.svg" data-kt-element="logo" className="h-30px" />
                                    </span>
                                    {/*end::Logo*/}

                                    {/*begin::Info*/}
                                    <span className="d-flex flex-column align-items-start">
                                        <span className="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                            Slack                            </span>
                                        <span className="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                            Messanger                            </span>
                                    </span>
                                    {/*end::Info*/}
                                </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a href="#" className="menu-link px-3 py-3 " data-kt-element="project">
                                    {/*begin::Logo*/}
                                    <span className="d-flex flex-center flex-shrink-0 w-40px me-3">
                                        <img alt="Logo" src="/assets/media/svg/brand-logos/dribbble-icon-1.svg" data-kt-element="logo" className="h-30px" />
                                    </span>
                                    {/*end::Logo*/}

                                    {/*begin::Info*/}
                                    <span className="d-flex flex-column align-items-start">
                                        <span className="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                            Dribbble                            </span>
                                        <span className="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                            Community                            </span>
                                    </span>
                                    {/*end::Info*/}
                                </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a href="#" className="menu-link px-3 py-3 " data-kt-element="project">
                                    {/*begin::Logo*/}
                                    <span className="d-flex flex-center flex-shrink-0 w-40px me-3">
                                        <img alt="Logo" src="/assets/media/svg/brand-logos/bootstrap5.svg" data-kt-element="logo" className="h-30px" />
                                    </span>
                                    {/*end::Logo*/}

                                    {/*begin::Info*/}
                                    <span className="d-flex flex-column align-items-start">
                                        <span className="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                            Bootstrap                            </span>
                                        <span className="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                            CSS & JS Framework                            </span>
                                    </span>
                                    {/*end::Info*/}
                                </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a href="#" className="menu-link px-3 py-3 " data-kt-element="project">
                                    {/*begin::Logo*/}
                                    <span className="d-flex flex-center flex-shrink-0 w-40px me-3">
                                        <img alt="Logo" src="/assets/media/svg/brand-logos/spotify-2.svg" data-kt-element="logo" className="h-30px" />
                                    </span>
                                    {/*end::Logo*/}

                                    {/*begin::Info*/}
                                    <span className="d-flex flex-column align-items-start">
                                        <span className="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                            Spotify                            </span>
                                        <span className="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                            Podcasts                            </span>
                                    </span>
                                    {/*end::Info*/}
                                </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a href="#" className="menu-link px-3 py-3 " data-kt-element="project">
                                    {/*begin::Logo*/}
                                    <span className="d-flex flex-center flex-shrink-0 w-40px me-3">
                                        <img alt="Logo" src="/assets/media/svg/brand-logos/beats-electronics.svg" data-kt-element="logo" className="h-30px" />
                                    </span>
                                    {/*end::Logo*/}

                                    {/*begin::Info*/}
                                    <span className="d-flex flex-column align-items-start">
                                        <span className="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                            Beats                            </span>
                                        <span className="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                            Electronics                            </span>
                                    </span>
                                    {/*end::Info*/}
                                </a>
                            </div>
                            {/*end::Menu item*/}
                        </div>
                        {/*end::Menu wrapper*/}
                    </div>
                    {/*end::Menu*/}
                </div>
                {/*end::Header*/}
                {/*begin::Navs*/}
                <div className="app-sidebar-navs flex-column-fluid py-6" id="kt_app_sidebar_navs" onClick={() => setIsChangeWorkSpace(false)}>
                    <div
                        id="kt_app_sidebar_navs_wrappers"
                        className="hover-scroll-y my-2"
                        data-kt-scroll="true"
                        data-kt-scroll-activate="true"
                        data-kt-scroll-height="auto"
                        data-kt-scroll-dependencies="#kt_app_sidebar_header, #kt_app_sidebar_footer"
                        data-kt-scroll-wrappers="#kt_app_sidebar_navs"
                        data-kt-scroll-offset="5px">


                        {/*begin::Quick links*/}
                        <div className="menu menu-rounded menu-column">
                            {/*begin::Menu Item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a href="../apps/projects/project.html" className="menu-link">
                                    {/*begin::Icon*/}
                                    <span className="menu-icon">
                                        <i className="fonticon-stats"></i>
                                    </span>
                                    {/*end::Icon*/}

                                    {/*begin::Title*/}
                                    <span className="menu-title">
                                        Tasks                </span>
                                    {/*end::Title*/}

                                    {/*begin::Badge*/}
                                    <span className="menu-badge">
                                        <span className="badge badge-primary">
                                            6                    </span>
                                    </span>
                                    {/*end::Badge*/}
                                </a>
                                {/*end:::Menu link*/}
                            </div>
                            {/*end::Menu Item*/}
                            {/*begin::Menu Item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a href="../apps/projects/activity.html" className="menu-link">
                                    {/*begin::Icon*/}
                                    <span className="menu-icon">
                                        <i className="fonticon-image"></i>
                                    </span>
                                    {/*end::Icon*/}

                                    {/*begin::Title*/}
                                    <span className="menu-title">
                                        Activities                </span>
                                    {/*end::Title*/}

                                    {/*begin::Badge*/}
                                    <span className="menu-badge">
                                        <span className="badge badge-danger">
                                            24                    </span>
                                    </span>
                                    {/*end::Badge*/}
                                </a>
                                {/*end:::Menu link*/}
                            </div>
                            {/*end::Menu Item*/}

                        </div>
                        {/*end::Quick links*/}
                        {/*begin::Separator*/}
                        <div className="app-sidebar-separator separator"></div>
                        {/*end::Separator*/}
                        {/*begin::Sidebar menu*/}
                        <div id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" className="menu menu-column menu-rounded menu-sub-indention menu-active-bg">
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" onClick={() => setShowDashboard(showDashboard == true ? false : true)} className={`menu-item menu-accordion ${showDashboard == true ? "hover show" : ""}`} >{/*begin:Menu link*/}
                                <span className="menu-link" >

                                    <span className="menu-icon" ><i className="fonticon-house fs-2"></i></span>

                                    <span className="menu-title" >Dashboards</span>

                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}{/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion" style={{ display: showDashboard == false ? "none" : "", overflow: showDashboard == false ? "hidden" : "" }}>{/*begin:Menu item*/}
                                    <div className="menu-item" >{/*begin:Menu link*/}
                                        <a className="menu-link" href="../index.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Default</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                    <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="ecommerce.html" >

                                        <span className="menu-bullet" >

                                            <span className="bullet bullet-dot"></span>
                                        </span>

                                        <span className="menu-title" >eCommerce</span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                    <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="projects.html" >

                                        <span className="menu-bullet" >

                                            <span className="bullet bullet-dot"></span>
                                        </span>

                                        <span className="menu-title" >Projects</span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                    <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="online-courses.html" >

                                        <span className="menu-bullet" >

                                            <span className="bullet bullet-dot"></span>
                                        </span>

                                        <span className="menu-title" >Online Courses</span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                    <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="marketing.html" >

                                        <span className="menu-bullet" >

                                            <span className="bullet bullet-dot"></span>
                                        </span>

                                        <span className="menu-title" >Marketing</span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}
                                    <div className="menu-inner flex-column collapse show" id="kt_app_sidebar_menu_dashboards_collapse">{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="bidding.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Bidding</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="pos.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >POS System</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="call-center.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Call Center</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="logistics.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Logistics</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link active" href="website-analytics.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Website Analytics</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="finance-performance.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Finance Performance</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="store-analytics.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Store Analytics</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="social.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Social</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="delivery.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Delivery</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="crypto.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Crypto</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="school.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >School</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="podcast.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Podcast</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}
                                        <div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../landing.html" >

                                            <span className="menu-bullet" >

                                                <span className="bullet bullet-dot"></span>
                                            </span>

                                            <span className="menu-title" >Landing</span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>
                                <div className="menu-item">
                                    <div className="menu-content">
                                        <a className="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible active" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show 12 More">
                                                <span data-kt-toggle-text-target="true">Show</span> {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                            <span className="svg-icon toggle-on svg-icon-2 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                                <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                                            </svg>
                                            </span>
                                            {/*end::Svg Icon*/}{/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                            <span className="svg-icon toggle-off svg-icon-2 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                                <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                                <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                                            </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                        </a>
                                    </div>
                                </div>
                                </div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" onClick={() => setShowPages(showPages == true ? false : true)} className={`menu-item menu-accordion ${showPages == true ? "hover show" : ""}`} >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-icon" ><i className="fonticon-stats fs-2"></i>
                            </span>
                                <span className="menu-title" >Pages
                                </span>
                                <span className="menu-arrow" >

                                </span>

                            </span>
                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" style={{ display: showPages == false ? "none" : "", overflow: showPages == false ? "hidden" : "" }}>{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                </span>

                                </span>
                                    <span className="menu-title" >User Profile
                                    </span>
                                    <span className="menu-arrow" >

                                    </span>

                                </span>
                                    {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/user-profile/overview.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Overview
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/user-profile/projects.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Projects
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/user-profile/campaigns.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Campaigns
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/user-profile/documents.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Documents
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/user-profile/followers.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Followers
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/user-profile/activity.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Activity
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Account
                                        </span>
                                        <span className="menu-arrow" >

                                        </span>

                                    </span>
                                    {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../account/overview.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

</span>
    <span className="menu-title" >Overview
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../account/settings.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Settings
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../account/security.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Security
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../account/activity.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Activity
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../account/billing.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Billing
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../account/statements.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Statements
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../account/referrals.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Referrals
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../account/api-keys.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >API Keys
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../account/logs.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Logs
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Authentication
    </span>
    <span className="menu-arrow" >

    </span>

</span>
{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Corporate Layout
    </span>
    <span className="menu-arrow" >

    </span>

</span>
    {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/corporate/sign-in.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

    </span>

    </span>
        <span className="menu-title" >Sign-in
        </span>
    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/corporate/sign-up.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

    </span>

    </span>
        <span className="menu-title" >Sign-up
        </span>
    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/corporate/two-steps.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

    </span>

    </span>
        <span className="menu-title" >Two-steps
        </span>
    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/corporate/reset-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

    </span>

    </span>
        <span className="menu-title" >Reset Password
        </span>
    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/corporate/new-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

    </span>

    </span>
        <span className="menu-title" >New Password
        </span>
    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

    </span>

    </span>
        <span className="menu-title" >Overlay Layout
        </span>
        <span className="menu-arrow" >

        </span>

    </span>
        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/overlay/sign-in.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Sign-in
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/overlay/sign-up.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Sign-up
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/overlay/two-steps.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Two-steps
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/overlay/reset-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Reset Password
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/overlay/new-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >New Password
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Creative Layout
            </span>
            <span className="menu-arrow" >

            </span>

        </span>
        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/creative/sign-in.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Sign-in
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/creative/sign-up.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Sign-up
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/creative/two-steps.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Two-steps
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/creative/reset-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Reset Password
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/creative/new-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >New Password
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Fancy Layout
            </span>
            <span className="menu-arrow" >

            </span>

        </span>
        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/fancy/sign-in.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Sign-in
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/fancy/sign-up.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Sign-up
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/fancy/two-steps.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
        <span className="menu-title" >Two-steps
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/fancy/reset-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Reset Password
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/layouts/fancy/new-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >New Password
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Email Templates
                                                    </span>
                                                    <span className="menu-arrow" >

                                                    </span>

                                                </span>
                                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/email/welcome-message.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Welcome Message
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/email/reset-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Reset Password
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/email/subscription-confirmed.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Subscription Confirmed
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/email/card-declined.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Credit Card Declined
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/email/promo-1.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Promo 1
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/email/promo-2.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Promo 2
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/email/promo-3.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Promo 3
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/extended/multi-steps-sign-up.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Multi-steps Sign-up
                                                    </span>
                                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/extended/two-factor-auth.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Two Factor Auth
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/general/welcome.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Welcome Message
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/general/verify-email.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Verify Email
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/general/coming-soon.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Coming Soon
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/general/password-confirmation.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Password Confirmation
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/general/account-deactivated.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Account Deactivation
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/general/error-404.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Error 404
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../authentication/general/error-500.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Error 500
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Corporate
                                                    </span>
                                                    <span className="menu-arrow" >

                                                    </span>

                                                </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/about.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >About
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/team.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Our Team
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/contact.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Contact Us
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/licenses.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Licenses
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/sitemap.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Sitemap
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                        <span className="menu-title" >Social
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/social/feeds.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Feeds
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/social/activity.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Activty
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/social/followers.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Followers
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/social/settings.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Settings
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Blog
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/blog/home.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Blog Home
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/blog/post.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Blog Post
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >FAQ
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/faq/classic.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >FAQ Classic
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/faq/extended.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >FAQ Extended
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Pricing
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/pricing/column.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Column Pricing
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/pricing/table.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Table Pricing
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Careers
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/careers/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Careers List
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pages/careers/apply.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Careers Apply
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Widgets
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../widgets/lists.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Lists
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../widgets/statistics.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Statistics
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../widgets/charts.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Charts
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../widgets/mixed.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Mixed
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../widgets/tables.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Tables
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../widgets/feeds.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                        <span className="menu-title" >Feeds
                                            </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" onClick={() => setShowApps(showApps == true ? false : true)} className={`menu-item menu-accordion ${showApps == true ? "hover show" : ""}`} >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-icon" ><i className="fonticon-app-store fs-2"></i>
                                        </span>
                                            <span className="menu-title" >Apps
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" style={{ display: showApps == false ? "none" : "", overflow: showApps == false ? "hidden" : "" }}>{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                </span>

                                </span>
                                    <span className="menu-title" >Projects
                                    </span>
                                    <span className="menu-arrow" >

                                    </span>

                                </span>
                                    {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/projects/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >My Projects
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/projects/project.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >View Project
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/projects/targets.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Targets
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/projects/budget.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Budget
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/projects/users.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Users
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/projects/files.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Files
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/projects/activity.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Activity
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/projects/settings.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >Settings
                                        </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                    </span>

                                    </span>
                                        <span className="menu-title" >eCommerce
                                        </span>
                                        <span className="menu-arrow" >

                                        </span>

                                    </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Catalog
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                            {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/catalog/products.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Products
                                                </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/catalog/categories.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Categories
                                                </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/catalog/add-product.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Add Product
                                                </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/catalog/edit-product.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Edit Product
                                                </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/catalog/add-category.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Add Category
                                                </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/catalog/edit-category.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Edit Category
                                                </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Sales
                                                </span>
                                                <span className="menu-arrow" >

                                                </span>

                                            </span>
                                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/sales/listing.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Orders Listing
                                                    </span>
                                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/sales/details.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Order Details
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/sales/add-order.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Add Order
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/sales/edit-order.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Edit Order
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Customers
                                                    </span>
                                                    <span className="menu-arrow" >

                                                    </span>

                                                </span>
                                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/customers/listing.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Customer Listing
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/customers/details.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Customer Details
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Reports
                                                    </span>
                                                    <span className="menu-arrow" >

                                                    </span>

                                                </span>
                                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/reports/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Products Viewed
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/reports/sales.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Sales
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/reports/returns.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Returns
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/reports/customer-orders.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Customer Orders
                                                    </span>
                                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/reports/shipping.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Shipping
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/ecommerce/settings.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Settings
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Contacts
                                                    </span>
                                                    <span className="menu-arrow" >

                                                    </span>

                                                </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/contacts/getting-started.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Getting Started
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/contacts/add-contact.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Add Contact
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/contacts/edit-contact.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Edit Contact
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/contacts/view-contact.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >View Contact
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Support Center
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/support-center/overview.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Overview
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Tickets
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>
                                            </span>
                                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/support-center/tickets/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Tickets List
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/support-center/tickets/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >View Ticket
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Tutorials
                                                    </span>
                                                    <span className="menu-arrow" >

                                                    </span>

                                                </span>
                                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/support-center/tutorials/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Tutorials List
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/support-center/tutorials/post.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Tutorial Post
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/support-center/faq.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >FAQ
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/support-center/licenses.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Licenses
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/support-center/contact.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >Contact Us
                                                    </span>
                                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                                </span>

                                                </span>
                                                    <span className="menu-title" >User Management
                                                    </span>
                                                    <span className="menu-arrow" >

                                                    </span>

                                                </span>
                                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

</span>
    <span className="menu-title" >Users
    </span>
    <span className="menu-arrow" >

    </span>

</span>
    {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/user-management/users/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

    </span>

    </span>
        <span className="menu-title" >Users List
        </span>
    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/user-management/users/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

    </span>

    </span>
        <span className="menu-title" >View User
        </span>
    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

    </span>

    </span>
        <span className="menu-title" >Roles
        </span>
        <span className="menu-arrow" >

        </span>

    </span>
        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/user-management/roles/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Roles List
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/user-management/roles/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >View Role
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/user-management/permissions.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Permissions
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Customers
            </span>
            <span className="menu-arrow" >

            </span>

        </span>
{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/customers/getting-started.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Getting Started
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/customers/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Customer Listing
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/customers/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Customer Details
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Subscription
    </span>
    <span className="menu-arrow" >

    </span>

</span>
{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/subscriptions/getting-started.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Getting Started
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/subscriptions/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Subscription List
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/subscriptions/add.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>
</span>
                                            <span className="menu-title" >Add Subscription
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/subscriptions/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >View Subscription
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Invoice Manager
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >View Invoices
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                            {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/invoices/view/invoice-1.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Invoice 1
                                                </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/invoices/view/invoice-2.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Invoice 2
                                                </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/invoices/view/invoice-3.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Invoice 3
                                                </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/invoices/create.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >Create Invoice
                                                </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                            </span>

                                            </span>
                                                <span className="menu-title" >File Manager
                                                </span>
                                                <span className="menu-arrow" >

                                                </span>

                                            </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/file-manager/folders.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Folders
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/file-manager/files.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Files
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/file-manager/blank.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Blank Directory
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/file-manager/settings.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Settings
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Inbox
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/inbox/listing.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Messages
                                            </span>
                                            <span className="menu-badge" ><span className="badge badge-success">3
                                            </span>

                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/inbox/compose.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Compose
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/inbox/reply.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >View & Reply
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Chat
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/chat/private.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Private Chat
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/chat/group.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Group Chat
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/chat/drawer.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Drawer Chat
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../apps/calendar.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Calendar
                                            </span>
                                    </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" onClick={() => setShowUtilities(showUtilities == true ? false : true)} className={`menu-item menu-accordion ${showUtilities == true ? "hover show" : ""}`} >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-icon" ><i className="fonticon-image fs-2"></i>
                                        </span>
                                            <span className="menu-title" >Utilities
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" style={{ display: showUtilities == false ? "none" : "", overflow: showUtilities == false ? "hidden" : "" }}>{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                </span>

</span>
    <span className="menu-title" >Modals
    </span>
    <span className="menu-arrow" >

    </span>

</span>
    {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

    </span>

    </span>
        <span className="menu-title" >General
        </span>
        <span className="menu-arrow" >

        </span>

    </span>
        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/general/invite-friends.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Invite Friends
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/general/view-users.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >View Users
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/general/select-users.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Select Users
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/general/upgrade-plan.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Upgrade Plan
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/general/share-earn.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Share & Earn
            </span>
        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

        </span>

        </span>
            <span className="menu-title" >Forms
            </span>
            <span className="menu-arrow" >

            </span>

        </span>
            {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/forms/new-target.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

            </span>

            </span>
                <span className="menu-title" >New Target
                </span>
            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/forms/new-card.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

            </span>

            </span>
                <span className="menu-title" >New Card
                </span>
            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/forms/new-address.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

            </span>

            </span>
                <span className="menu-title" >New Address
                </span>
            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/forms/create-api-key.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

            </span>

            </span>
                <span className="menu-title" >Create API Key
                </span>
            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/forms/bidding.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

            </span>

            </span>
                <span className="menu-title" >Bidding
                </span>
            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

            </span>

            </span>
                <span className="menu-title" >Wizards
                </span>
                <span className="menu-arrow" >

                </span>

            </span>
            {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/wizards/create-app.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

            </span>

</span>
    <span className="menu-title" >Create App
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/wizards/create-campaign.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Create Campaign
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/wizards/create-account.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Create Business Acc
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/wizards/create-project.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Create Project
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/wizards/top-up-wallet.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Top Up Wallet
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/wizards/offer-a-deal.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Offer a Deal
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/wizards/two-factor-authentication.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Two Factor Auth
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Search
    </span>
    <span className="menu-arrow" >

    </span>

</span>
{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/search/users.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Users
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/search/select-location.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Select Location
    </span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
    <span className="menu-title" >Wizards
    </span>
    <span className="menu-arrow" >

    </span>

</span>
{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/wizards/horizontal.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
<span className="menu-title" >Horizontal
</span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/wizards/vertical.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
<span className="menu-title" >Vertical
</span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/wizards/two-factor-authentication.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
<span className="menu-title" >Two Factor Auth
</span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/wizards/create-app.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
<span className="menu-title" >Create App
</span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/wizards/create-campaign.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

</span>

</span>
<span className="menu-title" >Create Campaign
</span>
</a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/wizards/create-account.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Create Account
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/wizards/create-project.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Create Project
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/modals/wizards/top-up-wallet.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Top Up Wallet
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/wizards/offer-a-deal.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Offer a Deal
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Search
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                        {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/search/horizontal.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Horizontal
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/search/vertical.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Vertical
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/search/users.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Users
                                            </span>
                                        </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../utilities/search/select-location.html" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                        </span>

                                        </span>
                                            <span className="menu-title" >Location
                                            </span>
                                            </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" onClick={() => setShowHelp(showHelp == true ? false : true)} className={`menu-item menu-accordion ${showHelp == true ? "hover show" : ""}`} >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-icon" ><i className="fonticon-setting fs-2"></i>
                                        </span>
                                            <span className="menu-title" >Help
                                            </span>
                                            <span className="menu-arrow" >

                                            </span>

                                        </span>
                                {/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" style={{ display: showHelp == false ? "none" : "", overflow: showHelp == false ? "hidden" : "" }}>{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                </span>

                                </span>
                                    <span className="menu-title" >Components
                                    </span>
                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                </span>

                                </span>
                                    <span className="menu-title" >Documentation
                                    </span>
                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                </span>

                                </span>
                                    <span className="menu-title" >Layout Builder
                                    </span>
                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank" ><span className="menu-bullet" ><span className="bullet bullet-dot">

                                </span>

                                </span>
                                    <span className="menu-title" >Changelog v8.1.7
                                    </span>
                                </a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}</div>
                        {/*end::Sidebar menu*/}

                        {/*begin::Separator*/}
                        <div className="separator"></div>
                        {/*end::Separator*/}

                        {/*begin::Projects*/}
                        <div className="menu menu-rounded menu-column">
                            {/*begin::Heading*/}
                            <div className="menu-item">
                                <div className="menu-content menu-heading">
                                    Projects
                                </div>
                            </div>
                            {/*end::Heading*/}



                            {/*begin::Menu Item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a className="menu-link" href="../apps/projects/project.html">
                                    {/*begin::Bullet*/}
                                    <span className="menu-icon">
                                        <span className="bullet bullet-dot h-10px w-10px bg-primary">
                                        </span>
                                    </span>
                                    {/*end::Bullet*/}

                                    {/*begin::Title*/}
                                    <span className="menu-title">
                                        Google Ads                </span>
                                    {/*end::Title*/}

                                    {/*begin::Badge*/}
                                    <span className="menu-badge">
                                        <span className="badge badge-custom">
                                            6                    </span>
                                    </span>
                                    {/*end::Badge*/}
                                </a>
                                {/*end::Menu link*/}
                            </div>
                            {/*end::Menu Item*/}
                            {/*begin::Menu Item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a className="menu-link" href="../apps/projects/project.html">
                                    {/*begin::Bullet*/}
                                    <span className="menu-icon">
                                        <span className="bullet bullet-dot h-10px w-10px bg-success">
                                        </span>
                                    </span>
                                    {/*end::Bullet*/}

                                    {/*begin::Title*/}
                                    <span className="menu-title">
                                        AirStoke App                </span>
                                    {/*end::Title*/}

                                    {/*begin::Badge*/}
                                    <span className="menu-badge">
                                        <span className="badge badge-custom">
                                            2                    </span>
                                    </span>
                                    {/*end::Badge*/}
                                </a>
                                {/*end::Menu link*/}
                            </div>
                            {/*end::Menu Item*/}



                            {/*begin::Menu Item*/}
                            <div className="menu-item">
                                {/*begin::Menu link*/}
                                <a className="menu-link" href="../apps/projects/project.html">
                                    {/*begin::Bullet*/}
                                    <span className="menu-icon">
                                        <span className="bullet bullet-dot h-10px w-10px bg-warning">
                                        </span>
                                    </span>
                                    {/*end::Bullet*/}

                                    {/*begin::Title*/}
                                    <span className="menu-title">
                                        Internal Tasks                </span>
                                    {/*end::Title*/}

                                    {/*begin::Badge*/}
                                    <span className="menu-badge">
                                        <span className="badge badge-custom">
                                            37                    </span>
                                    </span>
                                    {/*end::Badge*/}
                                </a>
                                {/*end::Menu link*/}
                            </div>
                            {/*end::Menu Item*/}


                            {/*begin::Collapsible items*/}
                            <div className="menu-inner flex-column collapse" id="kt_app_sidebar_menu_projects_collapse">
                                {/*begin::Menu Item*/}
                                <div className="menu-item">
                                    {/*begin::Menu link*/}
                                    <a className="menu-link" href="../apps/projects/project.html">
                                        {/*begin::Bullet*/}
                                        <span className="menu-icon">
                                            <span className="bullet bullet-dot h-10px w-10px bg-danger">
                                            </span>
                                        </span>
                                        {/*end::Bullet*/}

                                        {/*begin::Title*/}
                                        <span className="menu-title">
                                            Fitnes App                </span>
                                        {/*end::Title*/}

                                        {/*begin::Badge*/}
                                        <span className="menu-badge">
                                            <span className="badge badge-custom">
                                                3                    </span>
                                        </span>
                                        {/*end::Badge*/}
                                    </a>
                                    {/*end::Menu link*/}
                                </div>
                                {/*end::Menu Item*/}



                                {/*begin::Menu Item*/}
                                <div className="menu-item">
                                    {/*begin::Menu link*/}
                                    <a className="menu-link" href="../apps/projects/project.html">
                                        {/*begin::Bullet*/}
                                        <span className="menu-icon">
                                            <span className="bullet bullet-dot h-10px w-10px bg-info">
                                            </span>
                                        </span>
                                        {/*end::Bullet*/}

                                        {/*begin::Title*/}
                                        <span className="menu-title">
                                            Oppo CRM                </span>
                                        {/*end::Title*/}

                                        {/*begin::Badge*/}
                                        <span className="menu-badge">
                                            <span className="badge badge-custom">
                                                12                    </span>
                                        </span>
                                        {/*end::Badge*/}
                                    </a>
                                    {/*end::Menu link*/}
                                </div>
                                {/*end::Menu Item*/}



                                {/*begin::Menu Item*/}
                                <div className="menu-item">
                                    {/*begin::Menu link*/}
                                    <a className="menu-link" href="../apps/projects/project.html">
                                        {/*begin::Bullet*/}
                                        <span className="menu-icon">
                                            <span className="bullet bullet-dot h-10px w-10px bg-warning">
                                            </span>
                                        </span>
                                        {/*end::Bullet*/}

                                        {/*begin::Title*/}
                                        <span className="menu-title">
                                            Finance Dispatch                </span>
                                        {/*end::Title*/}

                                        {/*begin::Badge*/}
                                        <span className="menu-badge">
                                            <span className="badge badge-custom">
                                                25                    </span>
                                        </span>
                                        {/*end::Badge*/}
                                    </a>
                                    {/*end::Menu link*/}
                                </div>
                                {/*end::Menu Item*/}

                            </div>
                            {/*end::Collapsible items*/}


                            {/*begin::Collapse toggle*/}
                            <div className="menu-item">
                                {/*begin::Toggle*/}
                                <a className="menu-link menu-collapse-toggle toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_projects_collapse" data-kt-toggle-text="Show less">
                                    <span className="menu-icon">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                        <span className="svg-icon toggle-off svg-icon-3 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                        </svg>
                                        </span>
                                        {/*end::Svg Icon*/}                {/*begin::Svg Icon | path: icons/duotune/arrows/arr073.svg*/}
                                        <span className="svg-icon toggle-on svg-icon-3 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5657 11.3657L16.75 15.55C17.1642 15.9643 17.8358 15.9643 18.25 15.55C18.6642 15.1358 18.6642 14.4643 18.25 14.05L12.7071 8.50716C12.3166 8.11663 11.6834 8.11663 11.2929 8.50715L5.75 14.05C5.33579 14.4643 5.33579 15.1358 5.75 15.55C6.16421 15.9643 6.83579 15.9643 7.25 15.55L11.4343 11.3657C11.7467 11.0533 12.2533 11.0533 12.5657 11.3657Z" fill="currentColor" />
                                        </svg>
                                        </span>
                                        {/*end::Svg Icon*/}            </span>

                                    {/*begin::Title*/}
                                    <span className="menu-title" data-kt-toggle-text-target="true">
                                        Show more
                                    </span>
                                    {/*end::Title*/}
                                </a>
                                {/*end::Toggle*/}
                            </div>
                            {/*end::Collapse toggle*/}
                        </div>
                        {/*end::Projects*/}
                    </div>
                </div>
                {/*end::Navs*/}


                {/*begin::Footer*/}
                <div className="app-sidebar-footer d-flex flex-stack px-11 pb-10" id="kt_app_sidebar_footer">
                    {/*begin::User menu*/}
                    <div className="" onMouseEnter={() => setIsMenu(true)} onMouseLeave={() => setIsMenu(false)} style={{ cursor: "pointer" }}>
                        {/*begin::Menu wrapper*/}
                        <div
                            className="cursor-pointer symbol symbol-circle symbol-40px show menu-dropdown"
                            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                            data-kt-menu-overflow="true"
                            data-kt-menu-placement="top-start"
                        >
                            <img src="/assets/media/avatars/300-2.jpg" alt="image" />
                        </div>


                        {/*begin::User account menu*/}
                        <div className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px ${isMenu == true ? "show" : ""}`} data-kt-menu="true" data-kt-menu-placement="top-start">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <div className="menu-content d-flex align-items-center px-3">
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-50px me-5">
                                        <img alt="Logo" src="/assets/media/avatars/300-13.jpg" />
                                    </div>
                                    {/*end::Avatar*/}

                                    {/*begin::Username*/}
                                    <div className="d-flex flex-column">
                                        <div className="fw-bold d-flex align-items-center fs-5">
                                            Max Smith                    <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                                        </div>

                                        <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">
                                            max@kt.com                </a>
                                    </div>
                                    {/*end::Username*/}
                                </div>
                            </div>
                            {/*end::Menu item*/}

                            {/*begin::Menu separator*/}
                            <div className="separator my-2"></div>
                            {/*end::Menu separator*/}

                            {/*begin::Menu item*/}
                            <div className="menu-item px-5">
                                <a href="../account/overview.html" className="menu-link px-5">
                                    My Profile
                                </a>
                            </div>
                            {/*end::Menu item*/}

                            {/*begin::Menu item*/}
                            <div className="menu-item px-5">
                                <a href="../apps/projects/list.html" className="menu-link px-5">
                                    <span className="menu-text">My Projects</span>
                                    <span className="menu-badge">
                                        <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                                    </span>
                                </a>
                            </div>
                            {/*end::Menu item*/}

                            {/*begin::Menu item*/}
                            <div className={`menu-item px-5 ${isInternalMenu1 == true ? "show menu-dropdown" : ""}`} data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0" onMouseEnter={() => setIsInternalMenu1(true)} onMouseLeave={() => setIsInternalMenu1(false)}>
                                <a href="#" className="menu-link px-5">
                                    <span className="menu-title">My Subscription</span>
                                    <span className="menu-arrow"></span>
                                </a>

                                {/*begin::Menu sub*/}
                                <div className={`menu-sub menu-sub-dropdown w-175px py-4 ${isInternalMenu1 == true ? "show" : ""}`} style={{ zIndex: '108', position: 'fixed', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(275px, -257px)' }} data-popper-placement="right-end">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="../account/referrals.html" className="menu-link px-5">
                                            Referrals
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="../account/billing.html" className="menu-link px-5">
                                            Billing
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="../account/statements.html" className="menu-link px-5">
                                            Payments
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="../account/statements.html" className="menu-link d-flex flex-stack px-5">
                                            Statements

                                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements"></i>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}

                                    {/*begin::Menu separator*/}
                                    <div className="separator my-2"></div>
                                    {/*end::Menu separator*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <div className="menu-content px-3">
                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                                                <span className="form-check-label text-muted fs-7">
                                                    Notifications
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    {/*end::Menu item*/}
                                </div>
                                {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}

                            {/*begin::Menu item*/}
                            <div className="menu-item px-5">
                                <a href="../account/statements.html" className="menu-link px-5">
                                    My Statements
                                </a>
                            </div>
                            {/*end::Menu item*/}

                            {/*begin::Menu separator*/}
                            <div className="separator my-2"></div>
                            {/*end::Menu separator*/}

                            {/*begin::Menu item*/}
                            <div className={`menu-item px-5 ${isInternalMenu2 == true ? "show menu-dropdown" : ""}`} data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0" onMouseEnter={() => setIsInternalMenu2(true)} onMouseLeave={() => setIsInternalMenu2(false)}>
                                <a href="#" className="menu-link px-5">
                                    <span className="menu-title position-relative">
                                        Mode

                                        <span className="ms-5 position-absolute translate-middle-y top-50 end-0">
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen060.svg*/}
                                        <span className="svg-icon theme-light-show svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor" />
                                                <path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor" />
                                                <path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor" />
                                                <path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor" />
                                                <path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor" />
                                                <path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor" />
                                                <path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor" />
                                                <path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor" />
                                                <path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor" />
                                            </svg>
                                            </span>
                                            {/*end::Svg Icon*/}                        {/*begin::Svg Icon | path: icons/duotune/general/gen061.svg*/}
                                            <span className="svg-icon theme-dark-show svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor" />
                                                <path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor" />
                                                <path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor" />
                                                <path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor" />
                                            </svg>
                                            </span>
                                            {/*end::Svg Icon*/}                    </span>
                                    </span>
                                </a>

                                {/*begin::Menu*/}
                                <div className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px ${isInternalMenu2 == true ? "show" : ""}`} data-kt-menu="true" data-kt- element="theme-mode-menu" style={{ zIndex: '108', position: 'fixed', inset: '8px auto auto 0px', margin: '0px', transform: 'translate(275px, 266px)' }} data-popper-placement="right-start">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3 my-0">
                                        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                                            <span className="menu-icon" data-kt-element="icon">
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen060.svg*/}
                                                <span className="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor" />
                                                    <path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor" />
                                                    <path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor" />
                                                    <path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor" />
                                                    <path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor" />
                                                    <path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor" />
                                                    <path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor" />
                                                    <path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor" />
                                                    <path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor" />
                                                </svg>
                                                </span>
                                                {/*end::Svg Icon*/}            </span>
                                            <span className="menu-title">
                                                Light
                                            </span>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3 my-0">
                                        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                                            <span className="menu-icon" data-kt-element="icon">
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen061.svg*/}
                                                <span className="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor" />
                                                    <path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor" />
                                                    <path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor" />
                                                    <path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor" />
                                                </svg>
                                                </span>
                                                {/*end::Svg Icon*/}            </span>
                                            <span className="menu-title">
                                                Dark
                                            </span>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3 my-0">
                                        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                                            <span className="menu-icon" data-kt-element="icon">
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen062.svg*/}
                                                <span className="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z" fill="currentColor" />
                                                </svg>
                                                </span>
                                                {/*end::Svg Icon*/}            </span>
                                            <span className="menu-title">
                                                System
                                            </span>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                </div>
                                {/*end::Menu*/}

                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className={`menu-item px-5 ${isInternalMenu3 == true ? "show menu-dropdown" : ""}`} data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0" onMouseEnter={() => setIsInternalMenu3(true)} onMouseLeave={() => setIsInternalMenu3(false)}>
                                <a href="#" className="menu-link px-5">
                                    <span className="menu-title position-relative">
                                        Language

                                        <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                            English <img className="w-15px h-15px rounded-1 ms-2" src="/assets/media/flags/united-states.svg" alt="" />
                                        </span>
                                    </span>
                                </a>

                                {/*begin::Menu sub*/}
                                <div className={`menu-sub menu-sub-dropdown w-175px py-4 ${isInternalMenu3 == true ? "show" : ""}`} style={{ zIndex: '108', position: 'fixed', inset: '8px auto auto 0px', margin: '0px', transform: 'translate(275px, 266px)' }} data-popper-placement="right-start">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="../account/settings.html" className="menu-link d-flex px-5 active">
                                            <span className="symbol symbol-20px me-4">
                                                <img className="rounded-1" src="/assets/media/flags/united-states.svg" alt="" />
                                            </span>
                                            English
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="../account/settings.html" className="menu-link d-flex px-5">
                                            <span className="symbol symbol-20px me-4">
                                                <img className="rounded-1" src="/assets/media/flags/spain.svg" alt="" />
                                            </span>
                                            Spanish
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="../account/settings.html" className="menu-link d-flex px-5">
                                            <span className="symbol symbol-20px me-4">
                                                <img className="rounded-1" src="/assets/media/flags/germany.svg" alt="" />
                                            </span>
                                            German
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="../account/settings.html" className="menu-link d-flex px-5">
                                            <span className="symbol symbol-20px me-4">
                                                <img className="rounded-1" src="/assets/media/flags/japan.svg" alt="" />
                                            </span>
                                            Japanese
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="../account/settings.html" className="menu-link d-flex px-5">
                                            <span className="symbol symbol-20px me-4">
                                                <img className="rounded-1" src="/assets/media/flags/france.svg" alt="" />
                                            </span>
                                            French
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                </div>
                                {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}

                            {/*begin::Menu item*/}
                            <div className="menu-item px-5 my-1">
                                <a href="../account/settings.html" className="menu-link px-5">
                                    Account Settings
                                </a>
                            </div>
                            {/*end::Menu item*/}

                            {/*begin::Menu item*/}
                            <div className="menu-item px-5">
                                <a href="../authentication/layouts/corporate/sign-in.html" className="menu-link px-5">
                                    Sign Out
                                </a>
                            </div>
                            {/*end::Menu item*/}
                        </div>
                        {/*end::User account menu*/}
                        {/*end::Menu wrapper*/}
                    </div>
                    {/*end::User menu*/}


                </div>
                {/*end::Footer*/}    </div>

        </>
    )
}

export default Sidebar