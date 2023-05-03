/*eslint-disable */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const UserCard = ({state}) => {
    let [val1,setVal1] = useState(false)
    let [val2,setVal2] = useState(false)
    let [val3,setVal3] = useState(false)
    let state2 = useSelector(state2 => state2.SearchReducer)
    let state3 = useSelector(state3=>state3.EmptySearchReducer)
    if(state2.length == 0 && state3 == false) {
setVal1(true)
    }
    if(state2.length != 0 && state3 == true) {
setVal2(true)
    }
    if( state3 == true ) {
setVal3(true)
    }
  return (
    <>
                    {
val1 == true ? (state.map((x)=> {
                        return (
                            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s" key={x._id}>
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team01.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">{x.name}</a></h4>
                                <span className="designation">{x.game_title.title}</span>
                            </div>
                        </div>
                    </div>
                        )
                    })) : null
                }
                {
                    val2 == true ? (state2.map((x)=> {
                        return (
                            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s" key={x._id}>
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team01.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">{x.name}</a></h4>
                                <span className="designation">{x.game_title.title}</span>
                            </div>
                        </div>
                    </div>
                    )})) : null 
                }
                {
                    val3 == true ? (<h1
                        >no data found</h1>) : null
                }
    </>
  )
}

export default UserCard