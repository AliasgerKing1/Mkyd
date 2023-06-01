                                 /*eslint-disable */
import React from 'react'

const ProfileHome = () => {
    return (
        <>
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
                                <NavLink to="/auth/profile">
                            <div className="text-center">
                                {/*begin::Name*/}
                                <a className="text-gray-800 fw-bold text-hover-primary fs-4">
                                {state2 && state2.name}
                                </a>
                                {/*end::Name*/}

                                {/*begin::Position*/}
                                <span className="text-muted d-block fw-semibold">Grade 8, AE3 Student</span>
                                {/*end::Position*/}
                            </div>
                                </NavLink>
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
                                <li className="nav-item mt-5" onClick={() => setChLink(1)}>
                                    <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${chLink == 1 ? "active" : ""}`} href="#">
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
                                <li className="nav-item mt-5" onClick={() => setChLink(2)}>
                                    <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${chLink == 2 ? "active" : ""}`} href="#">
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
                                <li className="nav-item mt-5" onClick={() => setChLink(3)}>
                                    <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${chLink == 3 ? "active" : ""}`} href="#">
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
                                <li className="nav-item mt-5" onClick={() => setChLink(4)}>
                                    <a className={`nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 ${chLink == 4 ? "active" : ""}`} href="#">
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
        </>
    )
}

export default ProfileHome