/*eslint-disable */
import React from 'react'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

const FollowList = () => {
  return (
    <>
        <Header />

	<section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Table #05</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="table-wrap">
						<table className="table table-responsive-xl">
						  <thead>
						    <tr>
						    	<th>&nbsp;</th>
						    	<th>Email</th>
						      <th>Username</th>
						      <th>Status</th>
						      <th>&nbsp;</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr className="alert" role="alert">
						    	<td>
						    		<label className="checkbox-wrap checkbox-primary">
										  <input type="checkbox" checked />
										  <span className="checkmark"></span>
										</label>
						    	</td>
						      <td className="d-flex align-items-center">
						      	<div>
                                    <img src="/assets/images/person_1.jpg" className="img-table me-3" alt="img" />
                                </div>
						      	<div className="pl-3 email">
						      		<span><p className='fw-title np'>markotto@email.com</p></span>
						      		<span><p className='np'>Added: 01/03/2020</p></span>
						      	</div>
						      </td>
						      <td><p>Markotto89</p></td>
						      <td className="status"><span className="active">Active</span></td>
						      <td>
<i className='fas fa-triple-dot'></i>
				        	</td>
						     </tr>
						    {/* <tr className="alert" role="alert">
						    	<td>
						    		<label className="checkbox-wrap checkbox-primary">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
										</label>
						    	</td>
						      <td className="d-flex align-items-center">
						      	<div className="img" style={{backgroundImage: 'url(/assets/images/person_2.jpg)'}}></div>
						      	<div className="pl-3 email">
						      		<span>jacobthornton@email.com</span>
						      		<span>Added: 01/03/2020</span>
						      	</div>
						      </td>
						      <td>Jacobthornton</td>
						      <td className="status"><span className="waiting">Waiting for Resassignment</span></td>
						      <td>
<i className='fas fa-triple-dot'></i>
				        	</td>
						    </tr>
						    <tr className="alert" role="alert">
						    	<td>
						    		<label className="checkbox-wrap checkbox-primary">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
										</label>
						    	</td>
						      <td className="d-flex align-items-center">
						      	<div className="img" style={{backgroundImage: 'url(/assets/images/person_3.jpg)'}}></div>
						      	<div className="pl-3 email">
						      		<span>larrybird@email.com</span>
						      		<span>Added: 01/03/2020</span>
						      	</div>
						      </td>
						      <td>Larry_bird</td>
						      <td className="status"><span className="active">Active</span></td>
						      <td>
<i className='fas fa-triple-dot'></i>
				        	</td>
						    </tr>
						    <tr className="alert" role="alert">
						    	<td>
						    		<label className="checkbox-wrap checkbox-primary">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
										</label>
						    	</td>
						      <td className="d-flex align-items-center">
						      	<div className="img" style={{backgroundImage: 'url(/assets/images/person_4.jpg)'}}></div>
						      	<div className="pl-3 email">
						      		<span>johndoe@email.com</span>
						      		<span>Added: 01/03/2020</span>
						      	</div>
						      </td>
						      <td>Johndoe1990</td>
						      <td className="status"><span className="active">Active</span></td>
						      <td>
<i className='fas fa-triple-dot'></i>
				        	</td>
						    </tr>
						    <tr className="alert" role="alert">
						    	<td className="border-bottom-0">
						    		<label className="checkbox-wrap checkbox-primary">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
										</label>
						    	</td>
						      <td className="d-flex align-items-center border-bottom-0">
						      	<div className="img" style={{backgroundImage: 'url(/assets/images/person_1.jpg)'}}></div>
						      	<div className="pl-3 email">
						      		<span>garybird@email.com</span>
						      		<span>Added: 01/03/2020</span>
						      	</div>
						      </td>
						      <td className="border-bottom-0">Garybird_2020</td>
						      <td className="status border-bottom-0"><span className="waiting">Waiting for Resassignment</span></td>
						      <td className="border-bottom-0">
<i className='fas fa-triple-dot'></i>
				        	</td>
						    </tr>  */}
						  </tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
        <Footer />
    </>
  )
}

export default FollowList