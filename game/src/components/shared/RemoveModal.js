import React from 'react'
import { useSelector } from 'react-redux'

const RemoveModal = () => {
    let state = useSelector(state=>state.RedirectFollowReducer)
  return (
    <>
        {/* <!-- Modal --> */}
<div className="modal fade" id="removeModal" tabIndex="-1" aria-labelledby="removeModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Remove {state.follow}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Are you sure to remove User from your {state.follow2} ?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary2" data-bs-dismiss="modal">NO</button>
        <button type="button" className="btn btn-primary2">Yes</button>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal end --> */}
    </>
  )
}

export default RemoveModal