
/*eslint-disable */
import React, { useEffect } from 'react'

import {useSelector} from "react-redux"
import { Outlet,useNavigate } from 'react-router-dom'
const Layouts = () => {
  let state = useSelector(state=>state.TokenReducer)
  let navigate = useNavigate();
  useEffect(()=> {
    if(! state[0].Login_token) {
      navigate("/")
      }
  })

  return (
    <div>
<Outlet/>
    </div>
  )
}

export default Layouts