import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            {/*begin::Body*/}
            <div id="kt_body" className="app-blank bgi-size-cover bgi-position-center bgi-no-repeat" style={{ backgroundImage: "url('../../assets/media/auth/bg1.jpg')" }}>
                {/*begin::Theme mode setup on page load*/}

                {/*end::Theme mode setup on page load*/}

                {/*begin::Root*/}
                <div className="d-flex flex-column flex-root" id="kt_app_root">
                    {/*begin::Page bg image*/}
                    {/* <style>
                        body {
                            background - image: url('../../assets/media/auth/bg1.jpg');
    }

                        [data-bs-theme="dark"] body {
                            background - image: url('../../assets/media/auth/bg1-dark.jpg');
    }
                    </style> */}
                    {/*end::Page bg image*/}


                    {/*begin::Authentication - Signup Welcome Message */}
                    <div className="d-flex flex-column flex-center flex-column-fluid">
                        {/*begin::Content*/}
                        <div className="d-flex flex-column flex-center text-center p-10">
                            {/*begin::Wrapper*/}
                            <div className="card card-flush w-lg-650px py-5">
                                <div className="card-body py-15 py-lg-20">

                                    {/*begin::Title*/}
                                    <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">
                                        Oops!
                                    </h1>
                                    {/*end::Title*/}

                                    {/*begin::Text*/}
                                    <div className="fw-semibold fs-6 text-gray-500 mb-7">
                                        We can't find that page.
                                    </div>
                                    {/*end::Text*/}

                                    {/*begin::Illustration*/}
                                    <div className="mb-3">
                                        <img src="../../assets/media/auth/404-error.png" className="mw-100 mh-300px theme-light-show" alt="" />
                                        <img src="../../assets/media/auth/404-error-dark.png" className="mw-100 mh-300px theme-dark-show" alt="" />
                                    </div>
                                    {/*end::Illustration*/}

                                    {/*begin::Link*/}
                                    <div className="mb-0">
                                        <NavLink to="/auth/home" className="btn btn-sm btn-primary">Return Home</NavLink>
                                    </div>
                                    {/*end::Link*/}

                                </div>
                            </div>
                            {/*end::Wrapper*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*end::Authentication - Signup Welcome Message*/}
                </div>
                {/*end::Root*/}

            </div>
            {/*end::Body*/}
        </>
    )
}

export default Error404