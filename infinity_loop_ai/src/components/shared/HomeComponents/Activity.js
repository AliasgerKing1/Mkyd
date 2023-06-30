/*eslint-disable */
import React from 'react'

const Activity = () => {
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
    {/*begin::Timeline*/}
    <div className="card">
      {/*begin::Card head*/}
      <div className="card-header card-header-stretch">
        {/*begin::Title*/}
        <div className="card-title d-flex align-items-center">            
          <i className="ki-outline ki-calendar-8 fs-1 text-primary me-3 lh-0" /> 	
          <h3 className="fw-bold m-0 text-gray-800">Jan 23, 2023</h3>
        </div>
        {/*end::Title*/}
        {/*begin::Toolbar*/}
        <div className="card-toolbar m-0">
          {/*begin::Tab nav*/}
          <ul className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bold" role="tablist">
            <li className="nav-item" role="presentation">
              <a id="kt_activity_today_tab" className="nav-link justify-content-center text-active-gray-800 active" data-bs-toggle="tab" role="tab" href="#kt_activity_today" aria-selected="true">
                Today
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a id="kt_activity_week_tab" className="nav-link justify-content-center text-active-gray-800" data-bs-toggle="tab" role="tab" href="#kt_activity_week" aria-selected="false" tabIndex={-1}>
                Week
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a id="kt_activity_month_tab" className="nav-link justify-content-center text-active-gray-800" data-bs-toggle="tab" role="tab" href="#kt_activity_month" aria-selected="false" tabIndex={-1}>
                Month
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a id="kt_activity_year_tab" className="nav-link justify-content-center text-active-gray-800 text-hover-gray-800" data-bs-toggle="tab" role="tab" href="#kt_activity_year" aria-selected="false" tabIndex={-1}>
                2023                  </a>
            </li>
          </ul>
          {/*end::Tab nav*/}
        </div>
        {/*end::Toolbar*/}
      </div>
      {/*end::Card head*/}
      {/*begin::Card body*/}
      <div className="card-body">
        {/*begin::Tab Content*/}
        <div className="tab-content">
          {/*begin::Tab panel*/}
          <div id="kt_activity_today" className="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
            {/*begin::Timeline*/}
            <div className="timeline">
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-message-text-2 fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Nina Nilson" data-bs-original-title="Nina Nilson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-14.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                  {/*begin::Timeline details*/}
                  <div className="overflow-auto pb-5">
                    {/*begin::Record*/}
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">  
                      {/*begin::Title*/}                                   
                      <a href="/metronic8/demo27/../demo27/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>                                  
                      {/*end::Title*/}
                      {/*begin::Label*/}
                      <div className="min-w-175px pe-2">
                        <span className="badge badge-light text-muted">Application Design</span>
                      </div>
                      {/*end::Label*/}
                      {/*begin::Users*/}
                      <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                        {/*begin::User*/}
                        <div className="symbol symbol-circle symbol-25px">
                          <img src="/assets/media/avatars/300-2.jpg" alt="img" />
                        </div>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <div className="symbol symbol-circle symbol-25px">
                          <img src="/assets/media/avatars/300-14.jpg" alt="img" />
                        </div>  
                        {/*end::User*/}                                  
                        {/*begin::User*/}
                        <div className="symbol symbol-circle symbol-25px">
                          <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
                        </div>
                        {/*end::User*/}
                      </div>
                      {/*end::Users*/}                                     
                      {/*begin::Progress*/}
                      <div className="min-w-125px pe-2">
                        <span className="badge badge-light-primary">In Progress</span>
                      </div>
                      {/*end::Progress*/}
                      {/*begin::Action*/}
                      <a href="/metronic8/demo27/../demo27/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>    
                      {/*end::Action*/}                                
                    </div>
                    {/*end::Record*/}
                    {/*begin::Record*/}
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">  
                      {/*begin::Title*/}                                   
                      <a href="/metronic8/demo27/../demo27/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>                                  
                      {/*end::Title*/}
                      {/*begin::Label*/}
                      <div className="min-w-175px">
                        <span className="badge badge-light text-muted">CRM System Development</span>
                      </div>
                      {/*end::Label*/}
                      {/*begin::Users*/}
                      <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                        {/*begin::User*/}
                        <div className="symbol symbol-circle symbol-25px">
                          <img src="/assets/media/avatars/300-20.jpg" alt="img" />
                        </div>
                        {/*end::User*/}                               
                        {/*begin::User*/}
                        <div className="symbol symbol-circle symbol-25px">
                          <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
                        </div>
                        {/*end::User*/}
                      </div>
                      {/*end::Users*/}                                     
                      {/*begin::Progress*/}
                      <div className="min-w-125px">
                        <span className="badge badge-light-success">Completed</span>
                      </div>
                      {/*end::Progress*/}
                      {/*begin::Action*/}
                      <a href="/metronic8/demo27/../demo27/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>    
                      {/*end::Action*/}                                
                    </div>
                    {/*end::Record*/}
                  </div>
                  {/*end::Timeline details*/}
                </div>
                {/*end::Timeline content*/}    
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-flag fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}       
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n2">
                  {/*begin::Timeline heading*/}
                  <div className="overflow-auto pe-3">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Alan Nilson" data-bs-original-title="Alan Nilson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-1.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/} 
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-disconnect fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="mb-5 pe-3">
                    {/*begin::Title*/}
                    <a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Jan Hummer" data-bs-original-title="Jan Hummer" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-23.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                  {/*begin::Timeline details*/}
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">  
                        {/*begin::Icon*/}                                  
                        <img alt className="w-30px me-3" src="/assets/media/svg/files/pdf.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="/metronic8/demo27/../demo27/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">1.9mb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*begin::Info*/} 
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">   
                        {/*begin::Icon*/}                                  
                        <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="/assets/media/svg/files/doc.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">18kb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*end::Info*/} 
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center">   
                        {/*begin::Icon*/}                                  
                        <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="/assets/media/svg/files/css.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">20mb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*end::Icon*/} 
                      </div>
                      {/*end::Item*/}
                    </div>
                  </div>
                  {/*end::Timeline details*/}
                </div>
                {/*end::Timeline content*/}    
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-abstract-26 fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      Task <a href="#" className="text-primary fw-bold me-1">#45890</a>  
                      merged with <a href="#" className="text-primary fw-bold me-1">#45890</a>  in “Ads Pro Admin Dashboard project:
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Nina Nilson" data-bs-original-title="Nina Nilson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-14.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/}    
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-pencil fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Marcus Dotson" data-bs-original-title="Marcus Dotson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-2.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                  {/*begin::Timeline details*/}
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                      {/*begin::Item*/}
                      <div className="overlay me-10">  
                        {/*begin::Image*/}                                      
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-29.jpg" />  
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>   
                        {/*end::Link*/}                                     
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="overlay me-10">   
                        {/*begin::Image*/}                                     
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-31.jpg" /> 
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>        
                        {/*end::Link*/}                                
                      </div>
                      {/*end::Item*/}                        
                      {/*begin::Item*/}
                      <div className="overlay">   
                        {/*begin::Image*/}                                     
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-40.jpg" />
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>   
                        {/*end::Link*/}                                     
                      </div>
                      {/*end::Item*/}
                    </div>
                  </div>
                  {/*end::Timeline details*/}
                </div>
                {/*end::Timeline content*/}  
              </div>
              {/*end::Timeline item*/}    
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-sms fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      New case <a href="#" className="text-primary fw-bold me-1">#67890</a> 
                      is assigned to you in Multi-platform Database Design project
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="overflow-auto pb-5">
                      {/*begin::Wrapper*/}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/*begin::Info*/}
                        <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                        {/*end::Info*/}
                        {/*begin::User*/}
                        <a href="#" className="text-primary fw-bold me-1">Alice Tan</a>
                        {/*end::User*/} 
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/}           
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-pencil fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">You have received a new order:</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Robert Rich" data-bs-original-title="Robert Rich" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-4.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                  {/*begin::Timeline details*/}
                  <div className="overflow-auto pb-5">
                    {/*begin::Notice*/}
                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                      {/*begin::Icon*/}
                      <i className="ki-outline ki-devices-2 fs-2tx text-primary me-4" />        {/*end::Icon*/}
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                        {/*begin::Content*/}
                        <div className="mb-3 mb-md-0 fw-semibold">
                          <h4 className="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
                          <div className="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
                        </div>
                        {/*end::Content*/}
                        {/*begin::Action*/}
                        <a href="#" className="btn btn-primary px-6 align-self-center text-nowrap"> 
                          Proceed          </a>
                        {/*end::Action*/}
                      </div>
                      {/*end::Wrapper*/}  
                    </div>
                    {/*end::Notice*/}
                  </div>
                  {/*end::Timeline details*/}
                </div>
                {/*end::Timeline content*/}   
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-basket fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      New order <a href="#" className="text-primary fw-bold me-1">#67890</a> 
                      is placed for Workshow Planning &amp; Budget Estimation
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/} 
              </div>
              {/*end::Timeline item*/} </div>
            {/*end::Timeline*/}          </div>
          {/*end::Tab panel*/}
          {/*begin::Tab panel*/}
          <div id="kt_activity_week" className="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_week_tab">
            {/*begin::Timeline*/}
            <div className="timeline">
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-flag fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}       
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n2">
                  {/*begin::Timeline heading*/}
                  <div className="overflow-auto pe-3">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Alan Nilson" data-bs-original-title="Alan Nilson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-1.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/} 
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-disconnect fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="mb-5 pe-3">
                    {/*begin::Title*/}
                    <a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Jan Hummer" data-bs-original-title="Jan Hummer" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-23.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                  {/*begin::Timeline details*/}
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">  
                        {/*begin::Icon*/}                                  
                        <img alt className="w-30px me-3" src="/assets/media/svg/files/pdf.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="/metronic8/demo27/../demo27/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">1.9mb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*begin::Info*/} 
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">   
                        {/*begin::Icon*/}                                  
                        <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="/assets/media/svg/files/doc.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">18kb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*end::Info*/} 
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center">   
                        {/*begin::Icon*/}                                  
                        <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="/assets/media/svg/files/css.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">20mb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*end::Icon*/} 
                      </div>
                      {/*end::Item*/}
                    </div>
                  </div>
                  {/*end::Timeline details*/}
                </div>
                {/*end::Timeline content*/}    
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-abstract-26 fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      Task <a href="#" className="text-primary fw-bold me-1">#45890</a>  
                      merged with <a href="#" className="text-primary fw-bold me-1">#45890</a>  in “Ads Pro Admin Dashboard project:
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Nina Nilson" data-bs-original-title="Nina Nilson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-14.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/}    
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-pencil fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Marcus Dotson" data-bs-original-title="Marcus Dotson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-2.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                  {/*begin::Timeline details*/}
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                      {/*begin::Item*/}
                      <div className="overlay me-10">  
                        {/*begin::Image*/}                                      
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-29.jpg" />  
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>   
                        {/*end::Link*/}                                     
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="overlay me-10">   
                        {/*begin::Image*/}                                     
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-31.jpg" /> 
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>        
                        {/*end::Link*/}                                
                      </div>
                      {/*end::Item*/}                        
                      {/*begin::Item*/}
                      <div className="overlay">   
                        {/*begin::Image*/}                                     
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-40.jpg" />
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>   
                        {/*end::Link*/}                                     
                      </div>
                      {/*end::Item*/}
                    </div>
                  </div>
                  {/*end::Timeline details*/}
                </div>
                {/*end::Timeline content*/}  
              </div>
              {/*end::Timeline item*/}    
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-sms fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      New case <a href="#" className="text-primary fw-bold me-1">#67890</a> 
                      is assigned to you in Multi-platform Database Design project
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="overflow-auto pb-5">
                      {/*begin::Wrapper*/}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/*begin::Info*/}
                        <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                        {/*end::Info*/}
                        {/*begin::User*/}
                        <a href="#" className="text-primary fw-bold me-1">Alice Tan</a>
                        {/*end::User*/} 
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/}           
              </div>
              {/*end::Timeline item*/}</div>
            {/*end::Timeline*/}          </div>
          {/*end::Tab panel*/}
          {/*begin::Tab panel*/}
          <div id="kt_activity_month" className="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_month_tab">
            {/*begin::Timeline*/}
            <div className="timeline">
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-pencil fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Marcus Dotson" data-bs-original-title="Marcus Dotson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-2.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                  {/*begin::Timeline details*/}
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                      {/*begin::Item*/}
                      <div className="overlay me-10">  
                        {/*begin::Image*/}                                      
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-29.jpg" />  
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>   
                        {/*end::Link*/}                                     
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="overlay me-10">   
                        {/*begin::Image*/}                                     
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-31.jpg" /> 
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>        
                        {/*end::Link*/}                                
                      </div>
                      {/*end::Item*/}                        
                      {/*begin::Item*/}
                      <div className="overlay">   
                        {/*begin::Image*/}                                     
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-40.jpg" />
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>   
                        {/*end::Link*/}                                     
                      </div>
                      {/*end::Item*/}
                    </div>
                  </div>
                  {/*end::Timeline details*/}
                </div>
                {/*end::Timeline content*/}  
              </div>
              {/*end::Timeline item*/}    
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-sms fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      New case <a href="#" className="text-primary fw-bold me-1">#67890</a> 
                      is assigned to you in Multi-platform Database Design project
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="overflow-auto pb-5">
                      {/*begin::Wrapper*/}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/*begin::Info*/}
                        <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                        {/*end::Info*/}
                        {/*begin::User*/}
                        <a href="#" className="text-primary fw-bold me-1">Alice Tan</a>
                        {/*end::User*/} 
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/}           
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-basket fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      New order <a href="#" className="text-primary fw-bold me-1">#67890</a> 
                      is placed for Workshow Planning &amp; Budget Estimation
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/} 
              </div>
              {/*end::Timeline item*/}    
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-flag fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}       
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n2">
                  {/*begin::Timeline heading*/}
                  <div className="overflow-auto pe-3">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Alan Nilson" data-bs-original-title="Alan Nilson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-1.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/} 
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-disconnect fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="mb-5 pe-3">
                    {/*begin::Title*/}
                    <a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Jan Hummer" data-bs-original-title="Jan Hummer" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-23.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                  {/*begin::Timeline details*/}
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">  
                        {/*begin::Icon*/}                                  
                        <img alt className="w-30px me-3" src="/assets/media/svg/files/pdf.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="/metronic8/demo27/../demo27/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">1.9mb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*begin::Info*/} 
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">   
                        {/*begin::Icon*/}                                  
                        <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="/assets/media/svg/files/doc.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">18kb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*end::Info*/} 
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center">   
                        {/*begin::Icon*/}                                  
                        <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="/assets/media/svg/files/css.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">20mb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*end::Icon*/} 
                      </div>
                      {/*end::Item*/}
                    </div>
                  </div>
                  {/*end::Timeline details*/}
                </div>
                {/*end::Timeline content*/}    
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-abstract-26 fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      Task <a href="#" className="text-primary fw-bold me-1">#45890</a>  
                      merged with <a href="#" className="text-primary fw-bold me-1">#45890</a>  in “Ads Pro Admin Dashboard project:
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Nina Nilson" data-bs-original-title="Nina Nilson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-14.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/}    
              </div>
              {/*end::Timeline item*/}</div>
            {/*end::Timeline*/}          </div>
          {/*end::Tab panel*/}
          {/*begin::Tab panel*/}
          <div id="kt_activity_year" className="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_year_tab">
            {/*begin::Timeline*/}
            <div className="timeline">
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-disconnect fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="mb-5 pe-3">
                    {/*begin::Title*/}
                    <a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Jan Hummer" data-bs-original-title="Jan Hummer" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-23.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                  {/*begin::Timeline details*/}
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">  
                        {/*begin::Icon*/}                                  
                        <img alt className="w-30px me-3" src="/assets/media/svg/files/pdf.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="/metronic8/demo27/../demo27/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">1.9mb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*begin::Info*/} 
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">   
                        {/*begin::Icon*/}                                  
                        <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="/assets/media/svg/files/doc.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">18kb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*end::Info*/} 
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex flex-aligns-center">   
                        {/*begin::Icon*/}                                  
                        <img alt="/metronic8/demo27/../demo27/apps/projects/project.html" className="w-30px me-3" src="/assets/media/svg/files/css.svg" />
                        {/*end::Icon*/} 
                        {/*begin::Info*/} 
                        <div className="ms-1 fw-semibold">
                          {/*begin::Desc*/} 
                          <a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                          {/*end::Desc*/} 
                          {/*begin::Number*/} 
                          <div className="text-gray-400">20mb</div>
                          {/*end::Number*/} 
                        </div>
                        {/*end::Icon*/} 
                      </div>
                      {/*end::Item*/}
                    </div>
                  </div>
                  {/*end::Timeline details*/}
                </div>
                {/*end::Timeline content*/}    
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-abstract-26 fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      Task <a href="#" className="text-primary fw-bold me-1">#45890</a>  
                      merged with <a href="#" className="text-primary fw-bold me-1">#45890</a>  in “Ads Pro Admin Dashboard project:
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Nina Nilson" data-bs-original-title="Nina Nilson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-14.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/}    
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-pencil fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Marcus Dotson" data-bs-original-title="Marcus Dotson" data-kt-initialized={1}>
                        <img src="/assets/media/avatars/300-2.jpg" alt="img" />
                      </div>  
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                  {/*begin::Timeline details*/}
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                      {/*begin::Item*/}
                      <div className="overlay me-10">  
                        {/*begin::Image*/}                                      
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-29.jpg" />  
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>   
                        {/*end::Link*/}                                     
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="overlay me-10">   
                        {/*begin::Image*/}                                     
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-31.jpg" /> 
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>        
                        {/*end::Link*/}                                
                      </div>
                      {/*end::Item*/}                        
                      {/*begin::Item*/}
                      <div className="overlay">   
                        {/*begin::Image*/}                                     
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/assets/media/stock/600x400/img-40.jpg" />
                        </div>
                        {/*end::Image*/}
                        {/*begin::Link*/}
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>                                         
                        </div>   
                        {/*end::Link*/}                                     
                      </div>
                      {/*end::Item*/}
                    </div>
                  </div>
                  {/*end::Timeline details*/}
                </div>
                {/*end::Timeline content*/}  
              </div>
              {/*end::Timeline item*/}    
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-sms fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mb-10 mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      New case <a href="#" className="text-primary fw-bold me-1">#67890</a> 
                      is assigned to you in Multi-platform Database Design project
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="overflow-auto pb-5">
                      {/*begin::Wrapper*/}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/*begin::Info*/}
                        <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                        {/*end::Info*/}
                        {/*begin::User*/}
                        <a href="#" className="text-primary fw-bold me-1">Alice Tan</a>
                        {/*end::User*/} 
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/}           
              </div>
              {/*end::Timeline item*/}
              {/*begin::Timeline item*/}
              <div className="timeline-item">
                {/*begin::Timeline line*/}
                <div className="timeline-line w-40px" />
                {/*end::Timeline line*/}
                {/*begin::Timeline icon*/}
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className="ki-outline ki-basket fs-2 text-gray-500" />      </div>
                </div>
                {/*end::Timeline icon*/}
                {/*begin::Timeline content*/}
                <div className="timeline-content mt-n1">
                  {/*begin::Timeline heading*/}
                  <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-semibold mb-2">
                      New order <a href="#" className="text-primary fw-bold me-1">#67890</a> 
                      is placed for Workshow Planning &amp; Budget Estimation
                    </div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>
                      {/*end::User*/} 
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Timeline heading*/}
                </div>
                {/*end::Timeline content*/} 
              </div>
              {/*end::Timeline item*/} </div>
            {/*end::Timeline*/}          </div>
          {/*end::Tab panel*/}
        </div>
        {/*end::Tab Content*/}
      </div>
      {/*end::Card body*/}
    </div>
    {/*end::Timeline*/}
  </div>
</>
  )
}

export default Activity
