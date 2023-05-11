import React from 'react'

const Home = () => {
  return (
    <>

    {/* <!--begin::Body--> */}
    <div id="kt_app_body" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true"  class="app-default"></div>
{/* <script>
	var defaultThemeMode = "light";
	var themeMode;

	if ( document.documentElement ) {
		if ( document.documentElement.hasAttribute("data-bs-theme-mode")) {
			themeMode = document.documentElement.getAttribute("data-bs-theme-mode");
		} else {
			if ( localStorage.getItem("data-bs-theme") !== null ) {
				themeMode = localStorage.getItem("data-bs-theme");
			} else {
				themeMode = defaultThemeMode;
			}			
		}

		if (themeMode === "system") {
			themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		}

		document.documentElement.setAttribute("data-bs-theme", themeMode);
	}            
</script>
<!--end::Theme mode setup on page load-->            
                    <!--Begin::Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FS8GGP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!--End::Google Tag Manager (noscript) --> */}
        
        
<!--begin::App-->
<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page  flex-column flex-column-fluid " id="kt_app_page">     
        
                    
<!--begin::Header-->
<div id="kt_app_header" class="app-header " 
     data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}"  
     >

                        <!--begin::Header container-->
            <div class="app-container  container-fluid d-flex flex-stack " id="kt_app_header_container">
                <!--begin::Sidebar toggle-->
<div class="d-flex align-items-center d-block d-lg-none ms-n3" title="Show sidebar menu">
	<div class="btn btn-icon btn-active-color-primary w-35px h-35px me-2" id="kt_app_sidebar_mobile_toggle">
		<!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
<span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor"/>
<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->	</div>

	<!--begin::Logo image-->
    <a href="../index.html">
		<img alt="Logo" src="../assets/media/logos/default-small.svg" class="h-30px theme-light-show"/>
		<img alt="Logo" src="../assets/media/logos/default-small-dark.svg" class="h-30px theme-dark-show"/>
    </a>
    <!--end::Logo image-->
</div>
<!--end::Sidebar toggle-->

<!--begin::Header wrapper-->
<div class="d-flex flex-stack flex-lg-row-fluid" id="kt_app_header_wrapper">
	 

<!--begin::Page title-->
<div class="page-title gap-4 me-3 mb-5 mb-lg-0"  data-kt-swapper="true" data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_wrapper'}" >
      
        <!--begin::Breadcrumb-->
        <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 mb-2">        
                         
                {/* <!--begin::Item--> */}
                                    <li class="breadcrumb-item text-gray-600 fw-bold lh-1">
                                                    <a href="../index.html" class="text-gray-700 text-hover-primary me-1">
                                                                    <i class="fonticon-home text-gray-700 fs-3"></i>
                                                            </a>
                                            </li>
                                {/* <!--end::Item--> */}

                                    {/* <!--begin::Item--> */}
                    <li class="breadcrumb-item">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
<span class="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                    </li>
                    {/* <!--end::Item--> */}
                                        
                         
                {/* <!--begin::Item--> */}
                                    <li class="breadcrumb-item text-gray-600 fw-bold lh-1">
                                                    Dashboards                                            </li>
                                {/* <!--end::Item--> */}

                                        
                    </ul>
        <!--end::Breadcrumb-->
    
    <!--begin::Title-->
    <h1 class="text-gray-900 fw-bolder m-0">
        Website Analytics         
    </h1>
    <!--end::Title--> 
</div>
<!--end::Page title-->
	<!--begin::Action-->	
	<a href="#" class="btn btn-primary d-flex flex-center h-35px h-lg-40px"  data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
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
<div id="kt_app_sidebar" class="app-sidebar  flex-column " 
     data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"      
     >

            <!--begin::Header-->
<div class="app-sidebar-header d-none d-lg-flex px-6 pt-8 pb-4" id="kt_app_sidebar_header">
    <!--begin::Toggle-->
    <button type="button" data-kt-element="selected" class="btn btn-outline btn-custom btn-flex w-100" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, -1px">
        <!--begin::Logo-->
        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
            <img alt="Logo" src="../assets/media/logos/default-small.svg" data-kt-element="logo" class="h-30px"/>
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
<path d="M12.5657 11.3657L16.75 15.55C17.1642 15.9643 17.8358 15.9643 18.25 15.55C18.6642 15.1358 18.6642 14.4643 18.25 14.05L12.7071 8.50716C12.3166 8.11663 11.6834 8.11663 11.2929 8.50715L5.75 14.05C5.33579 14.4643 5.33579 15.1358 5.75 15.55C6.16421 15.9643 6.83579 15.9643 7.25 15.55L11.4343 11.3657C11.7467 11.0533 12.2533 11.0533 12.5657 11.3657Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->            <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
<span class="svg-icon svg-icon-3 svg-icon-gray-700"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"/>
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
                            {/* <!--begin::Menu item--> */}
                <div class="menu-item">
                    {/* <!--begin::Menu link--> */}
                    <a href="#" class="menu-link px-3 py-3 active" data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../assets/media/logos/default-small.svg" data-kt-element="logo" class="h-30px"/>
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
                {/* <!--end::Menu item--> */}
                            {/* <!--begin::Menu item--> */}
                <div class="menu-item">
                    {/* <!--begin::Menu link--> */}
                    <a href="#" class="menu-link px-3 py-3 " data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../assets/media/svg/brand-logos/slack-icon.svg" data-kt-element="logo" class="h-30px"/>
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
                {/* <!--end::Menu item--> */}
                            {/* <!--begin::Menu item--> */}
                <div class="menu-item">
                    {/* <!--begin::Menu link--> */}
                    <a href="#" class="menu-link px-3 py-3 " data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../assets/media/svg/brand-logos/dribbble-icon-1.svg" data-kt-element="logo" class="h-30px"/>
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
                {/* <!--end::Menu item--> */}
                            {/* <!--begin::Menu item--> */}
                <div class="menu-item">
                    {/* <!--begin::Menu link--> */}
                    <a href="#" class="menu-link px-3 py-3 " data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../assets/media/svg/brand-logos/bootstrap5.svg" data-kt-element="logo" class="h-30px"/>
                        </span>       
                        <!--end::Logo-->

                        <!--begin::Info-->
                        <span class="d-flex flex-column align-items-start">
                            <span class="fs-5 fw-bold text-white text-uppercase" data-kt-element="title">
                                Bootstrap                            </span>
                            <span class="fs-7 fw-bold text-gray-700 lh-sm" data-kt-element="desc">
                                CSS & JS Framework                            </span>
                        </span>
                        <!--end::Info-->
                    </a>
                </div>
                {/* <!--end::Menu item--> */}
                            {/* <!--begin::Menu item--> */}
                <div class="menu-item">
                    {/* <!--begin::Menu link--> */}
                    <a href="#" class="menu-link px-3 py-3 " data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../assets/media/svg/brand-logos/spotify-2.svg" data-kt-element="logo" class="h-30px"/>
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
                {/* <!--end::Menu item--> */}
                            {/* <!--begin::Menu item--> */}
                <div class="menu-item">
                    {/* <!--begin::Menu link--> */}
                    <a href="#" class="menu-link px-3 py-3 " data-kt-element="project">
                        <!--begin::Logo-->
                        <span class="d-flex flex-center flex-shrink-0 w-40px me-3">
                            <img alt="Logo" src="../assets/media/svg/brand-logos/beats-electronics.svg" data-kt-element="logo" class="h-30px"/>
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
                {/* <!--end::Menu item--> */}
                    </div>
        <!--end::Menu wrapper-->
    </div>
    <!--end::Menu-->
</div>
<!--end::Header-->
<!--begin::Navs-->
<div class="app-sidebar-navs flex-column-fluid py-6" id="kt_app_sidebar_navs">    
	<div 
		id="kt_app_sidebar_navs_wrappers" 
		class="hover-scroll-y my-2"        
        data-kt-scroll="true"
        data-kt-scroll-activate="true"
        data-kt-scroll-height="auto"     
        data-kt-scroll-dependencies="#kt_app_sidebar_header, #kt_app_sidebar_footer"
        data-kt-scroll-wrappers="#kt_app_sidebar_navs" 
        data-kt-scroll-offset="5px">

		
<!--begin::Quick links-->
<div class="menu menu-rounded menu-column">
            {/* <!--begin::Menu Item--> */}
        <div class="menu-item">
            {/* <!--begin::Menu link--> */}
            <a href="../apps/projects/project.html" class="menu-link">
                <!--begin::Icon--> 
                <span class="menu-icon">
                    <i class="fonticon-stats"></i>
                </span>
                <!--end::Icon--> 

                {/* <!--begin::Title--> */}
                <span class="menu-title">
                    Tasks                </span>
                {/* <!--end::Title--> */}

                <!--begin::Badge-->
                <span class="menu-badge">
                    <span class="badge badge-primary">
                        6                    </span>
                </span> 
                {/* <!--end::Badge-->                                         */}
            </a>
            <!--end:::Menu link-->                
        </div>
        {/* <!--end::Menu Item--> */}
            {/* <!--begin::Menu Item--> */}
        <div class="menu-item">
            {/* <!--begin::Menu link--> */}
            <a href="../apps/projects/activity.html" class="menu-link">
                <!--begin::Icon--> 
                <span class="menu-icon">
                    <i class="fonticon-image"></i>
                </span>
                <!--end::Icon--> 

                {/* <!--begin::Title--> */}
                <span class="menu-title">
                    Activities                </span>
                {/* <!--end::Title--> */}

                <!--begin::Badge-->
                <span class="menu-badge">
                    <span class="badge badge-danger">
                        24                    </span>
                </span> 
                {/* <!--end::Badge-->                                         */}
            </a>
            <!--end:::Menu link-->                
        </div>
        {/* <!--end::Menu Item--> */}
      
</div>    
<!--end::Quick links-->

<!--begin::Separator-->
<div class="app-sidebar-separator separator"></div>
<!--end::Separator-->
		<!--begin::Sidebar menu-->
<div id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" class="menu menu-column menu-rounded menu-sub-indention menu-active-bg">
    {/* <!--begin:Menu item--> */}
    <div  data-kt-menu-trigger="click"  class="menu-item here show menu-accordion" >
    {/* <!--begin:Menu link--> */}
    <span class="menu-link" ><span  class="menu-icon" ><i class="fonticon-house fs-2"></i></span><span  class="menu-title" >Dashboards</span><span  class="menu-arrow" ></span></span>
    {/* <!--end:Menu link--> */}
    <!--begin:Menu sub-->
    <div  class="menu-sub menu-sub-accordio
    n" ><!--begin:Menu item-->
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="../index.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Default</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="ecommerce.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >eCommerce</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="projects.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Projects</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="online-courses.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Online Courses</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="marketing.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Marketing</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    <div class="menu-inner flex-column collapse show" id="kt_app_sidebar_menu_dashboards_collap
    se"><!--begin:Menu item-->
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="bidding.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Bidding</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="pos.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >POS System</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="call-center.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Call Center</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="logistics.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Logistics</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link active"  href="website-analytics.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Website Analytics</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="finance-performance.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Finance Performance</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="store-analytics.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Store Analytics</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="social.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Social</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="delivery.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Delivery</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="crypto.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Crypto</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="school.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >School</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="podcast.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Podcast</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    {/* <!--begin:Menu item--> */}
    <div  class="menu-item" >
    {/* <!--begin:Menu link--> */}
    <a class="menu-link"  href="../landing.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Landing</span></a>
    {/* <!--end:Menu link--> */}
    </div>
    {/* <!--end:Menu item--> */}
    </div>
            <div class="menu-item">
                <div class="menu-content">
                    <a class="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible active" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show 12 More">
                        <span data-kt-toggle-text-target="true">Show Less</span>
                         {/* <!--begin::Svg Icon | path: icons/duotune/general/gen036.svg--> */}
<span class="svg-icon toggle-on svg-icon-2 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon--><!--begin::Svg Icon | path: icons/duotune/general/gen035.svg--> */}
<span class="svg-icon toggle-off svg-icon-2 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                        
                    </a>
                </div>
            </div>                 
        </div>
        
        {/* <!--end:Menu sub--> */}

        </div>
        
        {/* <!--end:Menu item--> */}

        {/* <!--begin:Menu item--> */}

        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" >
        <span  class="menu-icon" >
        <i class="fonticon-stats fs-2">
        </i>
        </span>
        <span  class="menu-title" >Pages</span>
        <span  class="menu-arrow" >

        </span>
        </span>
        
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub-->
         */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}

        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >User Profile</span>
        <span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub-->
         */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/user-profile/overview.html" ><span  class="menu-bullet" >
        <span class="bullet bullet-dot"></span></span><span  class="menu-title" >Overview</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}

        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/user-profile/projects.html" >
        <span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Projects</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/user-profile/campaigns.html" >
        <span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Campaigns</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}

        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/user-profile/documents.html" ><span  class="menu-bullet" >
        <span class="bullet bullet-dot"></span></span><span  class="menu-title" >Documents</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}

        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/user-profile/followers.html" ><span  class="menu-bullet" >
        <span class="bullet bullet-dot"></span></span><span  class="menu-title" >Followers</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}

        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/user-profile/activity.html" ><span  class="menu-bullet" >
        <span class="bullet bullet-dot"></span></span><span  class="menu-title" >Activity</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}

        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Account</span><span  class="menu-arrow" >
        </span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}

        <a class="menu-link"  href="../account/overview.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span>
        <span  class="menu-title" >Overview</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        
        {/* <!--begin:Menu link--><a class="menu-link"  href="../account/settings.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span> */}
        <span  class="menu-title" >Settings</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}

        <a class="menu-link"  href="../account/security.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span>
        <span  class="menu-title" >Security</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        !--begin:Menu link--><a class="menu-link"  href="../account/activity.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span>
        <span  class="menu-title" >Activity</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}

        <a class="menu-link"  href="../account/billing.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span>
        <span  class="menu-title" >Billing</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        
        {/* <!--begin:Menu link--><a class="menu-link"  href="../account/statements.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"> */}
        </span></span><span  class="menu-title" >Statements</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../account/referrals.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Referrals</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../account/api-keys.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >API Keys</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../account/logs.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Logs</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Authentication</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Corporate Layout</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/corporate/sign-in.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sign-in</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/corporate/sign-up.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sign-up</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/corporate/two-steps.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Two-steps</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/corporate/reset-password.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Reset Password</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/corporate/new-password.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >New Password</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Overlay Layout</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/overlay/sign-in.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sign-in</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/overlay/sign-up.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sign-up</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/overlay/two-steps.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Two-steps</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/overlay/reset-password.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Reset Password</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/overlay/new-password.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >New Password</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Creative Layout</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/creative/sign-in.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sign-in</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/creative/sign-up.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sign-up</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/creative/two-steps.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Two-steps</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/creative/reset-password.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Reset Password</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/creative/new-password.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >New Password</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Fancy Layout</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/fancy/sign-in.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sign-in</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/fancy/sign-up.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sign-up</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/fancy/two-steps.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Two-steps</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/fancy/reset-password.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Reset Password</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/layouts/fancy/new-password.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >New Password</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Email Templates</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/email/welcome-message.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Welcome Message</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/email/reset-password.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Reset Password</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/email/subscription-confirmed.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Subscription Confirmed</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/email/card-declined.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Credit Card Declined</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/email/promo-1.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Promo 1</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/email/promo-2.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Promo 2</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/email/promo-3.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Promo 3</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/extended/multi-steps-sign-up.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Multi-steps Sign-up</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/extended/two-factor-auth.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Two Factor Auth</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/general/welcome.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Welcome Message</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/general/verify-email.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Verify Email</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/general/coming-soon.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Coming Soon</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/general/password-confirmation.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Password Confirmation</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/general/account-deactivated.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Account Deactivation</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/general/error-404.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Error 404</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../authentication/general/error-500.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Error 500</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Corporate</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/about.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >About</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/team.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Our Team</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/contact.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Contact Us</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/licenses.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Licenses</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/sitemap.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sitemap</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Social</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/social/feeds.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Feeds</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/social/activity.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Activty</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/social/followers.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Followers</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/social/settings.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Settings</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Blog</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/blog/home.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Blog Home</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/blog/post.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Blog Post</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >FAQ</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/faq/classic.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >FAQ Classic</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/faq/extended.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >FAQ Extended</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Pricing</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/pricing/column.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Column Pricing</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/pricing/table.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Table Pricing</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Careers</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/careers/list.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Careers List</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../pages/careers/apply.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Careers Apply</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Widgets</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../widgets/lists.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Lists</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../widgets/statistics.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Statistics</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../widgets/charts.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Charts</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../widgets/mixed.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Mixed</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../widgets/tables.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Tables</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../widgets/feeds.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Feeds</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-icon" ><i class="fonticon-app-store fs-2"></i></span><span  class="menu-title" >Apps</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Projects</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/projects/list.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >My Projects</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/projects/project.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View Project</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/projects/targets.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Targets</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/projects/budget.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Budget</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/projects/users.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Users</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/projects/files.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Files</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/projects/activity.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Activity</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/projects/settings.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Settings</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >eCommerce</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Catalog</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/catalog/products.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Products</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/catalog/categories.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Categories</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/catalog/add-product.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Add Product</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/catalog/edit-product.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Edit Product</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/catalog/add-category.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Add Category</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/catalog/edit-category.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Edit Category</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sales</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/sales/listing.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Orders Listing</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/sales/details.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Order Details</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/sales/add-order.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Add Order</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/sales/edit-order.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Edit Order</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customers</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/customers/listing.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customer Listing</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/customers/details.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customer Details</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Reports</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/reports/view.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Products Viewed</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/reports/sales.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sales</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/reports/returns.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Returns</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/reports/customer-orders.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customer Orders</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/reports/shipping.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Shipping</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/ecommerce/settings.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Settings</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Contacts</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/contacts/getting-started.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Getting Started</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/contacts/add-contact.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Add Contact</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/contacts/edit-contact.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Edit Contact</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/contacts/view-contact.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View Contact</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Support Center</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/support-center/overview.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Overview</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion mb-1" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Tickets</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/support-center/tickets/list.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Tickets List</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/support-center/tickets/view.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View Ticket</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion mb-1" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Tutorials</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/support-center/tutorials/list.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Tutorials List</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/support-center/tutorials/post.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Tutorial Post</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/support-center/faq.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >FAQ</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/support-center/licenses.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Licenses</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/support-center/contact.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Contact Us</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >User Management</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion mb-1" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Users</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/user-management/users/list.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Users List</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/user-management/users/view.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View User</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Roles</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/user-management/roles/list.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Roles List</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/user-management/roles/view.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View Role</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/user-management/permissions.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Permissions</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customers</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/customers/getting-started.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Getting Started</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/customers/list.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customer Listing</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/customers/view.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customer Details</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Subscription</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/subscriptions/getting-started.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Getting Started</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/subscriptions/list.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Subscription List</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/subscriptions/add.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Add Subscription</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/subscriptions/view.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View Subscription</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Invoice Manager</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View Invoices</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/invoices/view/invoice-1.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Invoice 1</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/invoices/view/invoice-2.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Invoice 2</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/invoices/view/invoice-3.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Invoice 3</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/invoices/create.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Create Invoice</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >File Manager</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/file-manager/folders.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Folders</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/file-manager/files.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Files</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/file-manager/blank.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Blank Directory</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/file-manager/settings.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Settings</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Inbox</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/inbox/listing.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Messages</span><span  class="menu-badge" ><span class="badge badge-success">3</span></span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/inbox/compose.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Compose</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/inbox/reply.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View & Reply</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Chat</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/chat/private.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Private Chat</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/chat/group.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Group Chat</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/chat/drawer.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Drawer Chat</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../apps/calendar.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Calendar</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-icon" ><i class="fonticon-image fs-2"></i></span><span  class="menu-title" >Utilities</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Modals</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >General</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/general/invite-friends.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Invite Friends</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/general/view-users.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View Users</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/general/select-users.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Select Users</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/general/upgrade-plan.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Upgrade Plan</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/general/share-earn.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Share & Earn</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Forms</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/forms/new-target.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >New Target</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/forms/new-card.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >New Card</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/forms/new-address.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >New Address</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/forms/create-api-key.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Create API Key</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/forms/bidding.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Bidding</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Wizards</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/wizards/create-app.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Create App</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/wizards/create-campaign.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Create Campaign</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/wizards/create-account.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Create Business Acc</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/wizards/create-project.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Create Project</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/wizards/top-up-wallet.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Top Up Wallet</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/wizards/offer-a-deal.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Offer a Deal</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/wizards/two-factor-authentication.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Two Factor Auth</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Search</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/search/users.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Users</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/search/select-location.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Select Location</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Wizards</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/wizards/horizontal.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Horizontal</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/wizards/vertical.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Vertical</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/wizards/two-factor-authentication.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Two Factor Auth</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/wizards/create-app.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Create App</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/wizards/create-campaign.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Create Campaign</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/wizards/create-account.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Create Account</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/wizards/create-project.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Create Project</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/modals/wizards/top-up-wallet.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Top Up Wallet</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/wizards/offer-a-deal.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Offer a Deal</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Search</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion menu-active-bg" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/search/horizontal.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Horizontal</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/search/vertical.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Vertical</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/search/users.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Users</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../utilities/search/select-location.html" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Location</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  data-kt-menu-trigger="click"  class="menu-item menu-accordion" >
        {/* <!--begin:Menu link--> */}
        <span class="menu-link" ><span  class="menu-icon" ><i class="fonticon-setting fs-2"></i></span><span  class="menu-title" >Help</span><span  class="menu-arrow" ></span></span>
        {/* <!--end:Menu link--> */}
        {/* <!--begin:Menu sub--> */}
        <div  class="menu-sub menu-sub-accordion" >
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Components</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Documentation</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="../layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Layout Builder</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        {/* <!--begin:Menu item--> */}
        <div  class="menu-item" >
        {/* <!--begin:Menu link--> */}
        <a class="menu-link"  href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank" ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Changelog v8.1.7</span></a>
        {/* <!--end:Menu link--> */}
        </div>
        {/* <!--end:Menu item--> */}
        </div>
        {/* <!--end:Menu sub--> */}

        </div>
        {/* <!--end:Menu item--> */}
        </div>
{/* <!--end::Sidebar menu--> */}

{/* <!--begin::Separator--> */}
<div class="separator"></div>
{/* <!--end::Separator--> */}
		
{/* <!--begin::Projects--> */}
<div class="menu menu-rounded menu-column">
    {/* <!--begin::Heading--> */}
    <div class="menu-item">
        <div class="menu-content menu-heading">
            Projects
        </div>
    </div>
    {/* <!--end::Heading--> */}

            
{/*         
        {/* <!--begin::Menu Item--> */} */}
        <div class="menu-item">
            {/* <!--begin::Menu link--> */}
            <a class="menu-link" href="../apps/projects/project.html">
                {/* <!--begin::Bullet-->  */}
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-primary">
                    </span>
                </span>                      
                {/* <!--end::Bullet-->  */}

                {/* <!--begin::Title--> */}
                <span class="menu-title">
                    Google Ads                </span>
                {/* <!--end::Title--> */}

                {/* <!--begin::Badge-->  */}
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        6                    </span>
                </span>                      
                {/* <!--end::Badge-->                                       */}
            </a>
            {/* <!--end::Menu link-->                 */}
        </div>
        {/* <!--end::Menu Item--> */}

                    
        
        {/* <!--begin::Menu Item--> */}
        <div class="menu-item">
            {/* <!--begin::Menu link--> */}
            <a class="menu-link" href="../apps/projects/project.html">
                {/* <!--begin::Bullet-->  */}
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-success">
                    </span>
                </span>                      
                {/* <!--end::Bullet-->  */}

                {/* <!--begin::Title--> */}
                <span class="menu-title">
                    AirStoke App                </span>
                {/* <!--end::Title--> */}

                {/* <!--begin::Badge-->  */}
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        2                    </span>
                </span>                      
                {/* <!--end::Badge-->                                       */}
            </a>
            {/* <!--end::Menu link-->                 */}
        </div>
        {/* <!--end::Menu Item--> */}

                    
        
        {/* <!--begin::Menu Item--> */}
        <div class="menu-item">
            {/* <!--begin::Menu link--> */}
            <a class="menu-link" href="../apps/projects/project.html">
                {/* <!--begin::Bullet-->  */}
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-warning">
                    </span>
                </span>                      
                {/* <!--end::Bullet-->  */}

                {/* <!--begin::Title--> */}
                <span class="menu-title">
                    Internal Tasks                </span>
                {/* <!--end::Title--> */}

                {/* <!--begin::Badge-->  */}
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        37                    </span>
                </span>                      
                {/* <!--end::Badge-->                                       */}
            </a>
            {/* <!--end::Menu link-->                 */}
        </div>
        {/* <!--end::Menu Item--> */}

                    
                    {/* <!--begin::Collapsible items--> */}
            <div class="menu-inner flex-column collapse" id="kt_app_sidebar_menu_projects_collapse">
        
        {/* <!--begin::Menu Item--> */}
        <div class="menu-item">
            {/* <!--begin::Menu link--> */}
            <a class="menu-link" href="../apps/projects/project.html">
                {/* <!--begin::Bullet-->  */}
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-danger">
                    </span>
                </span>                      
                {/* <!--end::Bullet-->  */}

                {/* <!--begin::Title--> */}
                <span class="menu-title">
                    Fitnes App                </span>
                {/* <!--end::Title--> */}

                {/* <!--begin::Badge-->  */}
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        3                    </span>
                </span>                      
                {/* <!--end::Badge-->                                       */}
            </a>
            {/* <!--end::Menu link-->                 */}
        </div>
        {/* <!--end::Menu Item--> */}

                    
        
        {/* <!--begin::Menu Item--> */}
        <div class="menu-item">
            {/* <!--begin::Menu link--> */}
            <a class="menu-link" href="../apps/projects/project.html">
                {/* <!--begin::Bullet-->  */}
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-info">
                    </span>
                </span>                      
                {/* <!--end::Bullet-->  */}

                {/* <!--begin::Title--> */}
                <span class="menu-title">
                    Oppo CRM                </span>
                {/* <!--end::Title--> */}

                {/* <!--begin::Badge-->  */}
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        12                    </span>
                </span>                      
                {/* <!--end::Badge-->                                       */}
            </a>
            {/* <!--end::Menu link-->                 */}
        </div>
        {/* <!--end::Menu Item--> */}

                    
        
        {/* <!--begin::Menu Item--> */}
        <div class="menu-item">
            {/* <!--begin::Menu link--> */}
            <a class="menu-link" href="../apps/projects/project.html">
                {/* <!--begin::Bullet-->  */}
                <span class="menu-icon">
                    <span class="bullet bullet-dot h-10px w-10px bg-warning">
                    </span>
                </span>                      
                {/* <!--end::Bullet-->  */}

                {/* <!--begin::Title--> */}
                <span class="menu-title">
                    Finance Dispatch                </span>
                {/* <!--end::Title--> */}

                {/* <!--begin::Badge-->  */}
                <span class="menu-badge">
                    <span class="badge badge-custom">
                        25                    </span>
                </span>                      
                {/* <!--end::Badge-->                                       */}
            </a>
            {/* <!--end::Menu link-->                 */}
        </div>
        {/* <!--end::Menu Item--> */}

                    </div>
            {/* <!--end::Collapsible items--> */}
             

    {/* <!--begin::Collapse toggle--> */}
    <div class="menu-item">
        {/* <!--begin::Toggle--> */}
        <a class="menu-link menu-collapse-toggle toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_projects_collapse" data-kt-toggle-text="Show less">
            <span class="menu-icon">
                {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg--> */}
<span class="svg-icon toggle-off svg-icon-3 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                <!--begin::Svg Icon | path: icons/duotune/arrows/arr073.svg--> */}
<span class="svg-icon toggle-on svg-icon-3 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5657 11.3657L16.75 15.55C17.1642 15.9643 17.8358 15.9643 18.25 15.55C18.6642 15.1358 18.6642 14.4643 18.25 14.05L12.7071 8.50716C12.3166 8.11663 11.6834 8.11663 11.2929 8.50715L5.75 14.05C5.33579 14.4643 5.33579 15.1358 5.75 15.55C6.16421 15.9643 6.83579 15.9643 7.25 15.55L11.4343 11.3657C11.7467 11.0533 12.2533 11.0533 12.5657 11.3657Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->    */}
         </span>

            {/* <!--begin::Title-->  */}
            <span class="menu-title" data-kt-toggle-text-target="true">
                Show more
            </span>
            {/* <!--end::Title-->                       */}
        </a>
        {/* <!--end::Toggle--> */}
    </div> 
    {/* <!--end::Collapse toggle--> */}
</div>    
{/* <!--end::Projects--> */}
	</div>
</div>
{/* <!--end::Navs--> */}


{/* <!--begin::Footer--> */}
<div class="app-sidebar-footer d-flex flex-stack px-11 pb-10" id="kt_app_sidebar_footer">   
    {/* <!--begin::User menu--> */}
    <div class="">
       {/* <!--begin::Menu wrapper--> */}
        <div 
            class="cursor-pointer symbol symbol-circle symbol-40px" 
            data-kt-menu-trigger="{default: 'click', lg: 'hover'}" 		
            data-kt-menu-overflow="true"
            data-kt-menu-placement="top-start"			
        >
            <img src="../assets/media/avatars/300-2.jpg" alt="image"/>
        </div>

        
{/* <!--begin::User account menu--> */}
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content d-flex align-items-center px-3">
            {/* <!--begin::Avatar--> */}
            <div class="symbol symbol-50px me-5">
                <img alt="Logo" src="../assets/media/avatars/300-13.jpg"/>
            </div>
            {/* <!--end::Avatar--> */}

            {/* <!--begin::Username--> */}
            <div class="d-flex flex-column">
                <div class="fw-bold d-flex align-items-center fs-5">
                    Max Smith                    <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                </div>

                <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">
                    max@kt.com                </a>
            </div>
            {/* <!--end::Username--> */}
        </div>
    </div>
{/* <!--end::Menu item--> */}

    {/* <!--begin::Menu separator--> */}
    <div class="separator my-2"></div>
    {/* <!--end::Menu separator--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-5">
        <a href="../account/overview.html" class="menu-link px-5">
            My Profile
        </a>
    </div>
    {/* <!--end::Menu item--> */}
    
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-5">
        <a href="../apps/projects/list.html" class="menu-link px-5">
            <span class="menu-text">My Projects</span>
            <span class="menu-badge">
                <span class="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
            </span>
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0">
        <a href="#" class="menu-link px-5">
            <span class="menu-title">My Subscription</span>
            <span class="menu-arrow"></span>
        </a>

        {/* <!--begin::Menu sub--> */}
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="../account/referrals.html" class="menu-link px-5">
                    Referrals
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="../account/billing.html" class="menu-link px-5">
                    Billing
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item-->             */}
            <div class="menu-item px-3">
                <a href="../account/statements.html" class="menu-link px-5">
                    Payments
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item-->             */}
            <div class="menu-item px-3">
                <a href="../account/statements.html" class="menu-link d-flex flex-stack px-5">
                    Statements
                    
                    <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements"></i>
                </a>
            </div>
            {/* <!--end::Menu item--> */}
            
            {/* <!--begin::Menu separator--> */}
            <div class="separator my-2"></div>
            {/* <!--end::Menu separator--> */}

            {/* <!--begin::Menu item-->             */}
            <div class="menu-item px-3">
                <div class="menu-content px-3">
                    <label class="form-check form-switch form-check-custom form-check-solid">
                        <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications"/>
                        <span class="form-check-label text-muted fs-7">
                            Notifications
                        </span>
                    </label>
                </div>
            </div>
            {/* <!--end::Menu item--> */}
        </div>
        {/* <!--end::Menu sub--> */}
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-5">
        <a href="../account/statements.html" class="menu-link px-5">
            My Statements
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu separator--> */}
    <div class="separator my-2"></div>
    {/* <!--end::Menu separator--> */}

            {/* <!--begin::Menu item--> */}
        <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
            <a href="#" class="menu-link px-5">
                <span class="menu-title position-relative">
                    Mode 

                    <span class="ms-5 position-absolute translate-middle-y top-50 end-0">
                        {/* <!--begin::Svg Icon | path: icons/duotune/general/gen060.svg--> */}
<span class="svg-icon theme-light-show svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor"/>
<path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor"/>
<path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor"/>
<path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor"/>
<path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor"/>
<path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor"/>
<path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor"/>
<path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor"/>
<path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                        <!--begin::Svg Icon | path: icons/duotune/general/gen061.svg-->
<span class="svg-icon theme-dark-show svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor"/>
<path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor"/>
<path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor"/>
<path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->   */}
                  </span>
                </span>
            </a>

            {/* <!--begin::Menu--> */}
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3 my-0">
        <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
            <span class="menu-icon" data-kt-element="icon">
                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen060.svg--> */}
<span class="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor"/>
<path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor"/>
<path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor"/>
<path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor"/>
<path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor"/>
<path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor"/>
<path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor"/>
<path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor"/>
<path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->    */}
         </span>
            <span class="menu-title">
                Light
            </span>
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3 my-0">
        <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
            <span class="menu-icon" data-kt-element="icon">
                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen061.svg--> */}
<span class="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor"/>
<path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor"/>
<path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor"/>
<path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->    */}
         </span>
            <span class="menu-title">
                Dark
            </span>
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3 my-0">
        <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
            <span class="menu-icon" data-kt-element="icon">
                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen062.svg--> */}
<span class="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->             */}
</span>
            <span class="menu-title">
                System
            </span>
        </a>
    </div>
    {/* <!--end::Menu item--> */}
</div>
{/* <!--end::Menu--> */}

        </div>
        {/* <!--end::Menu item--> */}
    
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0">
        <a href="#" class="menu-link px-5">
            <span class="menu-title position-relative">
                Language 

                <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                    English <img class="w-15px h-15px rounded-1 ms-2" src="../assets/media/flags/united-states.svg" alt=""/>
                </span>
            </span>
        </a>

        {/* <!--begin::Menu sub--> */}
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="../account/settings.html" class="menu-link d-flex px-5 active">
                    <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../assets/media/flags/united-states.svg" alt=""/>
                    </span>
                    English
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="../account/settings.html" class="menu-link d-flex px-5">
                    <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../assets/media/flags/spain.svg" alt=""/>
                    </span>
                    Spanish
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="../account/settings.html" class="menu-link d-flex px-5">
                    <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../assets/media/flags/germany.svg" alt=""/>
                    </span>
                    German
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="../account/settings.html" class="menu-link d-flex px-5">
                    <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../assets/media/flags/japan.svg" alt=""/>
                    </span>
                    Japanese
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="../account/settings.html" class="menu-link d-flex px-5">
                    <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../assets/media/flags/france.svg" alt=""/>
                    </span>
                    French
                </a>
            </div>
            {/* <!--end::Menu item--> */}
        </div>
        {/* <!--end::Menu sub--> */}
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-5 my-1">
        <a href="../account/settings.html" class="menu-link px-5">
            Account Settings
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-5">
        <a href="../authentication/layouts/corporate/sign-in.html" class="menu-link px-5">
            Sign Out
        </a>
    </div>
    {/* <!--end::Menu item--> */}
</div>
{/* <!--end::User account menu--> */}
        {/* <!--end::Menu wrapper--> */}
    </div>
    {/* <!--end::User menu-->  */}

    {/* <!--begin::Logout--> */}
    <a href="../authentication/flows/basic/sign-in.html" class="btn btn-sm btn-outline btn-flex btn-custom px-3">
        {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr076.svg--> */}
<span class="svg-icon svg-icon-3 me-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" width="12" height="2" rx="1" transform="matrix(-1 0 0 1 15.5 11)" fill="currentColor"/>
<path d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z" fill="currentColor"/>
<path d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->          */}
        Logout
    </a>
    {/* <!--end::Logout--> */}
</div>
{/* <!--end::Footer-->    */}
 </div>
{/* <!--end::Sidebar-->                 */}
                            
            
            {/* <!--begin::Main--> */}
            <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                {/* <!--begin::Content wrapper--> */}
                <div class="d-flex flex-column flex-column-fluid">
                                        
                    
{/* <!--begin::Content--> */}
<div id="kt_app_content" class="app-content  flex-column-fluid " >
            {/* <!--begin::Content container--> */}
        <div id="kt_app_content_container" class="app-container  container-fluid ">
            {/* <!--begin::Row--> */}
<div class="row gx-5 gx-xl-10">  
    {/* <!--begin::Col--> */}
    <div class="col-xxl-4 mb-5 mb-xl-10">       
        {/* <!--begin::Chart widget 27--> */}
<div class="card card-flush h-xl-100">
    {/* <!--begin::Header--> */}
    <div class="card-header py-7">
        {/* <!--begin::Statistics--> */}
        <div class="m-0">   
            {/* <!--begin::Heading--> */}
            <div class="d-flex align-items-center mb-2">          
                {/* <!--begin::Title-->      */}
                <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">35,568</span>
                {/* <!--end::Title--> */}
                 
                {/* <!--begin::Label-->   */}
                <span class="badge badge-light-danger fs-base">                                
                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-danger ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->  */}
                    8.02%
                </span> 
                {/* <!--end::Label-->                             */}
            </div>
            {/* <!--end::Heading--> */}

            {/* <!--begin::Description--> */}
            <span class="fs-6 fw-semibold text-gray-400">Organic Sessions</span>
            {/* <!--end::Description--> */}
        </div>
        {/* <!--end::Statistics--> */}

        {/* <!--begin::Toolbar--> */}
        <div class="card-toolbar">   
            {/* <!--begin::Menu--> */}
            <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">                
                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg--> */}
<span class="svg-icon svg-icon-1 svg-icon-gray-300 me-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                             
            </button>

            
{/* <!--begin::Menu 2--> */}
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu separator--> */}
    <div class="separator mb-3 opacity-75"></div>
    {/* <!--end::Menu separator--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    {/* <!--end::Menu item--> */}
    
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        {/* <!--begin::Menu item--> */}
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        {/* <!--end::Menu item--> */}

        {/* <!--begin::Menu sub--> */}
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item-->             */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}
        </div>
        {/* <!--end::Menu sub--> */}
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu separator--> */}
    <div class="separator mt-3 opacity-75"></div>
    {/* <!--end::Menu separator--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    {/* <!--end::Menu item--> */}
</div>
{/* <!--end::Menu 2--> */}
 
            {/* <!--end::Menu-->          */}
        </div>
        {/* <!--end::Toolbar--> */}
    </div>
    {/* <!--end::Header--> */}

    {/* <!--begin::Body--> */}
    <div class="card-body pt-0 pb-1">                 
        <div id="kt_charts_widget_27" class="min-h-auto"></div>       
    </div>
    {/* <!--end::Body--> */}
</div>
{/* <!--end::Chart widget 27--> */}


     </div>
    {/* <!--end::Col--> */}

    {/* <!--begin::Col--> */}
    <div class="col-xxl-4 mb-5 mb-xl-10">       
        {/* <!--begin::Chart widget 28--> */}
<div class="card card-flush h-xl-100">
    {/* <!--begin::Header--> */}
    <div class="card-header py-7">
        {/* <!--begin::Statistics--> */}
        <div class="m-0">   
            {/* <!--begin::Heading--> */}
            <div class="d-flex align-items-center mb-2">          
                {/* <!--begin::Title-->      */}
                <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">2,579</span>
                {/* <!--end::Title--> */}
                 
                {/* <!--begin::Label-->   */}
                <span class="badge badge-light-success fs-base">                                
                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->     */}
                    2.2%
                </span>  
                {/* <!--end::Label-->                             */}
            </div>
            {/* <!--end::Heading--> */}

            {/* <!--begin::Description--> */}
            <span class="fs-6 fw-semibold text-gray-400">Domain External Links</span>
            {/* <!--end::Description--> */}
        </div>
        {/* <!--end::Statistics--> */}

        {/* <!--begin::Toolbar--> */}
        <div class="card-toolbar">   
            {/* <!--begin::Menu--> */}
            <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">                
                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg--> */}
<span class="svg-icon svg-icon-1 svg-icon-gray-300 me-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                             
            </button>

            
{/* <!--begin::Menu 2--> */}
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    {/* <!--end::Menu item--> */}
{/*  */}
    {/* <!--begin::Menu separator--> */}
    <div class="separator mb-3 opacity-75"></div>
    {/* <!--end::Menu separator--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    {/* <!--end::Menu item--> */}
    
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        {/* <!--begin::Menu item--> */}
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        {/* <!--end::Menu item--> */}

        {/* <!--begin::Menu sub--> */}
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item-->             */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}
        </div>
        {/* <!--end::Menu sub--> */}
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu separator--> */}
    <div class="separator mt-3 opacity-75"></div>
    {/* <!--end::Menu separator--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    {/* <!--end::Menu item--> */}
</div>
{/* <!--end::Menu 2--> */}
 
            {/* <!--end::Menu-->          */}
        </div>
        {/* <!--end::Toolbar--> */}
    </div>
    {/* <!--end::Header--> */}

    {/* <!--begin::Body--> */}
    <div class="card-body d-flex align-items-end ps-4 pe-0 pb-4">                 
        {/* <!--begin::Chart--> */}
        <div id="kt_charts_widget_28" class="h-300px w-100 min-h-auto"></div>
        {/* <!--end::Chart-->    */}
    </div>
    {/* <!--end::Body--> */}
</div>
{/* <!--end::Chart widget 28--> */}


     </div>
    {/* <!--end::Col--> */}
{/*  */}
    {/* <!--begin::Col--> */}
    <div class="col-xxl-4 mb-5 mb-xl-10">
        
{/* <!--begin::List widget 9--> */}
<div class="card card-flush h-xl-100">
    {/* <!--begin::Header--> */}
    <div class="card-header py-7">
                    
            {/* <!--begin::Statistics--> */}
            <div class="m-0">   
                {/* <!--begin::Heading--> */}
                <div class="d-flex align-items-center mb-2">          
                    {/* <!--begin::Title-->      */}
                    <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">5,037</span>
                    {/* <!--end::Title--> */}

                                            {/* <!--begin::Label-->   */}
                        <span class="badge badge-light-success fs-base">                                
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->      */}
                            2.2%
                        </span>  
                        {/* <!--end::Label-->             */}
                                  
                </div>
                {/* <!--end::Heading--> */}

                {/* <!--begin::Description--> */}
                <span class="fs-6 fw-semibold text-gray-400">Visits by Social Networks</span>
                {/* <!--end::Description--> */}
            </div>
            {/* <!--end::Statistics--> */}

            {/* <!--begin::Toolbar--> */}
            <div class="card-toolbar">   
                {/* <!--begin::Menu--> */}
                <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">                
                    {/* <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg--> */}
<span class="svg-icon svg-icon-1 svg-icon-gray-300 me-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                             
                </button>

                
{/* <!--begin::Menu 2--> */}
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu separator--> */}
    <div class="separator mb-3 opacity-75"></div>
    {/* <!--end::Menu separator--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    {/* <!--end::Menu item--> */}
    
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        {/* <!--begin::Menu item--> */}
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        {/* <!--end::Menu item--> */}

        {/* <!--begin::Menu sub--> */}
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item-->             */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}
        </div>
        {/* <!--end::Menu sub--> */}
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu separator--> */}
    <div class="separator mt-3 opacity-75"></div>
    {/* <!--end::Menu separator--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    {/* <!--end::Menu item--> */}
</div>
{/* <!--end::Menu 2--> */}
 
                {/* <!--end::Menu-->          */}
            </div>
            {/* <!--end::Toolbar-->              */}
         
    </div>
    {/* <!--end::Header-->         */}

    {/* <!--begin::Body--> */}
    <div class="card-body card-body d-flex justify-content-between flex-column pt-3">                 
                    
            {/* <!--begin::Item--> */}
            <div class="d-flex flex-stack">
                {/* <!--begin::Flag-->                     */}
                <img src="../assets/media/svg/brand-logos/dribbble-icon-1.svg" class="me-4 w-30px" style="border-radius: 4px" alt=""/>                     
                {/* <!--end::Flag--> */}

                {/* <!--begin::Section--> */}
                <div class="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                    {/* <!--begin::Content--> */}
                    <div class="me-5">
                        {/* <!--begin::Title--> */}
                        <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">Dribbble</a>
                        {/* <!--end::Title--> */}

                        {/* <!--begin::Desc--> */}
                        <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Community</span>   
                        {/* <!--end::Desc-->                                      */}
                    </div>
                    {/* <!--end::Content--> */}
                    
                    {/* <!--begin::Wrapper--> */}
                    <div class="d-flex align-items-center"> 
                        {/* <!--begin::Number--> */}
                                                    <span class="text-gray-800 fw-bold fs-4 me-3">579</span>
                                                    
                        {/* <!--end::Number-->                         */}
                        {/*  */}
                        {/* <!--begin::Info-->  */}
                        <div class="m-0">
                                                            {/* <!--begin::Label-->  */}
                                <span class="badge badge-light-success fs-base">                                
                                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                                                              
                                    2.6%
                                </span>  
                                {/* <!--end::Label-->    */}
                                                    {/*  */}
                        </div>  
                        {/* <!--end::Info-->                   */}
                    </div>
                    {/* <!--end::Wrapper-->   */}
                </div>
                {/* <!--end::Section-->                               */}
            </div>
            {/* <!--end::Item--> */}

             
                {/* <!--begin::Separator--> */}
                <div class="separator separator-dashed my-3"></div>
                {/* <!--end::Separator--> */}
             
                    
            {/* <!--begin::Item--> */}
            <div class="d-flex flex-stack">
                {/* <!--begin::Flag-->                     */}
                <img src="../assets/media/svg/brand-logos/linkedin-1.svg" class="me-4 w-30px" style="border-radius: 4px" alt=""/>                     
                {/* <!--end::Flag--> */}

                {/* <!--begin::Section--> */}
                <div class="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                    {/* <!--begin::Content--> */}
                    <div class="me-5">
                        {/* <!--begin::Title--> */}
                        <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">Linked In</a>
                        {/* <!--end::Title--> */}

                        {/* <!--begin::Desc--> */}
                        <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Social Media</span>   
                        {/* <!--end::Desc-->                                      */}
                    </div>
                    {/* <!--end::Content--> */}
                    
                    {/* <!--begin::Wrapper--> */}
                    <div class="d-flex align-items-center"> 
                        {/* <!--begin::Number--> */}
                                                    <span class="text-gray-800 fw-bold fs-4 me-3">1,088</span>
                                                    
                        {/* <!--end::Number-->                         */}
                        
                        {/* <!--begin::Info-->  */}
                        <div class="m-0">
                                                            {/* <!--begin::Label-->  */}
                                <span class="badge badge-light-danger fs-base">                           
                                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-danger ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"/>
<path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                             
                                    0.4%
                                </span>  
                                {/* <!--end::Label-->                */}
                                                    
                        </div>  
                        {/* <!--end::Info-->                   */}
                    </div>
                    {/* <!--end::Wrapper-->   */}
                </div>
                {/* <!--end::Section-->                               */}
            </div>
            {/* <!--end::Item--> */}

             {/*  */}
                {/* <!--begin::Separator--> */}
                <div class="separator separator-dashed my-3"></div>
                {/* <!--end::Separator--> */}
             
                    
            {/* <!--begin::Item--> */}
            <div class="d-flex flex-stack">
                {/* <!--begin::Flag-->                     */}
                <img src="../assets/media/svg/brand-logos/slack-icon.svg" class="me-4 w-30px" style="border-radius: 4px" alt=""/>                     
                {/* <!--end::Flag--> */}

                {/* <!--begin::Section--> */}
                <div class="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                    {/* <!--begin::Content--> */}
                    <div class="me-5">
                        {/* <!--begin::Title--> */}
                        <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">Slack</a>
                        {/* <!--end::Title--> */}

                        {/* <!--begin::Desc--> */}
                        <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Messanger</span>   
                        {/* <!--end::Desc-->                                      */}
                    </div>
                    {/* <!--end::Content--> */}
                    
                    {/* <!--begin::Wrapper--> */}
                    <div class="d-flex align-items-center"> 
                        {/* <!--begin::Number--> */}
                                                    <span class="text-gray-800 fw-bold fs-4 me-3">794</span>
                                                    
                        {/* <!--end::Number-->                         */}
                        
                        {/* <!--begin::Info-->  */}
                        <div class="m-0">
                                                            {/* <!--begin::Label-->  */}
                                <span class="badge badge-light-success fs-base">                                
                                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                                                              
                                    {/* 0.2% */}
                                </span>  
                                {/* <!--end::Label-->    */}
                                                    
                        </div>  
                        {/* <!--end::Info-->                   */}
                    </div>
                    {/* <!--end::Wrapper-->   */}
                </div>
                {/* <!--end::Section-->                               */}
            </div>
            {/* <!--end::Item--> */}

             
                {/* <!--begin::Separator--> */}
                <div class="separator separator-dashed my-3"></div>
                {/* <!--end::Separator--> */}
             
                    
            {/* <!--begin::Item--> */}
            <div class="d-flex flex-stack">
                {/* <!--begin::Flag-->                     */}
                <img src="../assets/media/svg/brand-logos/youtube-3.svg" class="me-4 w-30px" style="border-radius: 4px" alt=""/>                     
                {/* <!--end::Flag--> */}

                {/* <!--begin::Section--> */}
                <div class="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                    {/* <!--begin::Content--> */}
                    <div class="me-5">
                        {/* <!--begin::Title--> */}
                        <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">YouTube</a>
                        {/* <!--end::Title--> */}

                        {/* <!--begin::Desc--> */}
                        <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Video Channel</span>   
                        {/* <!--end::Desc-->                                      */}
                    </div>
                    {/* <!--end::Content--> */}
                    
                    {/* <!--begin::Wrapper--> */}
                    <div class="d-flex align-items-center"> 
                        {/* <!--begin::Number--> */}
                                                    <span class="text-gray-800 fw-bold fs-4 me-3">978</span>
                                                    
                        {/* <!--end::Number-->                         */}
                        {/*  */}
                        {/* <!--begin::Info-->  */}
                        <div class="m-0">
                                                            {/* <!--begin::Label-->  */}
                                <span class="badge badge-light-success fs-base">                                
                                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                                                              
                                    4.1%
                                </span>  
                                {/* <!--end::Label-->    */}
                                                    
                        </div>  
                        {/* <!--end::Info-->                   */}
                    </div>
                    {/* <!--end::Wrapper-->   */}
                </div>
                {/* <!--end::Section-->                               */}
            </div>
            {/* <!--end::Item--> */}

             
                {/* <!--begin::Separator--> */}
                <div class="separator separator-dashed my-3"></div>
                {/* <!--end::Separator--> */}
             
                    
            {/* <!--begin::Item--> */}
            <div class="d-flex flex-stack">
                {/* <!--begin::Flag-->                     */}
                <img src="../assets/media/svg/brand-logos/instagram-2-1.svg" class="me-4 w-30px" style="border-radius: 4px" alt=""/>                     
                {/* <!--end::Flag--> */}

                {/* <!--begin::Section--> */}
                <div class="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                    {/* <!--begin::Content--> */}
                    <div class="me-5">
                        {/* <!--begin::Title--> */}
                        <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">Instagram</a>
                        {/* <!--end::Title--> */}

                        {/* <!--begin::Desc--> */}
                        <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Social Network</span>   
                        {/* <!--end::Desc-->                                      */}
                    </div>
                    {/* <!--end::Content--> */}
                    
                    {/* <!--begin::Wrapper--> */}
                    <div class="d-flex align-items-center"> 
                        {/* <!--begin::Number--> */}
                                                    <span class="text-gray-800 fw-bold fs-4 me-3">1,458</span>
                                                    
                        {/* <!--end::Number-->                         */}
                        
                        {/* <!--begin::Info-->  */}
                        <div class="m-0">
                                                            {/* <!--begin::Label-->  */}
                                <span class="badge badge-light-success fs-base">                                
                                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                                                              
                                    8.3%
                                </span>  
                                {/* <!--end::Label-->    */}
                                                    
                        </div>  
                        {/* <!--end::Info-->                   */}
                    </div>
                    {/* <!--end::Wrapper-->   */}
                </div>
                {/* <!--end::Section-->                               */}
            </div>
            {/* <!--end::Item--> */}

             
                        </div>
    {/* <!--end::Body--> */}
</div>
{/* <!--end::List widget 9--> */}


                                 </div>
    {/* <!--end::Col--> */}
</div>
{/* <!--end::Row--> */}

{/* <!--begin::Row--> */}
<div class="row gx-5 gx-xl-10">
    {/* <!--begin::Col--> */}
    <div class="col-xl-6 mb-5 mb-xl-10">
        
{/* <!--begin::Table widget 9--> */}
<div class="card card-flush h-xl-100">
    {/* <!--begin::Header--> */}
    <div class="card-header pt-5">        
        {/* <!--begin::Title--> */}
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bold text-gray-800">Top Referral Sources</span>
            
            <span class="text-gray-400 pt-1 fw-semibold fs-6">Counted in Millions</span>
        </h3>
        {/* <!--end::Title--> */}

        {/* <!--begin::Toolbar--> */}
        <div class="card-toolbar">   
            <a href="#" class="btn btn-sm btn-light">PDF Report</a>             
        </div>
        {/* <!--end::Toolbar--> */}
    </div>
    {/* <!--end::Header--> */}

    {/* <!--begin::Body--> */}
	<div class="card-body py-3">
        {/* <!--begin::Table container--> */}
        <div class="table-responsive">
            {/* <!--begin::Table--> */}
            <table class="table table-row-dashed align-middle gs-0 gy-4">
                {/* <!--begin::Table head--> */}
                <thead>
                    <tr class="fs-7 fw-bold border-0 text-gray-400">                                    
                        <th class="min-w-150px" colspan="2">CAMPAIGN</th>
                        <th class="min-w-150px text-end pe-0" colspan="2">SESSIONS</th>
                        <th class="text-end min-w-150px" colspan="2">CONVERSION RATE</th>
                    </tr>
                </thead>
                {/* <!--end::Table head--> */}

                {/* <!--begin::Table body--> */}
                <tbody>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Google</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6 me-1">1,256</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-935</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6 me-3">23.63%</span>

                                    <span class="text-danger min-w-60px d-block text-end fw-bold fs-6">-9.35%</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Facebook</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6 me-1">446</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-576</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6 me-3">12.45%</span>

                                    <span class="text-danger min-w-60px d-block text-end fw-bold fs-6">-57.02%</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Bol.com</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6 me-1">67</span>

                                    <span class="text-success min-w-50px d-block text-end fw-bold fs-6">+24</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6 me-3">73.63%</span>

                                    <span class="text-success min-w-60px d-block text-end fw-bold fs-6">+28.73%</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Dutchnews.nl</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6 me-1">2,136</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-1,229</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6 me-3">3.67%</span>

                                    <span class="text-danger min-w-60px d-block text-end fw-bold fs-6">-12.29%</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Stackoverflow</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6 me-1">945</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-634</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6 me-3">25.03%</span>

                                    <span class="text-danger min-w-60px d-block text-end fw-bold fs-6">-9.35%</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Themeforest</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6 me-1">237</span>

                                    <span class="text-success min-w-50px d-block text-end fw-bold fs-6">106</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6 me-3">36.52%</span>

                                    <span class="text-success min-w-60px d-block text-end fw-bold fs-6">+3.06%</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                    </tbody>
                {/* <!--end::Table body--> */}
            </table>
            {/* <!--end::Table--> */}
        </div>
        {/* <!--end::Table container--> */}
	</div>
	{/* <!--end::Body--> */}
</div>
{/* <!--end::Table Widget 9-->  */}
   </div>
    {/* <!--end::Col--> */}

     {/* <!--begin::Col--> */}
     <div class="col-xl-6 mb-5 mb-xl-10">
        
{/* <!--begin::Table widget 10--> */}
<div class="card card-flush h-xl-100">
    {/* <!--begin::Header--> */}
    <div class="card-header pt-5">        
        {/* <!--begin::Title--> */}
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bold text-gray-800">Top Performing Pages</span>
            
            <span class="text-gray-400 pt-1 fw-semibold fs-6">Counted in Millions</span>
        </h3>
        {/* <!--end::Title--> */}

        {/* <!--begin::Toolbar--> */}
        <div class="card-toolbar">   
            <a href="#" class="btn btn-sm btn-light">PDF Report</a>             
        </div>
        {/* <!--end::Toolbar--> */}
    </div>
    {/* <!--end::Header--> */}

    {/* <!--begin::Body--> */}
	<div class="card-body py-3">
        {/* <!--begin::Table container--> */}
        <div class="table-responsive">
            {/* <!--begin::Table--> */}
            <table class="table table-row-dashed align-middle gs-0 gy-4">
                {/* <!--begin::Table head--> */}
                <thead>
                    <tr class="fs-7 fw-bold border-0 text-gray-400">                                    
                        <th class="min-w-200px" colspan="2">LANDING PAGE</th>
                        <th class="min-w-100px text-end pe-0" colspan="2">CLICKS</th>
                        <th class="text-end min-w-100px" colspan="2">AVG. POSITION</th>
                    </tr>
                </thead>
                {/* <!--end::Table head--> */}

                {/* <!--begin::Table body--> */}
                <tbody>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Index</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6">1,256</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-935</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6">2.63</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-1.35</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Products</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6">446</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-576</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6">1.45</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">0.32</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">devs.keenthemes.com</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6">67</span>

                                    <span class="text-success min-w-50px d-block text-end fw-bold fs-6">+24</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6">7.63</span>

                                    <span class="text-success min-w-50px d-block text-end fw-bold fs-6">+8.73</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">studio.keenthemes.com</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6">2,136</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-1,229</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6">3.67</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-2.29</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">graphics.keenthemes.com</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6">945</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-634</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6">5.03</span>

                                    <span class="text-danger min-w-50px d-block text-end fw-bold fs-6">-0.35</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                            <tr>
                            <td class="" colspan="2">
                                <a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Licenses</a>                                            
                            </td>

                            <td class="pe-0" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-gray-800 fw-bold fs-6">237</span>

                                    <span class="text-success min-w-50px d-block text-end fw-bold fs-6">106</span>                                                              
                                </div>                                                          
                            </td>

                            <td class="" colspan="2">                                
                                <div class="d-flex justify-content-end">                                
                                    <span class="text-dark fw-bold fs-6">3.52</span>

                                    <span class="text-success min-w-50px d-block text-end fw-bold fs-6">+3.06</span>                                                              
                                </div>                                                          
                            </td>
                        </tr>
                                    </tbody>
                {/* <!--end::Table body--> */}
            </table>
            {/* <!--end::Table--> */}
        </div>
        {/* <!--end::Table container--> */}
	</div>
	{/* <!--end::Body--> */}
</div>
{/* <!--end::Table Widget 10--> */}
    </div>
    {/* <!--end::Col--> */}
</div>
{/* <!--end::Row--> */}

<!--begin::Row-->
<div class="row gx-5 gx-xl-10">
    {/* <!--begin::Col--> */}
    <div class="col-xl-6 mb-5 mb-xl-10">
        {/* <!--begin::Chart widget 15--> */}
<div class="card card-flush h-xl-100">
    {/* <!--begin::Header--> */}
    <div class="card-header pt-7">
        {/* <!--begin::Title--> */}
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bold text-dark">Author Sales</span>

			<span class="text-gray-400 pt-2 fw-semibold fs-6">Statistics by Countries</span>
		</h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar"> 
                            <div class="card-toolbar">   
                    <a href="#" class="btn btn-sm btn-light">PDF Report</a>             
                </div>
             

            <!--begin::Menu-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-100px py-4" data-kt-menu="true">
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            Remove
        </a>
    </div>
    {/* <!--end::Menu item--> */}
    
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            Mute
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            Settings
        </a>
    </div>
    {/* <!--end::Menu item--> */}
</div>
<!--end::Menu-->
 
            <!--end::Menu-->             
        </div>
        <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-5">
        <!--begin::Chart container-->
        <div id="kt_charts_widget_15_chart" class="min-h-auto ps-4 pe-6 mb-3 h-300px"></div>       
        <!--end::Chart container--> 
    </div>
    <!--end::Body-->
</div>
<!--end::Chart widget 15-->
    </div>
    <!--end::Col-->
    
     <!--begin::Col-->
     <div class="col-xl-6 mb-5 mb-xl-10">
        
<!--begin::Table widget 11-->
<div class="card card-flush h-xl-100">
    <!--begin::Header-->
    <div class="card-header pt-5">        
        <!--begin::Title-->
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bold text-gray-800">Top Queries by Clicks</span>
            
            <span class="text-gray-400 pt-2 fw-semibold fs-6">Counted in Millions</span>
        </h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">   
            <a href="#" class="btn btn-sm btn-light">PDF Report</a>             
        </div>
        <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex justify-content-between flex-column py-3">
        <!--begin::Block-->
        <div class="m-0"></div>
        <!--end::Block-->

        <!--begin::Table container-->
        <div class="table-responsive mb-n2">
            <!--begin::Table-->
            <table class="table table-row-dashed gs-0 gy-4">
                <!--begin::Table head-->
                <thead>
                    <tr class="fs-7 fw-bold border-0 text-gray-400">                                    
                        <th class="min-w-300px">KEYWORD</th>
                        <th class="min-w-100px">CLICKS</th>
                    </tr>
                </thead>
                <!--end::Table head-->

                <!--begin::Table body-->
                <tbody>
                                            <tr>
                            <td>
                                <a href="#" class="text-gray-600 fw-bold text-hover-primary mb-1 fs-6">Buy phone online</a>                                            
                            </td>
                            <td class="d-flex align-items-center border-0">                                
                                <span class="fw-bold text-gray-800 fs-6 me-3">263</span> 

                                <div class="progress rounded-start-0">
                                    <div class="progress-bar bg-success m-0" role="progressbar" style="height: 12px;width: 166px" aria-valuenow="166" aria-valuemin="0" aria-valuemax="166px"></div>
                                </div>                                 
                            </td>
                        </tr>
                                            <tr>
                            <td>
                                <a href="#" class="text-gray-600 fw-bold text-hover-primary mb-1 fs-6">Top 10 Earbuds</a>                                            
                            </td>
                            <td class="d-flex align-items-center border-0">                                
                                <span class="fw-bold text-gray-800 fs-6 me-3">238</span> 

                                <div class="progress rounded-start-0">
                                    <div class="progress-bar bg-success m-0" role="progressbar" style="height: 12px;width: 158px" aria-valuenow="158" aria-valuemin="0" aria-valuemax="158px"></div>
                                </div>                                 
                            </td>
                        </tr>
                                            <tr>
                            <td>
                                <a href="#" class="text-gray-600 fw-bold text-hover-primary mb-1 fs-6">Cyber Monday</a>                                            
                            </td>
                            <td class="d-flex align-items-center border-0">                                
                                <span class="fw-bold text-gray-800 fs-6 me-3">189</span> 

                                <div class="progress rounded-start-0">
                                    <div class="progress-bar bg-success m-0" role="progressbar" style="height: 12px;width: 129px" aria-valuenow="129" aria-valuemin="0" aria-valuemax="129px"></div>
                                </div>                                 
                            </td>
                        </tr>
                                            <tr>
                            <td>
                                <a href="#" class="text-gray-600 fw-bold text-hover-primary mb-1 fs-6">OLED TV in Amsterdam</a>                                            
                            </td>
                            <td class="d-flex align-items-center border-0">                                
                                <span class="fw-bold text-gray-800 fs-6 me-3">263</span> 

                                <div class="progress rounded-start-0">
                                    <div class="progress-bar bg-success m-0" role="progressbar" style="height: 12px;width: 112px" aria-valuenow="112" aria-valuemin="0" aria-valuemax="112px"></div>
                                </div>                                 
                            </td>
                        </tr>
                                            <tr>
                            <td>
                                <a href="#" class="text-gray-600 fw-bold text-hover-primary mb-1 fs-6">Macbook M1</a>                                            
                            </td>
                            <td class="d-flex align-items-center border-0">                                
                                <span class="fw-bold text-gray-800 fs-6 me-3">263</span> 

                                <div class="progress rounded-start-0">
                                    <div class="progress-bar bg-success m-0" role="progressbar" style="height: 12px;width: 107px" aria-valuenow="107" aria-valuemin="0" aria-valuemax="107px"></div>
                                </div>                                 
                            </td>
                        </tr>
                                            <tr>
                            <td>
                                <a href="#" class="text-gray-600 fw-bold text-hover-primary mb-1 fs-6">Best noise cancelation headsets</a>                                            
                            </td>
                            <td class="d-flex align-items-center border-0">                                
                                <span class="fw-bold text-gray-800 fs-6 me-3">263</span> 

                                <div class="progress rounded-start-0">
                                    <div class="progress-bar bg-success m-0" role="progressbar" style="height: 12px;width: 74px" aria-valuenow="74" aria-valuemin="0" aria-valuemax="74px"></div>
                                </div>                                 
                            </td>
                        </tr>
                                    </tbody>
                <!--end::Table body-->
            </table>
            <!--end::Table-->
        </div>
        <!--end::Table container-->
    </div>
    <!--end::Body-->
</div>
<!--end::Table Widget 11-->





    </div>
    <!--end::Col-->
</div>
<!--end::Row-->

<!--begin::Row-->
<div class="row gx-5 gx-xl-10">  
    <!--begin::Col-->
    <div class="col-xl-4 mb-5 mb-xl-10">       
        <!--begin::Chart widget 29-->
<div class="card card-flush h-xl-100">
    <!--begin::Header-->
    <div class="card-header py-7">
        <!--begin::Statistics-->
        <div class="m-0">   
            <!--begin::Heading-->
            <div class="d-flex align-items-center mb-2">          
                {/* <!--begin::Title-->      */}
                <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">7,9</span>
                {/* <!--end::Title--> */}
                 
                <!--begin::Label-->  
                <span class="badge badge-light-success fs-base">                                
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->   
                    2.2%
                </span>  
                <!--end::Label-->                            
            </div>
            <!--end::Heading-->

            <!--begin::Description-->
            <span class="fs-6 fw-semibold text-gray-400">Avarage Position</span>
            <!--end::Description-->
        </div>
        <!--end::Statistics-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">   
            <!--begin::Menu-->
            <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">                
                <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1 svg-icon-gray-300 me-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                              */}
            </button>

            
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    {/* <!--end::Menu item--> */}

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    {/* <!--end::Menu item--> */}
    
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        {/* <!--begin::Menu item--> */}
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        {/* <!--end::Menu item--> */}

        {/* <!--begin::Menu sub--> */}
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item-->             */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}
        </div>
        <!--end::Menu sub-->
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    {/* <!--end::Menu item--> */}
</div>
<!--end::Menu 2-->
 
            <!--end::Menu-->         
        </div>
        <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex align-items-end p-0">                 
        <!--begin::Chart-->
        <div id="kt_charts_widget_29" class="h-300px w-100 min-h-auto ps-7 pe-0 mb-5"></div>
        <!--end::Chart-->   
    </div>
    <!--end::Body-->
</div>
<!--end::Chart widget 29-->


     </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-8 mb-5 mb-xl-10">       
        
<!--begin::Chart widget 24-->
<div class="card card-flush overflow-hidden h-xl-100">
    <!--begin::Header-->
    <div class="card-header py-5">
        <!--begin::Title-->
        <h3 class="card-title align-items-start flex-column">            
            <span class="card-label fw-bold text-dark">Human Resources</span>
            <span class="text-gray-400 mt-1 fw-semibold fs-6">Reports by states and ganders</span>
        </h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">            
            <!--begin::Menu-->
            <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" 
                data-kt-menu-trigger="click" 
                data-kt-menu-placement="bottom-end" 
                data-kt-menu-overflow="true">   
                                
                <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                              */}
            </button>
            
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    {/* <!--end::Menu item--> */}

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    {/* <!--end::Menu item--> */}
    
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        {/* <!--begin::Menu item--> */}
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        {/* <!--end::Menu item--> */}

        {/* <!--begin::Menu sub--> */}
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item-->             */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}
        </div>
        <!--end::Menu sub-->
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    {/* <!--end::Menu item--> */}
</div>
<!--end::Menu 2-->
 
            <!--end::Menu-->               
        </div>
        <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">  
        <!--begin::Chart-->
        <div id="kt_charts_widget_24" class="min-h-auto" style="height: 300px"></div>
        <!--end::Chart--> 
    </div>
    <!--end::Card body-->
</div>
<!--end::Chart widget 24-->

     </div>
    <!--end::Col-->    
</div>
<!--end::Row-->

<!--begin::Row-->
<div class="row gx-5 gx-xl-10">  
    <!--begin::Col-->
    <div class="col-xl-4 mb-5 mb-xl-0">       
        
<!--begin::List widget 12-->
<div class="card card-flush h-xl-100">
    <!--begin::Header-->
    <div class="card-header pt-7">
        <!--begin::Title-->
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bold text-gray-800">Visits by Source</span>
			<span class="text-gray-400 mt-1 fw-semibold fs-6">29.4k visitors</span>
		</h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">   
            <!--begin::Menu-->
            <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">                
                <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg-->
<span class="svg-icon svg-icon-1 svg-icon-gray-300 me-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                              */}
            </button>

            
<!--begin::Menu 2-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
    </div>
    {/* <!--end::Menu item--> */}

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Ticket
        </a>
    </div>
    {/* <!--end::Menu item--> */}
    
    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Customer
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        {/* <!--begin::Menu item--> */}
        <a href="#" class="menu-link px-3">
            <span class="menu-title">New Group</span>
            <span class="menu-arrow"></span>
        </a>
        {/* <!--end::Menu item--> */}

        {/* <!--begin::Menu sub--> */}
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Admin Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Staff Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item-->             */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">
                    Member Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}
        </div>
        <!--end::Menu sub-->
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3">
            New Contact
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <div class="menu-content px-3 py-3">
            <a class="btn btn-primary  btn-sm px-4" href="#">
                Generate Reports
            </a>
        </div>
    </div>
    {/* <!--end::Menu item--> */}
</div>
<!--end::Menu 2-->
 
            <!--end::Menu-->         
        </div>
        <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex align-items-end">  
        <!--begin::Wrapper-->
        <div class="w-100">           
                                             
               
                {/* <!--begin::Item--> */}
                <div class="d-flex align-items-center">                    
                    {/* <!--begin::Symbol--> */}
                    <div class="symbol symbol-30px me-5">
                        <span class="symbol-label">  
                            <!--begin::Svg Icon | path: icons/duotune/general/gen002.svg-->
<span class="svg-icon svg-icon-3 svg-icon-gray-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="currentColor"/>
<path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                              */}
                        </span>                
                    </div>
                    {/* <!--end::Symbol-->                    */}

                    {/* <!--begin::Container--> */}
                    <div class="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">
                        {/* <!--begin::Content--> */}
                        <div class="me-5">
                            {/* <!--begin::Title--> */}
                            <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">Direct Source</a>
                            {/* <!--end::Title--> */}

                            {/* <!--begin::Desc--> */}
                            <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Direct link clicks</span>   
                            {/* <!--end::Desc-->                                      */}
                        </div>
                        {/* <!--end::Content-->  */}

                        {/* <!--begin::Wrapper--> */}
                        <div class="d-flex align-items-center"> 
                            {/* <!--begin::Number-->            */}
                            <span class="text-gray-800 fw-bold fs-4 me-3">1,067</span> 
                            {/* <!--end::Number-->                         */}
                            
                            {/* <!--begin::Info--> 
                                                            <!--begin::label-->  */}
                                <span class="badge badge-light-success fs-base">                                
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                                                               */}
                                        
                                    2.6%
                                </span>  
                                {/* <!--end::label-->    */}
                                      
                            {/* <!--end::Info-->                   */}
                        </div>
                        {/* <!--end::Wrapper-->    */}
                    </div>
                    {/* <!--end::Container-->                                     */}
                </div>
                {/* <!--end::Item-->                            */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-3"></div>
                    {/* <!--end::Separator--> */}
                 
                                             
               
                {/* <!--begin::Item--> */}
                <div class="d-flex align-items-center">                    
                    {/* <!--begin::Symbol--> */}
                    <div class="symbol symbol-30px me-5">
                        <span class="symbol-label">  
                            <!--begin::Svg Icon | path: icons/duotune/social/soc008.svg-->
<span class="svg-icon svg-icon-3 svg-icon-gray-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M5.72502 20.1899C5.71502 20.1829 5.70401 20.179 5.69401 20.173C4.66853 19.48 3.87892 18.4906 3.43067 17.3369C2.98243 16.1833 2.89688 14.9202 3.18546 13.7167C3.47405 12.5131 4.12303 11.4263 5.04569 10.6013C5.96836 9.77636 7.12077 9.25259 8.34901 9.09998C8.49301 9.08498 8.67602 9.07397 8.87602 9.06897C9.11095 9.06456 9.33992 9.14308 9.52278 9.29065C9.70563 9.43822 9.83071 9.64541 9.87602 9.87598C9.86302 9.87598 9.85301 9.86902 9.84001 9.86902C9.64001 9.87402 9.457 9.88502 9.313 9.90002C8.18466 10.0339 7.11668 10.4822 6.23097 11.194C5.34525 11.9057 4.67748 12.8521 4.30387 13.9252C3.93026 14.9982 3.86585 16.1548 4.11802 17.2627C4.37019 18.3706 4.92879 19.3854 5.73002 20.191L5.72502 20.1899ZM18.252 6.69495C18.6924 6.96887 19.1764 7.16543 19.683 7.276C19.6261 7.08315 19.5171 6.90974 19.368 6.77478C19.219 6.63982 19.0356 6.54852 18.838 6.51099C18.3152 6.40512 17.8149 6.20855 17.36 5.93005C17.6224 6.222 17.9212 6.47898 18.249 6.69495H18.252ZM8.779 18.395C9.202 18.608 9.67239 18.7093 10.1455 18.6895C10.6187 18.6696 11.0789 18.5292 11.4826 18.2816C11.8863 18.034 12.22 17.6873 12.4522 17.2745C12.6843 16.8618 12.8071 16.3965 12.809 15.923V3.80005C12.809 3.53483 12.9144 3.28043 13.1019 3.0929C13.2894 2.90536 13.5438 2.80005 13.809 2.80005H15.109C15.143 2.80005 15.171 2.81402 15.209 2.81702C15.1441 2.58472 15.0058 2.37967 14.8148 2.23242C14.6237 2.08518 14.3902 2.00361 14.149 2H12.849C12.5838 2 12.3295 2.10531 12.1419 2.29285C11.9544 2.48038 11.849 2.73478 11.849 3V15.126C11.8473 15.5988 11.725 16.0633 11.4937 16.4756C11.2624 16.8879 10.9297 17.2344 10.5271 17.4823C10.1246 17.7302 9.66541 17.8713 9.19309 17.8922C8.72078 17.9131 8.25094 17.8133 7.82801 17.6021C8.08083 17.9363 8.40592 18.2091 8.779 18.4V18.395ZM17.29 5.89502C17.312 5.90902 17.338 5.91705 17.36 5.93005C16.7829 5.31815 16.3857 4.55892 16.212 3.73596C16.1661 3.4943 16.0431 3.27412 15.8613 3.1084C15.6795 2.94268 15.4489 2.84042 15.204 2.81702C15.2215 2.85569 15.2365 2.89545 15.249 2.93604C15.3725 3.5419 15.617 4.11659 15.9676 4.62585C16.3183 5.13512 16.7681 5.56851 17.29 5.90002V5.89502ZM9.91102 11.355C9.90901 11.6105 9.80922 11.8556 9.63218 12.0399C9.45514 12.2242 9.21425 12.3337 8.95899 12.3459C8.24648 12.3859 7.57535 12.6935 7.0799 13.2072C6.58446 13.7208 6.30125 14.4025 6.287 15.116C6.28677 15.6307 6.42963 16.1354 6.69962 16.5737C6.96962 17.012 7.35616 17.3667 7.81602 17.598H7.826C7.45283 17.1152 7.25027 16.5222 7.25001 15.912C7.26404 15.1984 7.54715 14.5165 8.04264 14.0028C8.53814 13.4891 9.20941 13.1817 9.92201 13.142C10.1771 13.1295 10.4177 13.0198 10.5946 12.8356C10.7714 12.6513 10.871 12.4064 10.873 12.151V10.864C10.8711 10.6 10.765 10.3474 10.5776 10.1614C10.3903 9.97535 10.137 9.87097 9.87299 9.87097C9.89293 9.93376 9.90634 9.99843 9.913 10.064L9.91102 11.355ZM19.8 7.31104C19.76 7.30304 19.723 7.285 19.683 7.276C19.7148 7.36988 19.7327 7.46794 19.736 7.56702V8.87305C19.736 9.00783 19.7072 9.141 19.6517 9.26379C19.5961 9.38659 19.5149 9.49613 19.4137 9.58508C19.3124 9.67404 19.1934 9.74036 19.0644 9.77966C18.9355 9.81896 18.7997 9.83033 18.666 9.81299C17.3993 9.64132 16.1936 9.16274 15.154 8.41895V14.912C15.1748 16.4605 14.617 17.9611 13.5898 19.12C12.5625 20.2789 11.1398 21.0127 9.60002 21.178C8.23377 21.2965 6.86771 20.9482 5.72502 20.1899C6.00882 20.4809 6.32067 20.7433 6.65602 20.973C7.80538 21.7435 9.18352 22.0981 10.562 21.978C12.1019 21.8128 13.5247 21.0789 14.5521 19.92C15.5795 18.7612 16.1376 17.2606 16.117 15.712V9.21899C17.1563 9.96278 18.3616 10.4414 19.628 10.613C19.7617 10.6304 19.8975 10.619 20.0264 10.5797C20.1554 10.5404 20.2744 10.4741 20.3757 10.3851C20.4769 10.2962 20.5581 10.1866 20.6137 10.0638C20.6692 9.94105 20.698 9.80776 20.698 9.67297V8.36694C20.695 8.11381 20.6036 7.86973 20.4396 7.67688C20.2757 7.48403 20.0494 7.35465 19.8 7.31104Z" fill="currentColor"/>
<path d="M15.149 14.912V8.41895C16.1886 9.16274 17.3943 9.64132 18.661 9.81299C18.7947 9.83033 18.9305 9.81896 19.0594 9.77966C19.1884 9.74036 19.3074 9.67404 19.4087 9.58508C19.5099 9.49613 19.5911 9.38659 19.6466 9.26379C19.7022 9.141 19.731 9.00783 19.731 8.87305V7.56702C19.7277 7.46794 19.7098 7.36988 19.678 7.276C19.1714 7.16543 18.6874 6.96887 18.247 6.69495C17.9182 6.47919 17.6184 6.22219 17.355 5.93005C17.333 5.91705 17.307 5.90902 17.285 5.89502C16.7636 5.56407 16.3142 5.13154 15.9635 4.62317C15.6129 4.1148 15.3681 3.541 15.244 2.93604C15.2315 2.89545 15.2165 2.85569 15.199 2.81702C15.166 2.81702 15.138 2.80005 15.099 2.80005H13.799C13.5338 2.80005 13.2794 2.90536 13.0919 3.0929C12.9044 3.28043 12.799 3.53483 12.799 3.80005V15.926C12.7986 16.5066 12.616 17.0725 12.277 17.5438C11.938 18.0152 11.4597 18.3683 10.9093 18.5533C10.359 18.7384 9.76452 18.7462 9.20957 18.5756C8.65462 18.4049 8.16721 18.0644 7.81602 17.6021H7.80601C7.34614 17.3707 6.95964 17.016 6.68964 16.5778C6.41964 16.1395 6.27679 15.6348 6.27701 15.12C6.29127 14.4065 6.57445 13.7247 7.06989 13.2111C7.56534 12.6974 8.2365 12.3899 8.94901 12.35C9.20427 12.3377 9.44516 12.2282 9.6222 12.0439C9.79924 11.8597 9.899 11.6146 9.90101 11.359V10.072C9.89434 10.0065 9.88093 9.94182 9.861 9.87903C9.848 9.87903 9.83802 9.87195 9.82502 9.87195C9.62502 9.87695 9.44201 9.88795 9.29801 9.90295C8.51517 9.85635 7.73118 9.97297 6.99573 10.2452C6.26029 10.5175 5.58941 10.9396 5.02564 11.4847C4.46187 12.0299 4.01752 12.6861 3.72071 13.412C3.42389 14.1379 3.2811 14.9176 3.3014 15.7015C3.32169 16.4855 3.50462 17.2568 3.8386 17.9663C4.17258 18.6759 4.6503 19.3082 5.24152 19.8235C5.83274 20.3387 6.52456 20.7255 7.27311 20.9594C8.02166 21.1932 8.81062 21.2691 9.59 21.182C11.1314 21.0179 12.5559 20.2839 13.5843 19.124C14.6127 17.9641 15.1707 16.462 15.149 14.912Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                              */}
                        </span>                
                    </div>
                    {/* <!--end::Symbol-->                    */}

                    {/* <!--begin::Container--> */}
                    <div class="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">
                        {/* <!--begin::Content--> */}
                        <div class="me-5">
                            {/* <!--begin::Title--> */}
                            <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">Social Networks</a>
                            {/* <!--end::Title--> */}

                            {/* <!--begin::Desc--> */}
                            <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">All Social Channels </span>   
                            {/* <!--end::Desc-->                                      */}
                        </div>
                        {/* <!--end::Content-->  */}

                        {/* <!--begin::Wrapper--> */}
                        <div class="d-flex align-items-center"> 
                            {/* <!--begin::Number-->            */}
                            <span class="text-gray-800 fw-bold fs-4 me-3">24,588</span> 
                            {/* <!--end::Number-->                         */}
                            
                            {/* <!--begin::Info--> 
                                                            <!--begin::label-->  */}
                                <span class="badge badge-light-success fs-base">                                
                                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                                                               */}
                                        
                                    4.1%
                                </span>  
                                {/* <!--end::label-->    */}
                                      
                            {/* <!--end::Info-->                   */}
                        </div>
                        {/* <!--end::Wrapper-->    */}
                    </div>
                    {/* <!--end::Container-->                                     */}
                </div>
                {/* <!--end::Item-->                            */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-3"></div>
                    {/* <!--end::Separator--> */}
                 
                                             
               
                {/* <!--begin::Item--> */}
                <div class="d-flex align-items-center">                    
                    {/* <!--begin::Symbol--> */}
                    <div class="symbol symbol-30px me-5">
                        <span class="symbol-label">  
                            {/* <!--begin::Svg Icon | path: icons/duotune/communication/com011.svg--> */}
<span class="svg-icon svg-icon-3 svg-icon-gray-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor"/>
<path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                              */}
                        </span>                
                    </div>
                    {/* <!--end::Symbol-->                    */}

                    {/* <!--begin::Container--> */}
                    <div class="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">
                        {/* <!--begin::Content--> */}
                        <div class="me-5">
                            {/* <!--begin::Title--> */}
                            <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">Email Newsletter</a>
                            {/* <!--end::Title--> */}

                            {/* <!--begin::Desc--> */}
                            <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Mailchimp Campaigns</span>   
                            {/* <!--end::Desc-->                                      */}
                        </div>
                        {/* <!--end::Content-->  */}

                        {/* <!--begin::Wrapper--> */}
                        <div class="d-flex align-items-center"> 
                            {/* <!--begin::Number-->            */}
                            <span class="text-gray-800 fw-bold fs-4 me-3">794</span> 
                            {/* <!--end::Number-->                         */}
                            
                            {/* <!--begin::Info--> 
                                                            <!--begin::label-->  */}
                                <span class="badge badge-light-success fs-base">                                
                                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                                                               */}
                                        
                                    0.2%
                                </span>  
                                {/* <!--end::label-->    */}
                                      
                            {/* <!--end::Info-->                   */}
                        </div>
                        {/* <!--end::Wrapper-->    */}
                    </div>
                    {/* <!--end::Container-->                                     */}
                </div>
                {/* <!--end::Item-->                            */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-3"></div>
                    {/* <!--end::Separator--> */}
                 
                                             
               
                {/* <!--begin::Item--> */}
                <div class="d-flex align-items-center">                    
                    {/* <!--begin::Symbol--> */}
                    <div class="symbol symbol-30px me-5">
                        <span class="symbol-label">  
                            {/* <!--begin::Svg Icon | path: icons/duotune/communication/com001.svg--> */}
<span class="svg-icon svg-icon-3 svg-icon-gray-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
<path d="M19 10.4C19 10.3 19 10.2 19 10C19 8.9 18.1 8 17 8H16.9C15.6 6.2 14.6 4.29995 13.9 2.19995C13.3 2.09995 12.6 2 12 2C11.9 2 11.8 2 11.7 2C12.4 4.6 13.5 7.10005 15.1 9.30005C15 9.50005 15 9.7 15 10C15 11.1 15.9 12 17 12C17.1 12 17.3 12 17.4 11.9C18.6 13 19.9 14 21.4 14.8C21.4 14.8 21.5 14.8 21.5 14.9C21.7 14.2 21.8 13.5 21.9 12.7C20.9 12.1 19.9 11.3 19 10.4Z" fill="currentColor"/>
<path d="M12 15C11 13.1 10.2 11.2 9.60001 9.19995C9.90001 8.89995 10 8.4 10 8C10 7.1 9.40001 6.39998 8.70001 6.09998C8.40001 4.99998 8.20001 3.90005 8.00001 2.80005C7.30001 3.10005 6.70001 3.40002 6.20001 3.90002C6.40001 4.80002 6.50001 5.6 6.80001 6.5C6.40001 6.9 6.10001 7.4 6.10001 8C6.10001 9 6.80001 9.8 7.80001 10C8.30001 11.6 9.00001 13.2 9.70001 14.7C7.10001 13.2 4.70001 11.5 2.40001 9.5C2.20001 10.3 2.10001 11.1 2.10001 11.9C4.60001 13.9 7.30001 15.7 10.1 17.2C10.2 18.2 11 19 12 19C12.6 20 13.2 20.9 13.9 21.8C14.6 21.7 15.3 21.5 15.9 21.2C15.4 20.5 14.9 19.8 14.4 19.1C15.5 19.5 16.5 19.9 17.6 20.2C18.3 19.8 18.9 19.2 19.4 18.6C17.6 18.1 15.7 17.5 14 16.7C13.9 15.8 13.1 15 12 15Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                             
                        </span>                
                    </div>
                    {/* <!--end::Symbol-->                    */}

                    {/* <!--begin::Container--> */}
                    <div class="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">
                        {/* <!--begin::Content--> */}
                        <div class="me-5">
                            {/* <!--begin::Title--> */}
                            <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">Referrals</a>
                            {/* <!--end::Title--> */}

                            {/* <!--begin::Desc--> */}
                            <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Impact Radius visits</span>   
                            {/* <!--end::Desc-->                                      */}
                        </div>
                        {/* <!--end::Content-->  */}

                        {/* <!--begin::Wrapper--> */}
                        <div class="d-flex align-items-center"> 
                            {/* <!--begin::Number-->            */}
                            <span class="text-gray-800 fw-bold fs-4 me-3">6,578</span> 
                            {/* <!--end::Number-->                         */}
                            
                            {/* <!--begin::Info--> 
                                                            <!--begin::label-->  */}
                                <span class="badge badge-light-danger fs-base">                           
                                    {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg--> */}
<span class="svg-icon svg-icon-5 svg-icon-danger ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"/>
<path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                             
                                
                                    0.4%
                                </span>  
                                {/* <!--end::label-->                */}
                                      
                            {/* <!--end::Info-->                   */}
                        </div>
                        {/* <!--end::Wrapper-->    */}
                    </div>
                    {/* <!--end::Container-->                                     */}
                </div>
                {/* <!--end::Item-->                            */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-3"></div>
                    {/* <!--end::Separator--> */}
                 
                                             
               
                {/* <!--begin::Item--> */}
                <div class="d-flex align-items-center">                    
                    {/* <!--begin::Symbol--> */}
                    <div class="symbol symbol-30px me-5">
                        <span class="symbol-label">  
                            <!--begin::Svg Icon | path: icons/duotune/abstract/abs026.svg-->
<span class="svg-icon svg-icon-3 svg-icon-gray-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M7 20.5L2 17.6V11.8L7 8.90002L12 11.8V17.6L7 20.5ZM21 20.8V18.5L19 17.3L17 18.5V20.8L19 22L21 20.8Z" fill="currentColor"/>
<path d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                              */}
                        </span>                
                    </div>
                    {/* <!--end::Symbol-->                    */}

                    {/* <!--begin::Container--> */}
                    <div class="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">
                        {/* <!--begin::Content--> */}
                        <div class="me-5">
                            {/* <!--begin::Title--> */}
                            <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">Other</a>
                            {/* <!--end::Title--> */}

                            {/* <!--begin::Desc--> */}
                            <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Many Sources</span>   
                            {/* <!--end::Desc-->                                      */}
                        </div>
                        {/* <!--end::Content-->  */}

                        {/* <!--begin::Wrapper--> */}
                        <div class="d-flex align-items-center"> 
                            {/* <!--begin::Number-->            */}
                            <span class="text-gray-800 fw-bold fs-4 me-3">79,458</span> 
                            {/* <!--end::Number-->                         */}
                            
                            {/* <!--begin::Info--> 
                                                            <!--begin::label-->  */}
                                <span class="badge badge-light-success fs-base">                                
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                                                               */}
                                        
                                    8.3%
                                </span>  
                                {/* <!--end::label-->    */}
                                      
                            {/* <!--end::Info-->                   */}
                        </div>
                        {/* <!--end::Wrapper-->    */}
                    </div>
                    {/* <!--end::Container-->                                     */}
                </div>
                {/* <!--end::Item-->                            */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-3"></div>
                    {/* <!--end::Separator--> */}
                 
                                             
               
                {/* <!--begin::Item--> */}
                <div class="d-flex align-items-center">                    
                    {/* <!--begin::Symbol--> */}
                    <div class="symbol symbol-30px me-5">
                        <span class="symbol-label">  
                            <!--begin::Svg Icon | path: icons/duotune/abstract/abs049.svg-->
<span class="svg-icon svg-icon-3 svg-icon-gray-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M8.70001 6C8.10001 5.7 7.39999 5.40001 6.79999 5.10001C7.79999 4.00001 8.90001 3 10.1 2.2C10.7 2.1 11.4 2 12 2C12.7 2 13.3 2.1 13.9 2.2C12 3.2 10.2 4.5 8.70001 6ZM12 8.39999C13.9 6.59999 16.2 5.30001 18.7 4.60001C18.1 4.00001 17.4 3.6 16.7 3.2C14.4 4.1 12.2 5.40001 10.5 7.10001C11 7.50001 11.5 7.89999 12 8.39999Z" fill="currentColor"/>
<path d="M7 20C7 20.2 7 20.4 7 20.6C6.2 20.1 5.49999 19.6 4.89999 19C4.59999 18 4.00001 17.2 3.20001 16.6C2.80001 15.8 2.49999 15 2.29999 14.1C4.99999 14.7 7 17.1 7 20ZM10.6 9.89995C8.70001 8.09995 6.39999 6.89996 3.79999 6.29996C3.39999 6.89996 2.99999 7.49995 2.79999 8.19995C5.39999 8.59995 7.7 9.79996 9.5 11.6C9.8 10.9 10.2 10.3999 10.6 9.89995ZM2.20001 10.1C2.10001 10.7 2 11.4 2 12C2 12 2 12 2 12.1C4.3 12.4 6.40001 13.7 7.60001 15.6C7.80001 14.8 8.09999 14.0999 8.39999 13.3999C6.89999 11.5999 4.70001 10.4 2.20001 10.1ZM11 20C11 14 15.4 8.99996 21.2 8.09996C20.9 7.39996 20.6 6.79995 20.2 6.19995C13.8 7.49995 9 13.0999 9 19.8999C9 20.3999 9.00001 21 9.10001 21.5C9.80001 21.7 10.5 21.7999 11.2 21.8999C11.1 21.2999 11 20.7 11 20ZM19.1 19C19.4 18 20 17.2 20.8 16.6C21.2 15.8 21.5 15 21.7 14.1C19 14.7 16.9 17.1 16.9 20C16.9 20.2 16.9 20.4 16.9 20.6C17.8 20.2 18.5 19.6 19.1 19ZM15 20C15 15.9 18.1 12.6 22 12.1C22 12.1 22 12.1 22 12C22 11.3 21.9 10.7 21.8 10.1C16.8 10.7 13 14.9 13 20C13 20.7 13.1 21.2999 13.2 21.8999C13.9 21.7999 14.5 21.7 15.2 21.5C15.1 21 15 20.5 15 20Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                              */}
                        </span>                
                    </div>
                    {/* <!--end::Symbol-->                    */}

                    {/* <!--begin::Container--> */}
                    <div class="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">
                        {/* <!--begin::Content--> */}
                        <div class="me-5">
                            {/* <!--begin::Title--> */}
                            <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">Rising Networks</a>
                            {/* <!--end::Title--> */}

                            {/* <!--begin::Desc--> */}
                            <span class="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Social Network</span>   
                            {/* <!--end::Desc-->                                      */}
                        </div>
                        {/* <!--end::Content-->  */}

                        {/* <!--begin::Wrapper--> */}
                        <div class="d-flex align-items-center"> 
                            {/* <!--begin::Number-->            */}
                            <span class="text-gray-800 fw-bold fs-4 me-3">18,047</span> 
                            {/* <!--end::Number-->                         */}
                            
                            {/* <!--begin::Info--> 
                                                            <!--begin::label-->  */}
                                <span class="badge badge-light-success fs-base">                                
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                                                               */}
                                        
                                    1.9%
                                </span>  
                                {/* <!--end::label-->    */}
                                      
                            {/* <!--end::Info-->                   */}
                        </div>
                        {/* <!--end::Wrapper-->    */}
                    </div>
                    {/* <!--end::Container-->                                     */}
                </div>
                {/* <!--end::Item-->                            */}

                 
               

                    </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Body-->
</div>
<!--end::List widget 12-->    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-4 mb-5 mb-xl-0">
        <!--begin::Chart widget 31-->
<div class="card card-flush h-xl-100">
    <!--begin::Header-->    
    <div class="card-header pt-7 mb-7">
        <!--begin::Title-->
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bold text-gray-800">Warephase stats</span>
			<span class="text-gray-400 mt-1 fw-semibold fs-6">8k social visitors</span>
		</h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">   
            <a href="../apps/ecommerce/catalog/add-product.html" class="btn btn-sm btn-light">PDF Report</a>             
        </div>
        <!--end::Toolbar-->
    </div>    
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex align-items-end pt-0">         
        <!--begin::Chart-->
        <div id="kt_charts_widget_31_chart" class="w-100 h-300px"></div>       
        <!--end::Chart-->            
    </div>
    <!--end::Body-->
</div>
<!--end::Chart widget 31-->
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-4 mb-5 mb-xl-0">
        <!--begin::Chart widget 30-->
<div class="card card-flush h-xl-100">
    <!--begin::Header-->    
    <div class="card-header pt-7 mb-7">
        <!--begin::Title-->
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bold text-gray-800">Stats by Department</span>
			<span class="text-gray-400 mt-1 fw-semibold fs-6">8k social visitors</span>
		</h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">   
            <a href="../apps/ecommerce/catalog/add-product.html" class="btn btn-sm btn-light">PDF Report</a>             
        </div>
        <!--end::Toolbar-->
    </div>    
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex justify-content-between flex-column">
        <!--begin::Items-->
        <div class="d-flex flex-wrap d-grid gap-5 mb-10">   
            <!--begin::Item-->
            <div class="border-end-dashed border-end border-gray-300 pe-xxl-7 me-xxl-5">   
                <!--begin::Statistics-->
                <div class="d-flex mb-2">   
                    <span class="fs-4 fw-semibold text-gray-400 me-1">$</span>
                    <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">8,035</span>                
                </div>
                <!--end::Statistics-->

                <!--begin::Description-->
                <span class="fs-6 fw-semibold text-gray-400">Actual for April</span>
                <!--end::Description-->
            </div>
            <!--end::Item-->             

            <!--begin::Item-->
            <div class="m-0">   
                <!--begin::Statistics-->
                <div class="d-flex align-items-center mb-2">   
                    <!--begin::Currency-->
                    <span class="fs-4 fw-semibold text-gray-400 align-self-start me-1">$</span>
                    <!--end::Currency-->

                    <!--begin::Value-->
                    <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">4,684</span>
                    <!--end::Value-->

                    <!--begin::Label-->
                    <span class="badge badge-light-success fs-base">                                
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
<span class="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon--> 
                        4.5%
                    </span>
                    <!--end::Label-->
                </div>
                <!--end::Statistics-->

                <!--begin::Description-->
                <span class="fs-6 fw-semibold text-gray-400">GAP</span>
                <!--end::Description-->
            </div>
            <!--end::Item-->
        </div>
        <!--end::Items-->

        <!--begin::Chart container-->
        <div id="kt_charts_widget_30_chart" class="w-100 h-200px"></div>       
        <!--end::Chart container--> 
    </div>
    <!--end::Body-->
</div>
<!--end::Chart widget 30-->
    </div>
    <!--end::Col-->
</div>
<!--end::Row-->

 

        </div>
        <!--end::Content container-->
    </div>
<!--end::Content-->					
                </div>
                <!--end::Content wrapper-->

                                    
<!--begin::Footer-->
<div id="kt_app_footer" class="app-footer " >
            <!--begin::Footer container-->
        <div class="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
            <!--begin::Copyright-->
<div class="text-dark order-2 order-md-1">
    <span class="text-muted fw-semibold me-1">2023&copy;</span>
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
<!--end::App-->

    <!--begin::App layout builder-->
<div 
	id="kt_app_layout_builder" 
	class="bg-body" 

	data-kt-drawer="true" 
	data-kt-drawer-name="app-settings" 
	data-kt-drawer-activate="true" 
	data-kt-drawer-overlay="true" 
	data-kt-drawer-width="{default:'300px', 'lg': '380px'}" 
	data-kt-drawer-direction="end" 
	data-kt-drawer-toggle="#kt_app_layout_builder_toggle" 
	data-kt-drawer-close="#kt_app_layout_builder_close">

	<!--begin::Card-->
	<div class="card border-0 shadow-none rounded-0 w-100">
		<!--begin::Card header-->
<div class="card-header bgi-position-y-bottom bgi-position-x-end bgi-size-cover bgi-no-repeat rounded-0 border-0 py-4" id="kt_app_layout_builder_header"
style="background-image:url('../assets/media/misc/layout/header-bg.jpg')">
    <!--begin::Card title-->
    <h3 class="card-title fs-3 fw-bold text-white flex-column m-0">
        Metronic Builder
        <small class="text-white opacity-50 fs-7 fw-semibold pt-1">Get your product deeply customized</small>
    </h3>
    <!--end::Card title-->

    <!--begin::Card toolbar-->
    <div class="card-toolbar">
        <button type="button" class="btn btn-sm btn-icon bg-white bg-opacity-25 btn-color-white p-0 w-20px h-20px rounded-1" id="kt_app_layout_builder_close">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
<!--end::Svg Icon-->        </button>
    </div>
    <!--end::Card toolbar-->
</div>
<!--end::Card header-->
		<!--begin::Card body-->
		<div class="card-body position-relative" id="kt_app_layout_builder_body">
			<!--begin::Content-->
			<div id="kt_app_settings_content" 
				class="position-relative scroll-y me-n5 pe-5" 
				
				data-kt-scroll="true" 
				data-kt-scroll-height="auto" 
				data-kt-scroll-wrappers="#kt_app_layout_builder_body" 
				data-kt-scroll-dependencies="#kt_app_layout_builder_header, #kt_app_layout_builder_footer" 
				data-kt-scroll-offset="5px">

				<!--begin::Form-->
				<form class="form" method="POST" id="kt_app_layout_builder_form" action="https://preview.keenthemes.com/metronic8/demo27/index.php">
    				<input type="hidden" id="kt_app_layout_builder_action" name="layout-builder[action]"/>
					<!--begin::Card body-->
<div class="card-body p-0">
    <!--begin::Form group-->
    <div class="form-group">
        <!--begin::Heading-->
        <div class="mb-6">
            <h4 class="fw-bold text-dark">Theme Mode</h4>
            <div class="fw-semibold text-muted fs-7 d-block lh-1">
                Enjoy Dark & Light modes.

                <a class="fw-semibold" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/dark-mode" target="_blank">See docs</a>
            </div>
        </div>
        <!--end::Heading-->  
        
        <!--begin::Options-->
        <div class="row" data-kt-buttons="true" data-kt-buttons-target=".form-check-image,.form-check-input">
                            <!--begin::Col-->
                <div class="col-6">
                    <!--begin::Option-->
                    <label class="form-check-image form-check-success">
                        <!--begin::Image--> 
                        <div class="form-check-wrapper">
                            <img src="../assets/media/preview/demos/demo27/light-ltr.png" class="mw-100" alt=""/>                  
                        </div>
                        <!--end::Image--> 

                        <!--begin::Check--> 
                        <div class="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                            <input class="form-check-input" type="radio" value="light" name="theme_mode" id="kt_layout_builder_theme_mode_light"/>

                            <!--begin::Label--> 
                            <div class="form-check-label text-gray-700">
                                Light                            </div>
                            <!--end::Label--> 
                        </div>
                        <!--end::Check--> 
                    </label>   
                    <!--end::Option-->             
                </div>
                <!--end::Col-->
                            <!--begin::Col-->
                <div class="col-6">
                    <!--begin::Option-->
                    <label class="form-check-image form-check-success">
                        <!--begin::Image--> 
                        <div class="form-check-wrapper">
                            <img src="../assets/media/preview/demos/demo27/dark-ltr.png" class="mw-100" alt=""/>                  
                        </div>
                        <!--end::Image--> 

                        <!--begin::Check--> 
                        <div class="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                            <input class="form-check-input" type="radio" value="dark" name="theme_mode" id="kt_layout_builder_theme_mode_dark"/>

                            <!--begin::Label--> 
                            <div class="form-check-label text-gray-700">
                                Dark                            </div>
                            <!--end::Label--> 
                        </div>
                        <!--end::Check--> 
                    </label>   
                    <!--end::Option-->             
                </div>
                <!--end::Col-->
              
        </div>
        <!--end::Options-->            
    </div>
    <!--end::Form group-->

    <!--begin::Separator-->
    <div class="separator separator-dashed my-5"></div>
    <!--end::Separator-->

    <!--begin::Form group-->
    <div class="form-group d-flex flex-stack">           
        <!--begin::Heading-->     
        <div class="d-flex flex-column">
            <h4 class="fw-bold text-dark">RTL Mode</h4>
            <div class="fs-7 fw-semibold text-muted">
                Change Language Direction.

                <a class="" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/rtl" target="_blank">See docs</a>
            </div>	
        </div>
        <!--end::Heading-->

        <!--begin::Option-->
        <div class="d-flex justify-content-end">
            <!--begin::Check-->
            <div class="form-check form-check-solid form-check-custom form-check-success form-switch">
                <input type="hidden" value="false" name="layout-builder[layout][app][general][rtl]"/>
                <input class="form-check-input w-45px h-30px" type="checkbox"  value="true" name="layout-builder[layout][app][general][rtl]" id="kt_builder_rtl"/>

                <!--begin::Label-->
                <label class="form-check-label" for="kt_builder_rtl"></label>
                <!--end::Label-->
            </div>
            <!--end::Check-->
        </div>
        <!--end::Option-->
    </div>
    <!--end::Form group-->

    <!--begin::Separator-->
    <div class="separator separator-dashed my-5"></div>
    <!--end::Separator-->

    <!--begin::Form group-->
    <div class="form-group">            
        <!--begin::Heading-->     
        <div class="d-flex flex-column mb-4">
            <h4 class="fw-bold text-dark">Width Mode</h4>
            <div class="fs-7 fw-semibold text-muted">Page width options</div>
        </div>
        <!--end::Heading-->

        <!--begin::Options-->
        <div class="d-flex">
                                            <!--begin::Check-->
                <div class="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5" >
                    <input class="form-check-input" type="radio" checked  value="default" id="kt_builder_page_width_default" name="layout-builder[layout][app][general][page-width]"/>

                    <!--begin::Label-->
                    <label class="form-check-label text-gray-700 fw-bold text-nowrap" for="kt_builder_page_width_default">
                        Default                    </label>
                    <!--end::Label-->
                </div>
                <!--end::Check-->
                                            <!--begin::Check-->
                <div class="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5" >
                    <input class="form-check-input" type="radio"   value="fluid" id="kt_builder_page_width_fluid" name="layout-builder[layout][app][general][page-width]"/>

                    <!--begin::Label-->
                    <label class="form-check-label text-gray-700 fw-bold text-nowrap" for="kt_builder_page_width_fluid">
                        Fluid                    </label>
                    <!--end::Label-->
                </div>
                <!--end::Check-->
                                            <!--begin::Check-->
                <div class="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5" >
                    <input class="form-check-input" type="radio"   value="fixed" id="kt_builder_page_width_fixed" name="layout-builder[layout][app][general][page-width]"/>

                    <!--begin::Label-->
                    <label class="form-check-label text-gray-700 fw-bold text-nowrap" for="kt_builder_page_width_fixed">
                        Fixed                    </label>
                    <!--end::Label-->
                </div>
                <!--end::Check-->
                    </div>
        <!--end::Options-->
    </div>
    <!--end::Form group-->

    <!--begin::Separator-->
    <div class="separator separator-dashed my-5"></div>
    <!--end::Separator-->

    <!--begin::Form group-->
    <div class="form-group">            
        <!--begin::Heading-->     
        <div class="d-flex flex-column mb-4">
            <h4 class="fw-bold text-dark">Menu Icon</h4>
            <div class="fs-7 fw-semibold text-muted">Sidebar menu icon options</div>
        </div>
        <!--end::Heading-->

        <!--begin::Options-->
        <div class="d-flex">
                                            <!--begin::Check-->
                <div class="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5" >
                    <input class="form-check-input" type="radio" checked value="font" id="kt_builder_icon_font" name="layout-builder[layout][app][menu][icon]"/>

                    <!--begin::Label-->
                    <label class="form-check-label text-gray-700 fw-bold text-nowrap" for="kt_builder_icon_font">
                        Font Icons                    </label>
                    <!--end::Label-->
                </div>
                <!--end::Check-->
                                            <!--begin::Check-->
                <div class="form-check form-check-custom form-check-success form-check-solid form-check-sm me-5" >
                    <input class="form-check-input" type="radio"  value="svg" id="kt_builder_icon_svg" name="layout-builder[layout][app][menu][icon]"/>

                    <!--begin::Label-->
                    <label class="form-check-label text-gray-700 fw-bold text-nowrap" for="kt_builder_icon_svg">
                        SVG Duotone                    </label>
                    <!--end::Label-->
                </div>
                <!--end::Check-->
                    </div>
        <!--end::Options-->
    </div>
    <!--end::Form group-->

    <!--begin::Separator-->
    <div class="separator separator-dashed my-5"></div>
    <!--end::Separator-->

    <!--begin::Form group-->
    <div class="form-group d-flex flex-stack">           
        <!--begin::Heading-->     
        <div class="d-flex flex-column">
            <h4 class="fw-bold text-dark">Sticky Header</h4>
            <div class="fs-7 fw-semibold text-muted">
                Enable sticky header

                <a href="../layout-builder.html" class="fw-semibold text-primary">More layout options</a>
            </div>	
        </div>
        <!--end::Heading-->

        <!--begin::Option-->
        <div class="d-flex justify-content-end">
            <!--begin::Check-->
            <div class="form-check form-check-solid form-check-custom form-check-success form-switch">
                <input type="hidden" value="false" name="layout-builder[layout][app][header][default][sticky][enabled]"/>
                <input class="form-check-input w-45px h-30px" type="checkbox" checked value="true" name="layout-builder[layout][app][header][default][sticky][enabled]" id="kt_builder_header_sticky"/>

                <!--begin::Label-->
                <label class="form-check-label" for="kt_builder_header_sticky"></label>
                <!--end::Label-->
            </div>
            <!--end::Check-->
        </div>
        <!--end::Option-->
    </div>
    <!--end::Form group-->
</div>
<!--end::Card body-->				</form>
				<!--end::Form-->
			</div>
			<!--end::Content-->
		</div>
		<!--end::Card body-->

		<!--begin::Card footer-->
<div class="card-footer border-0 d-flex gap-3 pb-9 pt-0" id="kt_app_layout_builder_footer">
    <button type="button" id="kt_app_layout_builder_preview" class="btn btn-primary flex-grow-1 fw-semibold">
        
<!--begin::Indicator label-->
<span class="indicator-label">
    Preview</span>
<!--end::Indicator label-->

<!--begin::Indicator progress-->
<span class="indicator-progress">
    Please wait...    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
</span>
<!--end::Indicator progress-->    </button>

    <button type="button" id="kt_app_layout_builder_reset"  class="btn btn-light flex-grow-1 fw-semibold">
        
<!--begin::Indicator label-->
<span class="indicator-label">
    Reset</span>
<!--end::Indicator label-->

<!--begin::Indicator progress-->
<span class="indicator-progress">
    Please wait...    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
</span>
<!--end::Indicator progress-->    </button>
</div>
<!--end::Card footer-->	</div>
	<!--end::Card-->
</div>
<!--end::App layout builder-->

<!--begin::App settings toggle-->
<button 
  	id="kt_app_layout_builder_toggle" 
    class="btn btn-dark app-layout-builder-toggle lh-1 py-4 " 
    title="Metronic Builder" 
    data-bs-custom-class="tooltip-inverse" 
    data-bs-toggle="tooltip" 
    data-bs-placement="left" 
    data-bs-dismiss="click" 
    data-bs-trigger="hover">

	  <i class="fonticon-equalizer fs-4 me-1"></i> Customize   
</button>
<!--end::App settings toggle-->

<!--begin::Drawers-->
<!--begin::Activities drawer-->
<div 
	id="kt_activities" 
	class="bg-body" 

	data-kt-drawer="true" 
	data-kt-drawer-name="activities" 
	data-kt-drawer-activate="true" 
	data-kt-drawer-overlay="true" 
	data-kt-drawer-width="{default:'300px', 'lg': '900px'}" 
	data-kt-drawer-direction="end" 
	data-kt-drawer-toggle="#kt_activities_toggle" 
	data-kt-drawer-close="#kt_activities_close">

	<div class="card shadow-none border-0 rounded-0">
		<!--begin::Header-->
		<div class="card-header" id="kt_activities_header">
			<h3 class="card-title fw-bold text-dark">Activity Logs</h3>

			<div class="card-toolbar">
				<button type="button" class="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
					<!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
<!--end::Svg Icon-->				</button>
			</div>
		</div>
		<!--end::Header-->

		<!--begin::Body-->
		<div class="card-body position-relative" id="kt_activities_body">
			<!--begin::Content-->
			<div id="kt_activities_scroll" 
				class="position-relative scroll-y me-n5 pe-5" 
				
				data-kt-scroll="true" 
				data-kt-scroll-height="auto" 
				data-kt-scroll-wrappers="#kt_activities_body" 
				data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" 
				data-kt-scroll-offset="5px">

				<!--begin::Timeline items-->
				<div class="timeline">				
					<!--begin::Timeline item-->
<div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
        <div class="symbol-label bg-light">
            <!--begin::Svg Icon | path: icons/duotune/communication/com003.svg-->
<span class="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor"/>
<path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->        </div>
    </div>
    <!--end::Timeline icon-->

    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n1">
        <!--begin::Timeline heading-->
        <div class="pe-3 mb-5">
            <!--begin::Title-->
            <div class="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="d-flex align-items-center mt-1 fs-6">
                <!--begin::Info-->
                <div class="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                <!--end::Info-->

                <!--begin::User-->
                <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                    <img src="../assets/media/avatars/300-14.jpg" alt="img"/>
                </div>  
                <!--end::User--> 
            </div>
            <!--end::Description-->
        </div>
        <!--end::Timeline heading-->

        <!--begin::Timeline details-->
        <div class="overflow-auto pb-5">
            <!--begin::Record-->
            <div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">  
                {/* <!--begin::Title-->                                    */}
                <a href="../apps/projects/project.html" class="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>                                  
                {/* <!--end::Title--> */}

                <!--begin::Label-->
                <div class="min-w-175px pe-2">
                    <span class="badge badge-light text-muted">Application Design</span>
                </div>
                <!--end::Label-->
                
                <!--begin::Users-->
                <div class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                    <!--begin::User-->
                    <div class="symbol symbol-circle symbol-25px">
                        <img src="../assets/media/avatars/300-2.jpg" alt="img"/>
                    </div>
                    <!--end::User-->

                    <!--begin::User-->
                    <div class="symbol symbol-circle symbol-25px">
                        <img src="../assets/media/avatars/300-14.jpg" alt="img"/>
                    </div>  
                    <!--end::User-->                                  

                    <!--begin::User-->
                    <div class="symbol symbol-circle symbol-25px">
                        <div class="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
                    </div>
                    <!--end::User-->
                </div>
                <!--end::Users-->                                     

                <!--begin::Progress-->
                <div class="min-w-125px pe-2">
                    <span class="badge badge-light-primary">In Progress</span>
                </div>
                <!--end::Progress-->
                                    
                <!--begin::Action-->
                <a href="../apps/projects/project.html" class="btn btn-sm btn-light btn-active-light-primary">View</a>    
                <!--end::Action-->                                
            </div>
            <!--end::Record-->

            <!--begin::Record-->
            <div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">  
                {/* <!--begin::Title-->                                    */}
                <a href="../apps/projects/project.html" class="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>                                  
                {/* <!--end::Title--> */}

                <!--begin::Label-->
                <div class="min-w-175px">
                    <span class="badge badge-light text-muted">CRM System Development</span>
                </div>
                <!--end::Label-->
                
                <!--begin::Users-->
                <div class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                    <!--begin::User-->
                    <div class="symbol symbol-circle symbol-25px">
                        <img src="../assets/media/avatars/300-20.jpg" alt="img"/>
                    </div>
                    <!--end::User-->                               

                    <!--begin::User-->
                    <div class="symbol symbol-circle symbol-25px">
                        <div class="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
                    </div>
                    <!--end::User-->
                </div>
                <!--end::Users-->                                     

                <!--begin::Progress-->
                <div class="min-w-125px">
                    <span class="badge badge-light-success">Completed</span>
                </div>
                <!--end::Progress-->
                                    
                <!--begin::Action-->
                <a href="../apps/projects/project.html" class="btn btn-sm btn-light btn-active-light-primary">View</a>    
                <!--end::Action-->                                
            </div>
            <!--end::Record-->
        </div>
        <!--end::Timeline details-->
    </div>
    <!--end::Timeline content-->    
</div>
<!--end::Timeline item-->
					<!--begin::Timeline item-->
<div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px">
        <div class="symbol-label bg-light">
            <!--begin::Svg Icon | path: icons/duotune/communication/com009.svg-->
<span class="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor"/>
<path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->        </div>
    </div>
    <!--end::Timeline icon-->       

    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n2">
        <!--begin::Timeline heading-->
        <div class="overflow-auto pe-3">
            <!--begin::Title-->
            <div class="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="d-flex align-items-center mt-1 fs-6">
                <!--begin::Info-->
                <div class="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                <!--end::Info-->

                <!--begin::User-->
                <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                    <img src="../assets/media/avatars/300-1.jpg" alt="img"/>
                </div>  
                <!--end::User--> 
            </div>
            <!--end::Description-->
        </div>
        <!--end::Timeline heading-->
    </div>
    <!--end::Timeline content--> 
</div>
<!--end::Timeline item-->
					<!--begin::Timeline item-->
<div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px">
        <div class="symbol-label bg-light">
            <!--begin::Svg Icon | path: icons/duotune/coding/cod008.svg-->
<span class="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor"/>
<path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->        </div>
    </div>
    <!--end::Timeline icon-->

    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n1">
        <!--begin::Timeline heading-->
        <div class="mb-5 pe-3">
            <!--begin::Title-->
            <a href="#" class="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="d-flex align-items-center mt-1 fs-6">
                <!--begin::Info-->
                <div class="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                <!--end::Info-->

                <!--begin::User-->
                <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                    <img src="../assets/media/avatars/300-23.jpg" alt="img"/>
                </div>  
                <!--end::User--> 
            </div>
            <!--end::Description-->
        </div>
        <!--end::Timeline heading-->

        <!--begin::Timeline details-->
        <div class="overflow-auto pb-5">
            <div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                {/* <!--begin::Item--> */}
                <div class="d-flex flex-aligns-center pe-10 pe-lg-20">  
                    <!--begin::Icon-->                                  
                    <img alt="" class="w-30px me-3" src="../assets/media/svg/files/pdf.svg"/>
                    <!--end::Icon--> 

                    <!--begin::Info--> 
                    <div class="ms-1 fw-semibold">
                        <!--begin::Desc--> 
                        <a href="../apps/projects/project.html" class="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                        <!--end::Desc--> 

                        <!--begin::Number--> 
                        <div class="text-gray-400">1.9mb</div>
                        <!--end::Number--> 
                    </div>
                    <!--begin::Info--> 
                </div>
                {/* <!--end::Item--> */}

                {/* <!--begin::Item--> */}
                <div class="d-flex flex-aligns-center pe-10 pe-lg-20">   
                    <!--begin::Icon-->                                  
                    <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" class="w-30px me-3" src="../assets/media/svg/files/doc.svg"/>
                    <!--end::Icon--> 

                    <!--begin::Info--> 
                    <div class="ms-1 fw-semibold">
                        <!--begin::Desc--> 
                        <a href="#" class="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                        <!--end::Desc--> 

                        <!--begin::Number--> 
                        <div class="text-gray-400">18kb</div>
                        <!--end::Number--> 
                    </div>
                    <!--end::Info--> 
                </div>
                {/* <!--end::Item--> */}

                {/* <!--begin::Item--> */}
                <div class="d-flex flex-aligns-center">   
                    <!--begin::Icon-->                                  
                    <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" class="w-30px me-3" src="../assets/media/svg/files/css.svg"/>
                    <!--end::Icon--> 

                    <!--begin::Info--> 
                    <div class="ms-1 fw-semibold">
                        <!--begin::Desc--> 
                        <a href="#" class="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                        <!--end::Desc--> 

                        <!--begin::Number--> 
                        <div class="text-gray-400">20mb</div>
                        <!--end::Number--> 
                    </div>
                    <!--end::Icon--> 
                </div>
                {/* <!--end::Item--> */}
            </div>
        </div>
        <!--end::Timeline details-->
    </div>
    <!--end::Timeline content-->    
</div>
<!--end::Timeline item-->
					<!--begin::Timeline item-->
<div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px">
        <div class="symbol-label bg-light">
            <!--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg-->
<span class="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor"/>
<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->        </div>
    </div>
    <!--end::Timeline icon-->

        <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n1">
        <!--begin::Timeline heading-->
        <div class="pe-3 mb-5">
            <!--begin::Title-->
            <div class="fs-5 fw-semibold mb-2">
                Task <a href="#" class="text-primary fw-bold me-1">#45890</a>  
                merged with <a href="#" class="text-primary fw-bold me-1">#45890</a>  in “Ads Pro Admin Dashboard project:
            </div>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="d-flex align-items-center mt-1 fs-6">
                <!--begin::Info-->
                <div class="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                <!--end::Info-->

                <!--begin::User-->
                <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                    <img src="../assets/media/avatars/300-14.jpg" alt="img"/>
                </div>  
                <!--end::User--> 
            </div>
            <!--end::Description-->
        </div>
        <!--end::Timeline heading-->
    </div>
    <!--end::Timeline content-->    
</div>
<!--end::Timeline item-->
					<!--begin::Timeline item-->
<div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px">
        <div class="symbol-label bg-light">
            <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
<span class="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"/>
<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->      */}
   </div>
    </div>
    {/* <!--end::Timeline icon--> */}

    {/* <!--begin::Timeline content--> */}
    <div class="timeline-content mb-10 mt-n1">
        {/* <!--begin::Timeline heading--> */}
        <div class="pe-3 mb-5">
            {/* <!--begin::Title--> */}
            <div class="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
            {/* <!--end::Title--> */}

            {/* <!--begin::Description--> */}
            <div class="d-flex align-items-center mt-1 fs-6">
                {/* <!--begin::Info--> */}
                <div class="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                {/* <!--end::Info--> */}

                {/* <!--begin::User--> */}
                <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                    <img src="../assets/media/avatars/300-2.jpg" alt="img"/>
                </div>  
                {/* <!--end::User-->  */}
            </div>
            {/* <!--end::Description--> */}
        </div>
        {/* <!--end::Timeline heading--> */}

        {/* <!--begin::Timeline details--> */}
        <div class="overflow-auto pb-5">
            <div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                {/* <!--begin::Item--> */}
                <div class="overlay me-10">  
                    {/* <!--begin::Image-->                                       */}
                    <div class="overlay-wrapper">
                        <img alt="img" class="rounded w-150px" src="../assets/media/stock/600x400/img-29.jpg"/>  
                    </div>
                    {/* <!--end::Image--> */}

                    {/* <!--begin::Link--> */}
                    <div class="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                    </div>   
                    {/* <!--end::Link-->                                      */}
                </div>
                {/* <!--end::Item--> */}

                {/* <!--begin::Item--> */}
                <div class="overlay me-10">   
                    {/* <!--begin::Image-->                                      */}
                    <div class="overlay-wrapper">
                        <img alt="img" class="rounded w-150px" src="../assets/media/stock/600x400/img-31.jpg"/> 
                    </div>
                    {/* <!--end::Image--> */}

                    {/* <!--begin::Link--> */}
                    <div class="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                    </div>        
                    {/* <!--end::Link-->                                 */}
                </div>
                {/* <!--end::Item-->                         */}
                
                {/* <!--begin::Item--> */}
                <div class="overlay">   
                    {/* <!--begin::Image-->                                      */}
                    <div class="overlay-wrapper">
                        <img alt="img" class="rounded w-150px" src="../assets/media/stock/600x400/img-40.jpg"/>
                    </div>
                    {/* <!--end::Image--> */}

                    {/* <!--begin::Link--> */}
                    <div class="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                    </div>   
                    {/* <!--end::Link-->                                      */}
                </div>
                {/* <!--end::Item--> */}
            </div>
        </div>
        {/* <!--end::Timeline details--> */}
    </div>
    {/* <!--end::Timeline content-->   */}
</div>
{/* <!--end::Timeline item-->					 */}
					{/* <!--begin::Timeline item--> */}
<div class="timeline-item">
    {/* <!--begin::Timeline line--> */}
    <div class="timeline-line w-40px"></div>
    {/* <!--end::Timeline line--> */}

    {/* <!--begin::Timeline icon--> */}
    <div class="timeline-icon symbol symbol-circle symbol-40px">
        <div class="symbol-label bg-light">
            {/* <!--begin::Svg Icon | path: icons/duotune/communication/com010.svg--> */}
<span class="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor"/>
<path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->   */}
      </div>
    </div>
    {/* <!--end::Timeline icon--> */}

    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n1">
        <!--begin::Timeline heading-->
        <div class="pe-3 mb-5">
            <!--begin::Title-->
            <div class="fs-5 fw-semibold mb-2">
                New case <a href="#" class="text-primary fw-bold me-1">#67890</a> 
                is assigned to you in Multi-platform Database Design project
            </div>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="overflow-auto pb-5">
                <!--begin::Wrapper-->
                <div class="d-flex align-items-center mt-1 fs-6">
                    <!--begin::Info-->
                    <div class="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                    <!--end::Info-->

                    <!--begin::User-->
                    <a href="#" class="text-primary fw-bold me-1">Alice Tan</a>
                    <!--end::User--> 
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Description-->
        </div>
        <!--end::Timeline heading-->
    </div>
    <!--end::Timeline content-->           
</div>
<!--end::Timeline item-->
					<!--begin::Timeline item-->
<div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px">
        <div class="symbol-label bg-light">
            <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
<span class="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"/>
<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->        </div>
    </div>
    <!--end::Timeline icon-->

    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n1">
        <!--begin::Timeline heading-->
        <div class="pe-3 mb-5">
            <!--begin::Title-->
            <div class="fs-5 fw-semibold mb-2">You have received a new order:</div>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="d-flex align-items-center mt-1 fs-6">
                <!--begin::Info-->
                <div class="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
                <!--end::Info-->

                <!--begin::User-->
                <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
                    <img src="../assets/media/avatars/300-4.jpg" alt="img"/>
                </div>  
                <!--end::User--> 
            </div>
            <!--end::Description-->
        </div>
        <!--end::Timeline heading-->

        <!--begin::Timeline details-->
        <div class="overflow-auto pb-5">
            
<!--begin::Notice-->
<div class="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
            <!--begin::Icon-->
        <!--begin::Svg Icon | path: icons/duotune/coding/cod004.svg-->
<span class="svg-icon svg-icon-2tx svg-icon-primary me-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z" fill="currentColor"/>
<path d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->        <!--end::Icon-->
    
    <!--begin::Wrapper-->
    <div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                    <!--begin::Content-->
            <div class="mb-3 mb-md-0 fw-semibold">
                                    <h4 class="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
                
                                    <div class="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
                            </div>
            <!--end::Content-->
        
                    <!--begin::Action-->
            <a href="#" class="btn btn-primary px-6 align-self-center text-nowrap"  > 
                Proceed            </a>
            <!--end::Action-->
            </div>
    <!--end::Wrapper-->  
</div>
<!--end::Notice-->
                
        </div>
        <!--end::Timeline details-->
    </div>
    <!--end::Timeline content-->   
</div>
<!--end::Timeline item-->
					<!--begin::Timeline item-->
<div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px">
        <div class="symbol-label bg-light">
            <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg-->
<span class="svg-icon svg-icon-2 svg-icon-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor"/>
<path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor"/>
<path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->        </div>
    </div>
    <!--end::Timeline icon-->

    <!--begin::Timeline content-->
    <div class="timeline-content mt-n1">
        <!--begin::Timeline heading-->
        <div class="pe-3 mb-5">
            <!--begin::Title-->
            <div class="fs-5 fw-semibold mb-2">
                New order <a href="#" class="text-primary fw-bold me-1">#67890</a> 
                is placed for Workshow Planning & Budget Estimation
            </div>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="d-flex align-items-center mt-1 fs-6">
                <!--begin::Info-->
                <div class="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                <!--end::Info-->

                <!--begin::User-->
                <a href="#" class="text-primary fw-bold me-1">Jimmy Bold</a>
                <!--end::User--> 
            </div>
            <!--end::Description-->
        </div>
        <!--end::Timeline heading-->
    </div>
    <!--end::Timeline content--> 
</div>
<!--end::Timeline item--> 				</div>
				<!--end::Timeline items-->				 
			</div>
			<!--end::Content-->
		</div>
		<!--end::Body-->

		<!--begin::Footer-->
		<div class="card-footer py-5 text-center" id="kt_activities_footer">
			<a href="../pages/user-profile/activity.html" class="btn btn-bg-body text-primary">
				View All Activities <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
<span class="svg-icon svg-icon-3 svg-icon-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"/>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->			</a>
		</div>
		<!--end::Footer-->
	</div>
</div>
<!--end::Activities drawer-->		

<!--begin::Chat drawer-->
<div 
    id="kt_drawer_chat"

    class="bg-body"
    data-kt-drawer="true" 
	data-kt-drawer-name="chat" 
	data-kt-drawer-activate="true" 
	data-kt-drawer-overlay="true" 
	data-kt-drawer-width="{default:'300px', 'md': '500px'}" 
	data-kt-drawer-direction="end" 
	data-kt-drawer-toggle="#kt_drawer_chat_toggle" 
	data-kt-drawer-close="#kt_drawer_chat_close">

    <!--begin::Messenger-->
    <div class="card w-100 rounded-0 border-0" id="kt_drawer_chat_messenger">
        <!--begin::Card header-->
        <div class="card-header pe-5" id="kt_drawer_chat_messenger_header">
            <!--begin::Title-->
            <div class="card-title">
                <!--begin::User-->
                <div class="d-flex justify-content-center flex-column me-3">
                    <a href="#" class="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>

                    <!--begin::Info-->
                    <div class="mb-0 lh-1">
                        <span class="badge badge-success badge-circle w-10px h-10px me-1"></span>
                        <span class="fs-7 fw-semibold text-muted">Active</span>
                    </div>
                    <!--end::Info-->
                </div>
                <!--end::User-->
            </div>
            <!--end::Title-->

            <!--begin::Card toolbar-->
            <div class="card-toolbar">
                <!--begin::Menu-->
                <div class="me-2">
                    <button class="btn btn-sm btn-icon btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <i class="bi bi-three-dots fs-3"></i>
                    </button>
                    
<!--begin::Menu 3-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
    <!--begin::Heading-->
    <div class="menu-item px-3">
        <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
            Contacts
        </div>
    </div>
    <!--end::Heading-->

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link px-3"  data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">
            Add Contact
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3">
        <a href="#" class="menu-link flex-stack px-3"  data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
            Invite Contacts

            <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation"></i>
        </a>
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
        <a href="#" class="menu-link px-3">
            <span class="menu-title">Groups</span>
            <span class="menu-arrow"></span>
        </a>

        {/* <!--begin::Menu sub--> */}
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">
                    Create Group
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item--> */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">
                    Invite Members
                </a>
            </div>
            {/* <!--end::Menu item--> */}

            {/* <!--begin::Menu item-->             */}
            <div class="menu-item px-3">
                <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">
                    Settings
                </a>
            </div>
            {/* <!--end::Menu item--> */}
        </div>
        <!--end::Menu sub-->
    </div>
    {/* <!--end::Menu item--> */}

    {/* <!--begin::Menu item--> */}
    <div class="menu-item px-3 my-1">
        <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">
            Settings
        </a>
    </div>
    {/* <!--end::Menu item--> */}
</div>
<!--end::Menu 3-->
                </div>
                <!--end::Menu-->

                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_chat_close">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
<!--end::Svg Icon-->                </div>
                <!--end::Close-->
            </div>
            <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body" id="kt_drawer_chat_messenger_body">
            <!--begin::Messages-->
            <div 
                class="scroll-y me-n5 pe-5"

                data-kt-element="messages"

                data-kt-scroll="true"     
                data-kt-scroll-activate="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
                data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"       
                data-kt-scroll-offset="0px">

                
    
    <!--begin::Message(in)-->
    <div class="d-flex justify-content-start mb-10 " >
        <!--begin::Wrapper-->
        <div class="d-flex flex-column align-items-start">
            <!--begin::User-->
            <div class="d-flex align-items-center mb-2">
                                    {/* <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-25.jpg"/></div><!--end::Avatar--> */}
                    <!--begin::Details-->
                    <div class="ms-3">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                        <span class="text-muted fs-7 mb-1">2 mins</span>
                    </div>
                    <!--end::Details-->
                 
            </div>
            <!--end::User-->

            <!--begin::Text-->
            <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                How likely are you to recommend our company to your friends and family ?            </div>
            <!--end::Text-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Message(in)-->
    
    <!--begin::Message(out)-->
    <div class="d-flex justify-content-end mb-10 " >
        <!--begin::Wrapper-->
        <div class="d-flex flex-column align-items-end">
            <!--begin::User-->
            <div class="d-flex align-items-center mb-2">
                                    {/* <!--begin::Details--> */}
                    <div class="me-3">
                        <span class="text-muted fs-7 mb-1">5 mins</span>
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>  
                    </div>
                    <!--end::Details-->

                    <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-1.jpg"/></div><!--end::Avatar-->                 
            </div>
            <!--end::User-->

            <!--begin::Text-->
            <div class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.            </div>
            <!--end::Text-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Message(out)-->
    
    <!--begin::Message(in)-->
    <div class="d-flex justify-content-start mb-10 " >
        <!--begin::Wrapper-->
        <div class="d-flex flex-column align-items-start">
            <!--begin::User-->
            <div class="d-flex align-items-center mb-2">
                                    {/* <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-25.jpg"/></div><!--end::Avatar--> */}
                    <!--begin::Details-->
                    <div class="ms-3">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                        <span class="text-muted fs-7 mb-1">1 Hour</span>
                    </div>
                    <!--end::Details-->
                 
            </div>
            <!--end::User-->

            <!--begin::Text-->
            <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                Ok, Understood!            </div>
            <!--end::Text-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Message(in)-->
    
    <!--begin::Message(out)-->
    <div class="d-flex justify-content-end mb-10 " >
        <!--begin::Wrapper-->
        <div class="d-flex flex-column align-items-end">
            <!--begin::User-->
            <div class="d-flex align-items-center mb-2">
                                    {/* <!--begin::Details--> */}
                    <div class="me-3">
                        <span class="text-muted fs-7 mb-1">2 Hours</span>
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>  
                    </div>
                    <!--end::Details-->

                    <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-1.jpg"/></div><!--end::Avatar-->                 
            </div>
            <!--end::User-->

            <!--begin::Text-->
            <div class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                You’ll receive notifications for all issues, pull requests!            </div>
            <!--end::Text-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Message(out)-->
    
    <!--begin::Message(in)-->
    <div class="d-flex justify-content-start mb-10 " >
        <!--begin::Wrapper-->
        <div class="d-flex flex-column align-items-start">
            <!--begin::User-->
            <div class="d-flex align-items-center mb-2">
                                    {/* <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-25.jpg"/></div><!--end::Avatar--> */}
                    <!--begin::Details-->
                    <div class="ms-3">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                        <span class="text-muted fs-7 mb-1">3 Hours</span>
                    </div>
                    <!--end::Details-->
                 
            </div>
            <!--end::User-->

            <!--begin::Text-->
            <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                You can unwatch this repository immediately by clicking here: <a href="https://keenthemes.com/">Keenthemes.com</a>            </div>
            <!--end::Text-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Message(in)-->
    
    <!--begin::Message(out)-->
    <div class="d-flex justify-content-end mb-10 " >
        <!--begin::Wrapper-->
        <div class="d-flex flex-column align-items-end">
            <!--begin::User-->
            <div class="d-flex align-items-center mb-2">
                                    {/* <!--begin::Details--> */}
                    <div class="me-3">
                        <span class="text-muted fs-7 mb-1">4 Hours</span>
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>  
                    </div>
                    <!--end::Details-->

                    <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-1.jpg"/></div><!--end::Avatar-->                 
            </div>
            <!--end::User-->

            <!--begin::Text-->
            <div class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                Most purchased Business courses during this sale!            </div>
            <!--end::Text-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Message(out)-->
    
    <!--begin::Message(in)-->
    <div class="d-flex justify-content-start mb-10 " >
        <!--begin::Wrapper-->
        <div class="d-flex flex-column align-items-start">
            <!--begin::User-->
            <div class="d-flex align-items-center mb-2">
                                    {/* <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-25.jpg"/></div><!--end::Avatar--> */}
                    <!--begin::Details-->
                    <div class="ms-3">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                        <span class="text-muted fs-7 mb-1">5 Hours</span>
                    </div>
                    <!--end::Details-->
                 
            </div>
            <!--end::User-->

            <!--begin::Text-->
            <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided            </div>
            <!--end::Text-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Message(in)-->
    
    <!--begin::Message(template for out)-->
    <div class="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
        <!--begin::Wrapper-->
        <div class="d-flex flex-column align-items-end">
            <!--begin::User-->
            <div class="d-flex align-items-center mb-2">
                                    {/* <!--begin::Details--> */}
                    <div class="me-3">
                        <span class="text-muted fs-7 mb-1">Just now</span>
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>  
                    </div>
                    <!--end::Details-->

                    <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-1.jpg"/></div><!--end::Avatar-->                 
            </div>
            <!--end::User-->

            <!--begin::Text-->
            <div class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                            </div>
            <!--end::Text-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Message(template for out)-->
    
    <!--begin::Message(template for in)-->
    <div class="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
        <!--begin::Wrapper-->
        <div class="d-flex flex-column align-items-start">
            <!--begin::User-->
            <div class="d-flex align-items-center mb-2">
                                    {/* <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-25.jpg"/></div><!--end::Avatar--> */}
                    <!--begin::Details-->
                    <div class="ms-3">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                        <span class="text-muted fs-7 mb-1">Just now</span>
                    </div>
                    <!--end::Details-->
                 
            </div>
            <!--end::User-->

            <!--begin::Text-->
            <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                Right before vacation season we have the next Big Deal for you.            </div>
            <!--end::Text-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Message(template for in)-->
            </div>
            <!--end::Messages-->
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
        <div class="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
            <!--begin::Input-->
            <textarea class="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message">
                
            </textarea>
            <!--end::Input-->

            <!--begin:Toolbar-->
            <div class="d-flex flex-stack">
                <!--begin::Actions-->
                <div class="d-flex align-items-center me-2">
                    <button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon"><i class="bi bi-paperclip fs-3"></i></button>
                    <button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon"><i class="bi bi-upload fs-3"></i></button>
                </div>
                <!--end::Actions-->

                <!--begin::Send-->
                <button class="btn btn-primary" type="button" data-kt-element="send">Send</button>
                <!--end::Send-->
            </div>
            <!--end::Toolbar-->
        </div>
        <!--end::Card footer-->
    </div>
    <!--end::Messenger-->
</div>
<!--end::Chat drawer--> 

<!--begin::Chat drawer-->
<div 
    id="kt_shopping_cart"

    class="bg-body"
    data-kt-drawer="true" 
	data-kt-drawer-name="cart" 
	data-kt-drawer-activate="true" 
	data-kt-drawer-overlay="true" 
	data-kt-drawer-width="{default:'300px', 'md': '500px'}" 
	data-kt-drawer-direction="end" 
	data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle" 
	data-kt-drawer-close="#kt_drawer_shopping_cart_close">

    <!--begin::Messenger-->
    <div class="card card-flush w-100 rounded-0">
        <!--begin::Card header-->
        <div class="card-header">
            <!--begin::Title-->
            <h3 class="card-title text-gray-900 fw-bold">Shopping Cart</h3>
            <!--end::Title-->

            <!--begin::Card toolbar-->
            <div class="card-toolbar">
                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_shopping_cart_close">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
<!--end::Svg Icon-->                </div>
                <!--end::Close-->
            </div>
            <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body hover-scroll-overlay-y h-400px pt-5">
                            
                {/* <!--begin::Item--> */}
                <div class="d-flex flex-stack">                 
                    <!--begin::Wrapper-->                                  
                    <div class="d-flex flex-column me-3">
                        <!--begin::Section-->                                  
                        <div class="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" class="text-gray-800 text-hover-primary fs-4 fw-bold">Iblender</a>
                            
                            <span class="text-gray-400 fw-semibold d-block">The best kitchen gadget in 2022</span>
                        </div>                   
                        <!--end::Section-->                    
                             
                        <!--begin::Section-->      
                        <div class="d-flex align-items-center">
                            <span class="fw-bold text-gray-800 fs-5">$ 350</span>
                            <span class="text-muted mx-2">for</span>
                            <span class="fw-bold text-gray-800 fs-5 me-3">5</span>

                            <a href="#" class="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr090.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}

                            <a href="#" class="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}
                        </div>                          
                        <!--end::Wrapper--> 
                    </div>                   
                    <!--end::Wrapper-->                    

                    <!--begin::Pic--> 
                    <div class="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="../assets/media/stock/600x400/img-1.jpg" alt=""/>   
                    </div>                                       
                    <!--end::Pic-->            
                </div>
                {/* <!--end::Item--> */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-6"></div>
                    {/* <!--end::Separator--> */}
                 
                            
                {/* <!--begin::Item--> */}
                <div class="d-flex flex-stack">                 
                    <!--begin::Wrapper-->                                  
                    <div class="d-flex flex-column me-3">
                        <!--begin::Section-->                                  
                        <div class="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" class="text-gray-800 text-hover-primary fs-4 fw-bold">SmartCleaner</a>
                            
                            <span class="text-gray-400 fw-semibold d-block">Smart tool for cooking</span>
                        </div>                   
                        <!--end::Section-->                    
                             
                        <!--begin::Section-->      
                        <div class="d-flex align-items-center">
                            <span class="fw-bold text-gray-800 fs-5">$ 650</span>
                            <span class="text-muted mx-2">for</span>
                            <span class="fw-bold text-gray-800 fs-5 me-3">4</span>

                            <a href="#" class="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr090.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}

                            <a href="#" class="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}
                        </div>                          
                        <!--end::Wrapper--> 
                    </div>                   
                    <!--end::Wrapper-->                    

                    <!--begin::Pic--> 
                    <div class="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="../assets/media/stock/600x400/img-3.jpg" alt=""/>   
                    </div>                                       
                    <!--end::Pic-->            
                </div>
                {/* <!--end::Item--> */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-6"></div>
                    {/* <!--end::Separator--> */}
                 
                            
                {/* <!--begin::Item--> */}
                <div class="d-flex flex-stack">                 
                    <!--begin::Wrapper-->                                  
                    <div class="d-flex flex-column me-3">
                        <!--begin::Section-->                                  
                        <div class="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" class="text-gray-800 text-hover-primary fs-4 fw-bold">CameraMaxr</a>
                            
                            <span class="text-gray-400 fw-semibold d-block">Professional camera for edge</span>
                        </div>                   
                        <!--end::Section-->                    
                             
                        <!--begin::Section-->      
                        <div class="d-flex align-items-center">
                            <span class="fw-bold text-gray-800 fs-5">$ 150</span>
                            <span class="text-muted mx-2">for</span>
                            <span class="fw-bold text-gray-800 fs-5 me-3">3</span>

                            <a href="#" class="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr090.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}

                            <a href="#" class="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}
                        </div>                          
                        <!--end::Wrapper--> 
                    </div>                   
                    <!--end::Wrapper-->                    

                    <!--begin::Pic--> 
                    <div class="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="../assets/media/stock/600x400/img-8.jpg" alt=""/>   
                    </div>                                       
                    <!--end::Pic-->            
                </div>
                {/* <!--end::Item--> */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-6"></div>
                    {/* <!--end::Separator--> */}
                 
                            
                {/* <!--begin::Item--> */}
                <div class="d-flex flex-stack">                 
                    <!--begin::Wrapper-->                                  
                    <div class="d-flex flex-column me-3">
                        <!--begin::Section-->                                  
                        <div class="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" class="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
                            
                            <span class="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
                        </div>                   
                        <!--end::Section-->                    
                             
                        <!--begin::Section-->      
                        <div class="d-flex align-items-center">
                            <span class="fw-bold text-gray-800 fs-5">$ 1450</span>
                            <span class="text-muted mx-2">for</span>
                            <span class="fw-bold text-gray-800 fs-5 me-3">7</span>

                            <a href="#" class="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr090.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}

                            <a href="#" class="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}
                        </div>                          
                        <!--end::Wrapper--> 
                    </div>                   
                    <!--end::Wrapper-->                    

                    <!--begin::Pic--> 
                    <div class="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="../assets/media/stock/600x400/img-26.jpg" alt=""/>   
                    </div>                                       
                    <!--end::Pic-->            
                </div>
                {/* <!--end::Item--> */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-6"></div>
                    {/* <!--end::Separator--> */}
                 
                            
                {/* <!--begin::Item--> */}
                <div class="d-flex flex-stack">                 
                    <!--begin::Wrapper-->                                  
                    <div class="d-flex flex-column me-3">
                        <!--begin::Section-->                                  
                        <div class="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" class="text-gray-800 text-hover-primary fs-4 fw-bold">MotionWire</a>
                            
                            <span class="text-gray-400 fw-semibold d-block">Perfect animation tool</span>
                        </div>                   
                        <!--end::Section-->                    
                             
                        <!--begin::Section-->      
                        <div class="d-flex align-items-center">
                            <span class="fw-bold text-gray-800 fs-5">$ 650</span>
                            <span class="text-muted mx-2">for</span>
                            <span class="fw-bold text-gray-800 fs-5 me-3">7</span>

                            <a href="#" class="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr090.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}

                            <a href="#" class="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}
                        </div>                          
                        <!--end::Wrapper--> 
                    </div>                   
                    <!--end::Wrapper-->                    

                    <!--begin::Pic--> 
                    <div class="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="../assets/media/stock/600x400/img-21.jpg" alt=""/>   
                    </div>                                       
                    <!--end::Pic-->            
                </div>
                {/* <!--end::Item--> */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-6"></div>
                    {/* <!--end::Separator--> */}
                 
                            
                {/* <!--begin::Item--> */}
                <div class="d-flex flex-stack">                 
                    <!--begin::Wrapper-->                                  
                    <div class="d-flex flex-column me-3">
                        <!--begin::Section-->                                  
                        <div class="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" class="text-gray-800 text-hover-primary fs-4 fw-bold">Samsung</a>
                            
                            <span class="text-gray-400 fw-semibold d-block">Profile info,Timeline etc</span>
                        </div>                   
                        <!--end::Section-->                    
                             
                        <!--begin::Section-->      
                        <div class="d-flex align-items-center">
                            <span class="fw-bold text-gray-800 fs-5">$ 720</span>
                            <span class="text-muted mx-2">for</span>
                            <span class="fw-bold text-gray-800 fs-5 me-3">6</span>

                            <a href="#" class="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr090.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}

                            <a href="#" class="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}
                        </div>                          
                        <!--end::Wrapper--> 
                    </div>                   
                    <!--end::Wrapper-->                    

                    <!--begin::Pic--> 
                    <div class="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="../assets/media/stock/600x400/img-34.jpg" alt=""/>   
                    </div>                                       
                    <!--end::Pic-->            
                </div>
                {/* <!--end::Item--> */}

                                    {/* <!--begin::Separator--> */}
                    <div class="separator separator-dashed my-6"></div>
                    {/* <!--end::Separator--> */}
                 
                            
                {/* <!--begin::Item--> */}
                <div class="d-flex flex-stack">                 
                    <!--begin::Wrapper-->                                  
                    <div class="d-flex flex-column me-3">
                        <!--begin::Section-->                                  
                        <div class="mb-3">
                            <a href="../apps/ecommerce/sales/details.html" class="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
                            
                            <span class="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
                        </div>                   
                        <!--end::Section-->                    
                             
                        <!--begin::Section-->      
                        <div class="d-flex align-items-center">
                            <span class="fw-bold text-gray-800 fs-5">$ 430</span>
                            <span class="text-muted mx-2">for</span>
                            <span class="fw-bold text-gray-800 fs-5 me-3">8</span>

                            <a href="#" class="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr090.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}

                            <a href="#" class="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
<span class="svg-icon svg-icon-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"/>
<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"/>
</svg></span>
{/* <!--end::Svg Icon-->                            </a> */}
                        </div>                          
                        <!--end::Wrapper--> 
                    </div>                   
                    <!--end::Wrapper-->                    

                    <!--begin::Pic--> 
                    <div class="symbol symbol-70px symbol-2by3 flex-shrink-0">
                        <img src="../assets/media/stock/600x400/img-27.jpg" alt=""/>   
                    </div>                                       
                    <!--end::Pic-->            
                </div>
                {/* <!--end::Item--> */}

                 
              
        </div>
        <!--end::Card body--> 

        <!--begin::Card footer-->
        <div class="card-footer">
            <!--begin::Item-->      
            <div class="d-flex flex-stack">
                <span class="fw-bold text-gray-600">Total</span>
                <span class="text-gray-800 fw-bolder fs-5">$ 1840.00</span>                
            </div>                          
            <!--end::Item--> 

            <!--begin::Item-->      
            <div class="d-flex flex-stack">
                <span class="fw-bold text-gray-600">Sub total</span>
                <span class="text-primary fw-bolder fs-5">$ 246.35</span>                
            </div>                          
            <!--end::Item--> 

            <!--end::Action-->
            <div class="d-flex justify-content-end mt-9">
                <a href="#" class="btn btn-primary d-flex justify-content-end">Pleace Order</a>
            </div>
            <!--end::Action-->
        </div>
        <!--end::Card footer--> 
    </div>
    <!--end::Messenger-->
</div>
<!--end::Chat drawer--> 
<!--end::Drawers-->
		<!--begin::Engage-->
		<div class="app-engage " id="kt_app_engage">  
							<!--begin::Prebuilts toggle-->
				<a href="#" data-bs-toggle="modal" data-bs-target="#kt_app_engage_prebuilts_modal" class="app-engage-btn hover-dark">			
					<!--begin::Svg Icon | path: icons/duotune/abstract/abs042.svg-->
<span class="svg-icon svg-icon-1 pt-1 mb-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor"/>
<path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->					Prebuilts
				</a>
				<!--end::Prebuilts toggle-->
			
			
							<!--begin::Get help-->
				<a href="https://devs.keenthemes.com/" target="_blank" class="app-engage-btn hover-primary">			
					<!--begin::Svg Icon | path: icons/duotune/general/gen063.svg-->
<span class="svg-icon svg-icon-1 pt-1 mb-2"><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.1721 9.90759L19.6663 8.3801C19.5613 8.27722 19.4783 8.15406 19.4225 8.0181C19.3666 7.88214 19.339 7.73623 19.3413 7.58926V5.4226C19.3399 5.12576 19.2798 4.83214 19.1646 4.55858C19.0494 4.28503 18.8812 4.03693 18.6698 3.82856C18.4584 3.62018 18.2079 3.45562 17.9327 3.34434C17.6576 3.23305 17.3631 3.17724 17.0663 3.1801H14.8996C14.7526 3.18241 14.6067 3.15479 14.4708 3.09892C14.3348 3.04304 14.2116 2.96009 14.1088 2.8551L12.5921 1.3276C12.1696 0.905532 11.5968 0.668457 10.9996 0.668457C10.4024 0.668457 9.82962 0.905532 9.40711 1.3276L7.87961 2.83343C7.77673 2.93842 7.65357 3.02138 7.51761 3.07725C7.38165 3.13312 7.23575 3.16074 7.08877 3.15843H4.92211C4.62528 3.15984 4.33165 3.21989 4.05809 3.33512C3.78454 3.45035 3.53645 3.6185 3.32807 3.82989C3.11969 4.04129 2.95513 4.29178 2.84385 4.56696C2.73257 4.84215 2.67675 5.13661 2.67961 5.43343V7.6001C2.68192 7.74707 2.6543 7.89297 2.59843 8.02893C2.54255 8.16489 2.4596 8.28805 2.35461 8.39093L0.827108 9.90759C0.405044 10.3301 0.167969 10.9029 0.167969 11.5001C0.167969 12.0973 0.405044 12.6701 0.827108 13.0926L2.33294 14.6201C2.43793 14.723 2.52089 14.8461 2.57676 14.9821C2.63263 15.118 2.66025 15.264 2.65794 15.4109V17.5776C2.65935 17.8744 2.7194 18.1681 2.83463 18.4416C2.94986 18.7152 3.11801 18.9633 3.32941 19.1716C3.5408 19.38 3.79129 19.5446 4.06647 19.6559C4.34166 19.7671 4.63612 19.823 4.93294 19.8201H7.09961C7.24658 19.8178 7.39249 19.8454 7.52844 19.9013C7.6644 19.9571 7.78757 20.0401 7.89044 20.1451L9.41794 21.6726C9.84045 22.0947 10.4132 22.3317 11.0104 22.3317C11.6076 22.3317 12.1804 22.0947 12.6029 21.6726L14.1196 20.1668C14.2225 20.0618 14.3456 19.9788 14.4816 19.9229C14.6176 19.8671 14.7635 19.8394 14.9104 19.8418H17.0771C17.6747 19.8418 18.2479 19.6044 18.6705 19.1818C19.093 18.7592 19.3304 18.1861 19.3304 17.5884V15.4218C19.3281 15.2748 19.3557 15.1289 19.4116 14.9929C19.4675 14.857 19.5504 14.7338 19.6554 14.6309L21.1829 13.1034C21.3928 12.8933 21.5591 12.6438 21.6723 12.3691C21.7854 12.0945 21.8431 11.8003 21.8421 11.5033C21.8411 11.2063 21.7814 10.9124 21.6664 10.6385C21.5514 10.3647 21.3834 10.1163 21.1721 9.90759Z" fill="currentColor" fill-opacity="0.8"/>
<path d="M7.90276 8.65088H6.81943C6.36471 8.65088 5.99609 9.0195 5.99609 9.47421V15.0317C5.99609 15.4864 6.36471 15.855 6.81943 15.855H7.90276C8.35748 15.855 8.72609 15.4864 8.72609 15.0317V9.47421C8.72609 9.0195 8.35748 8.65088 7.90276 8.65088Z" fill="currentColor" fill-opacity="0.8"/>
<path d="M8.69141 10.1459L10.7714 7.00425C10.9133 6.7749 11.1313 6.60279 11.3873 6.51808C11.6433 6.43338 11.921 6.44147 12.1717 6.54096C12.4223 6.64044 12.63 6.82497 12.7582 7.0622C12.8864 7.29942 12.9271 7.57422 12.8731 7.83842L12.6022 9.38759C12.5864 9.47635 12.5902 9.56749 12.6134 9.65462C12.6366 9.74175 12.6785 9.82275 12.7364 9.89193C12.7942 9.96111 12.8665 10.0168 12.9481 10.055C13.0297 10.0933 13.1187 10.1132 13.2089 10.1134H15.3322C15.4753 10.116 15.6159 10.1516 15.7431 10.2174C15.8702 10.2831 15.9805 10.3772 16.0653 10.4925C16.1502 10.6078 16.2074 10.741 16.2324 10.8819C16.2575 11.0229 16.2497 11.1676 16.2097 11.3051L14.8664 15.6926C14.7942 15.9256 14.651 16.1303 14.4567 16.2779C14.2625 16.4256 14.0269 16.5088 13.7831 16.5159H11.1072C10.7461 16.5132 10.3944 16.3997 10.0997 16.1909L8.73474 15.1076L8.69141 10.1459Z" fill="currentColor" fill-opacity="0.8"/>
</svg>
</span>
<!--end::Svg Icon-->					Get Help
				</a>
				<!--end::Get help-->
			
							<!--begin::Prebuilts toggle-->
				<a href="https://1.envato.market/EA4JP" target="_blank" class="app-engage-btn hover-success">			
					<!--begin::Svg Icon | path: icons/duotune/general/gen064.svg-->
<span class="svg-icon svg-icon-2 pt-1 mb-2"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M19.5997 3.52344H2.39639C2.09618 3.53047 1.8003 3.59658 1.52565 3.718C1.25101 3.83941 1.00298 4.01375 0.79573 4.23106C0.588484 4.44837 0.426087 4.70438 0.317815 4.98447C0.209544 5.26456 0.157521 5.56324 0.164719 5.86344C0.157521 6.16364 0.209544 6.46232 0.317815 6.74241C0.426087 7.0225 0.588484 7.27851 0.79573 7.49581C1.00298 7.71312 1.25101 7.88746 1.52565 8.00888C1.8003 8.1303 2.09618 8.19641 2.39639 8.20344H19.5997C19.8999 8.19641 20.1958 8.1303 20.4704 8.00888C20.7451 7.88746 20.9931 7.71312 21.2004 7.49581C21.4076 7.27851 21.57 7.0225 21.6783 6.74241C21.7866 6.46232 21.8386 6.16364 21.8314 5.86344C21.8386 5.56324 21.7866 5.26456 21.6783 4.98447C21.57 4.70438 21.4076 4.44837 21.2004 4.23106C20.9931 4.01375 20.7451 3.83941 20.4704 3.718C20.1958 3.59658 19.8999 3.53047 19.5997 3.52344Z" fill="currentColor" fill-opacity="0.8"/>
<path d="M2.39453 8.20361L4.01953 18.3111C4.15644 19.145 4.58173 19.9043 5.22121 20.4567C5.8607 21.009 6.6738 21.3194 7.5187 21.3336H14.5712C15.4215 21.3202 16.2395 21.006 16.8801 20.4468C17.5207 19.8875 17.9424 19.1193 18.0704 18.2786L19.5979 8.20361H2.39453ZM9.28453 16.3178C9.28453 16.5333 9.19893 16.7399 9.04656 16.8923C8.89418 17.0447 8.68752 17.1303 8.47203 17.1303C8.25654 17.1303 8.04988 17.0447 7.89751 16.8923C7.74513 16.7399 7.65953 16.5333 7.65953 16.3178V12.4069C7.65953 12.1915 7.74513 11.9848 7.89751 11.8324C8.04988 11.68 8.25654 11.5944 8.47203 11.5944C8.68752 11.5944 8.89418 11.68 9.04656 11.8324C9.19893 11.9848 9.28453 12.1915 9.28453 12.4069V16.3178ZM14.322 16.3178C14.322 16.5333 14.2364 16.7399 14.0841 16.8923C13.9317 17.0447 13.725 17.1303 13.5095 17.1303C13.294 17.1303 13.0874 17.0447 12.935 16.8923C12.7826 16.7399 12.697 16.5333 12.697 16.3178V12.4069C12.697 12.1915 12.7826 11.9848 12.935 11.8324C13.0874 11.68 13.294 11.5944 13.5095 11.5944C13.725 11.5944 13.9317 11.68 14.0841 11.8324C14.2364 11.9848 14.322 12.1915 14.322 12.4069V16.3178Z" fill="currentColor" fill-opacity="0.8"/>
<path d="M17.3895 4.87755C17.2529 4.87776 17.1185 4.84303 16.999 4.77667C16.8796 4.71031 16.7791 4.61452 16.707 4.49839L14.5945 1.24839C14.488 1.07063 14.4544 0.858502 14.5009 0.656521C14.5473 0.45454 14.6702 0.2784 14.8437 0.165055C15.0215 0.0626479 15.2311 0.0303209 15.4315 0.0744071C15.6319 0.118493 15.8086 0.235816 15.927 0.403388L18.0395 3.70755C18.1434 3.88599 18.1755 4.09728 18.1292 4.2985C18.0829 4.49972 17.9618 4.67577 17.7904 4.79089C17.6659 4.85225 17.5282 4.88202 17.3895 4.87755Z" fill="currentColor" fill-opacity="0.8"/>
<path d="M4.49988 4.8885C4.34679 4.8928 4.19591 4.85131 4.06655 4.76933C3.89514 4.65422 3.77399 4.47817 3.72771 4.27694C3.68143 4.07572 3.71349 3.86443 3.81738 3.686L5.98405 0.435999C6.09739 0.262485 6.27353 0.13961 6.47551 0.0931545C6.6775 0.0466989 6.88962 0.0802727 7.06738 0.186832C7.23676 0.303623 7.35627 0.479597 7.40239 0.680101C7.4485 0.880606 7.41788 1.09111 7.31655 1.27017L5.20405 4.52017C5.12881 4.63747 5.0243 4.73313 4.90082 4.79773C4.77733 4.86232 4.63914 4.8936 4.49988 4.8885Z" fill="currentColor" fill-opacity="0.8"/>
</svg>
</span>
<!--end::Svg Icon-->					Buy Now
				</a>
				<!--end::Prebuilts toggle-->
			
							<!--begin::Engage close-->
				<a href="#" id="kt_app_engage_toggle_off" class="app-engage-btn app-engage-btn-toggle-off text-hover-primary p-0">			
					<!--begin::Svg Icon | path: icons/duotune/arrows/arr097.svg-->
<span class="svg-icon svg-icon-2x"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9.39844" y="20.7144" width="16" height="2.66667" rx="1.33333" transform="rotate(-45 9.39844 20.7144)" fill="currentColor"/>
<rect x="11.2852" y="9.40039" width="16" height="2.66667" rx="1.33333" transform="rotate(45 11.2852 9.40039)" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->				</a>
				<!--end::Engage close-->

				<!--begin::Engage close-->
				<a href="#" id="kt_app_engage_toggle_on" class="app-engage-btn app-engage-btn-toggle-on text-hover-primary p-0" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-custom-class="tooltip-inverse" data-bs-dimiss="click" title="Explore Metronic">		
					<!--begin::Svg Icon | path: icons/duotune/general/gen065.svg-->
<span class="svg-icon svg-icon-2 text-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M22.9558 10.2848L21.3341 8.6398C21.221 8.52901 21.1317 8.39637 21.0715 8.24996C21.0114 8.10354 20.9816 7.94641 20.9841 7.78814V5.4548C20.9826 5.13514 20.9179 4.81893 20.7938 4.52433C20.6697 4.22973 20.4887 3.96255 20.261 3.73814C20.0333 3.51374 19.7636 3.33652 19.4672 3.21668C19.1709 3.09684 18.8538 3.03673 18.5341 3.0398H16.2008C16.0425 3.04229 15.8854 3.01255 15.739 2.95238C15.5925 2.89221 15.4599 2.80287 15.3491 2.6898L13.7158 1.0448C13.2608 0.590273 12.6439 0.334961 12.0008 0.334961C11.3576 0.334961 10.7408 0.590273 10.2858 1.0448L8.64078 2.66647C8.52999 2.77954 8.39735 2.86887 8.25094 2.92904C8.10452 2.98922 7.94739 3.01896 7.78911 3.01647H5.45578C5.13612 3.01799 4.8199 3.08266 4.5253 3.20675C4.23071 3.33085 3.96353 3.51193 3.73912 3.73959C3.51471 3.96724 3.3375 4.237 3.21766 4.53335C3.09781 4.82971 3.0377 5.14682 3.04078 5.46647V7.7998C3.04327 7.95808 3.01353 8.11521 2.95335 8.26163C2.89318 8.40804 2.80385 8.54068 2.69078 8.65147L1.04578 10.2848C0.591249 10.7398 0.335938 11.3567 0.335938 11.9998C0.335938 12.6429 0.591249 13.2598 1.04578 13.7148L2.66745 15.3598C2.78051 15.4706 2.86985 15.6032 2.93002 15.7496C2.99019 15.8961 3.01994 16.0532 3.01745 16.2115V18.5448C3.01897 18.8645 3.08363 19.1807 3.20773 19.4753C3.33182 19.7699 3.5129 20.0371 3.74056 20.2615C3.96822 20.4859 4.23798 20.6631 4.53433 20.7829C4.83068 20.9028 5.14779 20.9629 5.46745 20.9598H7.80078C7.95906 20.9573 8.11619 20.9871 8.2626 21.0472C8.40902 21.1074 8.54166 21.1967 8.65245 21.3098L10.2974 22.9548C10.7525 23.4093 11.3693 23.6646 12.0124 23.6646C12.6556 23.6646 13.2724 23.4093 13.7274 22.9548L15.3608 21.3331C15.4716 21.2201 15.6042 21.1307 15.7506 21.0706C15.897 21.0104 16.0542 20.9806 16.2124 20.9831H18.5458C19.1894 20.9831 19.8066 20.7275 20.2617 20.2724C20.7168 19.8173 20.9724 19.2001 20.9724 18.5565V16.2231C20.97 16.0649 20.9997 15.9077 21.0599 15.7613C21.12 15.6149 21.2094 15.4823 21.3224 15.3715L22.9674 13.7265C23.1935 13.5002 23.3726 13.2314 23.4944 12.9357C23.6162 12.64 23.6784 12.3231 23.6773 12.0032C23.6762 11.6834 23.6119 11.3669 23.4881 11.072C23.3643 10.7771 23.1834 10.5095 22.9558 10.2848Z" fill="currentColor"/>
<path d="M12.0039 15.4998C11.7012 15.4998 11.4109 15.38 11.1969 15.1668C10.9829 14.9535 10.8626 14.6643 10.8626 14.3627V13.9382C10.8467 13.2884 10.9994 12.6456 11.306 12.0718C11.6126 11.4981 12.0627 11.013 12.6126 10.6634C12.7969 10.561 12.9505 10.4114 13.0575 10.2302C13.1645 10.049 13.221 9.84266 13.2213 9.63242C13.2213 9.31073 13.0931 9.00223 12.8648 8.77476C12.6365 8.5473 12.3268 8.41951 12.0039 8.41951C11.6811 8.41951 11.3714 8.5473 11.1431 8.77476C10.9148 9.00223 10.7865 9.31073 10.7865 9.63242C10.7865 9.93399 10.6663 10.2232 10.4523 10.4365C10.2382 10.6497 9.94792 10.7695 9.64522 10.7695C9.34253 10.7695 9.05223 10.6497 8.83819 10.4365C8.62415 10.2232 8.50391 9.93399 8.50391 9.63242C8.50763 9.02196 8.67214 8.42317 8.98099 7.89592C9.28984 7.36868 9.7322 6.93145 10.2639 6.62796C10.7955 6.32447 11.3978 6.16535 12.0105 6.16651C12.6233 6.16767 13.225 6.32908 13.7554 6.63458C14.2859 6.94009 14.7266 7.37899 15.0335 7.9074C15.3403 8.43582 15.5025 9.03522 15.5039 9.64569C15.5053 10.2562 15.3458 10.8563 15.0414 11.3861C14.7369 11.9159 14.2983 12.3568 13.7692 12.6647C13.5645 12.8132 13.4003 13.0101 13.2913 13.2378C13.1824 13.4655 13.1322 13.7167 13.1453 13.9685V14.3931C13.1373 14.6894 13.0136 14.9708 12.8004 15.1776C12.5872 15.3843 12.3014 15.4999 12.0039 15.4998Z" fill="currentColor"/>
<path d="M12.0026 18.9998C12.6469 18.9998 13.1693 18.4775 13.1693 17.8332C13.1693 17.1888 12.6469 16.6665 12.0026 16.6665C11.3583 16.6665 10.8359 17.1888 10.8359 17.8332C10.8359 18.4775 11.3583 18.9998 12.0026 18.9998Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->				</a>
				<!--end::Engage close-->
					</div>
		<!--end::Engage-->

		<!--begin::Engage modals-->
					<!--begin::Modal - Sitemap-->
<div class="modal fade bg-dark bg-opacity-75" id="kt_app_engage_prebuilts_modal" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-fullscreen p-5 p-lg-10" id="kt_engage_prebuilts_modal_dialog">
        <!--begin::Modal content-->
        <div class="modal-content rounded-4">
            <!--begin::Modal header-->
            <div class="modal-header flex-stack border-0 px-10 pt-5 pb-0" id="kt_engage_prebuilts_header">
                <!--begin::View menu-->
<div id="kt_app_engage_prebuilts_view_menu" class="position-relative z-index-1">
	<!--begin::Toggle-->
	<button type="button" data-kt-element="selected" class="btn btn-flex px-0 rotate-" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, -1px">
		<!--begin::Title-->
		<span class="fs-6 fw-bold text-gray-600 me-2" data-kt-element="title">
			Image View
		</span>
		<!--end::Title-->

		<!--begin::Arrow-->
		<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
<span class="svg-icon svg-icon-4 svg-icon-gray-600 rotate-180-"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->		<!--end::Arrow-->
	</button>
	<!--end::Toggle-->

	<!--begin::Menu-->
	<div class="menu menu-sub menu-sub-dropdown menu-column menu-active-bg menu-state-primary menu-gray-600 menu-rounded w-150px py-3 px-3" data-kt-menu="true">
		<!--begin::Menu item-->
		<div class="menu-item">
			<!--begin::Menu link-->
			<a href="#" class="menu-link px-4 py-2 active" data-kt-mode="image">
				Image View
			</a>
			<!--end::Menu link-->
		</div>
		<!--end::Menu item-->

		<!--begin::Menu item-->
		<div class="menu-item">
			<!--begin::Menu link-->
			<a href="#" class="menu-link px-4 py-2" data-kt-mode="text">
				Text View
			</a>
			<!--end::Menu link-->
		</div>
		<!--end::Menu item-->
	</div>
	<!--end::Menu-->
</div>
<!--end::View menu-->
                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-color-primary me-n2 position-relative z-index-1" data-bs-dismiss="modal">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen034.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor"/>
<rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                </div>
                <!--end::Close-->
            </div>
            <!--end::Modal header-->

            <!--begin::Modal body-->
            <div class="modal-body pt-0 pb-5 px-15 mt-n5" id="kt_app_engage_prebuilts_body">
                <div class="container-fluid">
                    
<style>
	.app-prebuilts-thumbnail {
		border: 1px solid var(--kt-body-bg);
		filter: drop-shadow(0px 0px 50px rgba(49, 52, 122, 0.12));
	}
</style>

<!--begin::Image view-->
<div class="d-block" id="kt_app_engage_prebuilts_view_image">
	<!--begin::Tabs wrapper-->
	<div class="d-flex flex-center" id="kt_app_engage_prebuilts_view_image_tabs">
		<!--begin::Tabs-->
		<ul class="nav nav-tabs border-0 mb-5">
							<!--begin::Tab item-->
				<li class="nav-item px-2">
					<!--begin::Tab link-->
					<a 
						class="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_demos">
						
						Layouts					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
							<!--begin::Tab item-->
				<li class="nav-item px-2">
					<!--begin::Tab link-->
					<a 
						class="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold 
						active" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_dashboards">
						
						Dashboards					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
							<!--begin::Tab item-->
				<li class="nav-item px-2">
					<!--begin::Tab link-->
					<a 
						class="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages">
						
						Pages					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
							<!--begin::Tab item-->
				<li class="nav-item px-2">
					<!--begin::Tab link-->
					<a 
						class="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_apps">
						
						Apps					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
					</ul>
		<!--end::Tabs-->
	</div>
	<!--end::Tabs wrapper-->

	<!--begin::Tab content-->
	<div class="tab-content">
								<div class="pt-5 tab-pane fade " id="kt_app_engage_prebuilts_tab_demos" role="tabpanel">
				<!--begin::Scroll wrapper-->
				<div 
					class="hover-scroll-y pe-12 me-n12" 
					data-kt-scroll="true" 
					data-kt-scroll-height="auto" 
					data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body" 
					data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_image_tabs" 
					data-kt-scroll-offset="215px">

					<!--begin::Row-->
					<div class="row gy-10"> 
													
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo1/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Metronic Original	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo1.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo2/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		SaaS App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo2.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo30/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Sales Tracking App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo30.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo39/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Billing SaaS	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo39.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo31/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Marketing Automation	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo31.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="../index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Databox Dashboard	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo27.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo6/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Time Reporting	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo6.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo3/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		New Trend	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo3.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo23/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Member Dashboard	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo23.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo38/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Email Marketing	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo38.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo36/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Digital Marketing	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo36.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo10/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Project Grid	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo10.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo35/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Traffic Analytics	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo35.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo8/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Analytics App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo8.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo25/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Guiding App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo25.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo20/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		CRM Software	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo20.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo7/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		CRM Dashboard	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo7.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo43/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Healthcare Dashboard	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo43.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo32/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Delivery Management	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo32.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo42/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Calendar Workspace	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo42.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo44/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Recruit Automation	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo44.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo33/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Social Campaings	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo33.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo37/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Cloud Suite	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo37.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo11/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Finance Planner	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo11.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo16/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Podcast App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo16.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo26/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Planable App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo26.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo22/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Media Publisher	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo22.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo19/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Reports Panel	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo19.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo40/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		HR App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo40.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo29/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Project Workspace	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo29.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo24/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Helpdesk App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo24.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo4/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Jobs Site	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo4.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo41/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Business Intelligence	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo41.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo18/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Goal Tracking	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo18.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo21/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Monochrome App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo21.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo34/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Finance Analytics	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo34.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo15/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Crypto Planner	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo15.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo14/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Project Workplace	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo14.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo9/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Sales Manager	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo9.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo5/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Support Forum	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo5.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo13/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Classic Dashboard	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo13.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo12/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Data Analyzer	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo12.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo48/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Cloud ERP	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo48.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo28/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		eCommerce App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo28.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo17/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Events Scheduler	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo17.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
		
<!--begin::Preview-->
<a 
	href="https://preview.keenthemes.com/metronic8/demo49/index.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		KPI Tracking	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/demos/demo49.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
					
						  					
					</div>
					<!--end::Row-->
				</div>
				<!--end::Scroll wrapper-->
			</div>
								<div class="pt-5 tab-pane fade show active" id="kt_app_engage_prebuilts_tab_dashboards" role="tabpanel">
				<!--begin::Scroll wrapper-->
				<div 
					class="hover-scroll-y pe-12 me-n12" 
					data-kt-scroll="true" 
					data-kt-scroll-height="auto" 
					data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body" 
					data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_image_tabs" 
					data-kt-scroll-offset="215px">

					<!--begin::Row-->
					<div class="row gy-10"> 
						  
							
		
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="marketing.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Marketing	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/marketing.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="social.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Social	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/social.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="ecommerce.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Ecommerce	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/ecommerce.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="store-analytics.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Store-analytics	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/store-analytics.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="logistics.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Logistics	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/logistics.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="delivery.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Delivery	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/delivery.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="online-courses.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Online-courses	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/online-courses.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="school.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		School	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/school.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="crypto.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Crypto	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/crypto.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="finance-performance.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Finance-performance	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/finance-performance.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="website-analytics.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Website-analytics	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/website-analytics.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="bidding.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Bidding	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/bidding.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="podcast.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Podcast	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/podcast.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="projects.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Projects	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/projects.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="call-center.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Call-center	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/call-center.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-md-4">
		
<!--begin::Preview-->
<a 
	href="pos.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		POS	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/dashboards/pos.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
						  					
					</div>
					<!--end::Row-->
				</div>
				<!--end::Scroll wrapper-->
			</div>
											<div class="pt-5 tab-pane fade " id="kt_app_engage_prebuilts_tab_apps" role="tabpanel">
				<!--begin::Scroll wrapper-->
				<div 
					class="hover-scroll-y pe-12 me-n12" 
					data-kt-scroll="true" 
					data-kt-scroll-height="auto" 
					data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body" 
					data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_image_tabs" 
					data-kt-scroll-offset="215px">

					<!--begin::Row-->
					<div class="row gy-10"> 
						  
								
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/projects/list/list.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Projects	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/projects.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/ecommerce/catalog/products/products.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Ecommerce	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/ecommerce.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/customers/list/list.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Customers	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/customers.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/subscriptions/list/list.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Subscriptions	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/subscriptions.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/user-management/users/list/list.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Management	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/user-management.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/invoices/create/main.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Invoices	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/invoices.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/support-center/overview/main.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Support Center	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/support-center.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/chat/private.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Chat	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/chat.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/calendar/calendar.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Calendar	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/calendar.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/file-manager/list/folders.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		File Manager	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/file-manager.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/inbox/listing/listing.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Inbox	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/inbox.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
	
	<!--begin::Col-->
	<div class="col-lg-4">
		
<!--begin::Preview-->
<a 
	href="../apps/contacts/getting-started.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Contacts	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/apps/contacts.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->	</div>
	<!--end::Col-->
						  					
					</div>
					<!--end::Row-->
				</div>
				<!--end::Scroll wrapper-->
			</div>
		
		<div class="tab-pane fade" id="kt_app_engage_prebuilts_tab_pages">
			
<!--begin::Tabs wrapper-->
<div class="d-flex flex-center mb-5">
	<div class="border-bottom">
		<!--begin::Tabs-->
		<ul class="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-6 fw-bold m-0 p-0 gap-4">
							<!--begin::Tab item-->
				<li class="nav-item p-0 m-0">
					<!--begin::Tab link-->
					<a 
						class="nav-link text-muted text-active-primary pt-0 pb-4 
						active" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_authentication">
						
						Authentication					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
							<!--begin::Tab item-->
				<li class="nav-item p-0 m-0">
					<!--begin::Tab link-->
					<a 
						class="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_general">
						
						General					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
							<!--begin::Tab item-->
				<li class="nav-item p-0 m-0">
					<!--begin::Tab link-->
					<a 
						class="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_account">
						
						Account					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
							<!--begin::Tab item-->
				<li class="nav-item p-0 m-0">
					<!--begin::Tab link-->
					<a 
						class="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_modals">
						
						Modals					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
							<!--begin::Tab item-->
				<li class="nav-item p-0 m-0">
					<!--begin::Tab link-->
					<a 
						class="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_wizards">
						
						Wizards					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
							<!--begin::Tab item-->
				<li class="nav-item p-0 m-0">
					<!--begin::Tab link-->
					<a 
						class="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_search">
						
						Search					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
							<!--begin::Tab item-->
				<li class="nav-item p-0 m-0">
					<!--begin::Tab link-->
					<a 
						class="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_widgets">
						
						Widgets					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
							<!--begin::Tab item-->
				<li class="nav-item p-0 m-0">
					<!--begin::Tab link-->
					<a 
						class="nav-link text-muted text-active-primary pt-0 pb-4 
						" 
						data-bs-toggle="tab" 
						href="#kt_app_engage_prebuilts_tab_pages_email-templates">
						
						Email Templates					</a>
					<!--end::Tab link-->
				</li>
				<!--end::Tab item-->
					</ul>
		<!--end::Tabs-->
	</div>
</div>
<!--end::Tabs wrapper-->

<!--begin::Scroll wrapper-->
<div 
	class="hover-scroll-y pe-12 me-n12" 
	data-kt-scroll="true" 
	data-kt-scroll-height="auto" 
	data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body, #kt_app_engage_prebuilts_view_image" 
	data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_text_heading" 
	data-kt-scroll-offset="250px">

	<!--begin::Tab content-->
	<div class="tab-content">
					<div class="tab-pane fade show active" id="kt_app_engage_prebuilts_tab_pages_authentication" role="tabpanel">

				
					<!--begin::Row-->
<div class="row g-10"> 
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/layouts/corporate/sign-in.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Corporate	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-corporate.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/layouts/creative/sign-in.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Creative	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-creative.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/layouts/fancy/sign-in.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Fancy	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-fancy.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/layouts/overlay/sign-in.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Overlay	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-overlay.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/extended/multi-steps-sign-up.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Multi-step	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-multistep.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/extended/two-factor-auth.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		2 Factor Auth	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-2factor.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/general/password-confirmation.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Password Changed	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-passwordchanged.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/general/verify-email.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Verify Email	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-verifyemail.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/general/welcome.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Welcome	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-welcome.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/general/coming-soon.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Coming Soon	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-comingsoon.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/general/account-deactivated.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Account Deactivated	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-accountdeactivated.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/general/error-404.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		404 Page	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-404.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/general/error-500.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		505 Page	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/auth-500.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
	</div>
<!--end::Row-->					
				
			</div>
					<div class="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_general" role="tabpanel">

				
											<div class="mb-5">
							<!--begin::Collapse toggle-->
<a 
	class="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible active" 
	data-bs-toggle="collapse" 
	href="#kt_app_engage_prebuilts_tab_pages_general_user-profile">
	
	<span class="fw-bolder fs-2">
		User Profile	</span>

	<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
<span class="svg-icon toggle-off text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon--> 
	<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
<span class="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                         */}
</a>
<!--end::Collapse toggle-->

<!--begin::Collapse content-->
<div class="show" id="kt_app_engage_prebuilts_tab_pages_general_user-profile">
	<!--begin::Row-->
	<div class="row g-10 pt-2 pb-5">
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/user-profile/overview.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Profile Overview	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-overview.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/user-profile/projects.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Projects	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-overview.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/user-profile/campaigns.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Campaigns	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-campaigns.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/user-profile/documents.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Documents	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-documents.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/user-profile/followers.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Followers	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-followers.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/user-profile/activity.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		User Activity	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/profile-activity.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
			</div>
	<!--end::Row-->
</div>
<!--end::Collapse content-->						</div>
											<div class="mb-5">
							<!--begin::Collapse toggle-->
<a 
	class="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible collapsed" 
	data-bs-toggle="collapse" 
	href="#kt_app_engage_prebuilts_tab_pages_general_corporate">
	
	<span class="fw-bolder fs-2">
		Corporate	</span>

	<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
<span class="svg-icon toggle-off text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon--> 
	<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
<span class="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                         */}
</a>
<!--end::Collapse toggle-->

<!--begin::Collapse content-->
<div class="collapse" id="kt_app_engage_prebuilts_tab_pages_general_corporate">
	<!--begin::Row-->
	<div class="row g-10 pt-2 pb-5">
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/about.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		About Us	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-aboutus.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/contact.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Contact Us	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-contactus.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/licenses.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		License	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-license.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/team.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Our Team	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-ourteam.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/sitemap.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Sitemap	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/corporate-sitemap.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
			</div>
	<!--end::Row-->
</div>
<!--end::Collapse content-->						</div>
											<div class="mb-5">
							<!--begin::Collapse toggle-->
<a 
	class="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible collapsed" 
	data-bs-toggle="collapse" 
	href="#kt_app_engage_prebuilts_tab_pages_general_social">
	
	<span class="fw-bolder fs-2">
		Social	</span>

	<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
<span class="svg-icon toggle-off text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon--> 
	<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
<span class="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                         */}
</a>
<!--end::Collapse toggle-->

<!--begin::Collapse content-->
<div class="collapse" id="kt_app_engage_prebuilts_tab_pages_general_social">
	<!--begin::Row-->
	<div class="row g-10 pt-2 pb-5">
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/social/feeds.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Activity	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-activity.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/social/activity.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Feeds	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-feeds.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/social/followers.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Followers	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-followers.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/social/settings.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Settings	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/social-settings.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
			</div>
	<!--end::Row-->
</div>
<!--end::Collapse content-->						</div>
											<div class="mb-5">
							<!--begin::Collapse toggle-->
<a 
	class="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible collapsed" 
	data-bs-toggle="collapse" 
	href="#kt_app_engage_prebuilts_tab_pages_general_others">
	
	<span class="fw-bolder fs-2">
		Others	</span>

	<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
<span class="svg-icon toggle-off text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon--> 
	<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
<span class="svg-icon toggle-on text-primary svg-icon-2 ms-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                         */}
</a>
<!--end::Collapse toggle-->

<!--begin::Collapse content-->
<div class="collapse" id="kt_app_engage_prebuilts_tab_pages_general_others">
	<!--begin::Row-->
	<div class="row g-10 pt-2 pb-5">
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/faq/classic.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		FAQ Classic	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/faq-classic.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/faq/extended.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		FAQ Extended	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/faq-extended.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/blog/home.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Blog Home	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/blog-home.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
					
			<!--begin::Col-->
			<div class="col-lg-4">
				
<!--begin::Preview-->
<a 
	href="../pages/blog/post.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Blog Post	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/blog-post.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->			</div>
			<!--end::Col-->
			</div>
	<!--end::Row-->
</div>
<!--end::Collapse content-->						</div>
					
				
			</div>
					<div class="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_account" role="tabpanel">

				
					<!--begin::Row-->
<div class="row g-10"> 
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../account/overview.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Overview	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-overview.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../account/settings.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Settings	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-settings.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../account/billing.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Billing	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-billing.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../account/security.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Security	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-security.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../account/referrals.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Referrals	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-referrals.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../account/logs.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Logs	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-logs.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../account/api-keys.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		API Keys	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-apikeys.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../account/statements.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Statements	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-statements.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../account/billing.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Billing	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/account-billing.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
	</div>
<!--end::Row-->					
				
			</div>
					<div class="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_modals" role="tabpanel">

				
					<!--begin::Row-->
<div class="row g-10"> 
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/general/view-users.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		View Friends	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-viewfriends.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/general/upgrade-plan.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Upgrade Plan	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-upgradeplan.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/wizards/top-up-wallet.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Topup Wallet	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-topupwallet.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/general/share-earn.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Share & Earn	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-shareandearn.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/general/select-users.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Select User	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-selectuser.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/forms/bidding.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Place Bid	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-placeyourbid.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/wizards/offer-a-deal.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Offer Deal	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-offeradeal.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/forms/new-target.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		New Target	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-newtarget.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/forms/new-card.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		New Card	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-newcard.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/forms/new-address.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		New Address	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-newaddress.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/general/invite-friends.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Invite Friend	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-invitefriend.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/wizards/create-project.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Create Project	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createproject.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/wizards/create-campaign.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Create Campaign	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createcampaign.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/wizards/create-account.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Create Business Account	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createbusinessacc.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/wizards/create-app.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Create App	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createapp.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/forms/create-api-key.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Create Api Key	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-createapikey.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/modals/wizards/two-factor-authentication.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		2 Factor Auth	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/modal-2factorauth.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
	</div>
<!--end::Row-->					
				
			</div>
					<div class="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_wizards" role="tabpanel">

				
					<!--begin::Row-->
<div class="row g-10"> 
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/wizards/horizontal.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		2 Factor Auth	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/wizard-2factorauth.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/wizards/horizontal.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Horizontal	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/wizard-horizontal.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/wizards/vertical.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Vertical	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/wizard-vertical.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
	</div>
<!--end::Row-->					
				
			</div>
					<div class="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_search" role="tabpanel">

				
					<!--begin::Row-->
<div class="row g-10"> 
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/search/users.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Search Users	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-users.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/search/horizontal.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Search Horizontal	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-horizontal.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/search/vertical.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Search Vertical	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-vertical.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../utilities/search/select-location.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Search Location	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/search-location.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
	</div>
<!--end::Row-->					
				
			</div>
					<div class="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_widgets" role="tabpanel">

				
					<!--begin::Row-->
<div class="row g-10"> 
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../widgets/charts.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Charts	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-charts.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../widgets/feeds.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Feeds	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-feeds.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../widgets/lists.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Lists	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-lists.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../widgets/mixed.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Mixed	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-mixed.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../widgets/statistics.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Statistics	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-stats.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../widgets/tables.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Tables	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/widgets-tables.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
	</div>
<!--end::Row-->					
				
			</div>
					<div class="tab-pane fade " id="kt_app_engage_prebuilts_tab_pages_email-templates" role="tabpanel">

				
					<!--begin::Row-->
<div class="row g-10"> 
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/email/welcome-message.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Welcome	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-welcome.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/email/subscription-confirmed.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Subscription Confirmed	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-subscriptionconfirmed.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/email/reset-password.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Reset Password	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-resetpassword.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/email/card-declined.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Card Declined	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-creditcarddeclined.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/email/promo-1.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Promotion 1	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-promo1.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/email/promo-2.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Promotion 2	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-promo2.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
			
		<!--begin::Col-->
		<div class="col-lg-4">
			
<!--begin::Preview-->
<a 
	href="../authentication/email/promo-3.html" 
	data-kt-href="true" 
	class="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden" 
>
	<!--begin::Title-->
	<h3 class="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
		Promotion 3	</h3>
	<!--end::Title-->

	<!--begin::Thumbnail-->
	<span class="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
		<img src="../assets/media/preview/demos/placeholder.jpg" data-src="/metronic8/demo27/assets/media/preview/prebuilts/pages/email-promo3.png" class="lozad w-100 rounded"/>
	</span>
	<!--end::Thumbnail-->
</a>
<!--end::Preview-->		</div>
		<!--end::Col-->	
	</div>
<!--end::Row-->					
				
			</div>
			</div>
	<!--end::Tab content-->	
</div>
<!--end::Scroll wrapper-->		</div>
	</div>
	<!--end::Tab content-->
</div>
<!--end::Image view-->                    
<!--begin::Text view-->
<div class="pt-2 d-none" id="kt_app_engage_prebuilts_view_text">
	<!--begin::Heading-->
	<h1 class="fs-2x text-dark fw-bolder text-center mb-4" id="kt_app_engage_prebuilts_view_text_heading">
		Sitemap
	</h1>
	<!--end::Heading-->

	<!--begin::Wrapper-->
	<div 
		id="kt_app_engage_prebuilts_view_text_heading" 
		class="hover-scroll-y pe-12 me-n12" 
		data-kt-scroll="true" 
		data-kt-scroll-height="auto" 
		data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body, #kt_app_engage_prebuilts_view_text" 
		data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_text_heading" 
		data-kt-scroll-offset="190px" 
	>
								<!--begin::Section-->
			<div class="mb-10 mb-lg-17">
									
<!--begin::Title-->
<h3 class="text-dark fw-bolder mb-7">
	Layouts
</h3>
<!--end::Title-->

<!--begin::Row-->
<div class="row">
			
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo1/index.html">
				Metronic Original			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo2/index.html">
				SaaS App			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo30/index.html">
				Sales Tracking App			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo39/index.html">
				Billing SaaS			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo31/index.html">
				Marketing Automation			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="../index.html">
				Databox Dashboard			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo6/index.html">
				Time Reporting			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo3/index.html">
				New Trend			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo23/index.html">
				Member Dashboard			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo38/index.html">
				Email Marketing			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo36/index.html">
				Digital Marketing			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo10/index.html">
				Project Grid			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
					
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo35/index.html">
				Traffic Analytics			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo8/index.html">
				Analytics App			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo25/index.html">
				User Guiding App			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo20/index.html">
				CRM Software			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo7/index.html">
				CRM Dashboard			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo43/index.html">
				Healthcare Dashboard			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo32/index.html">
				Delivery Management			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo42/index.html">
				Calendar Workspace			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo44/index.html">
				Recruit Automation			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo33/index.html">
				Social Campaings			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo37/index.html">
				Cloud Suite			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo11/index.html">
				Finance Planner			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
					
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo16/index.html">
				Podcast App			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo26/index.html">
				Planable App			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo22/index.html">
				Media Publisher			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo19/index.html">
				Reports Panel			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo40/index.html">
				HR App			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo29/index.html">
				Project Workspace			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo24/index.html">
				Helpdesk App			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo4/index.html">
				Jobs Site			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo41/index.html">
				Business Intelligence			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo18/index.html">
				Goal Tracking			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo21/index.html">
				Monochrome App			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo34/index.html">
				Finance Analytics			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
					
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo15/index.html">
				Crypto Planner			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo14/index.html">
				Project Workplace			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo9/index.html">
				Sales Manager			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo5/index.html">
				Support Forum			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo13/index.html">
				Classic Dashboard			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo12/index.html">
				Data Analyzer			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo48/index.html">
				Cloud ERP			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo28/index.html">
				eCommerce App			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo17/index.html">
				Events Scheduler			</a>

					
		
			
			<a class="fw-6 fw-semibold" href="https://preview.keenthemes.com/metronic8/demo49/index.html">
				KPI Tracking			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
			</div>
<!--end::Row-->			
								
			</div>
			<!--end::Section-->

			 

								<!--begin::Section-->
			<div class="mb-10 mb-lg-17">
									
<!--begin::Title-->
<h3 class="text-dark fw-bolder mb-7">
	Dashboards
</h3>
<!--end::Title-->

<!--begin::Row-->
<div class="row">
			
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			<a class="fw-6 fw-semibold" href="../index.html">
				Account			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="marketing.html">
				Marketing Dashboard			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="social.html">
				Social Dashboard			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="ecommerce.html">
				eCommerce Dashboard			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="store-analytics.html">
				Store Analytics			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
		
			
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			<a class="fw-6 fw-semibold" href="logistics.html">
				Logistics			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="delivery.html">
				Delivery			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="online-courses.html">
				Online Courses			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="school.html">
				Hello Tyler			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="crypto.html">
				My Balance: 37,045$			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
		
			
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			<a class="fw-6 fw-semibold" href="finance-performance.html">
				Finance Performance			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="website-analytics.html">
				Website Analytics			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="bidding.html">
				Bidding Dashboard			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="podcast.html">
				Podcast Dashboard			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="projects.html">
				Projects Dashboard			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
		
			
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			<a class="fw-6 fw-semibold" href="call-center.html">
				Call Center			</a>

		
			
		
			<a class="fw-6 fw-semibold" href="pos.html">
				POS System			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
		
	</div>
<!--end::Row-->		
								
			</div>
			<!--end::Section-->

			 

								<!--begin::Section-->
			<div class="mb-10 mb-lg-17">
								
			</div>
			<!--end::Section-->

							
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - Authentication		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../authentication/layouts/corporate/sign-in.html">
						Corporate					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/layouts/creative/sign-in.html">
						Creative					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/layouts/fancy/sign-in.html">
						Fancy					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/layouts/overlay/sign-in.html">
						Overlay					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../authentication/extended/multi-steps-sign-up.html">
						Multi-step					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/extended/two-factor-auth.html">
						2 Factor Auth					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/general/password-confirmation.html">
						Password Changed					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/general/verify-email.html">
						Verify Email					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../authentication/general/welcome.html">
						Welcome					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/general/coming-soon.html">
						Coming Soon					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/general/account-deactivated.html">
						Account Deactivated					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/general/error-404.html">
						404 Page					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../authentication/general/error-500.html">
						505 Page					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - Account		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../account/overview.html">
						Overview					</a>

											
				
					<a class="fw-6 fw-semibold" href="../account/settings.html">
						Settings					</a>

											
				
					<a class="fw-6 fw-semibold" href="../account/billing.html">
						Billing					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../account/security.html">
						Security					</a>

											
				
					<a class="fw-6 fw-semibold" href="../account/referrals.html">
						Referrals					</a>

											
				
					<a class="fw-6 fw-semibold" href="../account/logs.html">
						Logs					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../account/api-keys.html">
						API Keys					</a>

											
				
					<a class="fw-6 fw-semibold" href="../account/statements.html">
						Statements					</a>

											
				
					<a class="fw-6 fw-semibold" href="../account/billing.html">
						Billing					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - Modals		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/general/view-users.html">
						View Friends					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/general/upgrade-plan.html">
						Upgrade Plan					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/wizards/top-up-wallet.html">
						Topup Wallet					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/general/share-earn.html">
						Share & Earn					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/general/select-users.html">
						Select User					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/forms/bidding.html">
						Place Bid					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/wizards/offer-a-deal.html">
						Offer Deal					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/forms/new-target.html">
						New Target					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/forms/new-card.html">
						New Card					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/forms/new-address.html">
						New Address					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/general/invite-friends.html">
						Invite Friend					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/wizards/create-project.html">
						Create Project					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/wizards/create-campaign.html">
						Create Campaign					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/wizards/create-account.html">
						Create Business Account					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/wizards/create-app.html">
						Create App					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/forms/create-api-key.html">
						Create Api Key					</a>

											
				
					<a class="fw-6 fw-semibold" href="../utilities/modals/wizards/two-factor-authentication.html">
						2 Factor Auth					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - Wizards		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/wizards/horizontal.html">
						2 Factor Auth					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/wizards/horizontal.html">
						Horizontal					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/wizards/vertical.html">
						Vertical					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - Search		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/search/users.html">
						Search Users					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/search/horizontal.html">
						Search Horizontal					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/search/vertical.html">
						Search Vertical					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../utilities/search/select-location.html">
						Search Location					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - Widgets		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../widgets/charts.html">
						Charts					</a>

											
				
					<a class="fw-6 fw-semibold" href="../widgets/feeds.html">
						Feeds					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../widgets/lists.html">
						Lists					</a>

											
				
					<a class="fw-6 fw-semibold" href="../widgets/mixed.html">
						Mixed					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../widgets/statistics.html">
						Statistics					</a>

											
				
					<a class="fw-6 fw-semibold" href="../widgets/tables.html">
						Tables					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - Email Templates		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../authentication/email/welcome-message.html">
						Welcome					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/email/subscription-confirmed.html">
						Subscription Confirmed					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../authentication/email/reset-password.html">
						Reset Password					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/email/card-declined.html">
						Card Declined					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../authentication/email/promo-1.html">
						Promotion 1					</a>

											
				
					<a class="fw-6 fw-semibold" href="../authentication/email/promo-2.html">
						Promotion 2					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../authentication/email/promo-3.html">
						Promotion 3					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - General - User Profile		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/user-profile/overview.html">
						Profile Overview					</a>

											
				
					<a class="fw-6 fw-semibold" href="../pages/user-profile/projects.html">
						User Projects					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/user-profile/campaigns.html">
						User Campaigns					</a>

											
				
					<a class="fw-6 fw-semibold" href="../pages/user-profile/documents.html">
						User Documents					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/user-profile/followers.html">
						User Followers					</a>

											
				
					<a class="fw-6 fw-semibold" href="../pages/user-profile/activity.html">
						User Activity					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - General - Corporate		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/about.html">
						About Us					</a>

											
				
					<a class="fw-6 fw-semibold" href="../pages/contact.html">
						Contact Us					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/licenses.html">
						License					</a>

											
				
					<a class="fw-6 fw-semibold" href="../pages/team.html">
						Our Team					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/sitemap.html">
						Sitemap					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - General - Social		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/social/feeds.html">
						Activity					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/social/activity.html">
						Feeds					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/social/followers.html">
						Followers					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/social/settings.html">
						Settings					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
	<!--begin::Section-->
	<div class="mb-10 mb-lg-17">
		<!--begin::Title-->
		<h3 class="text-dark fw-bolder mb-7">
			Pages - General - Others		</h3>
		<!--end::Title-->

		<!--begin::Row-->
		<div class="row">
										
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/faq/classic.html">
						FAQ Classic					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/faq/extended.html">
						FAQ Extended					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/blog/home.html">
						Blog Home					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
											
									<!--begin::Col-->
					<div class="col-lg-3">
						<!--begin::List-->
						<div class="d-flex flex-column gap-3 gap-lg-5">
				
					<a class="fw-6 fw-semibold" href="../pages/blog/post.html">
						Blog Post					</a>

																</div>
						<!--end::List-->
					</div>
					<!--end::Col-->
									</div>
		<!--end::Row-->
	</div>
	<!--end::Section-->
			
			 

								<!--begin::Section-->
			<div class="">
									
<!--begin::Title-->
<h3 class="text-dark fw-bolder mb-7">
	Apps
</h3>
<!--end::Title-->

<!--begin::Row-->
<div class="row">
			
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			<a class="fw-6 fw-semibold" href="../apps/projects/list/list.html">
				Projects			</a>

					
		
			<a class="fw-6 fw-semibold" href="../apps/ecommerce/catalog/products/products.html">
				Ecommerce			</a>

					
		
			<a class="fw-6 fw-semibold" href="../apps/customers/list/list.html">
				Customers			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
					
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			<a class="fw-6 fw-semibold" href="../apps/subscriptions/list/list.html">
				Subscriptions			</a>

					
		
			<a class="fw-6 fw-semibold" href="../apps/user-management/users/list/list.html">
				User Management			</a>

					
		
			<a class="fw-6 fw-semibold" href="../apps/invoices/create/main.html">
				Invoices			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
					
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			<a class="fw-6 fw-semibold" href="../apps/support-center/overview/main.html">
				Support Center			</a>

					
		
			<a class="fw-6 fw-semibold" href="../apps/chat/private.html">
				Chat			</a>

					
		
			<a class="fw-6 fw-semibold" href="../apps/calendar/calendar.html">
				Calendar			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
					
					<!--begin::Col-->
			<div class="col-lg-3">
				<!--begin::List-->
				<div class="d-flex flex-column gap-3 gap-lg-5">
		
			<a class="fw-6 fw-semibold" href="../apps/file-manager/list/folders.html">
				File Manager			</a>

					
		
			<a class="fw-6 fw-semibold" href="../apps/inbox/listing/listing.html">
				Inbox			</a>

					
		
			<a class="fw-6 fw-semibold" href="../apps/contacts/getting-started.html">
				Contacts			</a>

										</div>
				<!--end::List-->
			</div>
			<!--end::Col-->
			</div>
<!--end::Row-->	
								
			</div>
			<!--end::Section-->

			 

			</div>
	<!--end::Wrapper-->
</div>
<!--end::Text view--->                </div>
            </div>
            <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
</div>
<!--end::Modal - Sitemap-->				<!--end::Engage modals-->
<!--begin::Scrolltop-->
<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
	<!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
<span class="svg-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"/>
<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon--></div>
<!--end::Scrolltop-->

                    <!--begin::Modals-->
            <!--begin::Modal - Create Campaign-->
<div class="modal fade" id="kt_modal_create_campaign" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-fullscreen p-9">
        <!--begin::Modal content-->
        <div class="modal-content modal-rounded">
            <!--begin::Modal header-->
            <div class="modal-header py-7 d-flex justify-content-between">
                <!--begin::Modal title-->
                <h2>Create Campaign</h2>
                <!--end::Modal title-->

                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
<!--end::Svg Icon-->                </div>
                <!--end::Close-->
            </div>
            <!--begin::Modal header-->

            <!--begin::Modal body-->
            <div class="modal-body scroll-y m-5">
                <!--begin::Stepper-->
                <div class="stepper stepper-links d-flex flex-column" id="kt_modal_create_campaign_stepper">
                    <!--begin::Nav-->
                    <div class="stepper-nav justify-content-center py-2">
                        <!--begin::Step 1-->
                        <div class="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                            <h3 class="stepper-title">
                                Campaign Details
                            </h3>
                        </div>
                        <!--end::Step 1-->

                        <!--begin::Step 2-->
                        <div class="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                            <h3 class="stepper-title">
                                Creative Uploads
                            </h3>
                        </div>
                        <!--end::Step 2-->

                        <!--begin::Step 3-->
                        <div class="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                            <h3 class="stepper-title">
                                Audiences
                            </h3>
                        </div>
                        <!--end::Step 3-->

                        <!--begin::Step 4-->
                        <div class="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                            <h3 class="stepper-title">
                                Budget Estimates
                            </h3>
                        </div>
                        <!--end::Step 4-->

                        <!--begin::Step 5-->
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            <h3 class="stepper-title">
                                Completed
                            </h3>
                        </div>
                        <!--end::Step 5-->
                    </div>
                    <!--end::Nav-->

                    <!--begin::Form-->
                    <form class="mx-auto w-100 mw-600px pt-15 pb-10" novalidate="novalidate" id="kt_modal_create_campaign_stepper_form">
                        
<!--begin::Step 1-->
<div class="current" data-kt-stepper-element="content">
    <!--begin::Wrapper-->
    <div class="w-100">
        <!--begin::Heading-->
        <div class="pb-10 pb-lg-15">
            <!--begin::Title-->
            <h2 class="fw-bold d-flex align-items-center text-dark">
                Setup Campaign Details
                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Campaign name will be used as reference within your campaign reports"></i>
            </h2>
            <!--end::Title-->

            <!--begin::Notice-->
            <div class="text-muted fw-semibold fs-6">
                If you need more info, please check out
                <a href="#" class="link-primary fw-bold">Help Page</a>.
            </div>
            <!--end::Notice-->
        </div>
        <!--end::Heading-->

        <!--begin::Input group-->
        <div class="mb-10 fv-row">
            <!--begin::Label-->
            <label class="required form-label mb-3">Campaign Name</label>
            <!--end::Label-->

            <!--begin::Input-->
            <input type="text" class="form-control form-control-lg form-control-solid" name="campaign_name" placeholder="" value="" />
            <!--end::Input-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="d-block fw-semibold fs-6 mb-5">
                <span class="required">Company Logo</span>
                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="E.g. Select a logo to represent the company that's running the campaign."></i>
            </label>
            <!--end::Label-->

            <!--begin::Image input placeholder-->
            <style>
                .image-input-placeholder {
                    background-image: url('../assets/media/svg/files/blank-image.svg');
                }

                [data-bs-theme="dark"] .image-input-placeholder {
                    background-image: url('../assets/media/svg/files/blank-image-dark.svg');
                }                
            </style>
            <!--end::Image input placeholder-->

            <!--begin::Image input-->
            <div class="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">
                <!--begin::Preview existing avatar-->
                <div class="image-input-wrapper w-125px h-125px"></div>
                <!--end::Preview existing avatar-->

                <!--begin::Label-->
                <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                    <i class="bi bi-pencil-fill fs-7"></i>

                    <!--begin::Inputs-->
                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                    <input type="hidden" name="avatar_remove" />
                    <!--end::Inputs-->
                </label>
                <!--end::Label-->

                <!--begin::Cancel-->
                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                    <i class="bi bi-x fs-2"></i>
                </span>
                <!--end::Cancel-->

                <!--begin::Remove-->
                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                    <i class="bi bi-x fs-2"></i>
                </span>
                <!--end::Remove-->
            </div>
            <!--end::Image input-->

            <!--begin::Hint-->
            <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
            <!--end::Hint-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="mb-10">
            <!--begin::Label-->
            <label class="required fw-semibold fs-6 mb-5">Campaign Goal</label>
            <!--end::Label-->

            <!--begin::Roles-->
                            <!--begin::Input row-->
                <div class="d-flex fv-row">
                    <!--begin::Radio-->
                    <div class="form-check form-check-custom form-check-solid">
                        <!--begin::Input-->
                        <input class="form-check-input me-3" name="user_role" type="radio" value="0" id="kt_modal_update_role_option_0" checked='checked' />
                        <!--end::Input-->

                        <!--begin::Label-->
                        <label class="form-check-label" for="kt_modal_update_role_option_0">
                            <div class="fw-bold text-gray-800">Get more visitors</div>
                            <div class="text-gray-600">Increase impression traffic onto the platform</div>
                        </label>
                        <!--end::Label-->
                    </div>
                    <!--end::Radio-->
                </div>
                <!--end::Input row-->

                <div class='separator separator-dashed my-5'></div>                            <!--begin::Input row-->
                <div class="d-flex fv-row">
                    <!--begin::Radio-->
                    <div class="form-check form-check-custom form-check-solid">
                        <!--begin::Input-->
                        <input class="form-check-input me-3" name="user_role" type="radio" value="1" id="kt_modal_update_role_option_1"  />
                        <!--end::Input-->

                        <!--begin::Label-->
                        <label class="form-check-label" for="kt_modal_update_role_option_1">
                            <div class="fw-bold text-gray-800">Get more messages on chat</div>
                            <div class="text-gray-600">Increase community interaction and communication</div>
                        </label>
                        <!--end::Label-->
                    </div>
                    <!--end::Radio-->
                </div>
                <!--end::Input row-->

                <div class='separator separator-dashed my-5'></div>                            <!--begin::Input row-->
                <div class="d-flex fv-row">
                    <!--begin::Radio-->
                    <div class="form-check form-check-custom form-check-solid">
                        <!--begin::Input-->
                        <input class="form-check-input me-3" name="user_role" type="radio" value="2" id="kt_modal_update_role_option_2"  />
                        <!--end::Input-->

                        <!--begin::Label-->
                        <label class="form-check-label" for="kt_modal_update_role_option_2">
                            <div class="fw-bold text-gray-800">Get more calls</div>
                            <div class="text-gray-600">Boost telecommunication feedback to provide precise and accurate information</div>
                        </label>
                        <!--end::Label-->
                    </div>
                    <!--end::Radio-->
                </div>
                <!--end::Input row-->

                <div class='separator separator-dashed my-5'></div>                            <!--begin::Input row-->
                <div class="d-flex fv-row">
                    <!--begin::Radio-->
                    <div class="form-check form-check-custom form-check-solid">
                        <!--begin::Input-->
                        <input class="form-check-input me-3" name="user_role" type="radio" value="3" id="kt_modal_update_role_option_3"  />
                        <!--end::Input-->

                        <!--begin::Label-->
                        <label class="form-check-label" for="kt_modal_update_role_option_3">
                            <div class="fw-bold text-gray-800">Get more likes</div>
                            <div class="text-gray-600">Increase positive interactivity on social media platforms</div>
                        </label>
                        <!--end::Label-->
                    </div>
                    <!--end::Radio-->
                </div>
                <!--end::Input row-->

                <div class='separator separator-dashed my-5'></div>                            <!--begin::Input row-->
                <div class="d-flex fv-row">
                    <!--begin::Radio-->
                    <div class="form-check form-check-custom form-check-solid">
                        <!--begin::Input-->
                        <input class="form-check-input me-3" name="user_role" type="radio" value="4" id="kt_modal_update_role_option_4"  />
                        <!--end::Input-->

                        <!--begin::Label-->
                        <label class="form-check-label" for="kt_modal_update_role_option_4">
                            <div class="fw-bold text-gray-800">Lead generation</div>
                            <div class="text-gray-600">Collect contact information for potential customers</div>
                        </label>
                        <!--end::Label-->
                    </div>
                    <!--end::Radio-->
                </div>
                <!--end::Input row-->

                                        <!--end::Roles-->
        </div>
        <!--end::Input group-->
    </div>
    <!--end::Wrapper-->
</div>
<!--end::Step 1-->
                        
<!--begin::Step 2-->
<div data-kt-stepper-element="content">
    <!--begin::Wrapper-->   
    <div class="w-100">
        <!--begin::Heading-->
        <div class="pb-10 pb-lg-12">
            <!--begin::Title-->
            <h1 class="fw-bold text-dark">Upload Files</h1>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="text-muted fw-semibold fs-4">
                If you need more info, please check
                <a href="#" class="link-primary">Campaign Guidelines</a>
            </div>
            <!--end::Description-->
        </div>
        <!--end::Heading-->

        <!--begin::Input group-->
        <div class="fv-row mb-10">            
            <!--begin::Dropzone-->
            <div class="dropzone" id="kt_modal_create_campaign_files_upload">
                <!--begin::Message-->
                <div class="dz-message needsclick">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/files/fil010.svg-->
<span class="svg-icon svg-icon-3hx svg-icon-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z" fill="currentColor"/>
<path d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z" fill="currentColor"/>
<path d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z" fill="currentColor"/>
<path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Info-->
                    <div class="ms-4">
                        <h3 class="dfs-3 fw-bold text-gray-900 mb-1">Drop campaign files here or click to upload.</h3>
                        <span class="fw-semibold fs-4 text-muted">Upload up to 10 files</span>
                    </div>
                    <!--end::Info-->
                </div>
            </div>
            <!--end::Dropzone-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="mb-10">
            <!--begin::Label-->
            <label class="fs-6 fw-semibold mb-2">Uploaded File</label>
            <!--End::Label-->

            <!--begin::Files-->
            <div class="mh-300px scroll-y me-n7 pe-7">
                                    <!--begin::File-->
                    <div class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                        <div class="d-flex align-items-center">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-35px">
                                <img src="../assets/media/svg/files/pdf.svg" alt="icon" />
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Details-->
                            <div class="ms-6">
                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Product Specifications</a>
                                <div class="fw-semibold text-muted">230kb</div>
                            </div>
                            <!--end::Details-->
                        </div>

                        <!--begin::Menu-->
                        <div class="min-w-100px">
                            <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                <option></option>
                                <option value="1">Remove</option>
                                <option value="2">Modify</option>
                                <option value="3">Select</option>
                            </select>
                        </div>
                        <!--end::Menu-->
                    </div>
                    <!--end::File-->
                                    <!--begin::File-->
                    <div class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                        <div class="d-flex align-items-center">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-35px">
                                <img src="../assets/media/svg/files/tif.svg" alt="icon" />
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Details-->
                            <div class="ms-6">
                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Creative Poster</a>
                                <div class="fw-semibold text-muted">2.4mb</div>
                            </div>
                            <!--end::Details-->
                        </div>

                        <!--begin::Menu-->
                        <div class="min-w-100px">
                            <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                <option></option>
                                <option value="1">Remove</option>
                                <option value="2">Modify</option>
                                <option value="3">Select</option>
                            </select>
                        </div>
                        <!--end::Menu-->
                    </div>
                    <!--end::File-->
                                    <!--begin::File-->
                    <div class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                        <div class="d-flex align-items-center">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-35px">
                                <img src="../assets/media/svg/files/folder-document.svg" alt="icon" />
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Details-->
                            <div class="ms-6">
                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Landing Page Source</a>
                                <div class="fw-semibold text-muted">1.12mb</div>
                            </div>
                            <!--end::Details-->
                        </div>

                        <!--begin::Menu-->
                        <div class="min-w-100px">
                            <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                <option></option>
                                <option value="1">Remove</option>
                                <option value="2">Modify</option>
                                <option value="3">Select</option>
                            </select>
                        </div>
                        <!--end::Menu-->
                    </div>
                    <!--end::File-->
                                    <!--begin::File-->
                    <div class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                        <div class="d-flex align-items-center">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-35px">
                                <img src="../assets/media/svg/files/css.svg" alt="icon" />
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Details-->
                            <div class="ms-6">
                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Landing Page Styling</a>
                                <div class="fw-semibold text-muted">85kb</div>
                            </div>
                            <!--end::Details-->
                        </div>

                        <!--begin::Menu-->
                        <div class="min-w-100px">
                            <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                <option></option>
                                <option value="1">Remove</option>
                                <option value="2">Modify</option>
                                <option value="3">Select</option>
                            </select>
                        </div>
                        <!--end::Menu-->
                    </div>
                    <!--end::File-->
                                    <!--begin::File-->
                    <div class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                        <div class="d-flex align-items-center">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-35px">
                                <img src="../assets/media/svg/files/ai.svg" alt="icon" />
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Details-->
                            <div class="ms-6">
                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Design Source Files</a>
                                <div class="fw-semibold text-muted">48mb</div>
                            </div>
                            <!--end::Details-->
                        </div>

                        <!--begin::Menu-->
                        <div class="min-w-100px">
                            <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                <option></option>
                                <option value="1">Remove</option>
                                <option value="2">Modify</option>
                                <option value="3">Select</option>
                            </select>
                        </div>
                        <!--end::Menu-->
                    </div>
                    <!--end::File-->
                                    <!--begin::File-->
                    <div class="d-flex flex-stack py-4 ">
                        <div class="d-flex align-items-center">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-35px">
                                <img src="../assets/media/svg/files/doc.svg" alt="icon" />
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Details-->
                            <div class="ms-6">
                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Plan Document</a>
                                <div class="fw-semibold text-muted">27kb</div>
                            </div>
                            <!--end::Details-->
                        </div>

                        <!--begin::Menu-->
                        <div class="min-w-100px">
                            <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                <option></option>
                                <option value="1">Remove</option>
                                <option value="2">Modify</option>
                                <option value="3">Select</option>
                            </select>
                        </div>
                        <!--end::Menu-->
                    </div>
                    <!--end::File-->
                            </div>
            <!--end::Files-->
        </div>
        <!--end::Input group-->
    </div>
    <!--end::Wrapper-->   
</div>
<!--end::Step 2-->
                        <!--begin::Step 3-->
<div data-kt-stepper-element="content">
    <!--begin::Wrapper-->
    <div class="w-100">
        <!--begin::Heading-->
        <div class="pb-10 pb-lg-12">
            <!--begin::Title-->
            <h1 class="fw-bold text-dark">Configure Audiences</h1>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="text-muted fw-semibold fs-4">
                If you need more info, please check
                <a href="#" class="link-primary">Campaign Guidelines</a>
            </div>
            <!--end::Description-->
        </div>
        <!--end::Heading-->

        <!--begin::Input group-->
        <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="fs-6 fw-semibold mb-2">
                Gender
                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Show your ads to either men or women, or select 'All' for both"></i>
            </label>
            <!--End::Label-->

            <!--begin::Row-->
            <div class="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                <!--begin::Col-->
                <div class="col">
                    <!--begin::Option-->
                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
                        <!--begin::Radio-->
                        <span class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                            <input class="form-check-input" type="radio" name="campaign_gender" value="1" checked="checked" />
                        </span>
                        <!--end::Radio-->

                        <!--begin::Info-->
                        <span class="ms-5">
                            <span class="fs-4 fw-bold text-gray-800 d-block">All</span>
                        </span>
                        <!--end::Info-->
                    </label>
                    <!--end::Option-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col">
                    <!--begin::Option-->
                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                        <!--begin::Radio-->
                        <span class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                            <input class="form-check-input" type="radio" name="campaign_gender" value="2" />
                        </span>
                        <!--end::Radio-->

                        <!--begin::Info-->
                        <span class="ms-5">
                            <span class="fs-4 fw-bold text-gray-800 d-block">Male</span>
                        </span>
                        <!--end::Info-->
                    </label>
                    <!--end::Option-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col">
                    <!--begin::Option-->
                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                        <!--begin::Radio-->
                        <span class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                            <input class="form-check-input" type="radio" name="campaign_gender" value="3" />
                        </span>
                        <!--end::Radio-->

                        <!--begin::Info-->
                        <span class="ms-5">
                            <span class="fs-4 fw-bold text-gray-800 d-block">Female</span>
                        </span>
                        <!--end::Info-->
                    </label>
                    <!--end::Option-->
                </div>
                <!--end::Col-->
            </div>
            <!--end::Row-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="fs-6 fw-semibold mb-2">
                Age
                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select the minimum and maximum age of the people who will find your ad relevant."></i>
            </label>
            <!--End::Label-->

            <!--begin::Slider-->
            <div class="d-flex flex-stack">
                <div id="kt_modal_create_campaign_age_min" class="fs-7 fw-semibold text-muted"></div>
                <div id="kt_modal_create_campaign_age_slider" class="noUi-sm w-100 ms-5 me-8"></div>
                <div id="kt_modal_create_campaign_age_max" class="fs-7 fw-semibold text-muted"></div>
            </div>
            <!--end::Slider-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="fs-6 fw-semibold mb-2">
                Location
                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter one or more location points for more specific targeting."></i>
            </label>
            <!--End::Label-->

            <!--begin::Tagify-->
            <input class="form-control d-flex align-items-center" value="" id="kt_modal_create_campaign_location" data-kt-flags-path="/metronic8/demo27/assets/media/flags/"/>
            <!--end::Tagify-->
        </div>
        <!--end::Input group-->

    </div>
    <!--end::Wrapper-->
</div>
<!--end::Step 3-->
                        <!--begin::Step 4-->
<div data-kt-stepper-element="content">
    <!--begin::Wrapper-->
    <div class="w-100">
        <!--begin::Heading-->
        <div class="pb-10 pb-lg-12">
            <!--begin::Title-->
            <h1 class="fw-bold text-dark">Budget Estimates</h1>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="text-muted fw-semibold fs-4">
                If you need more info, please check
                <a href="#" class="link-primary">Campaign Guidelines</a>
            </div>
            <!--end::Description-->
        </div>
        <!--end::Heading-->

        <!--begin::Input group-->
        <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="fs-6 fw-semibold mb-2">
                Campaign Duration
                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Choose how long you want your ad to run for"></i>
            </label>
            <!--end::Label-->

            <!--begin::Duration option-->
            <div class="d-flex gap-9 mb-7">
                <!--begin::Button-->
                <button type="button" class="btn btn-outline btn-outline-dashed btn-active-light-primary active" id="kt_modal_create_campaign_duration_all">
                    Continuous duration<br />
                    <span class="fs-7">Your ad will run continuously for a daily budget.</span>
                </button>
                <!--end::Button-->

                <!--begin::Button-->
                <button type="button" class="btn btn-outline btn-outline-dashed btn-active-light-primary btn-outline-default" id="kt_modal_create_campaign_duration_fixed">
                    Fixed duration<br />
                    <span class="fs-7">Your ad will run on the specified dates only.</span>
                </button>
                <!--end::Button-->
            </div>
            <!--end::Duration option-->

            <!--begin::Datepicker-->
            <input class="form-control form-control-solid d-none" placeholder="Pick date & time" id="kt_modal_create_campaign_datepicker" />
            <!--end::Datepicker-->
        </div>
        <!--end::Input group-->


        <!--begin::Input group-->
        <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="fs-6 fw-semibold mb-2">
                Daily Budget
                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Choose the budget allocated for each day. Higher budget will generate better results"></i>
            </label>
            <!--end::Label-->

            <!--begin::Slider-->
            <div class="d-flex flex-column text-center">
                <div class="d-flex align-items-start justify-content-center mb-7">
                    <span class="fw-bold fs-4 mt-1 me-2">$</span>
                    <span class="fw-bold fs-3x" id="kt_modal_create_campaign_budget_label"></span>
                    <span class="fw-bold fs-3x">.00</span>
                </div>
                <div id="kt_modal_create_campaign_budget_slider" class="noUi-sm"></div>
            </div>
            <!--end::Slider-->

        </div>
        <!--end::Input group-->
    </div>
    <!--end::Wrapper-->
</div>
<!--end::Step 4-->
                        <!--begin::Step 5-->
<div data-kt-stepper-element="content">
    <!--begin::Wrapper-->
    <div class="w-100">
        <!--begin::Heading-->
        <div class="pb-12 text-center">
            <!--begin::Title-->
            <h1 class="fw-bold text-dark">Campaign Created!</h1>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="fw-semibold text-muted fs-4">
                You will receive an email with with the summary of your newly created campaign!
            </div>
            <!--end::Description-->
        </div>
        <!--end::Heading-->

         <!--begin::Actions-->
         <div class="d-flex flex-center pb-20">
            <button id="kt_modal_create_campaign_create_new" type="button" class="btn btn-lg btn-light me-3" data-kt-element="complete-start">
                Create New Campaign
            </button>

            <a href="#" class="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">
                View Campaign
            </a>
        </div>
        <!--end::Actions-->

        <!--begin::Illustration-->
        <div class="text-center px-4">
            <img src="../assets/media/illustrations/sketchy-1/9.png" alt="" class="mww-100 mh-350px"/>          
        </div>
        <!--end::Illustration-->
    </div>
</div>
<!--end::Step 5-->
                        <!--begin::Actions-->
                        <div class="d-flex flex-stack pt-10">
                            {/* <!--begin::Wrapper--> */}
                            <div class="me-2">
                                <button type="button" class="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr063.svg-->
<span class="svg-icon svg-icon-3 me-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor"/>
<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                                    Back */}
                                </button>
                            </div>
                            <!--end::Wrapper-->

                            {/* <!--begin::Wrapper--> */}
                            <div>
                                <button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                                    <span class="indicator-label">
                                        Submit
                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
<span class="svg-icon svg-icon-3 ms-2 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"/>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                                    </span> */}
                                    <span class="indicator-progress">
                                        Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                    </span>
                                </button>

                                <button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="next">
                                    Continue
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
<span class="svg-icon svg-icon-3 ms-1 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"/>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                                </button> */}
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Actions-->
                    </form>
                    <!--end::Form-->
                </div>
                <!--end::Stepper-->
            </div>
            <!--begin::Modal body-->
        </div>
    </div>
</div>
<!--end::Modal - Create Campaign--><!--begin::Modal - Users Search-->
<div class="modal fade" id="kt_modal_users_search" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
            <!--begin::Modal header-->
            <div class="modal-header pb-0 border-0 justify-content-end">
                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
<!--end::Svg Icon-->                </div>
                <!--end::Close-->
            </div>
            <!--begin::Modal header-->

            <!--begin::Modal body-->
            <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                <!--begin::Content-->
                <div class="text-center mb-13">
                    <h1 class="mb-3">Search Users</h1>

                    <div class="text-muted fw-semibold fs-5">
                        Invite Collaborators To Your Project
                    </div>
                </div>
                <!--end::Content-->

                <!--begin::Search-->
                <div 
                    id="kt_modal_users_search_handler" 
                    
                    data-kt-search-keypress="true"
                    data-kt-search-min-length="2"
                    data-kt-search-enter="enter"     
                    data-kt-search-layout="inline">

                    <!--begin::Form-->
                    <form data-kt-search-element="form" class="w-100 position-relative mb-5" autocomplete="off">	
                        <!--begin::Hidden input(Added to disable form autocomplete)-->
                        <input type="hidden"/>
                        <!--end::Hidden input-->

                        <!--begin::Icon-->
                        <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
<span class="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"/>
<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"/>
</svg>
</span>
{/* <!--end::Svg Icon-->                        <!--end::Icon--> */}

                        <!--begin::Input-->
                        <input type="text" class="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input"/>
                        <!--end::Input-->

                        <!--begin::Spinner-->
                        <span class="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                            <span class="spinner-border h-15px w-15px align-middle text-muted"></span>
                        </span>
                        <!--end::Spinner-->

                        <!--begin::Reset-->
                        <span class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
                            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
{/* <!--end::Svg Icon-->                        </span> */}
                        <!--end::Reset-->
                    </form>
                    <!--end::Form-->

                    <!--begin::Wrapper-->
                    <div class="py-5">                            
                        <!--begin::Suggestions-->
<div data-kt-search-element="suggestions">
    <!--begin::Heading-->
    <h3 class="fw-semibold mb-5">Recently searched:</h3>
    <!--end::Heading-->

    <!--begin::Users-->
    <div class="mh-375px scroll-y me-n7 pe-7">
                                <!--begin::User-->
            <a href="#" class="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle me-5">
                                            <img alt="Pic" src="../assets/media/avatars/300-6.jpg" />
                                    </div>
                <!--end::Avatar-->

                <!--begin::Info-->
                <div class="fw-semibold">
                    <span class="fs-6 text-gray-800 me-2">Emma Smith</span>
                    <span class="badge badge-light">Art Director</span>
                </div>
                <!--end::Info-->
            </a>
            <!--end::User-->
                                <!--begin::User-->
            <a href="#" class="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle me-5">
                                            <span class="symbol-label bg-light-danger text-danger fw-semibold">
                            M                        </span>
                                    </div>
                <!--end::Avatar-->

                <!--begin::Info-->
                <div class="fw-semibold">
                    <span class="fs-6 text-gray-800 me-2">Melody Macy</span>
                    <span class="badge badge-light">Marketing Analytic</span>
                </div>
                <!--end::Info-->
            </a>
            <!--end::User-->
                                <!--begin::User-->
            <a href="#" class="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle me-5">
                                            <img alt="Pic" src="../assets/media/avatars/300-1.jpg" />
                                    </div>
                <!--end::Avatar-->

                <!--begin::Info-->
                <div class="fw-semibold">
                    <span class="fs-6 text-gray-800 me-2">Max Smith</span>
                    <span class="badge badge-light">Software Enginer</span>
                </div>
                <!--end::Info-->
            </a>
            <!--end::User-->
                                <!--begin::User-->
            <a href="#" class="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle me-5">
                                            <img alt="Pic" src="../assets/media/avatars/300-5.jpg" />
                                    </div>
                <!--end::Avatar-->

                <!--begin::Info-->
                <div class="fw-semibold">
                    <span class="fs-6 text-gray-800 me-2">Sean Bean</span>
                    <span class="badge badge-light">Web Developer</span>
                </div>
                <!--end::Info-->
            </a>
            <!--end::User-->
                                <!--begin::User-->
            <a href="#" class="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle me-5">
                                            <img alt="Pic" src="../assets/media/avatars/300-25.jpg" />
                                    </div>
                <!--end::Avatar-->

                <!--begin::Info-->
                <div class="fw-semibold">
                    <span class="fs-6 text-gray-800 me-2">Brian Cox</span>
                    <span class="badge badge-light">UI/UX Designer</span>
                </div>
                <!--end::Info-->
            </a>
            <!--end::User-->
            </div>
    <!--end::Users-->
</div>
<!--end::Suggestions-->
                        
<!--begin::Results(add d-none to below element to hide the users list by default)-->
<div data-kt-search-element="results" class="d-none">
    <!--begin::Users-->
    <div class="mh-375px scroll-y me-n7 pe-7">
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../assets/media/avatars/300-6.jpg" />
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>

                        <div class="fw-semibold text-muted">smith@kpmg.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" selected>Owner</option>
                        <option value="3" >Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <span class="symbol-label bg-light-danger text-danger fw-semibold">
                                M                            </span>
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>

                        <div class="fw-semibold text-muted">melody@altbox.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" selected>Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" >Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../assets/media/avatars/300-1.jpg" />
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>

                        <div class="fw-semibold text-muted">max@kt.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" selected>Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../assets/media/avatars/300-5.jpg" />
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>

                        <div class="fw-semibold text-muted">sean@dellito.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" selected>Owner</option>
                        <option value="3" >Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../assets/media/avatars/300-25.jpg" />
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>

                        <div class="fw-semibold text-muted">brian@exchange.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" selected>Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <span class="symbol-label bg-light-warning text-warning fw-semibold">
                                C                            </span>
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>

                        <div class="fw-semibold text-muted">mik@pex.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" selected>Owner</option>
                        <option value="3" >Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../assets/media/avatars/300-9.jpg" />
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>

                        <div class="fw-semibold text-muted">f.mit@kpmg.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" selected>Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <span class="symbol-label bg-light-danger text-danger fw-semibold">
                                O                            </span>
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>

                        <div class="fw-semibold text-muted">olivia@corpmail.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" selected>Owner</option>
                        <option value="3" >Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <span class="symbol-label bg-light-primary text-primary fw-semibold">
                                N                            </span>
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>

                        <div class="fw-semibold text-muted">owen.neil@gmail.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" selected>Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" >Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../assets/media/avatars/300-23.jpg" />
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>

                        <div class="fw-semibold text-muted">dam@consilting.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" selected>Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <span class="symbol-label bg-light-danger text-danger fw-semibold">
                                E                            </span>
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>

                        <div class="fw-semibold text-muted">emma@intenso.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" selected>Owner</option>
                        <option value="3" >Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../assets/media/avatars/300-12.jpg" />
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>

                        <div class="fw-semibold text-muted">ana.cf@limtel.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" selected>Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" >Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <span class="symbol-label bg-light-info text-info fw-semibold">
                                A                            </span>
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>

                        <div class="fw-semibold text-muted">robert@benko.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" selected>Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../assets/media/avatars/300-13.jpg" />
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>

                        <div class="fw-semibold text-muted">miller@mapple.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" selected>Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <span class="symbol-label bg-light-success text-success fw-semibold">
                                L                            </span>
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>

                        <div class="fw-semibold text-muted">lucy.m@fentech.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" selected>Owner</option>
                        <option value="3" >Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="../assets/media/avatars/300-21.jpg" />
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>

                        <div class="fw-semibold text-muted">ethan@loop.com.au</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" selected>Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" >Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

                            <!--begin::Separator-->
                <div class="border-bottom border-gray-300 border-bottom-dashed"></div>
                <!--end::Separator-->
            
                                <!--begin::User-->
            <div class="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                    <!--begin::Checkbox-->
                    <label class="form-check form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16"/>
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                                                    <span class="symbol-label bg-light-info text-info fw-semibold">
                                A                            </span>
                                            </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>

                        <div class="fw-semibold text-muted">robert@benko.com</div>
                    </div>
                    <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Access menu-->
                <div class="ms-2 w-100px">
                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value="1" >Guest</option>
                        <option value="2" >Owner</option>
                        <option value="3" selected>Can Edit</option>
                    </select>
                </div>
                <!--end::Access menu-->
            </div>
            <!--end::User-->

            
            </div>
    <!--end::Users-->

    <!--begin::Actions-->
    <div class="d-flex flex-center mt-15">
        <button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" class="btn btn-active-light me-3">
            Cancel
        </button>

        <button type="submit" id="kt_modal_users_search_submit" class="btn btn-primary">
            Add Selected Users
        </button>
    </div>
    <!--end::Actions-->
</div>
<!--end::Results-->
                        <!--begin::Empty-->
<div data-kt-search-element="empty" class="text-center d-none">
    <!--begin::Message-->
    <div class="fw-semibold py-10">
        <div class="text-gray-600 fs-3 mb-2">No users found</div>

        <div class="text-muted fs-6">Try to search by username, full name or email...</div>
    </div>
    <!--end::Message-->

    <!--begin::Illustration-->
    <div class="text-center px-5">
        <img src="../assets/media/illustrations/sketchy-1/1.png" alt="" class="w-100 h-200px h-sm-325px"/>        
    </div>
    <!--end::Illustration-->
</div>
<!--end::Empty-->                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--end::Search-->
            </div>
            <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
</div>
<!--end::Modal - Users Search-->
<!--begin::Modal - Invite Friends-->
<div class="modal fade" id="kt_modal_invite_friends" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
            <!--begin::Modal header-->
            <div class="modal-header pb-0 border-0 justify-content-end">
                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
</svg>

</span>
<!--end::Svg Icon-->                </div>
                <!--end::Close-->
            </div>
            <!--begin::Modal header-->

            <!--begin::Modal body-->
            <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                <!--begin::Heading-->
                <div class="text-center mb-13">
                    {/* <!--begin::Title--> */}
                    <h1 class="mb-3">Invite a Friend</h1>
                    {/* <!--end::Title--> */}

                    <!--begin::Description-->
                    <div class="text-muted fw-semibold fs-5">
                        If you need more info, please check out
                        <a href="#" class="link-primary fw-bold">FAQ Page</a>.
                    </div>
                    <!--end::Description-->
                </div>
                <!--end::Heading-->

                <!--begin::Google Contacts Invite-->
                <div class="btn btn-light-primary fw-bold w-100 mb-8">
                    <img alt="Logo" src="../assets/media/svg/brand-logos/google-icon.svg" class="h-20px me-3"/>
                    Invite Gmail Contacts
                </div>
                <!--end::Google Contacts Invite-->

                <!--begin::Separator-->
                <div class="separator d-flex flex-center mb-8">
                    <span class="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">or</span>
                </div>
                <!--end::Separator-->

                <!--begin::Textarea-->
                <textarea class="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here">
                </textarea>
                <!--end::Textarea-->

                <!--begin::Users-->
                <div class="mb-10">
                    <!--begin::Heading-->
                    <div class="fs-6 fw-semibold mb-2">Your Invitations</div>
                    <!--end::Heading-->

                    <!--begin::List-->
                    <div class="mh-300px scroll-y me-n7 pe-7">
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="../assets/media/avatars/300-6.jpg" />
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>

                                        <div class="fw-semibold text-muted">smith@kpmg.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" selected>Owner</option>
                                        <option value="3" >Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <span class="symbol-label bg-light-danger text-danger fw-semibold">
                                                M                                            </span>
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>

                                        <div class="fw-semibold text-muted">melody@altbox.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" selected>Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" >Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="../assets/media/avatars/300-1.jpg" />
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>

                                        <div class="fw-semibold text-muted">max@kt.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" selected>Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="../assets/media/avatars/300-5.jpg" />
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>

                                        <div class="fw-semibold text-muted">sean@dellito.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" selected>Owner</option>
                                        <option value="3" >Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="../assets/media/avatars/300-25.jpg" />
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>

                                        <div class="fw-semibold text-muted">brian@exchange.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" selected>Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <span class="symbol-label bg-light-warning text-warning fw-semibold">
                                                C                                            </span>
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>

                                        <div class="fw-semibold text-muted">mik@pex.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" selected>Owner</option>
                                        <option value="3" >Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="../assets/media/avatars/300-9.jpg" />
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>

                                        <div class="fw-semibold text-muted">f.mit@kpmg.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" selected>Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <span class="symbol-label bg-light-danger text-danger fw-semibold">
                                                O                                            </span>
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>

                                        <div class="fw-semibold text-muted">olivia@corpmail.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" selected>Owner</option>
                                        <option value="3" >Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <span class="symbol-label bg-light-primary text-primary fw-semibold">
                                                N                                            </span>
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>

                                        <div class="fw-semibold text-muted">owen.neil@gmail.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" selected>Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" >Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="../assets/media/avatars/300-23.jpg" />
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>

                                        <div class="fw-semibold text-muted">dam@consilting.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" selected>Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <span class="symbol-label bg-light-danger text-danger fw-semibold">
                                                E                                            </span>
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>

                                        <div class="fw-semibold text-muted">emma@intenso.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" selected>Owner</option>
                                        <option value="3" >Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="../assets/media/avatars/300-12.jpg" />
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>

                                        <div class="fw-semibold text-muted">ana.cf@limtel.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" selected>Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" >Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <span class="symbol-label bg-light-info text-info fw-semibold">
                                                A                                            </span>
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>

                                        <div class="fw-semibold text-muted">robert@benko.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details-->

                                <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" selected>Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="../assets/media/avatars/300-13.jpg" />
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>

                                        <div class="fw-semibold text-muted">miller@mapple.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details--> */}

                                {/* <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" selected>Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <span class="symbol-label bg-light-success text-success fw-semibold">
                                                L                                            </span>
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>

                                        <div class="fw-semibold text-muted">lucy.m@fentech.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details--> */}

                                {/* <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" selected>Owner</option>
                                        <option value="3" >Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="../assets/media/avatars/300-21.jpg" />
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>

                                        <div class="fw-semibold text-muted">ethan@loop.com.au</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details--> */}

                                {/* <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" selected>Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" >Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                                                                {/* <!--begin::User--> */}
                            <div class="d-flex flex-stack py-4 ">
                                {/* <!--begin::Details--> */}
                                <div class="d-flex align-items-center">
                                    {/* <!--begin::Avatar--> */}
                                    <div class="symbol symbol-35px symbol-circle">
                                                                                    <span class="symbol-label bg-light-info text-info fw-semibold">
                                                A                                            </span>
                                                                            </div>
                                    {/* <!--end::Avatar--> */}

                                    {/* <!--begin::Details--> */}
                                    <div class="ms-5">
                                        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>

                                        <div class="fw-semibold text-muted">robert@benko.com</div>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::Details--> */}

                                {/* <!--begin::Access menu--> */}
                                <div class="ms-2 w-100px">
                                    <select class="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                        <option value="1" >Guest</option>
                                        <option value="2" >Owner</option>
                                        <option value="3" selected>Can Edit</option>
                                    </select>
                                </div>
                                {/* <!--end::Access menu--> */}
                            </div>
                            {/* <!--end::User--> */}
                                            </div>
                    {/* <!--end::List--> */}
                </div>
                {/* <!--end::Users--> */}

                {/* <!--begin::Notice--> */}
                <div class="d-flex flex-stack">
                    {/* <!--begin::Label-->                         */}
                    <div class="me-5 fw-semibold">
                        <label class="fs-6">Adding Users by Team Members</label>
                        <div class="fs-7 text-muted">If you need more info, please check budget planning</div>
                    </div>
                    {/* <!--end::Label-->      */}

                    {/* <!--begin::Switch--> */}
                    <label class="form-check form-switch form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1" checked="checked"/>
                        
                        <span class="form-check-label fw-semibold text-muted">
                            Allowed
                        </span>
                    </label>
                    {/* <!--end::Switch--> */}
                </div>
                {/* <!--end::Notice--> */}
            </div>
            {/* <!--end::Modal body--> */}
        </div>
        {/* <!--end::Modal content--> */}
    </div>
    {/* <!--end::Modal dialog--> */}
</div>
{/* <!--end::Modal - Invite Friend-->            <!--end::Modals--> */}
        

        
            
 </div>
    {/* // <!--end::Body--> */}

    </>
  )
}

export default Home