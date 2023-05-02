/*eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'

const UserCard = ({state}) => {
    let state2 = useSelector(state2 => state2.SearchReducer)
  return (
    <>
                    {
state2.length == 0 ? (state.map((x)=> {
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
                    })) : (state2.map((x)=> {
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
                    )}))
                }
    </>
  )
}

export default UserCard