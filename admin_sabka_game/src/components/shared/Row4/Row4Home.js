/*eslint-disable */

import React from 'react'
import AveragePosition from './AveragePosition'
import ActiveLanguageDistribution from './ActiveLanguageDistribution'
import CreateApp from './CreateApp'

const Row4Home = () => {
  return (
    <>
        {/*begin::Row*/}
<div className="row gx-5 gx-xl-10">  

<AveragePosition />

<ActiveLanguageDistribution />

<CreateApp />

{/* human resource chart */}
</div>
{/*end::Row*/}

    </>
  )
}

export default Row4Home