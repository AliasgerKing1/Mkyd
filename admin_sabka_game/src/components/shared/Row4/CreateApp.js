/*eslint-disable */

import React from 'react'

const CreateApp = () => {
    let [createApp,setCreateApp] = useState(false)
  return (
    <>
            {/*begin::Col*/}
    <div className="col-xxl-4 mb-5 mb-xl-0">
        {/*begin::Chart widget 31*/}
        {/*begin::Card widget 1*/}
        
       {/*begin::Engage widget 1*/}
       {/* class name === h-md-100 */}
        <div className="card" dir="ltr" style={{height : '93%'}}> 
           {/*begin::Body*/}
            <div className="card-body d-flex flex-column flex-center">  
               {/*begin::Heading*/}
                <div className="mb-2">
                   {/*begin::Title*/}
                    <h1 className="fw-semibold text-gray-800 text-center lh-lg">           
                        Try out our <br /> new
                        <span className="fw-bolder"> Create App</span>
                    </h1>
                   {/*end::Title*/} 
                    
                   {/*begin::Illustration*/}
                    <div className="py-10 text-center">
                                            <img src="../assets/media/svg/illustrations/easy/2.svg" className="theme-light-show w-200px" alt="" />
                            <img src="../assets/media/svg/illustrations/easy/2-dark.svg" className="theme-dark-show w-200px" alt="" />
                                    </div>
                   {/*end::Illustration*/}
                </div>
               {/*end::Heading*/}
        
               {/*begin::Links*/}
                <div className="text-center mb-1"> 
                   {/*begin::Link*/}
                   {/* data-bs-target="#kt_modal_create_account" data-bs-toggle="modal" */}
                    <a className="btn btn-sm btn-primary me-2" onClick={()=> {
                        createApp == false ? setCreateApp(true) : setCreateApp(false)
                    }}>
                        Create            </a>
                   {/*end::Link*/}
        
                   {/*begin::Link*/}
                    <a className="btn btn-sm btn-light" href="../apps/ecommerce/sales/listing.html">
                        Learn More            </a>
                   {/*end::Link*/}
                </div>
               {/*end::Links*/}
            </div>
           {/*end::Body*/}
        </div>
       {/*end::Engage widget 1*/}
{/*end::Chart widget 31*/}
    </div>
    {/*end::Col*/}
    </>
  )
}

export default CreateApp