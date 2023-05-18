/*eslint-disable */
import React from 'react'
import AudienceByCountry from './AudienceByCountry'
import DomainExternalLink from './DomainExternalLink'
import SignInBySocialMedia from "./SignInBySocialMedia"

const Row1Home = () => {
  return (
    <>
                    {/*begin::Row*/}
<div className="row gx-5 gx-xl-10">  
<AudienceByCountry />

<DomainExternalLink />

<SignInBySocialMedia />
</div>
{/*end::Row*/}
    </>
  )
}

export default Row1Home