                                 /*eslint-disable */
import React from 'react'
import Header from "../../shared/Header"
import Sidebar from "../../shared/Sidebar"
const Home = () => {
  return (
    <>
<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page  flex-column flex-column-fluid " id="kt_app_page">     
        
                    
<!--begin::Header-->
<div id="kt_app_header" class="app-header " data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">

                        <!--begin::Header container-->
            <div class="app-container  container-fluid d-flex flex-stack " id="kt_app_header_container">
                <!--begin::Sidebar toggle-->
<div class="d-flex align-items-center d-block d-lg-none ms-n3" title="Show sidebar menu">
	<div class="btn btn-icon btn-active-color-primary w-35px h-35px me-2" id="kt_app_sidebar_mobile_toggle">
		<!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
<span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor"></path>
<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->	</div>

	<!--begin::Logo image-->
    <a href="../../index.html">
		<img alt="Logo" src="../../assets/media/logos/default-small.svg" class="h-30px theme-light-show">
		<img alt="Logo" src="../../assets/media/logos/default-small-dark.svg" class="h-30px theme-dark-show">
    </a>
    <!--end::Logo image-->
</div>
<!--end::Sidebar toggle-->

<!--begin::Header wrapper-->
<div class="d-flex flex-stack flex-lg-row-fluid" id="kt_app_header_wrapper">
	 

<!--begin::Page title-->
<div class="page-title gap-4 me-3 mb-5 mb-lg-0" data-kt-swapper="true" data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_wrapper'}">
      
        <!--begin::Breadcrumb-->
        <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 mb-2">        
                         
                <!--begin::Item-->
                                    <li class="breadcrumb-item text-gray-600 fw-bold lh-1">
                                                    <a href="../../index.html" class="text-gray-700 text-hover-primary me-1">
                                                                    <i class="fonticon-home text-gray-700 fs-3"></i>
                                                            </a>
                                            </li>
                                <!--end::Item-->

                                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
<span class="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    </li>
                    <!--end::Item-->
                                        
                         
                <!--begin::Item-->
                                    <li class="breadcrumb-item text-gray-600 fw-bold lh-1">
                                                    Pages                                            </li>
                                <!--end::Item-->

                                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
<span class="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    </li>
                    <!--end::Item-->
                                        
                         
                <!--begin::Item-->
                                    <li class="breadcrumb-item text-gray-600 fw-bold lh-1">
                                                    Social                                            </li>
                                <!--end::Item-->

                                        
                    </ul>
        <!--end::Breadcrumb-->
    
    <!--begin::Title-->
    <h1 class="text-gray-900 fw-bolder m-0">
        Social Feeds         
    </h1>
    <!--end::Title--> 
</div>
<!--end::Page title-->
	<!--begin::Action-->	
	<a href="#" class="btn btn-primary d-flex flex-center h-35px h-lg-40px" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
		Create <span class="d-none d-sm-inline ps-2">New</span> 
	</a>	 
	<!--end::Action-->
</div>
<!--end::Header wrapper-->            </div>
            <!--end::Header container-->
            </div>
<!--end::Header-->        
        <!--begin::Wrapper-->
        <div class="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">
            
                  
            
            
                                                
<!--begin::Sidebar-->
<div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">

            <!--begin::Header-->
<div class="app-sidebar-header d-none d-lg-flex px-6 pt-8 pb-4" id="kt_app_sidebar_header">
    <!--begin::Toggle-->
    <button type="button" data-kt-element="selected" class="btn btn-outline btn-custom btn-flex w-100" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, -1px">
        <!--begin::Logo-->
        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
            <img alt="Logo" src="../../assets/media/logos/default-small.svg" data-kt-element="logo" class="h-30px">
        </span>    
        <!--end::Logo-->   

        <!--begin::Info-->
        <span class="d-flex flex-column align-items-start flex-grow-1">
            <span class="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                Metronic            </span>
            <span class="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                Workspace            </span>
        </span>
        <!--end::Info-->

        <!--begin::Arrows-->
        <span class="d-flex flex-column me-n4">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr073.svg-->
<span class="svg-icon svg-icon-3 svg-icon-gray-700"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5657 11.3657L16.75 15.55C17.1642 15.9643 17.8358 15.9643 18.25 15.55C18.6642 15.1358 18.6642 14.4643 18.25 14.05L12.7071 8.50716C12.3166 8.11663 11.6834 8.11663 11.2929 8.50715L5.75 14.05C5.33579 14.4643 5.33579 15.1358 5.75 15.55C6.16421 15.9643 6.83579 15.9643 7.25 15.55L11.4343 11.3657C11.7467 11.0533 12.2533 11.0533 12.5657 11.3657Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->            <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
<span class="svg-icon svg-icon-3 svg-icon-gray-700"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->        </span>
        <!--end::Arrows-->
    </button>
    <!--end::Toggle-->

    <!--begin::Menu-->
    <div class="menu menu-sub menu-sub-dropdown menu-column menu-state-bg menu-rounded w-300px ps-3" data-kt-menu="true">
        <!--begin::Menu wrapper-->
        <div class="hover-scroll-y h-250px my-3 pe-5 me-n1">
                            <!--begin::Menu item-->
                <div class="menu-item">
                    <!--begin::Menu link-->
                    <a href="#" class="menu-link px-3 py-3 active" data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../../assets/media/logos/default-small.svg" data-kt-element="logo" class="h-30px">
                        </span>       
                        <!--end::Logo-->

                        <!--begin::Info-->
                        <span class="d-flex flex-column align-items-start">
                            <span class="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                Metronic                            </span>
                            <span class="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                Workspace                            </span>
                        </span>
                        <!--end::Info-->
                    </a>
                </div>
                <!--end::Menu item-->
                            <!--begin::Menu item-->
                <div class="menu-item">
                    <!--begin::Menu link-->
                    <a href="#" class="menu-link px-3 py-3 " data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../../assets/media/svg/brand-logos/slack-icon.svg" data-kt-element="logo" class="h-30px">
                        </span>       
                        <!--end::Logo-->

                        <!--begin::Info-->
                        <span class="d-flex flex-column align-items-start">
                            <span class="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                Slack                            </span>
                            <span class="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                Messanger                            </span>
                        </span>
                        <!--end::Info-->
                    </a>
                </div>
                <!--end::Menu item-->
                            <!--begin::Menu item-->
                <div class="menu-item">
                    <!--begin::Menu link-->
                    <a href="#" class="menu-link px-3 py-3 " data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../../assets/media/svg/brand-logos/dribbble-icon-1.svg" data-kt-element="logo" class="h-30px">
                        </span>       
                        <!--end::Logo-->

                        <!--begin::Info-->
                        <span class="d-flex flex-column align-items-start">
                            <span class="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                Dribbble                            </span>
                            <span class="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                Community                            </span>
                        </span>
                        <!--end::Info-->
                    </a>
                </div>
                <!--end::Menu item-->
                            <!--begin::Menu item-->
                <div class="menu-item">
                    <!--begin::Menu link-->
                    <a href="#" class="menu-link px-3 py-3 " data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../../assets/media/svg/brand-logos/bootstrap5.svg" data-kt-element="logo" class="h-30px">
                        </span>       
                        <!--end::Logo-->

                        <!--begin::Info-->
                        <span class="d-flex flex-column align-items-start">
                            <span class="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                Bootstrap                            </span>
                            <span class="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                CSS &amp; JS Framework                            </span>
                        </span>
                        <!--end::Info-->
                    </a>
                </div>
                <!--end::Menu item-->
                            <!--begin::Menu item-->
                <div class="menu-item">
                    <!--begin::Menu link-->
                    <a href="#" class="menu-link px-3 py-3 " data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../../assets/media/svg/brand-logos/spotify-2.svg" data-kt-element="logo" class="h-30px">
                        </span>       
                        <!--end::Logo-->

                        <!--begin::Info-->
                        <span class="d-flex flex-column align-items-start">
                            <span class="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                Spotify                            </span>
                            <span class="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                Podcasts                            </span>
                        </span>
                        <!--end::Info-->
                    </a>
                </div>
                <!--end::Menu item-->
                            <!--begin::Menu item-->
                <div class="menu-item">
                    <!--begin::Menu link-->
                    <a href="#" class="menu-link px-3 py-3 " data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../../assets/media/svg/brand-logos/beats-electronics.svg" data-kt-element="logo" class="h-30px">
                        </span>       
                        <!--end::Logo-->

                        <!--begin::Info-->
                        <span class="d-flex flex-column align-items-start">
                            <span class="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                Beats                            </span>
                            <span class="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                Electronics                            </span>
                        </span>
                        <!--end::Info-->
                    </a>
                </div>
                <!--end::Menu item-->
                    </div>
        <!--end::Menu wrapper-->
    </div>
    <!--end::Menu-->
</div>
<!--end::Header-->
<!--begin::Navs-->
<div class="app-sidebar-navs flex-column-fluid py-6" id="kt_app_sidebar_navs">    
	<div id="kt_app_sidebar_navs_wrappers" class="hover-scroll-y my-2" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_header, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_navs" data-kt-scroll-offset="5px" style="height: 417px;">

		
<!--begin::Quick links-->
<div class="menu menu-rounded menu-column">
            <!--begin::Menu Item-->
        <div class="menu-item">
            <!--begin::Menu link-->
            <a href="../../apps/projects/project.html" class="menu-link">
                <!--begin::Icon--> 
                <span class="menu-icon">
                    <i class="fonticon-stats"></i>
                </span>
                <!--end::Icon--> 

                <!--begin::Title-->
                <span class="menu-title">
                    Tasks                </span>
                <!--end::Title-->

                <!--begin::Badge-->
                <span class="menu-badge">
                    <span class="badge badge-primary">
                        6                    </span>
                </span> 
                <!--end::Badge-->                                        
            </a>
            <!--end:::Menu link-->                
        </div>
        <!--end::Menu Item-->
            <!--begin::Menu Item-->
        <div class="menu-item">
            <!--begin::Menu link-->
            <a href="../../apps/projects/activity.html" class="menu-link">
                <!--begin::Icon--> 
                <span class="menu-icon">
                    <i class="fonticon-image"></i>
                </span>
                <!--end::Icon--> 

                <!--begin::Title-->
                <span class="menu-title">
                    Activities                </span>
                <!--end::Title-->

                <!--begin::Badge-->
                <span class="menu-badge">
                    <span class="badge badge-danger">
                        24                    </span>
                </span> 
                <!--end::Badge-->                                        
            </a>
            <!--end:::Menu link-->                
        </div>
        <!--end::Menu Item-->
      
</div>    
<!--end::Quick links-->

<!--begin::Separator-->
<div class="app-sidebar-separator separator"></div>
<!--end::Separator-->
		<!--begin::Sidebar menu-->
<div id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" class="menu menu-column menu-rounded menu-sub-indention menu-active-bg">
    <!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-icon"><i class="fonticon-house fs-2"></i></span><span class="menu-title">Dashboards</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../index.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Default</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/ecommerce.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">eCommerce</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/projects.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Projects</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/online-courses.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Online Courses</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/marketing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Marketing</span></a><!--end:Menu link--></div><!--end:Menu item--><div class="menu-inner flex-column collapse " id="kt_app_sidebar_menu_dashboards_collapse"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/bidding.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Bidding</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/pos.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">POS System</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/call-center.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Call Center</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/logistics.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Logistics</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/website-analytics.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Website Analytics</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/finance-performance.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Finance Performance</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/store-analytics.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Store Analytics</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/social.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Social</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/delivery.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Delivery</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/crypto.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Crypto</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/school.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">School</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../dashboards/podcast.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Podcast</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../landing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Landing</span></a><!--end:Menu link--></div><!--end:Menu item--></div>
            <div class="menu-item">
                <div class="menu-content">
                    <a class="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show Less">
                        <span data-kt-toggle-text-target="true">Show 12 More</span> <!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
<span class="svg-icon toggle-on svg-icon-2 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon--><!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
<span class="svg-icon toggle-off svg-icon-2 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"></rect>
<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                        
                    </a>
                </div>
            </div>                 
        </div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item here show menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-icon"><i class="fonticon-stats fs-2"></i></span><span class="menu-title">Pages</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">User Profile</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../user-profile/overview.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Overview</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../user-profile/projects.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Projects</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../user-profile/campaigns.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Campaigns</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../user-profile/documents.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Documents</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../user-profile/followers.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Followers</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../user-profile/activity.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Activity</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Account</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../account/overview.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Overview</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../account/settings.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Settings</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../account/security.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Security</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../account/activity.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Activity</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../account/billing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Billing</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../account/statements.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Statements</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../account/referrals.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Referrals</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../account/api-keys.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">API Keys</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../account/logs.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Logs</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Authentication</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Corporate Layout</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/corporate/sign-in.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-in</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/corporate/sign-up.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-up</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/corporate/two-steps.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two-steps</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/corporate/reset-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reset Password</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/corporate/new-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Password</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Overlay Layout</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/overlay/sign-in.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-in</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/overlay/sign-up.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-up</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/overlay/two-steps.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two-steps</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/overlay/reset-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reset Password</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/overlay/new-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Password</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Creative Layout</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/creative/sign-in.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-in</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/creative/sign-up.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-up</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/creative/two-steps.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two-steps</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/creative/reset-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reset Password</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/creative/new-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Password</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Fancy Layout</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/fancy/sign-in.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-in</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/fancy/sign-up.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-up</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/fancy/two-steps.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two-steps</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/fancy/reset-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reset Password</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/layouts/fancy/new-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Password</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Email Templates</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/email/welcome-message.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Welcome Message</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/email/reset-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reset Password</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/email/subscription-confirmed.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Subscription Confirmed</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/email/card-declined.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Credit Card Declined</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/email/promo-1.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Promo 1</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/email/promo-2.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Promo 2</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/email/promo-3.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Promo 3</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/extended/multi-steps-sign-up.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Multi-steps Sign-up</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/extended/two-factor-auth.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two Factor Auth</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/general/welcome.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Welcome Message</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/general/verify-email.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Verify Email</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/general/coming-soon.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Coming Soon</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/general/password-confirmation.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Password Confirmation</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/general/account-deactivated.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Account Deactivation</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/general/error-404.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Error 404</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../authentication/general/error-500.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Error 500</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Corporate</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../about.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">About</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../team.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Our Team</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../contact.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Contact Us</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../licenses.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Licenses</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../sitemap.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sitemap</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item here show menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Social</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link active" href="feeds.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Feeds</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="activity.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Activty</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="followers.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Followers</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="settings.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Settings</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Blog</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../blog/home.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Blog Home</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../blog/post.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Blog Post</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">FAQ</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../faq/classic.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">FAQ Classic</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../faq/extended.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">FAQ Extended</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Pricing</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../pricing/column.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Column Pricing</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../pricing/table.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Table Pricing</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Careers</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../careers/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Careers List</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../careers/apply.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Careers Apply</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Widgets</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../widgets/lists.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Lists</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../widgets/statistics.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Statistics</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../widgets/charts.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Charts</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../widgets/mixed.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Mixed</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../widgets/tables.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tables</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../widgets/feeds.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Feeds</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-icon"><i class="fonticon-app-store fs-2"></i></span><span class="menu-title">Apps</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Projects</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/projects/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">My Projects</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/projects/project.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Project</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/projects/targets.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Targets</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/projects/budget.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Budget</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/projects/users.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Users</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/projects/files.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Files</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/projects/activity.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Activity</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/projects/settings.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Settings</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">eCommerce</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Catalog</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/catalog/products.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Products</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/catalog/categories.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Categories</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/catalog/add-product.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Add Product</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/catalog/edit-product.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Edit Product</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/catalog/add-category.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Add Category</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/catalog/edit-category.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Edit Category</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sales</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/sales/listing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Orders Listing</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/sales/details.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Order Details</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/sales/add-order.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Add Order</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/sales/edit-order.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Edit Order</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customers</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/customers/listing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customer Listing</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/customers/details.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customer Details</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reports</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/reports/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Products Viewed</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/reports/sales.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sales</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/reports/returns.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Returns</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/reports/customer-orders.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customer Orders</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/reports/shipping.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Shipping</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/ecommerce/settings.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Settings</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Contacts</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/contacts/getting-started.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Getting Started</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/contacts/add-contact.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Add Contact</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/contacts/edit-contact.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Edit Contact</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/contacts/view-contact.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Contact</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Support Center</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/support-center/overview.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Overview</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tickets</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/support-center/tickets/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tickets List</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/support-center/tickets/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Ticket</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tutorials</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/support-center/tutorials/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tutorials List</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/support-center/tutorials/post.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tutorial Post</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/support-center/faq.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">FAQ</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/support-center/licenses.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Licenses</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/support-center/contact.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Contact Us</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">User Management</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Users</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/user-management/users/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Users List</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/user-management/users/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View User</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Roles</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/user-management/roles/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Roles List</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/user-management/roles/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Role</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/user-management/permissions.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Permissions</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customers</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/customers/getting-started.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Getting Started</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/customers/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customer Listing</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/customers/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customer Details</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Subscription</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/subscriptions/getting-started.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Getting Started</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/subscriptions/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Subscription List</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/subscriptions/add.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Add Subscription</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/subscriptions/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Subscription</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Invoice Manager</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Invoices</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/invoices/view/invoice-1.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Invoice 1</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/invoices/view/invoice-2.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Invoice 2</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/invoices/view/invoice-3.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Invoice 3</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/invoices/create.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Invoice</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">File Manager</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/file-manager/folders.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Folders</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/file-manager/files.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Files</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/file-manager/blank.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Blank Directory</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/file-manager/settings.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Settings</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Inbox</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/inbox/listing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Messages</span><span class="menu-badge"><span class="badge badge-success">3</span></span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/inbox/compose.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Compose</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/inbox/reply.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View &amp; Reply</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Chat</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/chat/private.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Private Chat</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/chat/group.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Group Chat</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/chat/drawer.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Drawer Chat</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../apps/calendar.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Calendar</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-icon"><i class="fonticon-image fs-2"></i></span><span class="menu-title">Utilities</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Modals</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">General</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/general/invite-friends.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Invite Friends</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/general/view-users.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Users</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/general/select-users.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Select Users</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/general/upgrade-plan.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Upgrade Plan</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/general/share-earn.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Share &amp; Earn</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Forms</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/forms/new-target.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Target</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/forms/new-card.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Card</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/forms/new-address.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Address</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/forms/create-api-key.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create API Key</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/forms/bidding.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Bidding</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Wizards</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/wizards/create-app.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create App</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/wizards/create-campaign.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Campaign</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/wizards/create-account.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Business Acc</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/wizards/create-project.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Project</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/wizards/top-up-wallet.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Top Up Wallet</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/wizards/offer-a-deal.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Offer a Deal</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/wizards/two-factor-authentication.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two Factor Auth</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Search</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/search/users.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Users</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/search/select-location.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Select Location</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Wizards</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/wizards/horizontal.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Horizontal</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/wizards/vertical.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Vertical</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/wizards/two-factor-authentication.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two Factor Auth</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/wizards/create-app.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create App</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/wizards/create-campaign.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Campaign</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/wizards/create-account.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Account</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/wizards/create-project.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Project</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/modals/wizards/top-up-wallet.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Top Up Wallet</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/wizards/offer-a-deal.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Offer a Deal</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Search</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion menu-active-bg"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/search/horizontal.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Horizontal</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/search/vertical.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Vertical</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/search/users.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Users</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../utilities/search/select-location.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Location</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div data-kt-menu-trigger="click" class="menu-item menu-accordion"><!--begin:Menu link--><span class="menu-link"><span class="menu-icon"><i class="fonticon-setting fs-2"></i></span><span class="menu-title">Help</span><span class="menu-arrow"></span></span><!--end:Menu link--><!--begin:Menu sub--><div class="menu-sub menu-sub-accordion"><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" data-bs-original-title="Check out over 200 in-house components" data-kt-initialized="1"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Components</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" data-bs-original-title="Check out the complete documentation" data-kt-initialized="1"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Documentation</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="../../layout-builder.html" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" data-bs-original-title="Build your layout and export HTML for server side integration" data-kt-initialized="1"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Layout Builder</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div class="menu-item"><!--begin:Menu link--><a class="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Changelog v8.1.7</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--></div>
<!--end::Sidebar menu-->

<!--begin::Separator-->
<div class="separator"></div>
<!--end::Separator-->
		
<!--begin::Projects-->
<div class="menu menu-rounded menu-column">
    <!--begin::Heading-->
    <div class="menu-item">
        <div class="menu-content menu-heading">
            Projects
        </div>
    </div>
    <!--end::Heading-->

            
        
        <!--begin::Menu Item-->
        <div class="menu-item">
            <!--begin::Menu link-->
            <a class="menu-link" href="../../apps/projects/project.html">
                <!--begin::Bullet--> 
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-primary">
                    </span>
                </span>                      
                <!--end::Bullet--> 

                <!--begin::Title-->
                <span class="menu-title">
                    Google Ads                </span>
                <!--end::Title-->

                <!--begin::Badge--> 
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        6                    </span>
                </span>                      
                <!--end::Badge-->                                      
            </a>
            <!--end::Menu link-->                
        </div>
        <!--end::Menu Item-->

                    
        
        <!--begin::Menu Item-->
        <div class="menu-item">
            <!--begin::Menu link-->
            <a class="menu-link" href="../../apps/projects/project.html">
                <!--begin::Bullet--> 
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-success">
                    </span>
                </span>                      
                <!--end::Bullet--> 

                <!--begin::Title-->
                <span class="menu-title">
                    AirStoke App                </span>
                <!--end::Title-->

                <!--begin::Badge--> 
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        2                    </span>
                </span>                      
                <!--end::Badge-->                                      
            </a>
            <!--end::Menu link-->                
        </div>
        <!--end::Menu Item-->

                    
        
        <!--begin::Menu Item-->
        <div class="menu-item">
            <!--begin::Menu link-->
            <a class="menu-link" href="../../apps/projects/project.html">
                <!--begin::Bullet--> 
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-warning">
                    </span>
                </span>                      
                <!--end::Bullet--> 

                <!--begin::Title-->
                <span class="menu-title">
                    Internal Tasks                </span>
                <!--end::Title-->

                <!--begin::Badge--> 
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        37                    </span>
                </span>                      
                <!--end::Badge-->                                      
            </a>
            <!--end::Menu link-->                
        </div>
        <!--end::Menu Item-->

                    
                    <!--begin::Collapsible items-->
            <div class="menu-inner flex-column collapse" id="kt_app_sidebar_menu_projects_collapse">
        
        <!--begin::Menu Item-->
        <div class="menu-item">
            <!--begin::Menu link-->
            <a class="menu-link" href="../../apps/projects/project.html">
                <!--begin::Bullet--> 
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-danger">
                    </span>
                </span>                      
                <!--end::Bullet--> 

                <!--begin::Title-->
                <span class="menu-title">
                    Fitnes App                </span>
                <!--end::Title-->

                <!--begin::Badge--> 
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        3                    </span>
                </span>                      
                <!--end::Badge-->                                      
            </a>
            <!--end::Menu link-->                
        </div>
        <!--end::Menu Item-->

                    
        
        <!--begin::Menu Item-->
        <div class="menu-item">
            <!--begin::Menu link-->
            <a class="menu-link" href="../../apps/projects/project.html">
                <!--begin::Bullet--> 
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-info">
                    </span>
                </span>                      
                <!--end::Bullet--> 

                <!--begin::Title-->
                <span class="menu-title">
                    Oppo CRM                </span>
                <!--end::Title-->

                <!--begin::Badge--> 
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        12                    </span>
                </span>                      
                <!--end::Badge-->                                      
            </a>
            <!--end::Menu link-->                
        </div>
        <!--end::Menu Item-->

                    
        
        <!--begin::Menu Item-->
        <div class="menu-item">
            <!--begin::Menu link-->
            <a class="menu-link" href="../../apps/projects/project.html">
                <!--begin::Bullet--> 
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-warning">
                    </span>
                </span>                      
                <!--end::Bullet--> 

                <!--begin::Title-->
                <span class="menu-title">
                    Finance Dispatch                </span>
                <!--end::Title-->

                <!--begin::Badge--> 
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        25                    </span>
                </span>                      
                <!--end::Badge-->                                      
            </a>
            <!--end::Menu link-->                
        </div>
        <!--end::Menu Item-->

                    </div>
            <!--end::Collapsible items-->
             

    <!--begin::Collapse toggle-->
    <div class="menu-item">
        <!--begin::Toggle-->
        <a class="menu-link menu-collapse-toggle toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_projects_collapse" data-kt-toggle-text="Show less">
            <span class="menu-icon">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
<span class="svg-icon toggle-off svg-icon-3 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                <!--begin::Svg Icon | path: icons/duotune/arrows/arr073.svg-->
<span class="svg-icon toggle-on svg-icon-3 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5657 11.3657L16.75 15.55C17.1642 15.9643 17.8358 15.9643 18.25 15.55C18.6642 15.1358 18.6642 14.4643 18.25 14.05L12.7071 8.50716C12.3166 8.11663 11.6834 8.11663 11.2929 8.50715L5.75 14.05C5.33579 14.4643 5.33579 15.1358 5.75 15.55C6.16421 15.9643 6.83579 15.9643 7.25 15.55L11.4343 11.3657C11.7467 11.0533 12.2533 11.0533 12.5657 11.3657Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->            </span>

            <!--begin::Title--> 
            <span class="menu-title" data-kt-toggle-text-target="true">
                Show more
            </span>
            <!--end::Title-->                      
        </a>
        <!--end::Toggle-->
    </div> 
    <!--end::Collapse toggle-->
</div>    
<!--end::Projects-->
	</div>
</div>
<!--end::Navs-->


<!--begin::Footer-->
<div class="app-sidebar-footer d-flex flex-stack px-11 pb-10" id="kt_app_sidebar_footer">   
    <!--begin::User menu-->
    <div class="">
       <!--begin::Menu wrapper-->
        <div class="cursor-pointer symbol symbol-circle symbol-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-overflow="true" data-kt-menu-placement="top-start">
            <img src="../../assets/media/avatars/300-2.jpg" alt="image">
        </div>

        
<!--begin::User account menu-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content d-flex align-items-center px-3">
            <!--begin::Avatar-->
            <div class="symbol symbol-50px me-5">
                <img alt="Logo" src="../../assets/media/avatars/300-13.jpg">
            </div>
            <!--end::Avatar-->

            <!--begin::Username-->
            <div class="d-flex flex-column">
                <div class="fw-bold d-flex align-items-center fs-5">
                    Max Smith                    <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                </div>

                <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">
                    max@kt.com                </a>
            </div>
            <!--end::Username-->
        </div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
        <a href="../../account/overview.html" class="menu-link px-5">
            My Profile
        </a>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-5">
        <a href="../../apps/projects/list.html" class="menu-link px-5">
            <span class="menu-text">My Projects</span>
            <span class="menu-badge">
                <span class="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
            </span>
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0">
        <a href="#" class="menu-link px-5">
            <span class="menu-title">My Subscription</span>
            <span class="menu-arrow"></span>
        </a>

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="../../account/referrals.html" class="menu-link px-5">
                    Referrals
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="../../account/billing.html" class="menu-link px-5">
                    Billing
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="../../account/statements.html" class="menu-link px-5">
                    Payments
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="../../account/statements.html" class="menu-link d-flex flex-stack px-5">
                    Statements
                    
                    <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="View your statements" data-bs-original-title="View your statements" data-kt-initialized="1"></i>
                </a>
            </div>
            <!--end::Menu item-->
            
            <!--begin::Menu separator-->
            <div class="separator my-2"></div>
            <!--end::Menu separator-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <div class="menu-content px-3">
                    <label class="form-check form-switch form-check-custom form-check-solid">
                        <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications">
                        <span class="form-check-label text-muted fs-7">
                            Notifications
                        </span>
                    </label>
                </div>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
        <a href="../../account/statements.html" class="menu-link px-5">
            My Statements
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

            <!--begin::Menu item-->
        <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
            <a href="#" class="menu-link px-5">
                <span class="menu-title position-relative">
                    Mode 

                    <span class="ms-5 position-absolute translate-middle-y top-50 end-0">
                        <!--begin::Svg Icon | path: icons/duotune/general/gen060.svg-->
<span class="svg-icon theme-light-show svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor"></path>
<path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor"></path>
<path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor"></path>
<path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor"></path>
<path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor"></path>
<path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor"></path>
<path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor"></path>
<path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor"></path>
<path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                        <!--begin::Svg Icon | path: icons/duotune/general/gen061.svg-->
<span class="svg-icon theme-dark-show svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor"></path>
<path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor"></path>
<path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor"></path>
<path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    </span>
                </span>
            </a>

            <!--begin::Menu-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
    <!--begin::Menu item-->
    <div class="menu-item px-3 my-0">
        <a href="#" class="menu-link px-3 py-2 active" data-kt-element="mode" data-kt-value="light">
            <span class="menu-icon" data-kt-element="icon">
                <!--begin::Svg Icon | path: icons/duotune/general/gen060.svg-->
<span class="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor"></path>
<path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor"></path>
<path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor"></path>
<path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor"></path>
<path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor"></path>
<path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor"></path>
<path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor"></path>
<path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor"></path>
<path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->            </span>
            <span class="menu-title">
                Light
            </span>
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3 my-0">
        <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
            <span class="menu-icon" data-kt-element="icon">
                <!--begin::Svg Icon | path: icons/duotune/general/gen061.svg-->
<span class="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor"></path>
<path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor"></path>
<path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor"></path>
<path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->            </span>
            <span class="menu-title">
                Dark
            </span>
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3 my-0">
        <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
            <span class="menu-icon" data-kt-element="icon">
                <!--begin::Svg Icon | path: icons/duotune/general/gen062.svg-->
<span class="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->            </span>
            <span class="menu-title">
                System
            </span>
        </a>
    </div>
    <!--end::Menu item-->
</div>
<!--end::Menu-->

        </div>
        <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0">
        <a href="#" class="menu-link px-5">
            <span class="menu-title position-relative">
                Language 

                <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                    English <img class="w-15px h-15px rounded-1 ms-2" src="../../assets/media/flags/united-states.svg" alt="">
                </span>
            </span>
        </a>

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="../../account/settings.html" class="menu-link d-flex px-5 active">
                    <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../assets/media/flags/united-states.svg" alt="">
                    </span>
                    English
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="../../account/settings.html" class="menu-link d-flex px-5">
                    <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../assets/media/flags/spain.svg" alt="">
                    </span>
                    Spanish
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="../../account/settings.html" class="menu-link d-flex px-5">
                    <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../assets/media/flags/germany.svg" alt="">
                    </span>
                    German
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="../../account/settings.html" class="menu-link d-flex px-5">
                    <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../assets/media/flags/japan.svg" alt="">
                    </span>
                    Japanese
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="../../account/settings.html" class="menu-link d-flex px-5">
                    <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../assets/media/flags/france.svg" alt="">
                    </span>
                    French
                </a>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5 my-1">
        <a href="../../account/settings.html" class="menu-link px-5">
            Account Settings
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
        <a href="../../authentication/layouts/corporate/sign-in.html" class="menu-link px-5">
            Sign Out
        </a>
    </div>
    <!--end::Menu item-->
</div>
<!--end::User account menu-->
        <!--end::Menu wrapper-->
    </div>
    <!--end::User menu--> 

    <!--begin::Logout-->
    <a href="../../authentication/flows/basic/sign-in.html" class="btn btn-sm btn-outline btn-flex btn-custom px-3">
        <!--begin::Svg Icon | path: icons/duotune/arrows/arr076.svg-->
<span class="svg-icon svg-icon-3 me-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" width="12" height="2" rx="1" transform="matrix(-1 0 0 1 15.5 11)" fill="currentColor"></rect>
<path d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z" fill="currentColor"></path>
<path d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->         
        Logout
    </a>
    <!--end::Logout-->
</div>
<!--end::Footer-->    </div>
<!--end::Sidebar-->                
                            
            
            <!--begin::Main-->
            <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                <!--begin::Content wrapper-->
                <div class="d-flex flex-column flex-column-fluid">
                                        
                    
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
            <!--begin::Content container-->
        <div id="kt_app_content_container" class="app-container  container-fluid ">
            <!--begin::Social - Feeds -->
<div class="d-flex flex-row">    
    <!--begin::Start sidebar-->
    <div class="d-lg-flex flex-column flex-lg-row-auto w-lg-325px" data-kt-drawer="true" data-kt-drawer-name="start-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '250px': '300px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_social_start_sidebar_toggle">
                
        

<!--begin::User menu-->
<div class="card mb-5 mb-xl-8">
    <!--begin::Body-->
    <div class="card-body pt-15 px-0">
        <!--begin::Member-->
        <div class="d-flex flex-column text-center mb-9 px-9">
            <!--begin::Photo-->
            <div class="symbol symbol-80px symbol-lg-150px mb-4">
                <img src="../../assets/media/avatars/300-3.jpg" class="" alt=""> 
            </div>
            <!--end::Photo-->

            <!--begin::Info-->
            <div class="text-center">
                <!--begin::Name-->
                <a href="../user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary fs-4">Jerry Kane</a>
                <!--end::Name-->

                <!--begin::Position-->    
                <span class="text-muted d-block fw-semibold">Grade 8, AE3 Student</span>      
                <!--end::Position-->             
            </div>
            <!--end::Info-->                
        </div>
        <!--end::Member-->

        <!--begin::Row-->
        <div class="row px-9 mb-4">                 
            <!--begin::Col-->
            <div class="col-md-4 text-center">                          
                <div class="text-gray-800 fw-bold fs-3">
                    <span class="m-0 counted" data-kt-countup="true" data-kt-countup-value="642" data-kt-initialized="1">642</span> 
                </div>
                
                <span class="text-gray-500 fs-8 d-block fw-bold">POSTS</span>                          
            </div>
            <!--end::Col-->

            <!--begin::Col-->
            <div class="col-md-4 text-center">                          
                <div class="text-gray-800 fw-bold fs-3">
                    <span class="m-0 counted" data-kt-countup="true" data-kt-countup-value="24" data-kt-initialized="1">24</span> K
                </div>
                
                <span class="text-gray-500 fs-8 d-block fw-bold">FOLLOWERS</span>                          
            </div>
            <!--end::Col-->

            <!--begin::Col-->
            <div class="col-md-4 text-center">                          
                <div class="text-gray-800 fw-bold fs-3">
                    <span class="m-0 counted" data-kt-countup="true" data-kt-countup-value="12" data-kt-initialized="1">12</span> K
                </div>
                
                <span class="text-gray-500 fs-8 d-block fw-bold">FOLLOWING</span>                          
            </div>
            <!--end::Col-->         
        </div>
        <!--end::Row--> 
        
        <!--begin::Navbar-->
        <div class="m-0">
            <!--begin::Navs-->
            <ul class="nav nav-pills nav-pills-custom flex-column border-transparent fs-5 fw-bold">
                                    <!--begin::Nav item-->
                    <li class="nav-item mt-5">
                        <a class="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 active" href="feeds.html">
                            <!--begin::Svg Icon | path: icons/duotune/general/gen010.svg-->
<span class="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M2 21V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H3C2.4 22 2 21.6 2 21Z" fill="currentColor"></path>
<path d="M2 10V3C2 2.4 2.4 2 3 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H3C2.4 11 2 10.6 2 10Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                            

                            Feeds
                            <!--begin::Bullet-->
                            <span class="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                            <!--end::Bullet-->
                        </a>
                    </li>
                    <!--end::Nav item-->
                                    <!--begin::Nav item-->
                    <li class="nav-item mt-5">
                        <a class="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 " href="activity.html">
                            <!--begin::Svg Icon | path: icons/duotune/arrows/arr070.svg-->
<span class="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor"></rect>
<rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor"></rect>
<rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor"></rect>
<rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                            

                            Activity
                            <!--begin::Bullet-->
                            <span class="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                            <!--end::Bullet-->
                        </a>
                    </li>
                    <!--end::Nav item-->
                                    <!--begin::Nav item-->
                    <li class="nav-item mt-5">
                        <a class="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 " href="followers.html">
                            <!--begin::Svg Icon | path: icons/duotune/communication/com006.svg-->
<span class="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"></path>
<path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"></path>
<rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                            

                            Followers
                            <!--begin::Bullet-->
                            <span class="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                            <!--end::Bullet-->
                        </a>
                    </li>
                    <!--end::Nav item-->
                                    <!--begin::Nav item-->
                    <li class="nav-item mt-5">
                        <a class="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 " href="settings.html">
                            <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
<span class="svg-icon svg-icon-3 svg-icon-muted me-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="currentColor"></path>
<path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                            

                            Settings
                            <!--begin::Bullet-->
                            <span class="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                            <!--end::Bullet-->
                        </a>
                    </li>
                    <!--end::Nav item-->
                            </ul>
            <!--begin::Navs-->            
        </div>
        <!--end::Navbar-->        
    </div>
    <!--end::Body-->
</div>
<!--end::User menu-->
                    <!--begin::List widget 14-->
<div class="card card-flush ">
    <!--begin::Header-->
    <div class="card-header pt-5">        
        <!--begin::Title-->
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bold text-dark">Timeline</span>
            <span class="text-gray-400 pt-2 fw-semibold fs-6">Latest activities</span>
        </h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">            
            <!--begin::Menu-->
            <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">                
                <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1 svg-icon-gray-300 me-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                             
            </button>

            
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <!--begin::Menu item-->
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        <!--end::Menu item-->

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    <!--end::Menu item-->
</div>
<!--end::Menu 2-->
 
            <!--end::Menu-->             
        </div>
        <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-6">
        <!--begin::Timeline-->
        <div class="timeline-label">
            <!--begin::Item-->
            <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bold text-gray-800 fs-6">08:42</div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                    <i class="fa fa-genderless text-gray-600 fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Text-->
                <div class="fw-semibold text-gray-700 ps-3 fs-7">
                    Outlines keep you honest. Indulging in poorly driving and keep structure
                </div>
                <!--end::Text-->
            </div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="timeline-item d-flex align-items-center">
                <!--begin::Label-->
                <div class="timeline-label fw-bold text-gray-800 fs-6">10:00</div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                    <i class="fa fa-genderless text-success fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Content-->
                <div class="d-flex align-items-center">
                    <span class="fw-bold text-gray-800 px-3">AEOL meeting with</span>

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px me-3">
                        <img src="../../assets/media/avatars/300-1.jpg" alt="">     
                    </div>
                    <!--end::Avatar-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px">
                        <img src="../../assets/media/avatars/300-2.jpg" alt="">     
                    </div>
                    <!--end::Avatar-->
                </div>
                <!--end::Content-->
            </div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bold text-gray-800 fs-6">14:37</div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                    <i class="fa fa-genderless text-danger fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Desc-->
                <div class="timeline-content fw-bold text-gray-800 ps-3">
                    Make deposit
                    <a href="#" class="text-primary">USD 700</a>.
                    to ESL
                </div>
                <!--end::Desc-->
            </div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bold text-gray-800 fs-6">16:50</div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                    <i class="fa fa-genderless text-primary fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Text-->
                <div class="fw-semibold text-gray-700 ps-3 fs-7">
                    Outlines keep you honest. Indulging in poorly driving and keep structure keep you honest great
                </div>
                <!--end::Text-->
            </div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bold text-gray-800 fs-6">21:03</div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                    <i class="fa fa-genderless text-warning fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Desc-->
                <div class="timeline-content fw-semibold text-gray-800 ps-3">
                    New order placed <a href="#" class="text-primary">#XF-2356</a>.
                </div>
                <!--end::Desc-->
            </div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bold text-gray-800 fs-6">16:50</div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                    <i class="fa fa-genderless text-info fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Text-->
                <div class="fw-semibold text-gray-700 ps-3 fs-7">
                    Outlines keep you honest. Indulging in poorly driving and keep structure
                </div>
                <!--end::Text-->
            </div>
            <!--end::Item-->    
            
            <!--begin::Item-->
            <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bold text-gray-800 fs-6">14:37</div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                    <i class="fa fa-genderless text-danger fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Desc-->
                <div class="timeline-content fw-bold text-gray-800 ps-3">
                    Make deposit
                    <a href="#" class="text-primary">USD 700</a>.
                    to ESL
                </div>
                <!--end::Desc-->
            </div>
            <!--end::Item-->
        </div>
        <!--end::Timeline-->
    </div>
    <!--end: Card Body-->
</div>
<!--end: List widget 14-->
            </div>
    <!--end::Start sidebar-->

    <!--begin::Content-->
    <div class="w-100 flex-lg-row-fluid mx-lg-13">
        <!--begin::Mobile toolbar-->
<div class="d-flex d-lg-none align-items-center justify-content-end mb-10">
    <div class="d-flex align-items-center gap-2">
        <div class="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_social_start_sidebar_toggle">
            <!--begin::Svg Icon | path: icons/duotune/communication/com006.svg-->
<span class="svg-icon svg-icon-1"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"></path>
<path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"></path>
<rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->        </div>

        <div class="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_social_end_sidebar_toggle">
            <!--begin::Svg Icon | path: icons/duotune/coding/cod002.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M18 22C19.7 22 21 20.7 21 19C21 18.5 20.9 18.1 20.7 17.7L15.3 6.30005C15.1 5.90005 15 5.5 15 5C15 3.3 16.3 2 18 2H6C4.3 2 3 3.3 3 5C3 5.5 3.1 5.90005 3.3 6.30005L8.7 17.7C8.9 18.1 9 18.5 9 19C9 20.7 7.7 22 6 22H18Z" fill="currentColor"></path>
<path d="M18 2C19.7 2 21 3.3 21 5H9C9 3.3 7.7 2 6 2H18Z" fill="currentColor"></path>
<path d="M9 19C9 20.7 7.7 22 6 22C4.3 22 3 20.7 3 19H9Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->        </div>
    </div>
</div>
<!--end::Mobile toolbar-->      

        
<!--begin::Main form-->
<div class="card card-flush mb-10">
    <!--begin::Header-->
    <div class="card-header justify-content-start align-items-center pt-4">
        <!--begin::Photo-->
        <div class="symbol symbol-45px me-5">
            <img src="../../assets/media/avatars/300-3.jpg" class="" alt=""> 
        </div>
        <!--end::Photo-->

        <span class="text-gray-400 fw-semibold fs-6">What’s on your mind, Jerry?</span>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-2 pb-0">
        <!--begin::Input-->
        <textarea class="form-control bg-transparent border-0 px-0" id="kt_social_feeds_post_input" name="message" data-kt-autosize="true" rows="1" placeholder="Type your message..." style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 64px;" data-kt-initialized="1">            
        </textarea>    
        <!--end::Input-->  
    </div>
    <!--end::Body-->

    <!--begin::Footer-->
    <div class="card-footer d-flex justify-content-end pt-0">
        <!--begin::Post action-->
        <a href="../blog/post.html" class="btn btn-sm btn-primary" id="kt_social_feeds_post_btn">
            
<!--begin::Indicator label-->
<span class="indicator-label">
    Post</span>
<!--end::Indicator label-->

<!--begin::Indicator progress-->
<span class="indicator-progress">
    Please wait...    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
</span>
<!--end::Indicator progress-->        </a>
        <!--end::Post action-->
    </div>
    <!--end::Footer-->
</div>
<!--end::Main form-->
<!--begin::Posts-->
<div class="mb-10" id="kt_social_feeds_posts">
    <!--begin::Post 1-->
<!--begin::Card--> 
<div class="card card-flush mb-10">
    <!--begin::Card header-->
    <div class="card-header pt-9">
        <!--begin::Author-->
        <div class="d-flex align-items-center">      
            <!--begin::Avatar-->    
            <div class="symbol symbol-50px me-5">
                 
                    <img src="../../assets/media/avatars/300-4.jpg" class="" alt=""> 
                      
            </div>   
            <!--end::Avatar-->

            <!--begin::Info-->
            <div class="flex-grow-1">
                <!--begin::Name-->
                <a href="#" class="text-gray-800 text-hover-primary fs-4 fw-bold">Grace Logan</a>      
                <!--end::Name-->      

                <!--begin::Date-->
                <span class="text-gray-400 fw-semibold d-block">Yestarday at 5:06 PM</span>    
                <!--end::Date-->               
            </div>
            <!--end::Info-->                
        </div> 
        <!--end::Author-->

        <!--begin::Card toolbar-->
        <div class="card-toolbar">
            <!--begin::Menu wrapper-->
            <div class="m-0">
                <!--begin::Menu toggle-->
                <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">   
                                    
                    <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                             
                </button>
                <!--end::Menu toggle-->

                
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <!--begin::Menu item-->
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        <!--end::Menu item-->

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    <!--end::Menu item-->
</div>
<!--end::Menu 2-->
 
            </div>
            <!--end::Menu wrapper--> 
        </div>
        <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body">

 
<!--begin::Post content-->
<div class="fs-6 fw-normal text-gray-700 mb-5">
    There are two main approaches you can take to writing amazing blog 
    post headlines. You can either decide on your final headline before 
    outstanding you write the most of the rest of your creative post
</div>
<!--end::Post content-->

<!--begin::Post media-->
<div class="row g-7 h-250px h-md-375px">
    <!--begin::Col-->
    <div class="col-6">
        <!--begin::Item-->
        <a class="d-block card-rounded overlay h-100" data-fslightbox="lightbox-projects" href="../../assets/media/stock/600x600/img-23.jpg">       
            <!--begin::Image-->
            <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-100" style="background-image:url('../../assets/media/stock/600x600/img-23.jpg')">                       
            </div>
            <!--end::Image-->

            <!--begin::Action-->
            <div class="overlay-layer card-rounded bg-dark bg-opacity-25">
                <i class="bi bi-eye-fill fs-3x text-white"></i>
            </div>  
            <!--end::Action-->      
        </a>  
        <!--end::Item-->
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-6">
        <!--begin::Row-->
        <div class="row g-7 h-250px h-md-375px">
            <!--begin::Col-->
            <div class="col-lg-12">
                <!--begin::Item-->
                <a class="d-block card-rounded overlay h-100" data-fslightbox="lightbox-projects" href="../../assets/media/stock/600x600/img-22.jpg">       
                    <!--begin::Image-->
                    <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-100" style="background-image:url('../../assets/media/stock/600x400/img-71.jpg')">                       
                    </div>
                    <!--end::Image-->

                    <!--begin::Action-->
                    <div class="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i class="bi bi-eye-fill fs-3x text-white"></i>
                    </div>  
                    <!--end::Action-->      
                </a>  
                <!--end::Item-->
            </div>
            <!--end::Col-->

            <!--begin::Col-->
            <div class="col-lg-12">
                <!--begin::Item-->
                <a class="d-block card-rounded overlay h-100" data-fslightbox="lightbox-projects" href="../../assets/media/stock/600x600/img-21.jpg">       
                    <!--begin::Image-->
                    <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-100" style="background-image:url('../../assets/media/stock/600x400/img-79.jpg')">                       
                    </div>
                    <!--end::Image-->

                    <!--begin::Action-->
                    <div class="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i class="bi bi-eye-fill fs-3x text-white"></i>
                    </div>  
                    <!--end::Action-->      
                </a>  
                <!--end::Item-->
            </div>
            <!--end::Col-->
        </div>
        <!--end::Row-->                 
    </div>
    <!--end::Col-->
</div>
<!--end::Post media-->
 
    </div> 
    <!--end::Card body-->

    <!--begin::Card footer-->
    <div class="card-footer pt-0">
        <!--begin::Info-->
        <div class="mb-6">
            <!--begin::Separator-->
            <div class="separator separator-solid"></div>
            <!--end::Separator-->

            <!--begin::Nav-->
            <ul class="nav py-3">
                <!--begin::Item-->
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible active" data-bs-toggle="collapse" href="#kt_social_feeds_comments_1">
                        
                        <i class="bi bi-chat-square fs-2 me-1"></i> 
                                                    2 Comments
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                        <i class="bi bi-heart fs-2 me-1"></i>

                                                    47k Likes
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4"> 
                        <i class="bi bi-bookmark fs-2 me-1"></i> 
                        
                                                    900 Saves
                                            </a>
                </li>
                <!--end::Item-->
            </ul>
            <!--end::Nav-->

            <!--begin::Separator-->
            <div class="separator separator-solid mb-1"></div>
            <!--end::Separator-->

                            <!--begin::Comments-->
                <div class="collapse show" id="kt_social_feeds_comments_1">
                                        
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-13.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mr. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">1 Day ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-2.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mrs. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">2 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                               
                </div>
                <!--end::Collapse-->
                    </div>
        <!--end::Info-->

        <!--begin::Comment form-->
        <div class="d-flex align-items-center">
            <!--begin::Author-->
            <div class="symbol symbol-35px me-3">
                <img src="../../assets/media/avatars/300-3.jpg" alt=""> 
            </div>
            <!--end::Author-->

            <!--begin::Input group-->
            <div class="position-relative w-100">
                <!--begin::Input-->
                <textarea type="text" class="form-control form-control-solid border ps-5" rows="1" name="search" value="" data-kt-autosize="true" placeholder="Write your comment.." style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 44px;" data-kt-initialized="1">                </textarea>    
                <!--end::Input-->         

                <!--begin::Actions-->
                <div class="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">   
                    <!--begin::Btn-->                       
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-attach fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-smile fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-gallery fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-location fs-2"></i>
                    </button>
                    <!--end::Btn-->
                </div>
                <!--end::Actions-->
            </div>
            <!--end::Input group-->                            
        </div> 
        <!--end::Comment form--> 
    </div> 
    <!--end::Card footer-->
</div>
<!--end::Card-->                        
<!--end::Post 1-->
    <!--begin::Post 2-->
<!--begin::Card--> 
<div class="card card-flush mb-10">
    <!--begin::Card header-->
    <div class="card-header pt-9">
        <!--begin::Author-->
        <div class="d-flex align-items-center">      
            <!--begin::Avatar-->    
            <div class="symbol symbol-50px me-5">
                 
                    <img src="../../assets/media/avatars/300-7.jpg" class="" alt=""> 
                      
            </div>   
            <!--end::Avatar-->

            <!--begin::Info-->
            <div class="flex-grow-1">
                <!--begin::Name-->
                <a href="#" class="text-gray-800 text-hover-primary fs-4 fw-bold">Brooklyn Simmons</a>      
                <!--end::Name-->      

                <!--begin::Date-->
                <span class="text-gray-400 fw-semibold d-block">Yestarday at 5:06 PM</span>    
                <!--end::Date-->               
            </div>
            <!--end::Info-->                
        </div> 
        <!--end::Author-->

        <!--begin::Card toolbar-->
        <div class="card-toolbar">
            <!--begin::Menu wrapper-->
            <div class="m-0">
                <!--begin::Menu toggle-->
                <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">   
                                    
                    <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                             
                </button>
                <!--end::Menu toggle-->

                
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <!--begin::Menu item-->
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        <!--end::Menu item-->

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    <!--end::Menu item-->
</div>
<!--end::Menu 2-->
 
            </div>
            <!--end::Menu wrapper--> 
        </div>
        <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body">

 
<!--begin::Post content-->
<div class="fs-6 fw-normal text-gray-700">
    You can either decide on your final headline before outstanding you 
    write the most of the rest of your creative post
</div>
<!--end::Post content-->
 
    </div> 
    <!--end::Card body-->

    <!--begin::Card footer-->
    <div class="card-footer pt-0">
        <!--begin::Info-->
        <div class="mb-6">
            <!--begin::Separator-->
            <div class="separator separator-solid"></div>
            <!--end::Separator-->

            <!--begin::Nav-->
            <ul class="nav py-3">
                <!--begin::Item-->
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible " data-bs-toggle="collapse" href="#kt_social_feeds_comments_2">
                        
                        <i class="bi bi-chat-square fs-2 me-1"></i> 
                                                    3 Comments
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                        <i class="bi bi-heart fs-2 me-1"></i>

                                                    8 Likes
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4"> 
                        <i class="bi bi-bookmark fs-2 me-1"></i> 
                        
                                                    47k Saves
                                            </a>
                </li>
                <!--end::Item-->
            </ul>
            <!--end::Nav-->

            <!--begin::Separator-->
            <div class="separator separator-solid mb-1"></div>
            <!--end::Separator-->

                            <!--begin::Comments-->
                <div class="collapse " id="kt_social_feeds_comments_2">
                                        
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-13.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mr. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">1 Day ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-2.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mrs. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">2 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-20.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Alice Danchik</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">3 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                               
                </div>
                <!--end::Collapse-->
                    </div>
        <!--end::Info-->

        <!--begin::Comment form-->
        <div class="d-flex align-items-center">
            <!--begin::Author-->
            <div class="symbol symbol-35px me-3">
                <img src="../../assets/media/avatars/300-3.jpg" alt=""> 
            </div>
            <!--end::Author-->

            <!--begin::Input group-->
            <div class="position-relative w-100">
                <!--begin::Input-->
                <textarea type="text" class="form-control form-control-solid border ps-5" rows="1" name="search" value="" data-kt-autosize="true" placeholder="Write your comment.." style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 44px;" data-kt-initialized="1">                </textarea>    
                <!--end::Input-->         

                <!--begin::Actions-->
                <div class="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">   
                    <!--begin::Btn-->                       
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-attach fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-smile fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-gallery fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-location fs-2"></i>
                    </button>
                    <!--end::Btn-->
                </div>
                <!--end::Actions-->
            </div>
            <!--end::Input group-->                            
        </div> 
        <!--end::Comment form--> 
    </div> 
    <!--end::Card footer-->
</div>
<!--end::Card-->                        
<!--end::Post 2--> 
    <!--begin::Post 3-->
<!--begin::Card--> 
<div class="card card-flush mb-10">
    <!--begin::Card header-->
    <div class="card-header pt-9">
        <!--begin::Author-->
        <div class="d-flex align-items-center">      
            <!--begin::Avatar-->    
            <div class="symbol symbol-50px me-5">
                                    <div class="symbol-label fs-2 fw-semibold bg-light text-inverse-success">
                        <!--begin::Svg Icon | path: icons/duotune/files/fil025.svg-->
<span class="svg-icon svg-icon-2x svg-icon-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor"></path>
<path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor"></path>
<path d="M10.3629 14.0084L8.92108 12.6429C8.57518 12.3153 8.03352 12.3153 7.68761 12.6429C7.31405 12.9967 7.31405 13.5915 7.68761 13.9453L10.2254 16.3488C10.6111 16.714 11.215 16.714 11.6007 16.3488L16.3124 11.8865C16.6859 11.5327 16.6859 10.9379 16.3124 10.5841C15.9665 10.2565 15.4248 10.2565 15.0789 10.5841L11.4631 14.0084C11.1546 14.3006 10.6715 14.3006 10.3629 14.0084Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    </div>                
                      
            </div>   
            <!--end::Avatar-->

            <!--begin::Info-->
            <div class="flex-grow-1">
                <!--begin::Name-->
                <a href="#" class="text-gray-800 text-hover-primary fs-4 fw-bold">Finance Deprt - Annual Report</a>      
                <!--end::Name-->      

                <!--begin::Date-->
                <span class="text-gray-400 fw-semibold d-block">Yestarday at 5:06 PM</span>    
                <!--end::Date-->               
            </div>
            <!--end::Info-->                
        </div> 
        <!--end::Author-->

        <!--begin::Card toolbar-->
        <div class="card-toolbar">
            <!--begin::Menu wrapper-->
            <div class="m-0">
                <!--begin::Menu toggle-->
                <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">   
                                    
                    <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                             
                </button>
                <!--end::Menu toggle-->

                
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <!--begin::Menu item-->
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        <!--end::Menu item-->

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    <!--end::Menu item-->
</div>
<!--end::Menu 2-->
 
            </div>
            <!--end::Menu wrapper--> 
        </div>
        <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body">

 
<!--begin::Post content-->
<div class="fs-6 fw-normal text-gray-700 mb-5">
    You can either decide on your final headline before outstanding you 
    write the most of the rest of your creative post
</div>
<!--end::Post content-->

 <!--begin::Video-->
<div class="m-0">        
    <iframe class="embed-responsive-item rounded h-300px w-100" src="https://www.youtube.com/embed/TWdDZYNqlg4" allowfullscreen=""></iframe>            
</div>
<!--end::Video-->
 
    </div> 
    <!--end::Card body-->

    <!--begin::Card footer-->
    <div class="card-footer pt-0">
        <!--begin::Info-->
        <div class="mb-6">
            <!--begin::Separator-->
            <div class="separator separator-solid"></div>
            <!--end::Separator-->

            <!--begin::Nav-->
            <ul class="nav py-3">
                <!--begin::Item-->
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible " data-bs-toggle="collapse" href="#kt_social_feeds_comments_3">
                        
                        <i class="bi bi-chat-square fs-2 me-1"></i> 
                                                    4 Comments
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                        <i class="bi bi-heart fs-2 me-1"></i>

                                                    10k Likes
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4"> 
                        <i class="bi bi-bookmark fs-2 me-1"></i> 
                        
                                                    2 Saves
                                            </a>
                </li>
                <!--end::Item-->
            </ul>
            <!--end::Nav-->

            <!--begin::Separator-->
            <div class="separator separator-solid mb-1"></div>
            <!--end::Separator-->

                            <!--begin::Comments-->
                <div class="collapse " id="kt_social_feeds_comments_3">
                                        
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-13.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mr. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">1 Day ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-2.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mrs. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">2 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-20.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Alice Danchik</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">3 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-6.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Grace Green</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">4 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                               
                </div>
                <!--end::Collapse-->
                    </div>
        <!--end::Info-->

        <!--begin::Comment form-->
        <div class="d-flex align-items-center">
            <!--begin::Author-->
            <div class="symbol symbol-35px me-3">
                <img src="../../assets/media/avatars/300-3.jpg" alt=""> 
            </div>
            <!--end::Author-->

            <!--begin::Input group-->
            <div class="position-relative w-100">
                <!--begin::Input-->
                <textarea type="text" class="form-control form-control-solid border ps-5" rows="1" name="search" value="" data-kt-autosize="true" placeholder="Write your comment.." style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 44px;" data-kt-initialized="1">                </textarea>    
                <!--end::Input-->         

                <!--begin::Actions-->
                <div class="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">   
                    <!--begin::Btn-->                       
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-attach fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-smile fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-gallery fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-location fs-2"></i>
                    </button>
                    <!--end::Btn-->
                </div>
                <!--end::Actions-->
            </div>
            <!--end::Input group-->                            
        </div> 
        <!--end::Comment form--> 
    </div> 
    <!--end::Card footer-->
</div>
<!--end::Card-->                        
<!--end::Post 3--> 
    <!--begin::Post 4-->
<!--begin::Card--> 
<div class="card card-flush mb-10">
    <!--begin::Card header-->
    <div class="card-header pt-9">
        <!--begin::Author-->
        <div class="d-flex align-items-center">      
            <!--begin::Avatar-->    
            <div class="symbol symbol-50px me-5">
                 
                    <img src="../../assets/media/avatars/300-10.jpg" class="" alt=""> 
                      
            </div>   
            <!--end::Avatar-->

            <!--begin::Info-->
            <div class="flex-grow-1">
                <!--begin::Name-->
                <a href="#" class="text-gray-800 text-hover-primary fs-4 fw-bold">Ana Lee</a>      
                <!--end::Name-->      

                <!--begin::Date-->
                <span class="text-gray-400 fw-semibold d-block">Yestarday at 5:06 PM</span>    
                <!--end::Date-->               
            </div>
            <!--end::Info-->                
        </div> 
        <!--end::Author-->

        <!--begin::Card toolbar-->
        <div class="card-toolbar">
            <!--begin::Menu wrapper-->
            <div class="m-0">
                <!--begin::Menu toggle-->
                <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">   
                                    
                    <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                             
                </button>
                <!--end::Menu toggle-->

                
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <!--begin::Menu item-->
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        <!--end::Menu item-->

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    <!--end::Menu item-->
</div>
<!--end::Menu 2-->
 
            </div>
            <!--end::Menu wrapper--> 
        </div>
        <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body">

 
<!--begin::Post content-->
<div class="fs-6 fw-normal text-gray-700">
    You can either decide on your final headline before outstanding you 
    write the most of the rest of your creative post
</div>
<!--end::Post content-->
 
    </div> 
    <!--end::Card body-->

    <!--begin::Card footer-->
    <div class="card-footer pt-0">
        <!--begin::Info-->
        <div class="mb-6">
            <!--begin::Separator-->
            <div class="separator separator-solid"></div>
            <!--end::Separator-->

            <!--begin::Nav-->
            <ul class="nav py-3">
                <!--begin::Item-->
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible " data-bs-toggle="collapse" href="#kt_social_feeds_comments_4">
                        
                        <i class="bi bi-chat-square fs-2 me-1"></i> 
                                                    10 Comments
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                        <i class="bi bi-heart fs-2 me-1"></i>

                                                    10k Likes
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4"> 
                        <i class="bi bi-bookmark fs-2 me-1"></i> 
                        
                                                    3k Saves
                                            </a>
                </li>
                <!--end::Item-->
            </ul>
            <!--end::Nav-->

            <!--begin::Separator-->
            <div class="separator separator-solid mb-1"></div>
            <!--end::Separator-->

                            <!--begin::Comments-->
                <div class="collapse " id="kt_social_feeds_comments_4">
                                        
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-13.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mr. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">1 Day ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-2.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mrs. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">2 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-20.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Alice Danchik</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">3 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-6.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Grace Green</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">4 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-25.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mat Dillon</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">5 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                       
                </div>
                <!--end::Collapse-->
                    </div>
        <!--end::Info-->

        <!--begin::Comment form-->
        <div class="d-flex align-items-center">
            <!--begin::Author-->
            <div class="symbol symbol-35px me-3">
                <img src="../../assets/media/avatars/300-3.jpg" alt=""> 
            </div>
            <!--end::Author-->

            <!--begin::Input group-->
            <div class="position-relative w-100">
                <!--begin::Input-->
                <textarea type="text" class="form-control form-control-solid border ps-5" rows="1" name="search" value="" data-kt-autosize="true" placeholder="Write your comment.." style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 44px;" data-kt-initialized="1">                </textarea>    
                <!--end::Input-->         

                <!--begin::Actions-->
                <div class="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">   
                    <!--begin::Btn-->                       
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-attach fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-smile fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-gallery fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-location fs-2"></i>
                    </button>
                    <!--end::Btn-->
                </div>
                <!--end::Actions-->
            </div>
            <!--end::Input group-->                            
        </div> 
        <!--end::Comment form--> 
    </div> 
    <!--end::Card footer-->
</div>
<!--end::Card-->                        
<!--end::Post 4--> 
    <!--begin::More posts-->
    <div class="d-none" id="kt_social_feeds_more_posts">
        
<!--begin::Post 4-->
<!--begin::Card--> 
<div class="card card-flush mb-10">
    <!--begin::Card header-->
    <div class="card-header pt-9">
        <!--begin::Author-->
        <div class="d-flex align-items-center">      
            <!--begin::Avatar-->    
            <div class="symbol symbol-50px me-5">
                 
                    <img src="../../assets/media/avatars/300-11.jpg" class="" alt=""> 
                      
            </div>   
            <!--end::Avatar-->

            <!--begin::Info-->
            <div class="flex-grow-1">
                <!--begin::Name-->
                <a href="#" class="text-gray-800 text-hover-primary fs-4 fw-bold">Stive Strong</a>      
                <!--end::Name-->      

                <!--begin::Date-->
                <span class="text-gray-400 fw-semibold d-block">Yestarday at 3:30 PM</span>    
                <!--end::Date-->               
            </div>
            <!--end::Info-->                
        </div> 
        <!--end::Author-->

        <!--begin::Card toolbar-->
        <div class="card-toolbar">
            <!--begin::Menu wrapper-->
            <div class="m-0">
                <!--begin::Menu toggle-->
                <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">   
                                    
                    <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                             
                </button>
                <!--end::Menu toggle-->

                
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <!--begin::Menu item-->
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        <!--end::Menu item-->

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    <!--end::Menu item-->
</div>
<!--end::Menu 2-->
 
            </div>
            <!--end::Menu wrapper--> 
        </div>
        <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body">

 
<!--begin::Post content-->
<div class="fs-6 fw-normal text-gray-700 mb-5">
    You can either decide on your final headline before outstanding.
</div>
<!--end::Post content-->

<!--begin::Post media-->
<div class="row g-3 g-lg-6">
            <!--begin::Col-->
        <div class="col-md-6 col-lg-4">
            <!--begin::Img-->                 
            <a href="#">
                <img src="../../assets/media/stock/600x600/img-14.jpg" class="rounded w-100" alt="">  
            </a>                
            <!--end::Img-->
        </div>
        <!--end::Col-->
            <!--begin::Col-->
        <div class="col-md-6 col-lg-4">
            <!--begin::Img-->                 
            <a href="#">
                <img src="../../assets/media/stock/600x600/img-10.jpg" class="rounded w-100" alt="">  
            </a>                
            <!--end::Img-->
        </div>
        <!--end::Col-->
            <!--begin::Col-->
        <div class="col-md-6 col-lg-4">
            <!--begin::Img-->                 
            <a href="#">
                <img src="../../assets/media/stock/600x600/img-18.jpg" class="rounded w-100" alt="">  
            </a>                
            <!--end::Img-->
        </div>
        <!--end::Col-->
            <!--begin::Col-->
        <div class="col-md-6 col-lg-4">
            <!--begin::Img-->                 
            <a href="#">
                <img src="../../assets/media/stock/600x600/img-30.jpg" class="rounded w-100" alt="">  
            </a>                
            <!--end::Img-->
        </div>
        <!--end::Col-->
            <!--begin::Col-->
        <div class="col-md-6 col-lg-4">
            <!--begin::Img-->                 
            <a href="#">
                <img src="../../assets/media/stock/600x600/img-31.jpg" class="rounded w-100" alt="">  
            </a>                
            <!--end::Img-->
        </div>
        <!--end::Col-->
             
</div>
<!--end::Post media-->
 
    </div> 
    <!--end::Card body-->

    <!--begin::Card footer-->
    <div class="card-footer pt-0">
        <!--begin::Info-->
        <div class="mb-6">
            <!--begin::Separator-->
            <div class="separator separator-solid"></div>
            <!--end::Separator-->

            <!--begin::Nav-->
            <ul class="nav py-3">
                <!--begin::Item-->
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible " data-bs-toggle="collapse" href="#kt_social_feeds_comments_5">
                        
                        <i class="bi bi-chat-square fs-2 me-1"></i> 
                                                    3 Comments
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                        <i class="bi bi-heart fs-2 me-1"></i>

                                                    15k Likes
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4"> 
                        <i class="bi bi-bookmark fs-2 me-1"></i> 
                        
                                                    3.8k Saves
                                            </a>
                </li>
                <!--end::Item-->
            </ul>
            <!--end::Nav-->

            <!--begin::Separator-->
            <div class="separator separator-solid mb-1"></div>
            <!--end::Separator-->

                            <!--begin::Comments-->
                <div class="collapse " id="kt_social_feeds_comments_5">
                                        
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-13.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mr. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">1 Day ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-2.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mrs. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">2 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-20.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Alice Danchik</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">3 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                               
                </div>
                <!--end::Collapse-->
                    </div>
        <!--end::Info-->

        <!--begin::Comment form-->
        <div class="d-flex align-items-center">
            <!--begin::Author-->
            <div class="symbol symbol-35px me-3">
                <img src="../../assets/media/avatars/300-3.jpg" alt=""> 
            </div>
            <!--end::Author-->

            <!--begin::Input group-->
            <div class="position-relative w-100">
                <!--begin::Input-->
                <textarea type="text" class="form-control form-control-solid border ps-5" rows="1" name="search" value="" data-kt-autosize="true" placeholder="Write your comment.." style="overflow: hidden; overflow-wrap: break-word; resize: none;" data-kt-initialized="1">                </textarea>    
                <!--end::Input-->         

                <!--begin::Actions-->
                <div class="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">   
                    <!--begin::Btn-->                       
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-attach fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-smile fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-gallery fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-location fs-2"></i>
                    </button>
                    <!--end::Btn-->
                </div>
                <!--end::Actions-->
            </div>
            <!--end::Input group-->                            
        </div> 
        <!--end::Comment form--> 
    </div> 
    <!--end::Card footer-->
</div>
<!--end::Card-->                        
<!--end::Post 4--> 
        <!--begin::Post 6-->
<!--begin::Card--> 
<div class="card card-flush mb-10">
    <!--begin::Card header-->
    <div class="card-header pt-9">
        <!--begin::Author-->
        <div class="d-flex align-items-center">      
            <!--begin::Avatar-->    
            <div class="symbol symbol-50px me-5">
                 
                    <img src="../../assets/media/avatars/300-12.jpg" class="" alt=""> 
                      
            </div>   
            <!--end::Avatar-->

            <!--begin::Info-->
            <div class="flex-grow-1">
                <!--begin::Name-->
                <a href="#" class="text-gray-800 text-hover-primary fs-4 fw-bold">Lara Nilson</a>      
                <!--end::Name-->      

                <!--begin::Date-->
                <span class="text-gray-400 fw-semibold d-block">Yestarday at 10:10 AM</span>    
                <!--end::Date-->               
            </div>
            <!--end::Info-->                
        </div> 
        <!--end::Author-->

        <!--begin::Card toolbar-->
        <div class="card-toolbar">
            <!--begin::Menu wrapper-->
            <div class="m-0">
                <!--begin::Menu toggle-->
                <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">   
                                    
                    <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                             
                </button>
                <!--end::Menu toggle-->

                
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <!--begin::Menu item-->
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        <!--end::Menu item-->

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    <!--end::Menu item-->
</div>
<!--end::Menu 2-->
 
            </div>
            <!--end::Menu wrapper--> 
        </div>
        <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body">

 
<!--begin::Post content-->
<div class="fs-6 fw-normal text-gray-700">
    You can either decide on your final headline before outstanding you 
    write the most of the rest of your creative post
</div>
<!--end::Post content-->
 
    </div> 
    <!--end::Card body-->

    <!--begin::Card footer-->
    <div class="card-footer pt-0">
        <!--begin::Info-->
        <div class="mb-6">
            <!--begin::Separator-->
            <div class="separator separator-solid"></div>
            <!--end::Separator-->

            <!--begin::Nav-->
            <ul class="nav py-3">
                <!--begin::Item-->
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible " data-bs-toggle="collapse" href="#kt_social_feeds_comments_6">
                        
                        <i class="bi bi-chat-square fs-2 me-1"></i> 
                                                    2 Comments
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                        <i class="bi bi-heart fs-2 me-1"></i>

                                                    14k Likes
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4"> 
                        <i class="bi bi-bookmark fs-2 me-1"></i> 
                        
                                                    7.5k Saves
                                            </a>
                </li>
                <!--end::Item-->
            </ul>
            <!--end::Nav-->

            <!--begin::Separator-->
            <div class="separator separator-solid mb-1"></div>
            <!--end::Separator-->

                            <!--begin::Comments-->
                <div class="collapse " id="kt_social_feeds_comments_6">
                                        
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-13.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mr. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">1 Day ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                                                    <!--begin::Comment-->
                        <div class="d-flex pt-6">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-45px me-5">
                                <img src="../../assets/media/avatars/300-2.jpg" alt="">     
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Wrapper-->
                            <div class="d-flex flex-column flex-row-fluid">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center flex-wrap mb-0">
                                    <!--begin::Name-->
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Mrs. Anderson</a>
                                    <!--end::Name-->

                                    <!--begin::Date-->
                                    <span class="text-gray-400 fw-semibold fs-7 me-5">2 Days ago</span>
                                    <!--end::Date-->

                                    <!--begin::Reply-->
                                    <a href="#" class="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                    <!--end::Reply-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Text-->
                                <span class="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper</span>
                                <!--end::Text-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Comment-->                    
                                               
                </div>
                <!--end::Collapse-->
                    </div>
        <!--end::Info-->

        <!--begin::Comment form-->
        <div class="d-flex align-items-center">
            <!--begin::Author-->
            <div class="symbol symbol-35px me-3">
                <img src="../../assets/media/avatars/300-3.jpg" alt=""> 
            </div>
            <!--end::Author-->

            <!--begin::Input group-->
            <div class="position-relative w-100">
                <!--begin::Input-->
                <textarea type="text" class="form-control form-control-solid border ps-5" rows="1" name="search" value="" data-kt-autosize="true" placeholder="Write your comment.." style="overflow: hidden; overflow-wrap: break-word; resize: none;" data-kt-initialized="1">                </textarea>    
                <!--end::Input-->         

                <!--begin::Actions-->
                <div class="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">   
                    <!--begin::Btn-->                       
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-attach fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-smile fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-gallery fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-location fs-2"></i>
                    </button>
                    <!--end::Btn-->
                </div>
                <!--end::Actions-->
            </div>
            <!--end::Input group-->                            
        </div> 
        <!--end::Comment form--> 
    </div> 
    <!--end::Card footer-->
</div>
<!--end::Card-->                        
<!--end::Post 6-->    </div>
    <!--end::More posts-->
</div>
<!--end::Posts-->

<!--begin::New post template-->
<div class="d-none" id="kt_social_feeds_new_post">
    <!--begin::Post New-->
<!--begin::Card--> 
<div class="card card-flush mb-10">
    <!--begin::Card header-->
    <div class="card-header pt-9">
        <!--begin::Author-->
        <div class="d-flex align-items-center">      
            <!--begin::Avatar-->    
            <div class="symbol symbol-50px me-5">
                 
                    <img src="../../assets/media/avatars/300-3.jpg" class="" alt=""> 
                      
            </div>   
            <!--end::Avatar-->

            <!--begin::Info-->
            <div class="flex-grow-1">
                <!--begin::Name-->
                <a href="#" class="text-gray-800 text-hover-primary fs-4 fw-bold">Jerry Kane</a>      
                <!--end::Name-->      

                <!--begin::Date-->
                <span class="text-gray-400 fw-semibold d-block">Yestarday at 5:06 PM</span>    
                <!--end::Date-->               
            </div>
            <!--end::Info-->                
        </div> 
        <!--end::Author-->

        <!--begin::Card toolbar-->
        <div class="card-toolbar">
            <!--begin::Menu wrapper-->
            <div class="m-0">
                <!--begin::Menu toggle-->
                <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">   
                                    
                    <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                             
                </button>
                <!--end::Menu toggle-->

                
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <!--begin::Menu item-->
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        <!--end::Menu item-->

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    <!--end::Menu item-->
</div>
<!--end::Menu 2-->
 
            </div>
            <!--end::Menu wrapper--> 
        </div>
        <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body">

 
<!--begin::Post content-->
<div class="fs-6 fw-normal text-gray-700" data-kt-post-element="content">
    You can either decide on your final headline before outstanding you 
    write the most of the rest of your creative post
</div>
<!--end::Post content-->
 
    </div> 
    <!--end::Card body-->

    <!--begin::Card footer-->
    <div class="card-footer pt-0">
        <!--begin::Info-->
        <div class="mb-6">
            <!--begin::Separator-->
            <div class="separator separator-solid"></div>
            <!--end::Separator-->

            <!--begin::Nav-->
            <ul class="nav py-3">
                <!--begin::Item-->
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible " data-bs-toggle="collapse" href="#kt_social_feeds_comments_2">
                        
                        <i class="bi bi-chat-square fs-2 me-1"></i> 
                                                    0 Comment
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                        <i class="bi bi-heart fs-2 me-1"></i>

                                                    0 Like
                                            </a>
                </li>
                <!--end::Item-->

                <!--begin::Item-->
                <li class="nav-item">
                    <a href="#" class="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4"> 
                        <i class="bi bi-bookmark fs-2 me-1"></i> 
                        
                                                    0 Saves
                                            </a>
                </li>
                <!--end::Item-->
            </ul>
            <!--end::Nav-->

            <!--begin::Separator-->
            <div class="separator separator-solid mb-1"></div>
            <!--end::Separator-->

                    </div>
        <!--end::Info-->

        <!--begin::Comment form-->
        <div class="d-flex align-items-center">
            <!--begin::Author-->
            <div class="symbol symbol-35px me-3">
                <img src="../../assets/media/avatars/300-3.jpg" alt=""> 
            </div>
            <!--end::Author-->

            <!--begin::Input group-->
            <div class="position-relative w-100">
                <!--begin::Input-->
                <textarea type="text" class="form-control form-control-solid border ps-5" rows="1" name="search" value="" data-kt-autosize="true" placeholder="Write your comment.." style="overflow: hidden; overflow-wrap: break-word; resize: none;" data-kt-initialized="1">                </textarea>    
                <!--end::Input-->         

                <!--begin::Actions-->
                <div class="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">   
                    <!--begin::Btn-->                       
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-attach fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-smile fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-gallery fs-2"></i>
                    </button>
                    <!--end::Btn-->
                    
                    <!--begin::Btn-->
                    <button class="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i class="fonticon-location fs-2"></i>
                    </button>
                    <!--end::Btn-->
                </div>
                <!--end::Actions-->
            </div>
            <!--end::Input group-->                            
        </div> 
        <!--end::Comment form--> 
    </div> 
    <!--end::Card footer-->
</div>
<!--end::Card-->                        
<!--end::Post New--> </div>
<!--end::More posts-->
<!--begin::Show more feeds-->
<div class="d-flex flex-center">
    <a href="#" class="btn btn-primary fw-bold px-6" id="kt_social_feeds_more_posts_btn">
        
<!--begin::Indicator label-->
<span class="indicator-label">
    Show more</span>
<!--end::Indicator label-->

<!--begin::Indicator progress-->
<span class="indicator-progress">
    Please wait...    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
</span>
<!--end::Indicator progress-->    </a>
</div>
<!--end::Show more feeds-->
    </div>  
    <!--end::Content-->

    <!--begin::End sidebar-->
    <div class="d-lg-flex flex-column flex-lg-row-auto w-lg-325px" data-kt-drawer="true" data-kt-drawer-name="end-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '250px': '300px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_social_end_sidebar_toggle">
        
<!--begin::Social widget 1-->
<div class="card mb-5 mb-xl-8">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bold text-dark">Suggestions for you</span>

			<span class="text-muted mt-1 fw-semibold fs-7">8k social visitors</span>
		</h3>

        <!--begin::Toolbar-->
        <div class="card-toolbar">            
            <!--begin::Menu-->
            <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">   
                                
                <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"></rect>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                             
            </button>
            
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    <!--end::Menu item-->
    
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <!--begin::Menu item-->
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        <!--end::Menu item-->

        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->            
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    <!--end::Menu item-->
</div>
<!--end::Menu 2-->
 
            <!--end::Menu-->               
        </div>
        <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-5">
                    <!--begin::Item-->
            <div class="d-flex flex-stack">  
                <!--begin::Symbol-->
                <div class="symbol symbol-40px me-5">
                    <img src="../../assets/media/avatars/300-11.jpg" class="h-50 align-self-center" alt="">                         
                </div>
                <!--end::Symbol-->

                <!--begin::Section-->
                <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                    <!--begin:Author-->                    
                    <div class="flex-grow-1 me-2">
                        <a href="../user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Jacob Jones</a>
                        
                        <span class="text-muted fw-semibold d-block fs-7">Barone LLC.</span>
                    </div>
                    <!--end:Author-->                      
                    
                    <!--begin:Action-->
                    <a href="../user-profile/overview.html" class="btn btn-sm btn-light fs-8 fw-bold">Follow</a>
                    <!--end:Action-->
                </div>
                <!--end::Section-->
            </div>
            <!--end::Item-->

                            <!--begin::Separator-->
                <div class="separator separator-dashed my-4"></div>
                <!--end::Separator-->
              
                    <!--begin::Item-->
            <div class="d-flex flex-stack">  
                <!--begin::Symbol-->
                <div class="symbol symbol-40px me-5">
                    <img src="../../assets/media/avatars/300-2.jpg" class="h-50 align-self-center" alt="">                         
                </div>
                <!--end::Symbol-->

                <!--begin::Section-->
                <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                    <!--begin:Author-->                    
                    <div class="flex-grow-1 me-2">
                        <a href="../user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Annette Black</a>
                        
                        <span class="text-muted fw-semibold d-block fs-7">Binford Ltd.</span>
                    </div>
                    <!--end:Author-->                      
                    
                    <!--begin:Action-->
                    <a href="../user-profile/overview.html" class="btn btn-sm btn-light fs-8 fw-bold">Follow</a>
                    <!--end:Action-->
                </div>
                <!--end::Section-->
            </div>
            <!--end::Item-->

                            <!--begin::Separator-->
                <div class="separator separator-dashed my-4"></div>
                <!--end::Separator-->
              
                    <!--begin::Item-->
            <div class="d-flex flex-stack">  
                <!--begin::Symbol-->
                <div class="symbol symbol-40px me-5">
                    <img src="../../assets/media/avatars/300-7.jpg" class="h-50 align-self-center" alt="">                         
                </div>
                <!--end::Symbol-->

                <!--begin::Section-->
                <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                    <!--begin:Author-->                    
                    <div class="flex-grow-1 me-2">
                        <a href="../user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Devon Lane</a>
                        
                        <span class="text-muted fw-semibold d-block fs-7">Acme Co.</span>
                    </div>
                    <!--end:Author-->                      
                    
                    <!--begin:Action-->
                    <a href="../user-profile/overview.html" class="btn btn-sm btn-light fs-8 fw-bold">Follow</a>
                    <!--end:Action-->
                </div>
                <!--end::Section-->
            </div>
            <!--end::Item-->

                            <!--begin::Separator-->
                <div class="separator separator-dashed my-4"></div>
                <!--end::Separator-->
              
                    <!--begin::Item-->
            <div class="d-flex flex-stack">  
                <!--begin::Symbol-->
                <div class="symbol symbol-40px me-5">
                    <img src="../../assets/media/avatars/300-9.jpg" class="h-50 align-self-center" alt="">                         
                </div>
                <!--end::Symbol-->

                <!--begin::Section-->
                <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                    <!--begin:Author-->                    
                    <div class="flex-grow-1 me-2">
                        <a href="../user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Kristin Watson</a>
                        
                        <span class="text-muted fw-semibold d-block fs-7">Biffco Enterprises Ltd.</span>
                    </div>
                    <!--end:Author-->                      
                    
                    <!--begin:Action-->
                    <a href="../user-profile/overview.html" class="btn btn-sm btn-light fs-8 fw-bold">Follow</a>
                    <!--end:Action-->
                </div>
                <!--end::Section-->
            </div>
            <!--end::Item-->

                            <!--begin::Separator-->
                <div class="separator separator-dashed my-4"></div>
                <!--end::Separator-->
              
                    <!--begin::Item-->
            <div class="d-flex flex-stack">  
                <!--begin::Symbol-->
                <div class="symbol symbol-40px me-5">
                    <img src="../../assets/media/avatars/300-12.jpg" class="h-50 align-self-center" alt="">                         
                </div>
                <!--end::Symbol-->

                <!--begin::Section-->
                <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                    <!--begin:Author-->                    
                    <div class="flex-grow-1 me-2">
                        <a href="../user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Eleanor Pena</a>
                        
                        <span class="text-muted fw-semibold d-block fs-7">Abstergo Ltd.</span>
                    </div>
                    <!--end:Author-->                      
                    
                    <!--begin:Action-->
                    <a href="../user-profile/overview.html" class="btn btn-sm btn-light fs-8 fw-bold">Follow</a>
                    <!--end:Action-->
                </div>
                <!--end::Section-->
            </div>
            <!--end::Item-->

              
            
    </div>
    <!--end::Body-->
</div>
<!--end::Social widget 1-->

        

<!--begin::Social widget 2-->
<div class="card card-flush mb-5 mb-xl-8">
    <!--begin::Header-->
    <div class="card-header pt-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bold text-dark">Trending Feeds</span>

            <span class="text-muted mt-1 fw-semibold fs-7">8k social visitors</span>
        </h3>
      
        <!--begin::Toolbar-->
        <div class="card-toolbar">   
            <a href="activity.html" class="btn btn-sm btn-light">View All</a>             
        </div>
        <!--end::Toolbar-->
    </div>
    <!--end::Header-->
    
    <!--begin::Body-->
    <div class="card-body">
        <!--begin::Row-->
        <div class="row g-3 g-lg-6">
                            <!--begin::Col-->
                <div class="col-md-6">
                    <!--begin::Img-->                 
                    <a href="#">
                        <img src="../../assets/media/stock/600x600/img-33.jpg" class="rounded w-100" alt="">  
                    </a>                
                    <!--end::Img-->
                </div>
                <!--end::Col-->
                            <!--begin::Col-->
                <div class="col-md-6">
                    <!--begin::Img-->                 
                    <a href="#">
                        <img src="../../assets/media/stock/600x600/img-26.jpg" class="rounded w-100" alt="">  
                    </a>                
                    <!--end::Img-->
                </div>
                <!--end::Col-->
                            <!--begin::Col-->
                <div class="col-md-6">
                    <!--begin::Img-->                 
                    <a href="#">
                        <img src="../../assets/media/stock/600x600/img-25.jpg" class="rounded w-100" alt="">  
                    </a>                
                    <!--end::Img-->
                </div>
                <!--end::Col-->
                            <!--begin::Col-->
                <div class="col-md-6">
                    <!--begin::Img-->                 
                    <a href="#">
                        <img src="../../assets/media/stock/600x600/img-35.jpg" class="rounded w-100" alt="">  
                    </a>                
                    <!--end::Img-->
                </div>
                <!--end::Col-->
                     
        </div>
        <!--end::Row-->
    </div>    
    <!--end::Body-->     
</div>    
<!--end::Social widget 2-->    </div>
    <!--end::End sidebar-->
</div>
<!--end::Social - Feeds-->
                                 </div>
        <!--end::Content container-->
    </div>
<!--end::Content-->					
                </div>
                <!--end::Content wrapper-->

                                    
<!--begin::Footer-->
<div id="kt_app_footer" class="app-footer ">
            <!--begin::Footer container-->
        <div class="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
            <!--begin::Copyright-->
<div class="text-dark order-2 order-md-1">
    <span class="text-muted fw-semibold me-1">2023©</span>
    <a href="https://keenthemes.com/" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</a>
</div>
<!--end::Copyright-->

<!--begin::Menu-->
<ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
    <li class="menu-item"><a href="https://keenthemes.com/" target="_blank" class="menu-link px-2">About</a></li>

    <li class="menu-item"><a href="https://devs.keenthemes.com/" target="_blank" class="menu-link px-2">Support</a></li>

    <li class="menu-item"><a href="https://1.envato.market/EA4JP" target="_blank" class="menu-link px-2">Purchase</a></li>
</ul>
<!--end::Menu-->        </div>
        <!--end::Footer container-->
    </div>
<!--end::Footer-->                            </div>
            <!--end:::Main-->

            
                    </div>
        <!--end::Wrapper-->

        
            </div>
    <!--end::Page-->
</div>
      </>
  )
}
export default Home