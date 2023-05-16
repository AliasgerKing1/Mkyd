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