/*eslint-disable */
import React, { useEffect } from 'react'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import RemoveModal from '../../shared/RemoveModal'
import { useSelector } from 'react-redux'
import { getFollwersList, getFollwingsList } from '../../../services/UserService'

const FollowList = () => {
	let state = useSelector(state=>state.SingleUserReducer)
	useEffect(()=> {
 getFollwersList(state[0] ? (state[0]._id) : null).then(result => {
	console.log(result.data)
})
	}, [])
  return (
    <>
<Header />


    {/* <!-- main-area --> */}
    <main className="main--area">
        {/* <!-- team-details-area --> */}
        <section className="team__details-area section-pt-120 section-pb-120" data-background="/assets/img/bg/team_details_bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
<table className='ms-5 me-5'>
<tbody>
	<tr>
		<td><img src="/assets/images/person_1.jpg" alt="follower/following profile picture" className='pro-pic' /></td>
		<td><h3 className='pro-name ms-4'>{state[0] ? (state[0].name) : null}</h3></td>
		<td><a className='ms-1 follow'><sup>Follow</sup></a></td>
		<td><div className='contact__form-wrap'><button className="submit-btn2 ms-500" data-bs-toggle="modal" data-bs-target="#removeModal">Remove</button></div></td>
		<RemoveModal />
	</tr>
</tbody>
</table>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- team-details-area-end --> */}

    </main>
    {/* <!-- main-area-end --> */}


   <Footer />
   </>
  )
}

export default FollowList