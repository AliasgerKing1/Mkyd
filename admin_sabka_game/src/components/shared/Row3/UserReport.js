/*eslint-disable */

import React from 'react'

const UserReport = () => {
  return (
    <>
             {/*begin::Col*/}
<div className="col-xl-6 mb-5 mb-xl-10">
        
        {/*begin::Table Widget 5*/}
        <div className="card card-flush h-xl-100">
            {/*begin::Card header*/}
            <div className="card-header pt-7">
                {/*begin::Title*/}
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold text-dark">User Report</span>
                    <span className="text-gray-400 mt-1 fw-semibold fs-6">Total 2,356 Users</span>
                </h3>
                {/*end::Title*/}
        
                {/*begin::Actions*/}
                <div className="card-toolbar">
                    {/*begin::Filters*/}
                    <div className="d-flex flex-stack flex-wrap gap-4">
                        {/*begin::Destination*/}
                        <div className="d-flex align-items-center fw-bold">
                            {/*begin::Label*/}
                            <div className="text-muted fs-7 me-2">Cateogry</div>
                            {/*end::Label*/}
        
                            {/*begin::Select*/}
                            <select className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible" data-control="select2" data-hide-search="true" data-dropdown-css-classname="w-150px" data-placeholder="Select an option" data-select2-id="select2-data-1-tymb" tabIndex="-1" aria-hidden="true" data-kt-initialized="1">
                                <option></option>
                                <option value="Show All" selected="" data-select2-id="select2-data-3-gwzo">Show All</option>
                                <option value="a">Category A</option>
                                <option value="b">Category B</option>
                            </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-2-vig8" style={{width: '100%',}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-j2xb-container" aria-controls="select2-j2xb-container"><span className="select2-selection__rendered" id="select2-j2xb-container" role="textbox" aria-readonly="true" title="Show All">Show All</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                            {/*end::Select*/}
                        </div>
                        {/*end::Destination*/}
        
                        {/*begin::Status*/}
                        <div className="d-flex align-items-center fw-bold">
                            {/*begin::Label*/}
                            <div className="text-muted fs-7 me-2">Status</div>
                            {/*end::Label*/}
        
                            {/*begin::Select*/}
                            <select className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible" data-control="select2" data-hide-search="true" data-dropdown-css-classname="w-150px" data-placeholder="Select an option" data-kt-table-widget-5="filter_status" data-select2-id="select2-data-4-olhp" tabIndex="-1" aria-hidden="true" data-kt-initialized="1">
                                <option></option>
                                <option value="Show All" selected="" data-select2-id="select2-data-6-geks">Show All</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                                <option value="Low Stock">Low Stock</option>
                            </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-5-eklo" style={{width: '100%',}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-6jj3-container" aria-controls="select2-6jj3-container"><span className="select2-selection__rendered" id="select2-6jj3-container" role="textbox" aria-readonly="true" title="Show All">Show All</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                            {/*end::Select*/}
                        </div>
                        {/*end::Status*/}
        
                        {/*begin::Search*/}
                        <a href="apps/ecommerce/catalog/products.html" className="btn btn-light btn-sm">View Stock</a>
                        {/*end::Search*/}
                    </div>
                    {/*begin::Filters*/}
                </div>
                {/*end::Actions*/}
            </div>
            {/*end::Card header*/}
        
            {/*begin::Card body*/}
            <div className="card-body">
                {/*begin::Table*/}
                <div id="kt_table_widget_5_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="table-responsive"><table className="table align-middle table-row-dashed fs-6 gy-3 dataTable no-footer" id="kt_table_widget_5_table">
                    {/*begin::Table head*/}
                    <thead>
                        {/*begin::Table row*/}
                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0"><th className="min-w-100px sorting" tabIndex="0" aria-controls="kt_table_widget_5_table" rowSpan="1" colspan="1" style={{width: '169.35px'}} aria-label="Item: activate to sort column ascending">Item</th><th className="text-end pe-3 min-w-100px sorting_disabled" rowSpan="1" colspan="1" style={{width: '132.85px'}} aria-label="Product ID">Product ID</th><th className="text-end pe-3 min-w-150px sorting" tabIndex="0" aria-controls="kt_table_widget_5_table" rowSpan="1" colspan="1" style={{width: '196.6px'}}aria-label="Date Added: activate to sort column ascending">Date Added</th><th className="text-end pe-3 min-w-100px sorting" tabIndex="0" aria-controls="kt_table_widget_5_table" rowSpan="1" colspan="1" style={{width: '132.85px'}} aria-label="Price: activate to sort column ascending">Price</th><th className="text-end pe-3 min-w-50px sorting" tabIndex="0" aria-controls="kt_table_widget_5_table" rowSpan="1" colspan="1" style={{width: '133.317px'}} aria-label="Status: activate to sort column ascending">Status</th><th className="text-end pe-0 min-w-25px sorting" tabIndex="0" aria-controls="kt_table_widget_5_table" rowSpan="1" colspan="1" style={{width: '77.95px'}} aria-label="Qty: activate to sort column ascending">Qty</th></tr>
                        {/*end::Table row*/}
                    </thead>
                    {/*end::Table head*/}
        
                    {/*begin::Table body*/}
                    <tbody className="fw-bold text-gray-600">
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                    <tr className="odd">
                                {/*begin::Item*/}
                                <td>
                                    <a href="apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">Macbook Air M1</a>
                                </td>
                                {/*end::Item*/}
        
                                {/*begin::Product ID*/}
                                <td className="text-end">
                                    #XGY-356                        </td>
                                {/*end::Product ID*/}
        
                                {/*begin::Date added*/}
                                <td className="text-end" data-order="2023-04-20T00:00:00+05:30">
                                    02 Apr, 2023                        </td>
                                {/*end::Date added*/}
        
                                {/*begin::Price*/}
                                <td className="text-end">
                                    $1,230                        </td>
                                {/*end::Price*/}
        
                                {/*begin::Status*/}
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                                </td>
                                {/*end::Status*/}
        
                                {/*begin::Qty*/}
                                <td className="text-end" data-order="58">
                                    <span className="text-dark fw-bold">58 PCS</span>
                                </td>
                                {/*end::Qty*/}                       
                            </tr><tr className="even">
                                {/*begin::Item*/}
                                <td>
                                    <a href="apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">Surface Laptop 4</a>
                                </td>
                                {/*end::Item*/}
        
                                {/*begin::Product ID*/}
                                <td className="text-end">
                                    #YHD-047                        </td>
                                {/*end::Product ID*/}
        
                                {/*begin::Date added*/}
                                <td className="text-end" data-order="2023-04-20T00:00:00+05:30">
                                    01 Apr, 2023                        </td>
                                {/*end::Date added*/}
        
                                {/*begin::Price*/}
                                <td className="text-end">
                                    $1,060                        </td>
                                {/*end::Price*/}
        
                                {/*begin::Status*/}
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-danger">Out of Stock</span>
                                </td>
                                {/*end::Status*/}
        
                                {/*begin::Qty*/}
                                <td className="text-end" data-order="0">
                                    <span className="text-dark fw-bold">0 PCS</span>
                                </td>
                                {/*end::Qty*/}                       
                            </tr><tr className="odd">
                                {/*begin::Item*/}
                                <td>
                                    <a href="apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">Logitech MX 250</a>
                                </td>
                                {/*end::Item*/}
        
                                {/*begin::Product ID*/}
                                <td className="text-end">
                                    #SRR-678                        </td>
                                {/*end::Product ID*/}
        
                                {/*begin::Date added*/}
                                <td className="text-end" data-order="2023-03-20T00:00:00+05:30">
                                    24 Mar, 2023                        </td>
                                {/*end::Date added*/}
        
                                {/*begin::Price*/}
                                <td className="text-end">
                                    $64                        </td>
                                {/*end::Price*/}
        
                                {/*begin::Status*/}
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                                </td>
                                {/*end::Status*/}
        
                                {/*begin::Qty*/}
                                <td className="text-end" data-order="290">
                                    <span className="text-dark fw-bold">290 PCS</span>
                                </td>
                                {/*end::Qty*/}                       
                            </tr><tr className="even">
                                {/*begin::Item*/}
                                <td>
                                    <a href="apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">AudioEngine HD3</a>
                                </td>
                                {/*end::Item*/}
        
                                {/*begin::Product ID*/}
                                <td className="text-end">
                                    #PXF-578                        </td>
                                {/*end::Product ID*/}
        
                                {/*begin::Date added*/}
                                <td className="text-end" data-order="2023-03-20T00:00:00+05:30">
                                    24 Mar, 2023                        </td>
                                {/*end::Date added*/}
        
                                {/*begin::Price*/}
                                <td className="text-end">
                                    $1,060                        </td>
                                {/*end::Price*/}
        
                                {/*begin::Status*/}
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-danger">Out of Stock</span>
                                </td>
                                {/*end::Status*/}
        
                                {/*begin::Qty*/}
                                <td className="text-end" data-order="46">
                                    <span className="text-dark fw-bold">46 PCS</span>
                                </td>
                                {/*end::Qty*/}                       
                            </tr><tr className="odd">
                                {/*begin::Item*/}
                                <td>
                                    <a href="apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">HP Hyper LTR</a>
                                </td>
                                {/*end::Item*/}
        
                                {/*begin::Product ID*/}
                                <td className="text-end">
                                    #PXF-778                        </td>
                                {/*end::Product ID*/}
        
                                {/*begin::Date added*/}
                                <td className="text-end" data-order="2023-01-20T00:00:00+05:30">
                                    16 Jan, 2023                        </td>
                                {/*end::Date added*/}
        
                                {/*begin::Price*/}
                                <td className="text-end">
                                    $4500                        </td>
                                {/*end::Price*/}
        
                                {/*begin::Status*/}
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                                </td>
                                {/*end::Status*/}
        
                                {/*begin::Qty*/}
                                <td className="text-end" data-order="78">
                                    <span className="text-dark fw-bold">78 PCS</span>
                                </td>
                                {/*end::Qty*/}                       
                            </tr><tr className="even">
                                {/*begin::Item*/}
                                <td>
                                    <a href="apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">Dell 32 UltraSharp</a>
                                </td>
                                {/*end::Item*/}
        
                                {/*begin::Product ID*/}
                                <td className="text-end">
                                    #XGY-356                        </td>
                                {/*end::Product ID*/}
        
                                {/*begin::Date added*/}
                                <td className="text-end" data-order="2023-12-20T00:00:00+05:30">
                                    22 Dec, 2023                        </td>
                                {/*end::Date added*/}
        
                                {/*begin::Price*/}
                                <td className="text-end">
                                    $1,060                        </td>
                                {/*end::Price*/}
        
                                {/*begin::Status*/}
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-warning">Low Stock</span>
                                </td>
                                {/*end::Status*/}
        
                                {/*begin::Qty*/}
                                <td className="text-end" data-order="8">
                                    <span className="text-dark fw-bold">8 PCS</span>
                                </td>
                                {/*end::Qty*/}                       
                            </tr>
                            <tr className="odd">
                                {/*begin::Item*/}
                                <td>
                                    <a href="apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">Google Pixel 6 Pro</a>
                                </td>
                                {/*end::Item*/}
        
                                {/*begin::Product ID*/}
                                <td className="text-end">
                                    #XVR-425                        </td>
                                {/*end::Product ID*/}
        
                                {/*begin::Date added*/}
                                <td className="text-end" data-order="2023-12-20T00:00:00+05:30">
                                    27 Dec, 2023                        </td>
                                {/*end::Date added*/}
        
                                {/*begin::Price*/}
                                <td className="text-end">
                                    $1,060                        </td>
                                {/*end::Price*/}
        
                                {/*begin::Status*/}
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                                </td>
                                {/*end::Status*/}
        
                                {/*begin::Qty*/}
                                <td className="text-end" data-order="124">
                                    <span className="text-dark fw-bold">124 PCS</span>
                                </td>
                                {/*end::Qty*/}                       
                            </tr>
                            </tbody>
                    {/*end::Table body*/}
                </table></div><div className="row"><div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div><div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"></div></div></div>
                {/*end::Table*/}
            </div>
            {/*end::Card body*/}
        </div>
        {/*end::Table Widget 5*/}   
         </div>
             {/*end::Col*/}
    </>
  )
}

export default UserReport