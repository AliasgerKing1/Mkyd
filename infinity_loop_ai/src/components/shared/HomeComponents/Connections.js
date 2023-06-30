/*eslint-disable */
import React from 'react'

const Connections = () => {
  return (
    <>
 <div className="w-100 flex-lg-row-fluid mx-lg-13">
  {/*begin::Mobile toolbar*/}
  <div className="d-flex d-lg-none align-items-center justify-content-end mb-10">
    <div className="d-flex align-items-center gap-2">
      <div className="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_social_start_sidebar_toggle">
        <i className="ki-outline ki-profile-circle fs-1" />      </div>
      <div className="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_social_end_sidebar_toggle">
        <i className="ki-outline ki-scroll fs-1" />      </div>
    </div>
  </div>
  {/*end::Mobile toolbar*/}      
  {/*begin::Followers toolbar*/}
  <div className="d-flex flex-wrap flex-stack mb-6">
    {/*begin::Title*/}
    <h3 className="text-gray-800 fw-bold my-2">
      My Connections 
      <span className="fs-6 text-gray-400 fw-semibold ms-1">(29)</span>
    </h3>
    {/*end::Title*/}
    {/*begin::Controls*/}
    <div className="d-flex my-2">
      {/*begin::Select*/}
      <select name="status" data-control="select2" data-hide-search="true" className="form-select form-select-sm form-select-solid w-125px select2-hidden-accessible" data-select2-id="select2-data-1-ebnb" tabIndex={-1} aria-hidden="true" data-kt-initialized={1}>
        <option value="Active" selected data-select2-id="select2-data-3-jths">Active</option>
        <option value="Approved">In Progress</option>
        <option value="Declined">To Do</option>
        <option value="In Progress">Completed</option>
      </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-2-j68b" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-sm form-select-solid w-125px" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-status-yf-container" aria-controls="select2-status-yf-container"><span className="select2-selection__rendered" id="select2-status-yf-container" role="textbox" aria-readonly="true" title="Active">Active</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
      {/*end::Select*/}
    </div>
    {/*end::Controls*/}
  </div>
  {/*end::Followers toolbar*/}
  {/*begin::Row*/}
  <div className="row g-6 mb-6 g-xl-9 mb-xl-9">
    {/*begin::Followers*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src="/assets/media//avatars/300-11.jpg" alt="image" />
            <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3" />                  </div>
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Patric Watson</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Art Director at Novica Co.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light-primary btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-check following fs-3" /> 	
            <i className="ki-outline ki-plus follow fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Following</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                  </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src="/assets/media//avatars/300-6.jpg" alt="image" />
          </div>
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Olivia Larson</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Art Director at Seal Inc.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-plus follow fs-3" /> 	
            <i className="ki-outline ki-check following fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Follow</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                        
          </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <span className="symbol-label fs-2x fw-semibold text-warning bg-light-warning">A</span>
            <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3" />                  </div>                    
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Adam Williams</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">System Arcitect at Wolto Co.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light-primary btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-check following fs-3" /> 	
            <i className="ki-outline ki-plus follow fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Following</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                  </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <span className="symbol-label fs-2x fw-semibold text-info bg-light-info">P</span>
            <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3" />                  </div>                    
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Paul Marcus</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Art Director at Novica Co.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light-primary btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-check following fs-3" /> 	
            <i className="ki-outline ki-plus follow fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Following</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                  </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <span className="symbol-label fs-2x fw-semibold text-success bg-light-success">N</span>
          </div>                    
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Neil Owen</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Accountant at Numbers Co.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-plus follow fs-3" /> 	
            <i className="ki-outline ki-check following fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Follow</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                        
          </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <span className="symbol-label fs-2x fw-semibold text-primary bg-light-primary">S</span>
            <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3" />                  </div>                    
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Sean Paul</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Developer at Loop Inc</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-plus follow fs-3" /> 	
            <i className="ki-outline ki-check following fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Follow</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                        
          </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src="/assets/media//avatars/300-1.jpg" alt="image" />
          </div>
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Kitona Johnson</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Web Designer at Nextop Ltd.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light-primary btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-check following fs-3" /> 	
            <i className="ki-outline ki-plus follow fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Following</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                  </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src="/assets/media//avatars/300-14.jpg" alt="image" />
          </div>
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Robert Doe</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Marketing Analytic at Avito Ltd.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-plus follow fs-3" /> 	
            <i className="ki-outline ki-check following fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Follow</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                        
          </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src="/assets/media//avatars/300-12.jpg" alt="image" />
          </div>
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Soul Jacob</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Art Director at Novica Co.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-plus follow fs-3" /> 	
            <i className="ki-outline ki-check following fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Follow</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                        
          </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src="/assets/media//avatars/300-7.jpg" alt="image" />
            <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3" />                  </div>
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Nina Strong</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">CTO at Kilp Ltd.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light-primary btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-check following fs-3" /> 	
            <i className="ki-outline ki-plus follow fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Following</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                  </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src="/assets/media//avatars/300-11.jpg" alt="image" />
            <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3" />                  </div>
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Patric Watson</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Art Director at Novica Co.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light-primary btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-check following fs-3" /> 	
            <i className="ki-outline ki-plus follow fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Following</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                  </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src="/assets/media//avatars/300-6.jpg" alt="image" />
          </div>
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Olivia Larson</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Art Director at Seal Inc.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-plus follow fs-3" /> 	
            <i className="ki-outline ki-check following fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Follow</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                        
          </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*end::Followers*/}
  </div>
  {/*end::Row*/}
  {/*begin::Row(for show more)*/}
  <div className="row g-6 mb-6 g-xl-9 mb-xl-9 d-none" id="kt_followers_show_more_cards">
    {/*begin::Followers*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src="/assets/media//avatars/300-11.jpg" alt="image" />
            <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3" />                  </div>
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Patric Watson</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Art Director at Novica Co.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light-primary btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-check following fs-3" /> 	
            <i className="ki-outline ki-plus follow fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Following</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                  </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src="/assets/media//avatars/300-6.jpg" alt="image" />
          </div>
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Olivia Larson</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Art Director at Seal Inc.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-plus follow fs-3" /> 	
            <i className="ki-outline ki-check following fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Follow</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                        
          </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <span className="symbol-label fs-2x fw-semibold text-warning bg-light-warning">A</span>
            <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3" />                  </div>                    
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Adam Williams</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">System Arcitect at Wolto Co.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light-primary btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-check following fs-3" /> 	
            <i className="ki-outline ki-plus follow fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Following</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                  </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <span className="symbol-label fs-2x fw-semibold text-info bg-light-info">P</span>
            <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3" />                  </div>                    
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Paul Marcus</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Art Director at Novica Co.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light-primary btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-check following fs-3" /> 	
            <i className="ki-outline ki-plus follow fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Following</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                  </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <span className="symbol-label fs-2x fw-semibold text-success bg-light-success">N</span>
          </div>                    
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Neil Owen</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Accountant at Numbers Co.</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-plus follow fs-3" /> 	
            <i className="ki-outline ki-check following fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Follow</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                        
          </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-md-6">
      {/*begin::Card*/}
      <div className="card ">
        {/*begin::Card body*/}
        <div className="card-body d-flex flex-center flex-column py-9 px-5">
          {/*begin::Avatar*/}
          <div className="symbol symbol-65px symbol-circle mb-5">
            <span className="symbol-label fs-2x fw-semibold text-primary bg-light-primary">S</span>
            <div className="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3" />                  </div>                    
          {/*end::Avatar*/}
          {/*begin::Name*/}
          <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Sean Paul</a>
          {/*end::Name*/}
          {/*begin::Position*/}
          <div className="fw-semibold text-gray-400 mb-6">Developer at Loop Inc</div>
          {/*end::Position*/}
          {/*begin::Info*/}
          <div className="d-flex flex-center flex-wrap mb-5">
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$14,560</div>
              <div className="fw-semibold text-gray-400">Earnings</div>
            </div>
            {/*end::Stats*/}
            {/*begin::Stats*/}
            <div className="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bold text-gray-700">$236,400</div>
              <div className="fw-semibold text-gray-400">Sales</div>
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Info*/}
          {/*begin::Follow*/}
          <button className="btn btn-sm btn-light btn-flex btn-center" data-kt-follow-btn="true">
            <i className="ki-outline ki-plus follow fs-3" /> 	
            <i className="ki-outline ki-check following fs-3 d-none" /> 	
            {/*begin::Indicator label*/}
            <span className="indicator-label">
              Follow</span>
            {/*end::Indicator label*/}
            {/*begin::Indicator progress*/}
            <span className="indicator-progress">
              Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
            {/*end::Indicator progress*/}                        
          </button>
          {/*end::Follow*/}
        </div>
        {/*begin::Card body*/}
      </div>
      {/*begin::Card*/}
    </div>
    {/*end::Col*/}
    {/*end::Followers*/}
  </div>
  {/*end::Row*/}
  {/*begin::Show more*/}
  <div className="d-flex flex-center">
    <button className="btn btn-primary" id="kt_followers_show_more_button">
      {/*begin::Indicator label*/}
      <span className="indicator-label">
        Show more</span>
      {/*end::Indicator label*/}
      {/*begin::Indicator progress*/}
      <span className="indicator-progress">
        Please wait...    <span className="spinner-border spinner-border-sm align-middle ms-2" />
      </span>
      {/*end::Indicator progress*/}  </button>
  </div>
  {/*end::Show more*/}
</div>

    </>
  )
}

export default Connections
