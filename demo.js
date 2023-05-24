    {/*begin::Col*/}
    <div className="col-xl-8 mb-5 mb-xl-10">       
        
{/*begin::Chart widget 24*/}
<div className="card card-flush overflow-hidden h-xl-100">
    {/*begin::Header*/}
    <div className="card-header py-5">
        {/*begin::Title*/}
        <h3 className="card-title align-items-start flex-column">            
            <span className="card-label fw-bold text-dark">Human Resources</span>
            <span className="text-gray-400 mt-1 fw-semibold fs-6">Reports by states and ganders</span>
        </h3>
        {/*end::Title*/}

        {/*begin::Toolbar*/}
        <div className="card-toolbar">            
            {/*begin::Menu*/}
            <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" 
                data-kt-menu-trigger="click" 
                data-kt-menu-placement="bottom-end" 
                data-kt-menu-overflow="true">   
                                
                {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
<span className="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor"/>
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

    {/*begin::Card body*/}
    <div className="card-body pt-0">  
        {/* {/* begin::Chart */}
        <div id="kt_charts_widget_24" className="min-h-auto" style={{height: '300px'}}>
      <div style={{position: 'relative', height: '100%'}}>
        <div style={{position: 'absolute', width: '930px', height: '300px'}}>
          <div>
            <canvas style={{position: 'absolute', top: '0px', left: '0px', width: '930px', height: '300px'}} width="930" height="300"></canvas>
            <canvas style={{position: 'absolute', top: '0px', left: '0px', width: '930px', height: '300px'}} width="930" height="300"></canvas>
          </div>
        </div>
        <div className="am5-html-container" style={{position: 'absolute', pointerEvents: 'none', overflow: 'hidden', width: '930px', height: '300px'}}></div>
        <div className="am5-reader-container" role="alert" style={{zIndex: '-100000', opacity: '0', position: 'absolute', top: '0px'}}></div>
        <div className="am5-focus-container" style={{position: 'absolute', pointerEvents: 'none', top: '0px', left: '0px', overflow: 'hidden', width: '930px', height: '300px'}} role="application">
          <div style={{position: 'absolute', pointerEvents: 'none', top: '24px', left: '413px', width: '40px', height: '40px'}} role="button" aria-label="Zoom Out"></div>
        </div>
        <div className="am5-tooltip-container">
          <div style={{position: 'absolute', top: '-1000000px', opacity: '1e-7', pointerEvents: 'none'}} role="tooltip">Created using amCharts 5</div>
          <div style={{position: 'absolute', top: '-1000000px', opacity: '1e-7', pointerEvents: 'none'}} role="tooltip">Males, age 25 to 29: 10.99M (7.1%)</div>
        </div>
      </div>
    </div>
        {/*end::Chart*/} 
    </div>
    {/*end::Card body*/}
</div>
{/*end::Chart widget 24*/}

     </div>
    {/*end::Col*/}    


















        {/*begin::Col*/}
        <div className="col-xl-6 mb-5 mb-xl-10">
        {/*begin::Chart widget 15*/}
<div className="card card-flush h-xl-100">
    {/*begin::Header*/}
    <div className="card-header pt-7">
        {/*begin::Title*/}
        <h3 className="card-title align-items-start flex-column">
			<span className="card-label fw-bold text-dark">Author Sales</span>

			<span className="text-gray-400 pt-2 fw-semibold fs-6">Statistics by Countries</span>
		</h3>
        {/*end::Title*/}

        {/*begin::Toolbar*/}
        <div className="card-toolbar"> 
                            <div className="card-toolbar">   
                    <a href="#" className="btn btn-sm btn-light">PDF Report</a>             
                </div>
             

            {/*begin::Menu*/}
<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-100px py-4" data-kt-menu="true">
    {/*begin::Menu item*/}
    <div className="menu-item px-3">
        <a href="#" className="menu-link px-3">
            Remove
        </a>
    </div>
    {/*end::Menu item*/}
    
    {/*begin::Menu item*/}
    <div className="menu-item px-3">
        <a href="#" className="menu-link px-3">
            Mute
        </a>
    </div>
    {/*end::Menu item*/}

    {/*begin::Menu item*/}
    <div className="menu-item px-3">
        <a href="#" className="menu-link px-3">
            Settings
        </a>
    </div>
    {/*end::Menu item*/}
</div>
{/*end::Menu*/}
 
            {/*end::Menu*/}             
        </div>
        {/*end::Toolbar*/}
    </div>
    {/*end::Header*/}

    {/*begin::Body*/}
    <div className="card-body pt-5">
        {/*begin::Chart container*/}
        <div id="kt_charts_widget_15_chart" className="min-h-auto ps-4 pe-6 mb-3 h-300px">
        <div style={{position: 'relative', height: "100%"}}>
        <div style={{position: 'absolute', width: '674px', height: '300px'}}>
        <div>
        <canvas style={{position: 'absolute', top: '0px', left: '0px', width: '674px', height: '300px'}} width="674px" height="300px"></canvas>
        <canvas style={{position: 'absolute', top: '0px', left: '0px', width: '674px', height: '300px'}} width="674px" height="300px"></canvas>
        </div>
        </div>
        <div className="am5-html-container" style={{position: 'absolute', pointerEvents: 'none', overflow: 'hidden', width: '674px', height: '300px'}}>
        </div>
        <div className="am5-reader-container" role="alert" style={{zIndex: '-100000', opacity:'0', position: 'absolute', top: '0px',}}></div>
        <div className="am5-focus-container" style={{position: 'absolute', pointerEvents: 'none', top: '0px', left: '0px', overflow: 'hidden', width: '674px', height: '300px'}} role="application">
        <div style={{position: 'absolute', pointerEvents: 'none', top: '8px', left: '-48px', width: '40px', height: '40px'}} role="button" aria-label="Zoom Out"></div>
        </div>
        <div className="am5-tooltip-container">
        <div style={{position: 'absolute', top: '-1000000px', opacity: '1e-7', pointerEvents: 'none'}} role="tooltip">US: 725</div>
        </div>
        </div>
        </div>       
        {/*end::Chart container*/} 
    </div>
    {/*end::Body*/}
</div>
{/*end::Chart widget 15*/}
    </div>
    {/*end::Col*/}












        {/*begin::Logout*/}
        <a href="../authentication/flows/basic/sign-in.html" className="btn btn-sm btn-outline btn-flex btn-custom px-3">
        {/*begin::Svg Icon | path: icons/duotune/arrows/arr076.svg*/}
<span className="svg-icon svg-icon-3 me-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" width="12" height="2" rx="1" transform="matrix(-1 0 0 1 15.5 11)" fill="currentColor"/>
<path d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z" fill="currentColor"/>
<path d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z" fill="currentColor"/>
</svg>
</span>
{/*end::Svg Icon*/}         
        Logout
    </a>
    {/*end::Logout*/}



























    <div className="mb-0">
    {/*begin:Option*/}
    <label className="d-flex flex-stack mb-5 cursor-pointer">
        {/*begin:Label*/}
        <span className="d-flex align-items-center me-2">
            {/*begin::Icon*/}
            <span className="symbol symbol-50px me-6">
                <span className="symbol-label">
                    {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                    <span className={`svg-icon svg-icon-1 ${checkAccount == 1 ? "svg-icon-primary-600" : "svg-icon-gray-600"}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="currentColor" />
                        <path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="currentColor" />
                    </svg>
                    </span>
                    {/*end::Svg Icon*/}                        </span>
            </span>
            {/*end::Icon*/}

            {/*begin::Description*/}
            <span className="d-flex flex-column">
                <span className={`fw-bold text-hover-primary fs-5 ${checkAccount == 1 ? "text-primary" : "text-gray-800"}`}>Company Account</span>
                <span className={`fs-6 fw-semibold ${checkAccount == 1 ? "text-primary" : "text-muted"}`}>Use images to enhance your post flow</span>
            </span>
            {/*end:Description*/}
        </span>
        {/*end:Label*/}

        {/*begin:Input*/}
        <span className="form-check form-check-custom form-check-solid">
            <input className="form-check-input" type="radio" checked={checkAccount == 1 ? "checked" : ""} name="account_plan" value="1" onFocus={(e) => handleChange(e)} />
        </span>
        {/*end:Input*/}
    </label>
    {/*end::Option*/}

    {/*begin:Option*/}
    <label className="d-flex flex-stack mb-5 cursor-pointer">
        {/*begin:Label*/}
        <span className="d-flex align-items-center me-2">
            {/*begin::Icon*/}
            <span className="symbol symbol-50px me-6">
                <span className="symbol-label">
                    {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                    <span className={`svg-icon svg-icon-1 ${checkAccount == 2 ? "svg-icon-primary-600" : "svg-icon-gray-600"}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="currentColor" />
                        <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="currentColor" />
                    </svg>
                    </span>
                    {/*end::Svg Icon*/}                        </span>
            </span>
            {/*end::Icon*/}

            {/*begin::Description*/}
            <span className="d-flex flex-column">
                <span className={`fw-bold text-hover-primary fs-5 ${checkAccount == 2 ? "text-primary" : "text-gray-800"}`}>Developer Account</span>
                <span className={`fs-6 fw-semibold ${checkAccount == 2 ? "text-primary" : "text-muted"}`}>Use images to your post time</span>
            </span>
            {/*end:Description*/}
        </span>
        {/*end:Label*/}

        {/*begin:Input*/}
        <span className="form-check form-check-custom form-check-solid">
            <input className="form-check-input" type="radio" checked={checkAccount == 2 ? "checked" : ""} name="account_plan" value="2" onFocus={(e) => handleChange(e)} />
        </span>
        {/*end:Input*/}
    </label>
    {/*end::Option*/}

    {/*begin:Option*/}
    <label className="d-flex flex-stack mb-0 cursor-pointer">
        {/*begin:Label*/}
        <span className="d-flex align-items-center me-2">
            {/*begin::Icon*/}
            <span className="symbol symbol-50px me-6">
                <span className="symbol-label">
                    {/*begin::Svg Icon | path: icons/duotune/graphs/gra008.svg*/}
                    <span className={`svg-icon svg-icon-1 ${checkAccount == 3 ? "svg-icon-primary-600" : "svg-icon-gray-600"}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z" fill="currentColor" />
                        <path opacity="0.3" d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z" fill="currentColor" />
                        <path opacity="0.3" d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z" fill="currentColor" />
                    </svg>
                    </span>
                    {/*end::Svg Icon*/}                        </span>
            </span>
            {/*end::Icon*/}

            {/*begin::Description*/}
            <span className="d-flex flex-column">
                <span className={`fw-bold text-hover-primary fs-5 ${checkAccount == 3 ? "text-primary" : "text-gray-800"}`}>Testing Account</span>
                <span className={`fs-6 fw-semibold ${checkAccount == 3 ? "text-primary" : "text-muted"}`}>Use images to enhance time travel rivers</span>
            </span>
            {/*end:Description*/}
        </span>
        {/*end:Label*/}

        {/*begin:Input*/}
        <span className="form-check form-check-custom form-check-solid">
            <input className="form-check-input" type="radio" checked={checkAccount == 3 ? "checked" : ""} name="account_plan" value="3" onFocus={(e) => handleChange(e)} />
        </span>
        {/*end:Input*/}
    </label>
    {/*end::Option*/}
</div>























{/*begin::Input group*/ }
<div className="fv-row mb-10">
    {/*begin::Label*/}
    <label className="form-label required">Business Name</label>
    {/*end::Label*/}

    {/*begin::Input*/}
    <input name="business_name" className="form-control form-control-lg form-control-solid" value="Keenthemes Inc." />
    {/*end::Input*/}
</div>
{/*end::Input group*/ }

{/*begin::Input group*/ }
<div className="fv-row mb-10">
    {/*begin::Label*/}
    <label className="d-flex align-items-center form-label">
        <span className="required">Shortened Descriptor</span>

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

    {/*begin::Input*/}
    <input name="business_descriptor" className="form-control form-control-lg form-control-solid" value="KEENTHEMES" />
    {/*end::Input*/}

    {/*begin::Hint*/}
    <div className="form-text">
        Customers will see this shortened version of your statement descriptor
    </div>
    {/*end::Hint*/}
</div>
{/*end::Input group*/ }

{/*begin::Input group*/ }
<div className="fv-row mb-10">
    {/*begin::Label*/}
    <label className="form-label required">Corporation Type</label>
    {/*end::Label*/}

    {/*begin::Input*/}
    <select name="business_type" className="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
        <option></option>
        <option value="1">S Corporation</option>
        <option value="1">C Corporation</option>
        <option value="2">Sole Proprietorship</option>
        <option value="3">Non-profit</option>
        <option value="4">Limited Liability</option>
        <option value="5">General Partnership</option>
    </select>
    {/*end::Input*/}
</div>
{/*end::Input group*/ }

{/*begin::Input group*/ }
<div className="fv-row mb-10">
    {/*end::Label*/}
    <label className="form-label">Business Description</label>
    {/*end::Label*/}

    {/*begin::Input*/}
    <textarea name="business_description" className="form-control form-control-lg form-control-solid" rows="3"></textarea>
    {/*end::Input*/}
</div>
{/*end::Input group*/ }

{/*begin::Input group*/ }
<div className="fv-row mb-0">
    {/*begin::Label*/}
    <label className="fs-6 fw-semibold form-label required">Contact Email</label>
    {/*end::Label*/}

    {/*begin::Input*/}
    <input name="business_email" className="form-control form-control-lg form-control-solid" value="corp@support.com" />
    {/*end::Input*/}
</div>
{/*end::Input group*/ }  



























{/*begin::Input group*/ }
<div className="row mb-10">
    {/*begin::Col*/}
    <div className="col-md-8 fv-row">
        {/*begin::Label*/}
        <label className="required fs-6 fw-semibold form-label mb-2">Expiration Date</label>
        {/*end::Label*/}

        {/*begin::Row*/}
        <div className="row fv-row">
            {/*begin::Col*/}
            <div className="col-6">
                <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-6">
                <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
                    <option></option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                </select>
            </div>
            {/*end::Col*/}
        </div>
        {/*end::Row*/}
    </div>
    {/*end::Col*/}

    {/*begin::Col*/}
    <div className="col-md-4 fv-row">
        {/*begin::Label*/}
        <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">CVV</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
        </label>
        {/*end::Label*/}

        {/*begin::Input wrapper*/}
        <div className="position-relative">
            {/*begin::Input*/}
            <input type="text" className="form-control form-control-solid" minLength="3" maxLength="4" placeholder="CVV" name="card_cvv" />
            {/*end::Input*/}

            {/*begin::CVV icon*/}
            <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                <span className="svg-icon svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                    <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="currentColor" />
                </svg>
                </span>
                {/*end::Svg Icon*/}            </div>
            {/*end::CVV icon*/}
        </div>
        {/*end::Input wrapper*/}
    </div>
    {/*end::Col*/}
</div>
{/*end::Input group*/ }