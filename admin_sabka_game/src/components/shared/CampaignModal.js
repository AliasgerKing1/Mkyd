/*eslint-disable */
import React from 'react'

const CampaignModal = () => {
  return (
    <>
                    {/*begin::Modals*/}
            {/*begin::Modal - Create Campaign*/}
            <div className="modal fade" id="kt_modal_create_campaign" tabIndex="-1" aria-hidden="true">
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
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
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
                    <form className="mx-auto w-100 mw-600px pt-15 pb-10" noValidate="noValidate" id="kt_modal_create_campaign_stepper_form">
                        
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
                    background-image: url('/assets/media/svg/files/blank-image.svg');
                }

                [data-bs-theme="dark"] .image-input-placeholder {
                    background-image: url('/assets/media/svg/files/blank-image-dark.svg');
                }                
            </style> */}
            {/*end::Image input placeholder*/}

            {/*begin::Image input*/}
            <div className="image-input image-input-empty image-input-outline image-input-placeholder" style={{backgroundImage: "url('/assets/media/svg/files/blank-image.svg')"}} data-kt-image-input="true">
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
                        <input className="form-check-input me-3" name="user_role" type="radio" value="1" id="kt_modal_update_role_option_1"  />
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
                        <input className="form-check-input me-3" name="user_role" type="radio" value="2" id="kt_modal_update_role_option_2"  />
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
                        <input className="form-check-input me-3" name="user_role" type="radio" value="3" id="kt_modal_update_role_option_3"  />
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
                        <input className="form-check-input me-3" name="user_role" type="radio" value="4" id="kt_modal_update_role_option_4"  />
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
<path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z" fill="currentColor"/>
<path d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z" fill="currentColor"/>
<path d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z" fill="currentColor"/>
<path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"/>
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
            <input className="form-control d-flex align-items-center" value="" id="kt_modal_create_campaign_location" data-kt-flags-path="/metronic8/demo27/assets/media/flags/"/>
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
            <img src="/assets/media/illustrations/sketchy-1/9.png" alt="" className="mww-100 mh-350px"/>          
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
<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor"/>
<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor"/>
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
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"/>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"/>
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
<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"/>
<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"/>
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
{/*end::Modal - Create Campaign*/}{/*begin::Modal - Users Search*/}
<div className="modal fade" id="kt_modal_users_search" tabIndex="-1" aria-hidden="true">
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
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
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
                    <form data-kt-search-element="form" className="w-100 position-relative mb-5" autoComplete="off">	
                        {/*begin::Hidden input(Added to disable form autoComplete)*/}
                        <input type="hidden"/>
                        {/*end::Hidden input*/}

                        {/*begin::Icon*/}
                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
<span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"/>
<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}                        {/*end::Icon*/}

                        {/*begin::Input*/}
                        <input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input"/>
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
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15"/>
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
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16"/>
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
        <img src="/assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px"/>        
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
<div className="modal fade" id="kt_modal_invite_friends" tabIndex="-1" aria-hidden="true">
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
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"/>
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
                    <img alt="Logo" src="/assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3"/>
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
                        <input className="form-check-input" type="checkbox" value="1" checked="checked"/>
                        
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
    </>
  )
}

export default CampaignModal