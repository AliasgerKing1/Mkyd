/*eslint-disable */
import React, {useState} from 'react'

const Switch = () => {
    return (
        <>
                    <div className="d-flex justify-content-end">
                        <div className="form-check form-check-solid form-check-custom form-switch">
                            <input className="form-check-input w-45px h-30px" type="checkbox" id="switch" style={{cursor : "pointer"}}  />
                            <label className="form-check-label" htmlFor="switch" />
                        </div>
                    </div>
        </>
    )
}

export default Switch

{/* <div className="d-flex justify-content-end">
<div className="form-check form-check-solid form-check-custom form-switch">
    <input className="form-check-input w-45px h-30px" type="checkbox" id="githubswitch" defaultChecked />
    <label className="form-check-label" htmlFor="githubswitch" />
</div>
</div> */}