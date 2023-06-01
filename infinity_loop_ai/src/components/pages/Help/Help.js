/*eslint-disable */
import React from 'react'

const Help = () => {
    return (
        <>
            <div id="kt_app_body" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" className="app-default" >

                {/*begin::App*/}
                <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
                    {/*begin::Page*/}
                    <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">


                        {/*begin::Header*/}
                        <div id="kt_app_header" className="app-header "
                            data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}"
                        >

                            {/*begin::Header container*/}
                            <div className="app-container  container-fluid d-flex flex-stack " id="kt_app_header_container">
                                {/*begin::Sidebar toggle*/}
                                <div className="d-flex align-items-center d-block d-lg-none ms-n3" title="Show sidebar menu">
                                    <div className="btn btn-icon btn-active-color-primary w-35px h-35px me-2" id="kt_app_sidebar_mobile_toggle">
                                        {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                                        <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                                            <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                                        </svg>
                                        </span>
                                        {/*end::Svg Icon*/}	</div>

                                    {/*begin::Logo image*/}
                                    <a href="../../index.html">
                                        <img alt="Logo" src="/assets/media/logos/default-small.svg" className="h-30px theme-light-show" />
                                        <img alt="Logo" src="/assets/media/logos/default-small-dark.svg" className="h-30px theme-dark-show" />
                                    </a>
                                    {/*end::Logo image*/}
                                </div>
                                {/*end::Sidebar toggle*/}

                                {/*begin::Header wrapper*/}
                                <div className="d-flex flex-stack flex-lg-row-fluid" id="kt_app_header_wrapper">


                                    {/*begin::Page title*/}
                                    <div className="page-title gap-4 me-3 mb-5 mb-lg-0" data-kt-swapper="true" data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_wrapper'}" >

                                        {/*begin::Breadcrumb*/}
                                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 mb-2">

                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600 fw-bold lh-1">
                                                <a href="../../index.html" className="text-gray-700 text-hover-primary me-1">
                                                    <i className="fonticon-home text-gray-700 fs-3"></i>
                                                </a>
                                            </li>
                                            {/*end::Item*/}

                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item">
                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                <span className="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                                                </svg>
                                                </span>
                                                {/*end::Svg Icon*/}                    </li>
                                            {/*end::Item*/}


                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600 fw-bold lh-1">
                                                Pages                                            </li>
                                            {/*end::Item*/}

                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item">
                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                <span className="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                                                </svg>
                                                </span>
                                                {/*end::Svg Icon*/}                    </li>
                                            {/*end::Item*/}


                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-gray-600 fw-bold lh-1">
                                                User Profile                                            </li>
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
                                    <a href="#" className="btn btn-primary d-flex flex-center h-35px h-lg-40px" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
                                        Create <span className="d-none d-sm-inline ps-2">New</span>
                                    </a>
                                    {/*end::Action*/}
                                </div>
                                {/*end::Header wrapper*/}            </div>
                            {/*end::Header container*/}
                        </div>
                        {/*end::Header*/}
                        {/*begin::Wrapper*/}
                        <div className="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">





                            {/*begin::Sidebar*/}
                            <div id="kt_app_sidebar" className="app-sidebar  flex-column "
                                data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
                            >

                                {/*begin::Header*/}
                                <div className="app-sidebar-header d-none d-lg-flex px-6 pt-8 pb-4" id="kt_app_sidebar_header">
                                    {/*begin::Toggle*/}
                                    <button type="button" data-kt-element="selected" className="btn btn-outline btn-custom btn-flex w-100" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, -1px">
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
                                            <span className="svg-icon svg-icon-3 svg-icon-gray-700"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-state-bg menu-rounded w-300px ps-3" data-kt-menu="true">
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
                                <div className="app-sidebar-navs flex-column-fluid py-6" id="kt_app_sidebar_navs">
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
                                                <a href="../../apps/projects/project.html" className="menu-link">
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
                                                <a href="../../apps/projects/activity.html" className="menu-link">
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
                                            {/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-icon" ><i className="fonticon-house fs-2"></i></span><span className="menu-title" >Dashboards</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../index.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Default</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/ecommerce.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >eCommerce</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/projects.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Projects</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/online-courses.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Online Courses</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/marketing.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Marketing</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}<div className="menu-inner flex-column collapse " id="kt_app_sidebar_menu_dashboards_collapse">{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/bidding.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Bidding</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/pos.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >POS System</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/call-center.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Call Center</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/logistics.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Logistics</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/website-analytics.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Website Analytics</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/finance-performance.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Finance Performance</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/store-analytics.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Store Analytics</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/social.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Social</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/delivery.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Delivery</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/crypto.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Crypto</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/school.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >School</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../dashboards/podcast.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Podcast</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../landing.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Landing</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>
                                                <div className="menu-item">
                                                    <div className="menu-content">
                                                        <a className="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show Less">
                                                            <span data-kt-toggle-text-target="true">Show 12 More</span> {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
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
                                            </div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item here show menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-icon" ><i className="fonticon-stats fs-2"></i></span><span className="menu-title" >Pages</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item here show menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >User Profile</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link active" href="overview.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Overview</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="projects.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Projects</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="campaigns.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Campaigns</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="documents.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Documents</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="followers.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Followers</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="activity.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Activity</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Account</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../account/overview.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Overview</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../account/settings.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Settings</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../account/security.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Security</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../account/activity.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Activity</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../account/billing.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Billing</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../account/statements.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Statements</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../account/referrals.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Referrals</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../account/api-keys.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >API Keys</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../account/logs.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Logs</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Authentication</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Corporate Layout</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/corporate/sign-in.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sign-in</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/corporate/sign-up.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sign-up</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/corporate/two-steps.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Two-steps</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/corporate/reset-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Reset Password</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/corporate/new-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >New Password</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Overlay Layout</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/overlay/sign-in.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sign-in</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/overlay/sign-up.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sign-up</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/overlay/two-steps.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Two-steps</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/overlay/reset-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Reset Password</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/overlay/new-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >New Password</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Creative Layout</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/creative/sign-in.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sign-in</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/creative/sign-up.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sign-up</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/creative/two-steps.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Two-steps</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/creative/reset-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Reset Password</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/creative/new-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >New Password</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Fancy Layout</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/fancy/sign-in.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sign-in</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/fancy/sign-up.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sign-up</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/fancy/two-steps.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Two-steps</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/fancy/reset-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Reset Password</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/layouts/fancy/new-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >New Password</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Email Templates</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/email/welcome-message.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Welcome Message</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/email/reset-password.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Reset Password</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/email/subscription-confirmed.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Subscription Confirmed</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/email/card-declined.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Credit Card Declined</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/email/promo-1.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Promo 1</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/email/promo-2.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Promo 2</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/email/promo-3.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Promo 3</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/extended/multi-steps-sign-up.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Multi-steps Sign-up</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/extended/two-factor-auth.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Two Factor Auth</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/general/welcome.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Welcome Message</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/general/verify-email.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Verify Email</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/general/coming-soon.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Coming Soon</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/general/password-confirmation.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Password Confirmation</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/general/account-deactivated.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Account Deactivation</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/general/error-404.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Error 404</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../authentication/general/error-500.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Error 500</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Corporate</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../about.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >About</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../team.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Our Team</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../contact.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Contact Us</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../licenses.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Licenses</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../sitemap.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sitemap</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Social</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../social/feeds.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Feeds</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../social/activity.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Activty</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../social/followers.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Followers</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../social/settings.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Settings</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Blog</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../blog/home.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Blog Home</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../blog/post.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Blog Post</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >FAQ</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../faq/classic.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >FAQ Classic</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../faq/extended.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >FAQ Extended</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Pricing</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pricing/column.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Column Pricing</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../pricing/table.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Table Pricing</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Careers</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../careers/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Careers List</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../careers/apply.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Careers Apply</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Widgets</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../widgets/lists.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Lists</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../widgets/statistics.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Statistics</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../widgets/charts.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Charts</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../widgets/mixed.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Mixed</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../widgets/tables.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Tables</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../widgets/feeds.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Feeds</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-icon" ><i className="fonticon-app-store fs-2"></i></span><span className="menu-title" >Apps</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Projects</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/projects/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >My Projects</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/projects/project.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >View Project</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/projects/targets.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Targets</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/projects/budget.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Budget</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/projects/users.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Users</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/projects/files.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Files</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/projects/activity.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Activity</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/projects/settings.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Settings</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >eCommerce</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Catalog</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/catalog/products.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Products</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/catalog/categories.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Categories</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/catalog/add-product.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Add Product</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/catalog/edit-product.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Edit Product</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/catalog/add-category.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Add Category</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/catalog/edit-category.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Edit Category</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sales</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/sales/listing.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Orders Listing</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/sales/details.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Order Details</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/sales/add-order.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Add Order</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/sales/edit-order.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Edit Order</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Customers</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/customers/listing.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Customer Listing</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/customers/details.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Customer Details</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Reports</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/reports/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Products Viewed</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/reports/sales.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Sales</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/reports/returns.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Returns</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/reports/customer-orders.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Customer Orders</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/reports/shipping.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Shipping</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/ecommerce/settings.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Settings</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Contacts</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/contacts/getting-started.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Getting Started</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/contacts/add-contact.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Add Contact</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/contacts/edit-contact.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Edit Contact</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/contacts/view-contact.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >View Contact</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Support Center</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/support-center/overview.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Overview</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Tickets</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/support-center/tickets/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Tickets List</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/support-center/tickets/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >View Ticket</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Tutorials</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/support-center/tutorials/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Tutorials List</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/support-center/tutorials/post.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Tutorial Post</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/support-center/faq.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >FAQ</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/support-center/licenses.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Licenses</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/support-center/contact.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Contact Us</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >User Management</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Users</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/user-management/users/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Users List</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/user-management/users/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >View User</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Roles</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/user-management/roles/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Roles List</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/user-management/roles/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >View Role</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/user-management/permissions.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Permissions</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Customers</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/customers/getting-started.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Getting Started</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/customers/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Customer Listing</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/customers/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Customer Details</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Subscription</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/subscriptions/getting-started.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Getting Started</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/subscriptions/list.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Subscription List</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/subscriptions/add.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Add Subscription</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/subscriptions/view.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >View Subscription</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Invoice Manager</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >View Invoices</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/invoices/view/invoice-1.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Invoice 1</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/invoices/view/invoice-2.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Invoice 2</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/invoices/view/invoice-3.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Invoice 3</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/invoices/create.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Create Invoice</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >File Manager</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/file-manager/folders.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Folders</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/file-manager/files.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Files</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/file-manager/blank.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Blank Directory</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/file-manager/settings.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Settings</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Inbox</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/inbox/listing.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Messages</span><span className="menu-badge" ><span className="badge badge-success">3</span></span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/inbox/compose.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Compose</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/inbox/reply.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >View & Reply</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Chat</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/chat/private.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Private Chat</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/chat/group.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Group Chat</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/chat/drawer.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Drawer Chat</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../apps/calendar.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Calendar</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-icon" ><i className="fonticon-image fs-2"></i></span><span className="menu-title" >Utilities</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Modals</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >General</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/general/invite-friends.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Invite Friends</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/general/view-users.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >View Users</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/general/select-users.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Select Users</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/general/upgrade-plan.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Upgrade Plan</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/general/share-earn.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Share & Earn</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Forms</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/forms/new-target.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >New Target</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/forms/new-card.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >New Card</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/forms/new-address.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >New Address</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/forms/create-api-key.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Create API Key</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/forms/bidding.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Bidding</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Wizards</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/wizards/create-app.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Create App</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/wizards/create-campaign.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Create Campaign</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/wizards/create-account.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Create Business Acc</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/wizards/create-project.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Create Project</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/wizards/top-up-wallet.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Top Up Wallet</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/wizards/offer-a-deal.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Offer a Deal</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/wizards/two-factor-authentication.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Two Factor Auth</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Search</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/search/users.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Users</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/search/select-location.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Select Location</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Wizards</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/wizards/horizontal.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Horizontal</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/wizards/vertical.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Vertical</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/wizards/two-factor-authentication.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Two Factor Auth</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/wizards/create-app.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Create App</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/wizards/create-campaign.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Create Campaign</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/wizards/create-account.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Create Account</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/wizards/create-project.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Create Project</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/modals/wizards/top-up-wallet.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Top Up Wallet</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/wizards/offer-a-deal.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Offer a Deal</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Search</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion menu-active-bg" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/search/horizontal.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Horizontal</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/search/vertical.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Vertical</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/search/users.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Users</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../utilities/search/select-location.html" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Location</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div data-kt-menu-trigger="click" className="menu-item menu-accordion" >{/*begin:Menu link*/}<span className="menu-link" ><span className="menu-icon" ><i className="fonticon-setting fs-2"></i></span><span className="menu-title" >Help</span><span className="menu-arrow" ></span></span>{/*end:Menu link*/}{/*begin:Menu sub*/}<div className="menu-sub menu-sub-accordion" >{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Components</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Documentation</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="../../layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Layout Builder</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}{/*begin:Menu item*/}<div className="menu-item" >{/*begin:Menu link*/}<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank" ><span className="menu-bullet" ><span className="bullet bullet-dot"></span></span><span className="menu-title" >Changelog v8.1.7</span></a>{/*end:Menu link*/}</div>{/*end:Menu item*/}</div>{/*end:Menu sub*/}</div>{/*end:Menu item*/}</div>
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
                                                <a className="menu-link" href="../../apps/projects/project.html">
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
                                                <a className="menu-link" href="../../apps/projects/project.html">
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
                                                <a className="menu-link" href="../../apps/projects/project.html">
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
                                                    <a className="menu-link" href="../../apps/projects/project.html">
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
                                                    <a className="menu-link" href="../../apps/projects/project.html">
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
                                                    <a className="menu-link" href="../../apps/projects/project.html">
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
                                    <div className="">
                                        {/*begin::Menu wrapper*/}
                                        <div
                                            className="cursor-pointer symbol symbol-circle symbol-40px"
                                            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                            data-kt-menu-overflow="true"
                                            data-kt-menu-placement="top-start"
                                        >
                                            <img src="/assets/media/avatars/300-2.jpg" alt="image" />
                                        </div>


                                        {/*begin::User account menu*/}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
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
                                                <a href="../../account/overview.html" className="menu-link px-5">
                                                    My Profile
                                                </a>
                                            </div>
                                            {/*end::Menu item*/}

                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-5">
                                                <a href="../../apps/projects/list.html" className="menu-link px-5">
                                                    <span className="menu-text">My Projects</span>
                                                    <span className="menu-badge">
                                                        <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                                                    </span>
                                                </a>
                                            </div>
                                            {/*end::Menu item*/}

                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0">
                                                <a href="#" className="menu-link px-5">
                                                    <span className="menu-title">My Subscription</span>
                                                    <span className="menu-arrow"></span>
                                                </a>

                                                {/*begin::Menu sub*/}
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="../../account/referrals.html" className="menu-link px-5">
                                                            Referrals
                                                        </a>
                                                    </div>
                                                    {/*end::Menu item*/}

                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="../../account/billing.html" className="menu-link px-5">
                                                            Billing
                                                        </a>
                                                    </div>
                                                    {/*end::Menu item*/}

                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="../../account/statements.html" className="menu-link px-5">
                                                            Payments
                                                        </a>
                                                    </div>
                                                    {/*end::Menu item*/}

                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="../../account/statements.html" className="menu-link d-flex flex-stack px-5">
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
                                                <a href="../../account/statements.html" className="menu-link px-5">
                                                    My Statements
                                                </a>
                                            </div>
                                            {/*end::Menu item*/}

                                            {/*begin::Menu separator*/}
                                            <div className="separator my-2"></div>
                                            {/*end::Menu separator*/}

                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
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
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
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
                                            <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0">
                                                <a href="#" className="menu-link px-5">
                                                    <span className="menu-title position-relative">
                                                        Language

                                                        <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                                            English <img className="w-15px h-15px rounded-1 ms-2" src="/assets/media/flags/united-states.svg" alt="" />
                                                        </span>
                                                    </span>
                                                </a>

                                                {/*begin::Menu sub*/}
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="../../account/settings.html" className="menu-link d-flex px-5 active">
                                                            <span className="symbol symbol-20px me-4">
                                                                <img className="rounded-1" src="/assets/media/flags/united-states.svg" alt="" />
                                                            </span>
                                                            English
                                                        </a>
                                                    </div>
                                                    {/*end::Menu item*/}

                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="../../account/settings.html" className="menu-link d-flex px-5">
                                                            <span className="symbol symbol-20px me-4">
                                                                <img className="rounded-1" src="/assets/media/flags/spain.svg" alt="" />
                                                            </span>
                                                            Spanish
                                                        </a>
                                                    </div>
                                                    {/*end::Menu item*/}

                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="../../account/settings.html" className="menu-link d-flex px-5">
                                                            <span className="symbol symbol-20px me-4">
                                                                <img className="rounded-1" src="/assets/media/flags/germany.svg" alt="" />
                                                            </span>
                                                            German
                                                        </a>
                                                    </div>
                                                    {/*end::Menu item*/}

                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="../../account/settings.html" className="menu-link d-flex px-5">
                                                            <span className="symbol symbol-20px me-4">
                                                                <img className="rounded-1" src="/assets/media/flags/japan.svg" alt="" />
                                                            </span>
                                                            Japanese
                                                        </a>
                                                    </div>
                                                    {/*end::Menu item*/}

                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="../../account/settings.html" className="menu-link d-flex px-5">
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
                                                <a href="../../account/settings.html" className="menu-link px-5">
                                                    Account Settings
                                                </a>
                                            </div>
                                            {/*end::Menu item*/}

                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-5">
                                                <a href="../../authentication/layouts/corporate/sign-in.html" className="menu-link px-5">
                                                    Sign Out
                                                </a>
                                            </div>
                                            {/*end::Menu item*/}
                                        </div>
                                        {/*end::User account menu*/}
                                        {/*end::Menu wrapper*/}
                                    </div>
                                    {/*end::User menu*/}

                                    {/*begin::Logout*/}
                                    <a href="../../authentication/flows/basic/sign-in.html" className="btn btn-sm btn-outline btn-flex btn-custom px-3">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr076.svg*/}
                                        <span className="svg-icon svg-icon-3 me-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.3" width="12" height="2" rx="1" transform="matrix(-1 0 0 1 15.5 11)" fill="currentColor" />
                                            <path d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z" fill="currentColor" />
                                            <path d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z" fill="currentColor" />
                                        </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                        Logout
                                    </a>
                                    {/*end::Logout*/}
                                </div>
                                {/*end::Footer*/}    </div>
                            {/*end::Sidebar*/}


                            {/*begin::Main*/}
                            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                                {/*begin::Content wrapper*/}
                                <div className="d-flex flex-column flex-column-fluid">


                                    {/*begin::Content*/}
                                    <div id="kt_app_content" className="app-content  flex-column-fluid " >
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
                                                                <img src="/assets/media/avatars/300-1.jpg" alt="image" />
                                                                <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                                                            </div>
                                                        </div>
                                                        {/*end::Pic*/}

                                                        {/*begin::Info*/}
                                                        <div className="flex-grow-1">
                                                            {/*begin::Title*/}
                                                            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                                                {/*begin::User*/}
                                                                <div className="d-flex flex-column">
                                                                    {/*begin::Name*/}
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Max Smith</a>
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
                                                                            <span className="svg-icon svg-icon-4 me-1"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                                                                                <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                                                                                <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                                                                            </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}                                Developer
                                                                        </a>
                                                                        <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                                            <span className="svg-icon svg-icon-4 me-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                                                                                <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                                                                            </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}                                SF, Bay Area
                                                                        </a>
                                                                        <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                                                            {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                                                                            <span className="svg-icon svg-icon-4 me-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor" />
                                                                                <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor" />
                                                                            </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}                                max@kt.com
                                                                        </a>
                                                                    </div>
                                                                    {/*end::Info*/}
                                                                </div>
                                                                {/*end::User*/}

                                                                {/*begin::Actions*/}
                                                                <div className="d-flex my-4">
                                                                    <a href="#" className="btn btn-sm btn-light me-2" id="kt_user_follow_button">
                                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
                                                                        <span className="svg-icon svg-icon-3 d-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                                                                            <path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                                                                        </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                        {/*begin::Indicator label*/}
                                                                        <span className="indicator-label">
                                                                            Follow</span>
                                                                        {/*end::Indicator label*/}

                                                                        {/*begin::Indicator progress*/}
                                                                        <span className="indicator-progress">
                                                                            Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                        </span>
                                                                        {/*end::Indicator progress*/}                        </a>

                                                                    <a href="#" className="btn btn-sm btn-primary me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal" >Hire Me</a>

                                                                    {/*begin::Menu*/}
                                                                    <div className="me-0">
                                                                        <button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                            <i className="bi bi-three-dots fs-3"></i>
                                                                        </button>

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

                                                                                    <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i>
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
                                                                                    <span className="menu-arrow"></span>
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
                                                                                    <div className="separator my-2"></div>
                                                                                    {/*end::Menu separator*/}

                                                                                    {/*begin::Menu item*/}
                                                                                    <div className="menu-item px-3">
                                                                                        <div className="menu-content px-3">
                                                                                            {/*begin::Switch*/}
                                                                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                                                                {/*begin::Input*/}
                                                                                                <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
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
                                                            <div className="d-flex flex-wrap flex-stack">
                                                                {/*begin::Wrapper*/}
                                                                <div className="d-flex flex-column flex-grow-1 pe-8">
                                                                    {/*begin::Stats*/}
                                                                    <div className="d-flex flex-wrap">
                                                                        {/*begin::Stat*/}
                                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                                            {/*begin::Number*/}
                                                                            <div className="d-flex align-items-center">
                                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                                                <span className="svg-icon svg-icon-3 svg-icon-success me-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                                                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                                                                </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}                                    <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div>
                                                                            </div>
                                                                            {/*end::Number*/}

                                                                            {/*begin::Label*/}
                                                                            <div className="fw-semibold fs-6 text-gray-400">Earnings</div>
                                                                            {/*end::Label*/}
                                                                        </div>
                                                                        {/*end::Stat*/}

                                                                        {/*begin::Stat*/}
                                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                                            {/*begin::Number*/}
                                                                            <div className="d-flex align-items-center">
                                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                                                                <span className="svg-icon svg-icon-3 svg-icon-danger me-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                                                                                    <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                                                                </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}                                    <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="80">0</div>
                                                                            </div>
                                                                            {/*end::Number*/}

                                                                            {/*begin::Label*/}
                                                                            <div className="fw-semibold fs-6 text-gray-400">Projects</div>
                                                                            {/*end::Label*/}
                                                                        </div>
                                                                        {/*end::Stat*/}

                                                                        {/*begin::Stat*/}
                                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                                            {/*begin::Number*/}
                                                                            <div className="d-flex align-items-center">
                                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                                                <span className="svg-icon svg-icon-3 svg-icon-success me-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                                                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                                                                </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}                                    <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div>
                                                                            </div>
                                                                            {/*end::Number*/}

                                                                            {/*begin::Label*/}
                                                                            <div className="fw-semibold fs-6 text-gray-400">Success Rate</div>
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
                                                                        <div className="bg-success rounded h-5px" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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
                                                    <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                                                        {/*begin::Nav item*/}
                                                        <li className="nav-item mt-2">
                                                            <a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="overview.html">
                                                                Overview                    </a>
                                                        </li>
                                                        {/*end::Nav item*/}
                                                        {/*begin::Nav item*/}
                                                        <li className="nav-item mt-2">
                                                            <a className="nav-link text-active-primary ms-0 me-10 py-5 " href="projects.html">
                                                                Projects                    </a>
                                                        </li>
                                                        {/*end::Nav item*/}
                                                        {/*begin::Nav item*/}
                                                        <li className="nav-item mt-2">
                                                            <a className="nav-link text-active-primary ms-0 me-10 py-5 " href="campaigns.html">
                                                                Campaigns                    </a>
                                                        </li>
                                                        {/*end::Nav item*/}
                                                        {/*begin::Nav item*/}
                                                        <li className="nav-item mt-2">
                                                            <a className="nav-link text-active-primary ms-0 me-10 py-5 " href="documents.html">
                                                                Documents                    </a>
                                                        </li>
                                                        {/*end::Nav item*/}
                                                        {/*begin::Nav item*/}
                                                        <li className="nav-item mt-2">
                                                            <a className="nav-link text-active-primary ms-0 me-10 py-5 " href="followers.html">
                                                                Followers                    </a>
                                                        </li>
                                                        {/*end::Nav item*/}
                                                        {/*begin::Nav item*/}
                                                        <li className="nav-item mt-2">
                                                            <a className="nav-link text-active-primary ms-0 me-10 py-5 " href="activity.html">
                                                                Activity                    </a>
                                                        </li>
                                                        {/*end::Nav item*/}
                                                    </ul>
                                                    {/*begin::Navs*/}
                                                </div>
                                            </div>
                                            {/*end::Navbar*/}
                                            {/*begin::Row*/}
                                            <div className="row g-5 g-xxl-8">
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
                                                                        <img src="/assets/media/avatars/300-6.jpg" alt="" />
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
                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
                                                                                <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                                                                                <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                                                                                <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                                                                            </g>
                                                                        </svg></span>
                                                                        {/*end::Svg Icon*/}                </button>

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
                                                                {/*end::Menu*/}
                                                            </div>
                                                            {/*end::Header*/}

                                                            {/*begin::Form*/}
                                                            <form id="kt_forms_widget_1_form" className="ql-quil ql-quil-plain pb-3">
                                                                {/*begin::Editor*/}
                                                                <div id="kt_forms_widget_1_editor" className="py-6 ql-container ql-snow"><div className="ql-editor ql-blank" data-gramm="false" data-placeholder="What is on your mind ?" contenteditable="true"><p><br /></p></div><div className="ql-clipboard" tabindex="-1" contenteditable="true"></div><div className="ql-tooltip ql-hidden"><a className="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" /><a className="ql-action"></a><a className="ql-remove"></a></div></div>
                                                                {/*end::Editor*/}

                                                                <div className="separator"></div>

                                                                {/*begin::Toolbar*/}
                                                                <div id="kt_forms_widget_1_editor_toolbar" className="ql-toolbar d-flex flex-stack py-2 ql-snow">
                                                                    <div className="me-2">
                                                                        <span className="ql-formats ql-size ms-0">
                                                                            <span className="ql-size w-75px ql-picker"><span className="ql-picker-label" tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-0"><svg viewBox="0 0 18 18"> <polygon className="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon> <polygon className="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon> </svg></span><span className="ql-picker-options" aria-hidden="true" tabindex="-1" id="ql-picker-options-0"><span tabindex="0" role="button" className="ql-picker-item" data-value="small"></span><span tabindex="0" role="button" className="ql-picker-item ql-selected"></span><span tabindex="0" role="button" className="ql-picker-item" data-value="large"></span><span tabindex="0" role="button" className="ql-picker-item" data-value="huge"></span></span></span><select className="ql-size w-75px" style={{ display: 'none' }}><option value="small"></option><option selected="selected"></option><option value="large"></option><option value="huge"></option></select>
                                                                        </span>

                                                                        <span className="ql-formats">
                                                                            <button className="ql-bold" type="button"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path> <path className="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path> </svg></button>
                                                                            <button className="ql-italic" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line> <line className="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line> <line className="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line> </svg></button>
                                                                            <button className="ql-underline" type="button"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path> <rect className="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect> </svg></button>
                                                                            <button className="ql-strike" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"></line> <path className="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"></path> <path className="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"></path> </svg></button>
                                                                            <button className="ql-image" type="button"><svg viewBox="0 0 18 18"> <rect className="ql-stroke" height="10" width="12" x="3" y="4"></rect> <circle className="ql-fill" cx="6" cy="7" r="1"></circle> <polyline className="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg></button>
                                                                            <button className="ql-link" type="button"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line> <path className="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path> <path className="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path> </svg></button>
                                                                            <button className="ql-clean" type="button"><svg className="" viewBox="0 0 18 18"> <line className="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line> <line className="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line> <line className="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line> <line className="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line> <rect className="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect> </svg></button>
                                                                        </span>
                                                                    </div>

                                                                    <div className="me-n3">
                                                                        <span className="btn btn-icon btn-sm btn-active-color-primary">
                                                                            <i className="flaticon2-clip-symbol icon-ms"></i>
                                                                        </span>

                                                                        <span className="btn btn-icon btn-sm btn-active-color-primary">
                                                                            <i className="flaticon2-pin icon-ms"></i>
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
                                                                        <img src="/assets/media/avatars/300-23.jpg" alt="" />
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
                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                                <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                                <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                                <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            </g>
                                                                        </svg></span>
                                                                        {/*end::Svg Icon*/}                </button>

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
                                                                        <span className="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                                                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                                                                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                                                                        </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}                    120
                                                                    </a>

                                                                    <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                                        <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                            <div className="separator mb-4"></div>
                                                            {/*end::Separator*/}

                                                            {/*begin::Reply input*/}
                                                            <form className="position-relative mb-6">
                                                                <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows="1" placeholder="Reply.."></textarea>

                                                                <div className="position-absolute top-0 end-0 me-n5">
                                                                    <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mb-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                                                                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                                                                        </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}				</span>

                                                                    <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                                        <span className="svg-icon svg-icon-2 mb-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                                        <img src="/assets/media/avatars/300-21.jpg" alt="" />
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
                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                                <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                                <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                                <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            </g>
                                                                        </svg></span>
                                                                        {/*end::Svg Icon*/}                </button>

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
                                                                        <span className="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                                                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                                                                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                                                                        </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}                    12
                                                                    </a>

                                                                    <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                                        <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                                        <img src="/assets/media/avatars/300-14.jpg" alt="" />
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
                                                                        <img src="/assets/media/avatars/300-9.jpg" alt="" />
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
                                                            <div className="separator mb-4"></div>
                                                            {/*end::Separator*/}

                                                            {/*begin::Reply input*/}
                                                            <form className="position-relative mb-6">
                                                                <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows="1" placeholder="Reply.."></textarea>

                                                                <div className="position-absolute top-0 end-0 me-n5">
                                                                    <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mb-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                                                                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                                                                        </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}				</span>

                                                                    <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                                        <span className="svg-icon svg-icon-2 mb-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                                        <img src="/assets/media/avatars/300-7.jpg" alt="" />
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
                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                                <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                                <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                                <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            </g>
                                                                        </svg></span>
                                                                        {/*end::Svg Icon*/}                </button>

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

                                                                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i>
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
                                                                                <span className="menu-arrow"></span>
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
                                                                                <div className="separator my-2"></div>
                                                                                {/*end::Menu separator*/}

                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <div className="menu-content px-3">
                                                                                        {/*begin::Switch*/}
                                                                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                                                                            {/*begin::Input*/}
                                                                                            <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
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
                                                                        <span className="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                                                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                                                                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                                                                        </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}                    22
                                                                    </a>

                                                                    <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                                        <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                            <div className="separator mb-4"></div>
                                                            {/*end::Separator*/}

                                                            {/*begin::Reply input*/}
                                                            <form className="position-relative mb-6">
                                                                <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows="1" placeholder="Reply.."></textarea>

                                                                <div className="position-absolute top-0 end-0 me-n5">
                                                                    <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mb-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                                                                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                                                                        </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}				</span>

                                                                    <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                                        <span className="svg-icon svg-icon-2 mb-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                                        <img src="/assets/media/avatars/300-7.jpg" alt="" />
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
                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                                <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                                <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                                <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            </g>
                                                                        </svg></span>
                                                                        {/*end::Svg Icon*/}                </button>

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
                                                                {/*end::Menu*/}
                                                            </div>
                                                            {/*end::Header*/}

                                                            {/*begin::Post*/}
                                                            <div className="mb-7">
                                                                {/*begin::Image*/}
                                                                <div className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5"
                                                                    style={{ backgroundImage: "url('/assets/media/stock/900x600/19.jpg')" }}>
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
                                                                        <span className="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                                                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                                                                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                                                                        </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}                    20
                                                                    </a>

                                                                    <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                                        <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                            <div className="separator mb-4"></div>
                                                            {/*end::Separator*/}

                                                            {/*begin::Reply input*/}
                                                            <form className="position-relative mb-6">
                                                                <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows="1" placeholder="Reply.."></textarea>

                                                                <div className="position-absolute top-0 end-0 me-n5">
                                                                    <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                                        <span className="svg-icon svg-icon-3 mb-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                                                                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                                                                        </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}				</span>

                                                                    <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                                        <span className="svg-icon svg-icon-2 mb-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                            Loading... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
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
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                            <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                        </g>
                                                                    </svg></span>
                                                                    {/*end::Svg Icon*/}            </button>


                                                                {/*begin::Menu 1*/}
                                                                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63eda864470ef">
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
                                                                                <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63eda864470ef" data-allow-clear="true">
                                                                                    <option></option>
                                                                                    <option value="1">Approved</option>
                                                                                    <option value="2">Pending</option>
                                                                                    <option value="2">In Process</option>
                                                                                    <option value="2">Rejected</option>
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
                                                                                <input className="form-check-input" type="checkbox" value="" name="notifications" checked />
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
                                                            <div id="kt_charts_widget_1_chart" style={{ height: '350px' }}></div>
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
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                            <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                        </g>
                                                                    </svg></span>
                                                                    {/*end::Svg Icon*/}            </button>


                                                                {/*begin::Menu 1*/}
                                                                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63eda86447122">
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
                                                                                <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63eda86447122" data-allow-clear="true">
                                                                                    <option></option>
                                                                                    <option value="1">Approved</option>
                                                                                    <option value="2">Pending</option>
                                                                                    <option value="2">In Process</option>
                                                                                    <option value="2">Rejected</option>
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
                                                                                <input className="form-check-input" type="checkbox" value="" name="notifications" checked />
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
                                                                        <i className="fa fa-genderless text-warning fs-1"></i>
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
                                                                        <i className="fa fa-genderless text-success fs-1"></i>
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
                                                                        <i className="fa fa-genderless text-danger fs-1"></i>
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
                                                                        <i className="fa fa-genderless text-primary fs-1"></i>
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
                                                                        <i className="fa fa-genderless text-danger fs-1"></i>
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
                                                                        <i className="fa fa-genderless text-success fs-1"></i>
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
                                <div id="kt_app_footer" className="app-footer " >
                                    {/*begin::Footer container*/}
                                    <div className="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
                                        {/*begin::Copyright*/}
                                        <div className="text-dark order-2 order-md-1">
                                            <span className="text-muted fw-semibold me-1">2023&copy;</span>
                                            <a href="https://keenthemes.com/" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
                                        </div>
                                        {/*end::Copyright*/}

                                        {/*begin::Menu*/}
                                        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                            <li className="menu-item"><a href="https://keenthemes.com/" target="_blank" className="menu-link px-2">About</a></li>

                                            <li className="menu-item"><a href="https://devs.keenthemes.com/" target="_blank" className="menu-link px-2">Support</a></li>

                                            <li className="menu-item"><a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a></li>
                                        </ul>
                                        {/*end::Menu*/}        </div>
                                    {/*end::Footer container*/}
                                </div>
                                {/*end::Footer*/}                            </div>
                            {/*end:::Main*/}


                        </div>
                        {/*end::Wrapper*/}


                    </div>
                    {/*end::Page*/}
                </div>
                {/*end::App*/}

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


                                                    {/*begin::Image input*/}
                                                    <div className="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true" style={{ backgroundImage: "url('/assets/media/svg/files/blank-image.svg')" }}>
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
                                                                    <img src="/assets/media/svg/files/pdf.svg" alt="icon" />
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
                                                                    <img src="/assets/media/svg/files/tif.svg" alt="icon" />
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
                                                                    <img src="/assets/media/svg/files/folder-document.svg" alt="icon" />
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
                                                                    <img src="/assets/media/svg/files/css.svg" alt="icon" />
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
                                                                    <img src="/assets/media/svg/files/ai.svg" alt="icon" />
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
                                                                    <img src="/assets/media/svg/files/doc.svg" alt="icon" />
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
                                                    <img src="/assets/media/illustrations/sketchy-1/9.png" alt="" className="mww-100 mh-350px" />
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
                {/*end::Modal - Create Campaign*/}{/*begin::Modal - Offer A Deal*/}
                <div className="modal fade" id="kt_modal_offer_a_deal" tabindex="-1" aria-hidden="true">
                    {/*begin::Modal dialog*/}
                    <div className="modal-dialog modal-dialog-centered mw-1000px">
                        {/*begin::Modal content*/}
                        <div className="modal-content">
                            {/*begin::Modal header*/}
                            <div className="modal-header py-7 d-flex justify-content-between">
                                {/*begin::Modal title*/}
                                <h2>Offer a Deal</h2>
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
                                <div className="stepper stepper-links d-flex flex-column" id="kt_modal_offer_a_deal_stepper">
                                    {/*begin::Nav*/}
                                    <div className="stepper-nav justify-content-center py-2">
                                        {/*begin::Step 1*/}
                                        <div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                                            <h3 className="stepper-title">
                                                Deal Type
                                            </h3>
                                        </div>
                                        {/*end::Step 1*/}

                                        {/*begin::Step 2*/}
                                        <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                            <h3 className="stepper-title">
                                                Deal Details
                                            </h3>
                                        </div>
                                        {/*end::Step 2*/}

                                        {/*begin::Step 3*/}
                                        <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                            <h3 className="stepper-title">
                                                Finance Settings
                                            </h3>
                                        </div>
                                        {/*end::Step 3*/}

                                        {/*begin::Step 4*/}
                                        <div className="stepper-item" data-kt-stepper-element="nav">
                                            <h3 className="stepper-title">
                                                Completed
                                            </h3>
                                        </div>
                                        {/*end::Step 4*/}
                                    </div>
                                    {/*end::Nav*/}

                                    {/*begin::Form*/}
                                    <form className="mx-auto mw-500px w-100 pt-15 pb-10" novalidate="novalidate" id="kt_modal_offer_a_deal_form">
                                        {/*begin::Type*/}
                                        <div className="current" data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="mb-13">
                                                    {/*begin::Title*/}
                                                    <h2 className="mb-3">Deal Type</h2>
                                                    {/*end::Title*/}

                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-semibold fs-5">
                                                        If you need more info, please check out
                                                        <a href="#" className="link-primary fw-bold">FAQ Page</a>.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-15" data-kt-buttons="true">
                                                    {/*begin::Option*/}
                                                    <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                                                        {/*begin::Input*/}
                                                        <input className="btn-check" type="radio" checked="checked" name="offer_type" value="1" />
                                                        {/*end::Input*/}

                                                        {/*begin::Label*/}
                                                        <span className="d-flex">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                            <span className="svg-icon svg-icon-3hx"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                                                                <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                                                                <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                                                            </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}                    {/*end::Icon*/}

                                                            {/*begin::Info*/}
                                                            <span className="ms-4">
                                                                <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal Deal</span>

                                                                <span className="fw-semibold fs-4 text-muted">
                                                                    If you need more info, please check it out
                                                                </span>
                                                            </span>
                                                            {/*end::Info*/}
                                                        </span>
                                                        {/*end::Label*/}
                                                    </label>
                                                    {/*end::Option*/}

                                                    {/*begin::Option*/}
                                                    <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                                                        {/*begin::Input*/}
                                                        <input className="btn-check" type="radio" name="offer_type" value="2" />
                                                        {/*end::Input*/}

                                                        {/*begin::Label*/}
                                                        <span className="d-flex">
                                                            {/*begin::Icon*/}
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                            <span className="svg-icon svg-icon-3hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                            </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}                    {/*end::Icon*/}

                                                            {/*begin::Info*/}
                                                            <span className="ms-4">
                                                                <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Corporate Deal</span>

                                                                <span className="fw-semibold fs-4 text-muted">
                                                                    Create corporate account to manage users
                                                                </span>
                                                            </span>
                                                            {/*end::Info*/}
                                                        </span>
                                                        {/*end::Label*/}
                                                    </label>
                                                    {/*end::Option*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Actions*/}
                                                <div className="d-flex justify-content-end">
                                                    <button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next">
                                                        <span className="indicator-label">
                                                            Offer Details
                                                        </span>
                                                        <span className="indicator-progress">
                                                            Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*end::Actions*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Type*/}
                                        {/*begin::Details*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="mb-13">
                                                    {/*begin::Title*/}
                                                    <h2 className="mb-3">Deal Details</h2>
                                                    {/*end::Title*/}

                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-semibold fs-5">
                                                        If you need more info, please check out
                                                        <a href="#" className="link-primary fw-bold">FAQ Page</a>.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="required fs-6 fw-semibold mb-2">Customer</label>
                                                    {/*end::Label*/}

                                                    {/*begin::Input*/}
                                                    <select className="form-select form-select-solid" data-control="select2" data-placeholder="Select an option" name="details_customer">
                                                        <option></option>
                                                        <option value="1" selected>Keenthemes</option>
                                                        <option value="2">CRM App</option>
                                                    </select>
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="required fs-6 fw-semibold mb-2">Deal Title</label>
                                                    {/*end::Label*/}

                                                    {/*begin::Input*/}
                                                    <input type="text" className="form-control form-control-solid" placeholder="Enter Deal Title" name="details_title" value="Marketing Campaign" />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-semibold mb-2">Deal Description</label>
                                                    {/*end::Label*/}

                                                    {/*begin::Label*/}
                                                    <textarea className="form-control form-control-solid" rows="3" placeholder="Enter Deal Description" name="details_description">
                                                        Experience share market at your fingertips with TICK PRO stock investment mobile trading app
                                                    </textarea>
                                                    {/*end::Label*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    <label className="required fs-6 fw-semibold mb-2">Activation Date</label>
                                                    <div className="position-relative d-flex align-items-center">
                                                        {/*begin::Icon*/}
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                                        <span className="svg-icon svg-icon-2 position-absolute mx-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                                                            <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                                                            <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                                                        </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}                {/*end::Icon*/}

                                                        {/*begin::Datepicker*/}
                                                        <input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="details_activation_date" />
                                                        {/*end::Datepicker*/}
                                                    </div>
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-15">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex flex-stack">
                                                        {/*begin::Label*/}
                                                        <div className="me-5">
                                                            <label className="required fs-6 fw-semibold">Notifications</label>
                                                            <div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
                                                        </div>
                                                        {/*end::Label*/}

                                                        {/*begin::Checkboxes*/}
                                                        <div className="d-flex">
                                                            {/*begin::Checkbox*/}
                                                            <label className="form-check form-check-custom form-check-solid me-10">
                                                                {/*begin::Input*/}
                                                                <input className="form-check-input h-20px w-20px" type="checkbox" value="email" name="details_notifications[]" />
                                                                {/*end::Input*/}

                                                                {/*begin::Label*/}
                                                                <span className="form-check-label fw-semibold">
                                                                    Email
                                                                </span>
                                                                {/*end::Label*/}
                                                            </label>
                                                            {/*end::Checkbox*/}

                                                            {/*begin::Checkbox*/}
                                                            <label className="form-check form-check-custom form-check-solid">
                                                                {/*begin::Input*/}
                                                                <input className="form-check-input h-20px w-20px" type="checkbox" value="phone" checked name="details_notifications[]" />
                                                                {/*end::Input*/}

                                                                {/*begin::Label*/}
                                                                <span className="form-check-label fw-semibold">
                                                                    Phone
                                                                </span>
                                                                {/*end::Label*/}
                                                            </label>
                                                            {/*end::Checkbox*/}
                                                        </div>
                                                        {/*end::Checkboxes*/}
                                                    </div>
                                                    {/*begin::Wrapper*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Actions*/}
                                                <div className="d-flex flex-stack">
                                                    <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="details-previous">
                                                        Deal Type
                                                    </button>

                                                    <button type="button" className="btn btn-lg btn-primary" data-kt-element="details-next">
                                                        <span className="indicator-label">
                                                            Financing
                                                        </span>
                                                        <span className="indicator-progress">
                                                            Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*end::Actions*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Budget*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="mb-13">
                                                    {/*begin::Title*/}
                                                    <h2 className="mb-3">Finance</h2>
                                                    {/*end::Title*/}

                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-semibold fs-5">
                                                        If you need more info, please check out
                                                        <a href="#" className="link-primary fw-bold">FAQ Page</a>.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                        <span className="required">Setup Budget</span>

                                                        <i
                                                            className="fas fa-exclamation-circle ms-2 fs-7"
                                                            data-bs-toggle="popover"
                                                            data-bs-trigger="hover"
                                                            data-bs-html="true"
                                                            data-bs-content="
                        <div className='p-4 rounded bg-light'>
                            <div className='d-flex flex-stack text-muted mb-4'>
                                <i className='fas fa-university fs-3 me-3'></i>

                                <div className='fw-bold'>INCBANK **** 1245 STATEMENT</div>
                            </div>

                            <div className='d-flex flex-stack fw-semibold text-gray-600'>
                                <div>Amount</div>
                                <div>Transaction</div>
                            </div>

                            <div className='separator separator-dashed my-2'></div>

                            <div className='d-flex flex-stack text-dark fw-bold mb-2'>
                                <div>USD345.00</div>
                                <div>KEENTHEMES*</div>
                            </div>

                            <div className='d-flex flex-stack text-muted mb-2'>
                                <div>USD75.00</div>
                                <div>Hosting fee</div>
                            </div>

                            <div className='d-flex flex-stack text-muted'>
                                <div>USD3,950.00</div>
                                <div>Payrol</div>
                            </div>
                        </div>
                    ">
                                                        </i>
                                                    </label>
                                                    {/*end::Label*/}

                                                    {/*begin::Dialer*/}
                                                    <div className="position-relative w-lg-250px"
                                                        id="kt_modal_finance_setup"
                                                        data-kt-dialer="true"
                                                        data-kt-dialer-min="50"
                                                        data-kt-dialer-max="50000"
                                                        data-kt-dialer-step="100"
                                                        data-kt-dialer-prefix="$"
                                                        data-kt-dialer-decimals="2">

                                                        {/*begin::Decrease control*/}
                                                        <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen042.svg*/}
                                                            <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                                                            </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}                </button>
                                                        {/*end::Decrease control*/}

                                                        {/*begin::Input control*/}
                                                        <input type="text" className="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="finance_setup" readonly value="$50" />
                                                        {/*end::Input control*/}

                                                        {/*begin::Increase control*/}
                                                        <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen041.svg*/}
                                                            <span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                                                                <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                                                <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                                                            </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}                </button>
                                                        {/*end::Increase control*/}
                                                    </div>
                                                    {/*end::Dialer*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-8">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-semibold mb-2">Budget Usage</label>
                                                    {/*end::Label*/}

                                                    {/*begin::Row*/}
                                                    <div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                                                        {/*begin::Col*/}
                                                        <div className="col-md-6 col-lg-12 col-xxl-6">
                                                            {/*begin::Option*/}
                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
                                                                {/*begin::Radio*/}
                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                    <input className="form-check-input" type="radio" name="finance_usage" value="1" checked="checked" />
                                                                </span>
                                                                {/*end::Radio*/}

                                                                {/*begin::Info*/}
                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise Usage</span>

                                                                    <span className="fw-semibold fs-7 text-gray-600">
                                                                        Withdraw money to your bank account per transaction under $50,000 budget
                                                                    </span>
                                                                </span>
                                                                {/*end::Info*/}
                                                            </label>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Col*/}

                                                        {/*begin::Col*/}
                                                        <div className="col-md-6 col-lg-12 col-xxl-6">
                                                            {/*begin::Option*/}
                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                                                                {/*begin::Radio*/}
                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                    <input className="form-check-input" type="radio" name="finance_usage" value="2" />
                                                                </span>
                                                                {/*end::Radio*/}

                                                                {/*begin::Info*/}
                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme Usage</span>
                                                                    <span className="fw-semibold fs-7 text-gray-600">
                                                                        Withdraw money to your bank account per transaction under $50,000 budget
                                                                    </span>
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
                                                <div className="fv-row mb-15">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex flex-stack">
                                                        {/*begin::Label*/}
                                                        <div className="me-5">
                                                            <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                                                            <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                                        </div>
                                                        {/*end::Label*/}

                                                        {/*begin::Switch*/}
                                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="checkbox" value="1" name="finance_allow" checked="checked" />
                                                            <span className="form-check-label fw-semibold text-muted">
                                                                Allowed
                                                            </span>
                                                        </label>
                                                        {/*end::Switch*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </div>
                                                {/*end::Input group*/}

                                                {/*begin::Actions*/}
                                                <div className="d-flex flex-stack">
                                                    <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="finance-previous">
                                                        Project Settings
                                                    </button>

                                                    <button type="button" className="btn btn-lg btn-primary" data-kt-element="finance-next">
                                                        <span className="indicator-label">
                                                            Build Team
                                                        </span>
                                                        <span className="indicator-progress">
                                                            Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*end::Actions*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Budget*/}
                                        {/*begin::Complete*/}
                                        <div data-kt-stepper-element="content">
                                            {/*begin::Wrapper*/}
                                            <div className="w-100">
                                                {/*begin::Heading*/}
                                                <div className="mb-13">
                                                    {/*begin::Title*/}
                                                    <h2 className="mb-3">Deal Created!</h2>
                                                    {/*end::Title*/}

                                                    {/*begin::Description*/}
                                                    <div className="text-muted fw-semibold fs-5">
                                                        If you need more info, please check out
                                                        <a href="#" className="link-primary fw-bold">FAQ Page</a>.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Heading*/}

                                                {/*begin::Actions*/}
                                                <div className="d-flex flex-center pb-20">
                                                    <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">
                                                        Create New Deal
                                                    </button>

                                                    <a href="#" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">
                                                        View Deal
                                                    </a>
                                                </div>
                                                {/*end::Actions*/}

                                                {/*begin::Illustration*/}
                                                <div className="text-center px-4">
                                                    <img src="/assets/media/illustrations/sketchy-1/20.png" alt="" className="mw-100 mh-300px" />
                                                </div>
                                                {/*end::Illustration*/}
                                            </div>
                                        </div>
                                        {/*end::Complete*/}                    </form>
                                    {/*end::Form*/}
                                </div>
                                {/*end::Stepper*/}
                            </div>
                            {/*begin::Modal body*/}
                        </div>
                    </div>
                </div>
                {/*end::Modal - Offer A Deal*/}{/*begin::Modal - Users Search*/}
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
                                                        <img alt="Pic" src="/assets/media/avatars/300-6.jpg" />
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
                                                        <img alt="Pic" src="/assets/media/avatars/300-1.jpg" />
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
                                                        <img alt="Pic" src="/assets/media/avatars/300-5.jpg" />
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
                                                        <img alt="Pic" src="/assets/media/avatars/300-25.jpg" />
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
                                                            <img alt="Pic" src="/assets/media/avatars/300-6.jpg" />
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
                                                            <img alt="Pic" src="/assets/media/avatars/300-1.jpg" />
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
                                                            <img alt="Pic" src="/assets/media/avatars/300-5.jpg" />
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
                                                            <img alt="Pic" src="/assets/media/avatars/300-25.jpg" />
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
                                                            <img alt="Pic" src="/assets/media/avatars/300-9.jpg" />
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
                                                            <img alt="Pic" src="/assets/media/avatars/300-23.jpg" />
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
                                                            <img alt="Pic" src="/assets/media/avatars/300-12.jpg" />
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
                                                            <img alt="Pic" src="/assets/media/avatars/300-13.jpg" />
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
                                                            <img alt="Pic" src="/assets/media/avatars/300-21.jpg" />
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
                                                <img src="/assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
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
                                    <img alt="Logo" src="/assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />
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
                                                    <img alt="Pic" src="/assets/media/avatars/300-6.jpg" />
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
                                                    <img alt="Pic" src="/assets/media/avatars/300-1.jpg" />
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
                                                    <img alt="Pic" src="/assets/media/avatars/300-5.jpg" />
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
                                                    <img alt="Pic" src="/assets/media/avatars/300-25.jpg" />
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
                                                    <img alt="Pic" src="/assets/media/avatars/300-9.jpg" />
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
                                                    <img alt="Pic" src="/assets/media/avatars/300-23.jpg" />
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
                                                    <img alt="Pic" src="/assets/media/avatars/300-12.jpg" />
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
                                                    <img alt="Pic" src="/assets/media/avatars/300-13.jpg" />
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
                                                    <img alt="Pic" src="/assets/media/avatars/300-21.jpg" />
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
                                                    <img alt="Pic" src="/assets/media/avatars/300-1.jpg" />
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
                {/*end::Modal - Invite Friend*/}            {/*end::Modals*/}
            </div>

        </>
    )
}

export default Help