import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"

import {useDispatch, useSelector} from "react-redux";
import PathReducer from '../../Redux/PathReducer';
import SingleUserReducer, { getSingleUserRedux } from '../../Redux/SingleUserReducer';

import { Logout, getUserById } from '../../services/UserService'

const Header = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [id, setId] = useState({})
    let state = useSelector(state=> state.PathReducer)
    let state2 = useSelector(state2=> state2.UserReducer)
    let state3 = useSelector(state3=> state3.SingleUserReducer)

let getProfileFun = () => {
    let token = localStorage.getItem("token");
    getUserById(token).then(result => {
        dispatch(getSingleUserRedux(result.data));
    })
}
    useEffect(()=> {
        if(state3.length == 0) {
            getProfileFun()
        }
    }, [])
    useEffect(() => {
        if (state2 !== undefined) {
let obj = state2[state2.length-1]
if(obj) {
    setId(obj.id)
}
// console.log(obj)
// console.log(id)
        }
      }, [state2]);


    let logOut = () => {
        navigate("/")
        Logout();
    }
  return (
    <>
        {/* <!-- header-area --> */}
        <header>
        <div id="sticky-header" className="tg-header__area transparent-header">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                        <div className="tgmenu__wrap">
                            <nav className="tgmenu__nav">
                                <div className="logo">
                                    <NavLink to="/auth/home"><img src="/assets/img/logo/logo.png" alt="Logo" /></NavLink>
                                </div>
                                <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                    <ul className="navigation">
                                        <li className="active menu-item-has-children"><NavLink to="/auth/home">Home</NavLink>
                                        </li>
                                        <li><a href="about-us.html">ABOUT US</a></li>
                                        <li className="menu-item-has-children"><a href="#">TOURNAMENT</a>
                                            <ul className="sub-menu">
                                                <li><a href="tournament.html">TOURNAMENT</a></li>
                                                <li><a href="tournament-details.html">TOURNAMENT Single</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">PAGES</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop.html">Gaming Shop</a></li>
                                                <li><a href="shop-details.html">Shop Details</a></li>
                                                <li><a href="services.html">Our Services</a></li>
                                                <li><a href="services-details.html">Services Details</a></li>
                                                <li><a href="team-details.html">Player Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">News</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">Our Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                </div>
                                <div className="tgmenu__action d-none d-md-block">
                                    <ul className="list-wrap">
                                        <li className="search"><a href="#"><i className="flaticon-search-1"></i></a></li>
                                        {state === 0 ? (<li className="header-btn"><NavLink to="/" className="tg-border-btn"><i className="flaticon-login"></i>~sing in</NavLink></li>) : null }

                                        {state === 1 ? (<li className="header-btn"><NavLink to={`/auth/profile/${state3[0] ? (state3[0]._id) : null}`} className="tg-border-btn"><i className="flaticon-edit"></i>My Account</NavLink></li>) : null}
                                        {state === 2 ? (<li className="header-btn" onClick={logOut}><NavLink to="/auth/profile" className="tg-border-btn"><i className="flaticon-edit"></i>Logout</NavLink></li>) : null}
                                        <li className="side-toggle-icon">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        {/* <!-- Mobile Menu  --> */}
                        <div className="tgmobile__menu">
                            <nav className="tgmobile__menu-box">
                                <div className="close-btn"><i className="flaticon-swords-in-cross-arrangement"></i></div>
                                <div className="nav-logo">
                                    <a href="index-2.html"><img src="/assets/img/logo/logo.png" alt="Logo" /></a>
                                </div>
                                <div className="tgmobile__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search here..." />
                                        <button><i className="flaticon-loupe"></i></button>
                                    </form>
                                </div>
                                <div className="tgmobile__menu-outer">
                                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                                </div>
                                <div className="social-links">
                                    <ul className="list-wrap">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="tgmobile__menu-backdrop"></div>
                        {/* <!-- End Mobile Menu --> */}
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- header-search --> */}
        <div className="search__popup-wrap">
            <div className="search__layer"></div>
            <div className="search__close">
                <span><i className="flaticon-swords-in-cross-arrangement"></i></span>
            </div>
            <div className="search__wrap text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="title">... <span>Search Here</span> ...</h2>
                            <div className="search__form">
                                <form action="#">
                                    <input type="text" name="search" placeholder="Type keywords here" />
                                    <button className="search-btn"><i className="flaticon-loupe"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- header-search-end --> */}

        {/* <!-- offCanvas-area --> */}
        <div className="offCanvas__wrap">
            <div className="offCanvas__body">
                <div className="offCanvas__top">
                    <div className="offCanvas__logo logo">
                        <a href="index-2.html"><img src="/assets/img/logo/logo.png" alt="Logo" /></a>
                    </div>
                    <div className="offCanvas__toggle">
                        <i className="flaticon-swords-in-cross-arrangement"></i>
                    </div>
                </div>
                <div className="offCanvas__content">
                    <h2 className="title">Best Seller of Month Ideas for <span>NFT Wallet</span></h2>
                    <div className="offCanvas__contact">
                        <h4 className="small-title">CONTACT US</h4>
                        <ul className="offCanvas__contact-list list-wrap">
                            <li><a href="tel:93332225557">+9 333 222 5557</a></li>
                            <li><a href="mailto:info@webmail.com">info@webmail.com</a></li>
                            <li>New Central Park W7 Street ,New York</li>
                        </ul>
                    </div>
                    <div className="offCanvas__newsletter">
                        <h4 className="small-title">Subscribe</h4>
                        <form action="#" className="offCanvas__newsletter-form">
                            <input type="email" placeholder="Get News & Updates" />
                            <button type="submit"><i className="flaticon-send"></i></button>
                        </form>
                        <p>Subscribe dolor sitamet, consectetur adiping eli. Duis esollici tudin augue.</p>
                    </div>
                    <ul className="offCanvas__social list-wrap">
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div className="offCanvas__copyright">
                    <p>Copyright © 2023 - By <span>MYKD</span></p>
                </div>
            </div>
        </div>
        <div className="offCanvas__overlay"></div>
        {/* <!-- offCanvas-area-end --> */}

    </header>
    {/* <!-- header-area-end --> */}
    </>
  )
}

export default Header