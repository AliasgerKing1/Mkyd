/*eslint-disable */
import React, { useEffect } from 'react'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import { useSelector } from 'react-redux'

const Users = () => {
    let state = useSelector(state=>state.UserReducer)
//     useEffect(()=> {
// console.log(state)
//     }, [])
  return (
    <>
<Header />
                {/* <!-- team-area --> */}
                <section className="team__area team-bg section-pt-130 section-pb-100" data-background="/assets/img/bg/team_bg.jpg">
            <div className="container">
                {/* <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section__title text-center mb-60">
                            <span className="sub-title tg__animate-text">our team member</span>
                            <h3 className="title">ACTIVE TEAM MEMBERS</h3>
                        </div>
                    </div>
                </div> */}
                <div className="shop__widget">
                                <h4 className="shop__widget-title">search</h4>
                                <div className="shop__widget-inner">
                                    <div className="shop__search">
                                        <input type="text" placeholder="Search here" />
                                        <button className="p-0 border-0"><i className="flaticon-search"></i></button>
                                    </div>
                                </div>
                            </div>
                <div className="row justify-content-center">
                {
                    state.map((x)=> {
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
                    })
                }
                    {/* <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team02.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">tanu mark</a></h4>
                                <span className="designation">Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team03.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">Thompson Scot</a></h4>
                                <span className="designation">Art Director</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team04.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">Shakh Danial</a></h4>
                                <span className="designation">Crypto Advisor</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team01.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">killer master</a></h4>
                                <span className="designation">Blockchain Expert</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team02.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">tanu mark</a></h4>
                                <span className="designation">Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team03.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">Thompson Scot</a></h4>
                                <span className="designation">Art Director</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team04.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">Shakh Danial</a></h4>
                                <span className="designation">Crypto Advisor</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/* <!-- team-area-end --> */}
        <Footer />
    </>
  )
}

export default Users