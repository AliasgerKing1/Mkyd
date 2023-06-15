/*eslint-disable */
import React, { useEffect, useState } from 'react'

import {NavLink, generatePath} from "react-router-dom"

import Sidebar from "../../shared/Sidebar"
import Footer from "../../shared/Footer"
import { useSelector } from 'react-redux'
const ContentWritingApi = () => {
  let state = useSelector(state=>state.SignInReducer)
let [input, setInput] = useState("") 
const [messages, setMessages] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [resLoading, setResLoading] = useState(false);
  const [animationDots, setAnimationDots] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationDots((prevDots) => {
        if (prevDots === '...') {
          return '.';
        } else if (prevDots === '..') {
          return '...';
        } else {
          return '..';
        }
      });
    }, 500); // Change the interval based on your preference

    // Simulate a delay before hiding the loading animation
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

const sendMessage = () => {
  setResLoading(true)
  setIsLoading(true)
  if (input.trim() === '') {
    return; // Do not send empty messages
  }

  const newMessage = {
    content: input,
    sender: 'You',
    timestamp: new Date(),
  };

  setMessages([...messages, newMessage]);
  setInput('');
};

const getTimeDiff = (timestamp) => {
  const now = new Date();
  const diffInMinutes = Math.floor((now - timestamp) / (1000 * 60));
  return `${diffInMinutes} mins ago`;
};
let API_KEY = "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"
let generateResponse = () => {
  console.log("reached")
    if (input.trim() === '') {
      return;
    }
  let API_URL = "https://api.openai.com/v1/chat/completions";
  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'messages': [{'role': 'user', 'content': input}],
    }),
  };
  
  //Send POST  request and GET response
  fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
    console.log(data)
    setResLoading(false)
    setIsLoading(false)
  }).catch((error) => {
    console.log(error)
  })
}
useEffect(() => {
  const timer = setInterval(() => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => ({
        ...message,
        timestamp: message.timestamp,
      }))
    );
    generateResponse();
  }, 60000); // Refresh every 60 seconds

  return () => clearInterval(timer);
}, [input]);



  return (
    <>
   {/*begin::Body*/}
<div id="kt_app_body" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" className="app-default">
  {/*begin::App*/}
  <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
    {/*begin::Page*/}
    <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">  
    <div className='row'>
      <div className='col-md-3'>
                {/*begin::Sidebar*/}
<Sidebar />
        {/*end::Sidebar*/}  
      </div>
      <div className='col-md-9'>
      {/*begin::Header*/}
      <div id="kt_app_header" className="app-header " data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">
        {/*begin::Header container*/}
        <div className="app-container  container-fluid d-flex flex-stack " id="kt_app_header_container">
          {/*begin::Sidebar toggle*/}
          <div className="d-flex align-items-center d-block d-lg-none ms-n3" title="Show sidebar menu">
            <div className="btn btn-icon btn-active-color-primary w-35px h-35px me-2" id="kt_app_sidebar_mobile_toggle">
              {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
              <span className="svg-icon svg-icon-2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                  <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}	</div>
            {/*begin::Logo image*/}
            <NavLink to="/auth/home">
              <img alt="Logo" src="/assets/media/logos/default-small.svg" className="h-30px theme-light-show" />
              <img alt="Logo" src="/assets/media/logos/default-small-dark.svg" className="h-30px theme-dark-show" />
            </NavLink>
            {/*end::Logo image*/}
          </div>
          {/*end::Sidebar toggle*/}
          {/*begin::Header wrapper*/}
          <div className="d-flex flex-stack flex-lg-row-fluid" id="kt_app_header_wrapper">
            {/*begin::Page title*/}
            <div className="page-title gap-4 me-3 mb-5 mb-lg-0" data-kt-swapper="true" data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_wrapper'}">
              {/*begin::Breadcrumb*/}
              <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 mb-2">        
                {/*begin::Item*/}
                <li className="breadcrumb-item text-gray-600 fw-bold lh-1">
                  <NavLink to="/auth/home" className="text-gray-700 text-hover-primary me-1">
                    <i className="fonticon-home text-gray-700 fs-3" />
                  </NavLink>
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="breadcrumb-item">
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                  <span className="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}                  </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="breadcrumb-item text-gray-600 fw-bold lh-1">
                  Apps                                          </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="breadcrumb-item">
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                  <span className="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}                  </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="breadcrumb-item text-gray-600 fw-bold lh-1">
                  Chat                                          </li>
                {/*end::Item*/}
              </ul>
              {/*end::Breadcrumb*/}
              {/*begin::Title*/}
              <h1 className="text-gray-900 fw-bolder m-0">
              Chat         
              </h1>
              {/*end::Title*/} 
            </div>
            {/*end::Page title*/}
            {/*begin::Action*/}	
            <NavLink to="/auth/create/design" className="btn btn-primary d-flex flex-center h-35px h-lg-40px" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
              Create <span className="d-none d-sm-inline ps-2">New Design</span> 
            </NavLink>	 
            {/*end::Action*/}
          </div>
          {/*end::Header wrapper*/}          </div>
        {/*end::Header container*/}
      </div>
      {/*end::Header*/}       
      </div>
      </div>    
      {/*begin::Wrapper*/}
      <div className="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">
              
        {/*begin::Main*/}
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
          {/*begin::Content wrapper*/}
          <div className="d-flex flex-column flex-column-fluid">
            {/*begin::Content*/}
            <div id="kt_app_content" className="app-content  flex-column-fluid ">
              {/*begin::Content container*/}
              <div id="kt_app_content_container" className="app-container  container-fluid ">
                {/*begin::Layout*/}
                <div className="d-flex flex-column flex-lg-row">
                  {/*begin::Sidebar*/}
                  <div className="flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0">
                    {/*begin::Contacts*/}
                    <div className="card card-flush">
                      {/*begin::Card header*/}
                      <div className="card-header pt-7" id="kt_chat_contacts_header">
                        {/*begin::Form*/}
                        <form className="w-100 position-relative" autoComplete="off">	
                          {/*begin::Icon*/}
                          {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                          <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                              <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}            {/*end::Icon*/}
                          {/*begin::Input*/}
                          <input type="text" className="form-control form-control-solid px-15" name="search" defaultValue placeholder="Search by username or email..." />
                          {/*end::Input*/}
                        </form>
                        {/*end::Form*/}
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-5" id="kt_chat_contacts_body">
                        {/*begin::List*/}
                        <div className="scroll-y me-n5 pe-5 h-200px h-lg-auto" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_toolbar, #kt_app_toolbar, #kt_footer, #kt_app_footer, #kt_chat_contacts_header" data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_contacts_body" data-kt-scroll-offset="5px">
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-4">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}<div className="symbol  symbol-45px symbol-circle "><span className="symbol-label  bg-light-danger text-danger fs-6 fw-bolder ">M</span></div>{/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                                <div className="fw-semibold text-muted">melody@altbox.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Lat seen*/}
                            <div className="d-flex flex-column align-items-end ms-2">
                              <span className="text-muted fs-7 mb-1">2 weeks</span>
                            </div>
                            {/*end::Lat seen*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed d-none" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-4">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}<div className="symbol  symbol-45px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-1.jpg" /></div>{/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                                <div className="fw-semibold text-muted">max@kt.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Lat seen*/}
                            <div className="d-flex flex-column align-items-end ms-2">
                              <span className="text-muted fs-7 mb-1">2 weeks</span>
                            </div>
                            {/*end::Lat seen*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed d-none" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-4">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}<div className="symbol  symbol-45px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-5.jpg" /><div className="symbol-badge bg-success start-100 top-100 border-4 h-8px w-8px ms-n2 mt-n2" /></div>{/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                                <div className="fw-semibold text-muted">sean@dellito.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Lat seen*/}
                            <div className="d-flex flex-column align-items-end ms-2">
                              <span className="text-muted fs-7 mb-1">2 weeks</span>
                            </div>
                            {/*end::Lat seen*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed d-none" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-4">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}<div className="symbol  symbol-45px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-25.jpg" /><div className="symbol-badge bg-success start-100 top-100 border-4 h-8px w-8px ms-n2 mt-n2" /></div>{/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                <div className="fw-semibold text-muted">brian@exchange.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Lat seen*/}
                            <div className="d-flex flex-column align-items-end ms-2">
                              <span className="text-muted fs-7 mb-1">5 hrs</span>
                              <span className="badge badge-sm badge-circle badge-light-success">6</span>
                            </div>
                            {/*end::Lat seen*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed d-none" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-4">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}<div className="symbol  symbol-45px symbol-circle "><span className="symbol-label  bg-light-warning text-warning fs-6 fw-bolder ">C</span></div>{/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                                <div className="fw-semibold text-muted">mik@pex.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Lat seen*/}
                            <div className="d-flex flex-column align-items-end ms-2">
                              <span className="text-muted fs-7 mb-1">1 week</span>
                            </div>
                            {/*end::Lat seen*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed d-none" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-4">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}<div className="symbol  symbol-45px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-9.jpg" /><div className="symbol-badge bg-success start-100 top-100 border-4 h-8px w-8px ms-n2 mt-n2" /></div>{/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                                <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Lat seen*/}
                            <div className="d-flex flex-column align-items-end ms-2">
                              <span className="text-muted fs-7 mb-1">1 week</span>
                              <span className="badge badge-sm badge-circle badge-light-success">2</span>
                            </div>
                            {/*end::Lat seen*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed d-none" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-4">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}<div className="symbol  symbol-45px symbol-circle "><span className="symbol-label  bg-light-danger text-danger fs-6 fw-bolder ">O</span></div>{/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                                <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Lat seen*/}
                            <div className="d-flex flex-column align-items-end ms-2">
                              <span className="text-muted fs-7 mb-1">5 hrs</span>
                            </div>
                            {/*end::Lat seen*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed d-none" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-4">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}<div className="symbol  symbol-45px symbol-circle "><span className="symbol-label  bg-light-primary text-primary fs-6 fw-bolder ">N</span></div>{/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                                <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Lat seen*/}
                            <div className="d-flex flex-column align-items-end ms-2">
                              <span className="text-muted fs-7 mb-1">1 week</span>
                              <span className="badge badge-sm badge-circle badge-light-danger">5</span>
                            </div>
                            {/*end::Lat seen*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed d-none" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-4">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}<div className="symbol  symbol-45px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-23.jpg" /></div>{/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                                <div className="fw-semibold text-muted">dam@consilting.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Lat seen*/}
                            <div className="d-flex flex-column align-items-end ms-2">
                              <span className="text-muted fs-7 mb-1">1 day</span>
                            </div>
                            {/*end::Lat seen*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed d-none" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-4">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}<div className="symbol  symbol-45px symbol-circle "><span className="symbol-label  bg-light-danger text-danger fs-6 fw-bolder ">E</span></div>{/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                <div className="fw-semibold text-muted">emma@intenso.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Lat seen*/}
                            <div className="d-flex flex-column align-items-end ms-2">
                              <span className="text-muted fs-7 mb-1">2 weeks</span>
                              <span className="badge badge-sm badge-circle badge-light-warning">9</span>
                            </div>
                            {/*end::Lat seen*/}
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::List*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Contacts*/}  </div>
                  {/*end::Sidebar*/}
                  {/*begin::Content*/}
 <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10">
  {/*begin::Messenger*/}
  <div className="card" id="kt_chat_messenger">
    {/*begin::Card header*/}
    <div className="card-header" id="kt_chat_messenger_header">
      {/*begin::Title*/}
      <div className="card-title">
        {/*begin::User*/}
        <div className="d-flex justify-content-center flex-column me-3">
          <a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">infinty Bot</a>
          {/*begin::Info*/}
          <div className="mb-0 lh-1">
            <span className="badge badge-success badge-circle w-10px h-10px me-1" />
            <span className="fs-7 fw-semibold text-muted">Low Traffic</span>
          </div>
          {/*end::Info*/}
        </div>
        {/*end::User*/}
      </div>
      {/*end::Title*/}
      {/*begin::Card toolbar*/}
      <div className="card-toolbar">
        {/*begin::Menu*/}
        <div className="me-n3">
          <button className="btn btn-sm btn-icon btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
            <i className="ki-outline ki-dots-square fs-2" />              </button>
          {/*begin::Menu 3*/}
          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
            {/*begin::Heading*/}
            <div className="menu-item px-3">
              <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                Contacts
              </div>
            </div>
            {/*end::Heading*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">
                Add Contact
              </a>
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-3">
              <a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
                Invite Contacts
                <span className="ms-2" data-bs-toggle="tooltip" aria-label="Specify a contact email to send an invitation" data-bs-original-title="Specify a contact email to send an invitation" data-kt-initialized={1}>
                  <i className="ki-outline ki-information fs-7" />          </span>
              </a>
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
              <a href="#" className="menu-link px-3">
                <span className="menu-title">Groups</span>
                <span className="menu-arrow" />
              </a>
              {/*begin::Menu sub*/}
              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized={1}>
                    Create Group
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized={1}>
                    Invite Members
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}            
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized={1}>
                    Settings
                  </a>
                </div>
                {/*end::Menu item*/}
              </div>
              {/*end::Menu sub*/}
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className="menu-item px-3 my-1">
              <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized={1}>
                Settings
              </a>
            </div>
            {/*end::Menu item*/}
          </div>
          {/*end::Menu 3*/}
        </div>
        {/*end::Menu*/}
      </div>
      {/*end::Card toolbar*/}
    </div>
    {/*end::Card header*/}
    {/*begin::Card body*/}
    <div className="card-body" id="kt_chat_messenger_body">
      {/*begin::Messages*/}
      <div className="scroll-y me-n5 pe-5 h-300px h-lg-auto" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer" data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_messenger_body" data-kt-scroll-offset="5px" style={{maxHeight: 133}}>
                {/*begin::Message(out)*/}
                <div className="d-flex justify-content-end mb-10 ">
                {messages.map((message, index)=> {
                  return (
                    <>
                              {/*begin::Wrapper*/}
          <div className="d-flex flex-column align-items-end">
          {/*begin::User*/}
          <div className="d-flex align-items-center mb-2">
            {/*begin::Details*/}
            <div className="me-3">
              <span className="text-muted fs-7 mb-1">{getTimeDiff(message.timestamp)} </span>
              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">{message.sender}</a>  
            </div>
            {/*end::Details*/}
            {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><span className="symbol-label  bg-light-danger text-danger fs-6 fw-bolder">{state && state.profile_photo}</span></div>{/*end::Avatar*/}                 
          </div>
          {/*end::User*/}
          {/*begin::Text*/}
          <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
          {message.content}          </div>
          {/*end::Text*/}
        </div>
        {/*end::Wrapper*/}
        </>
                  )
                })}
          
        </div>
        {/*end::Message(out)*/}
        {/*begin::Message(in)*/}
<div className="d-flex justify-content-start mb-10 ">
  {/*begin::Wrapper*/}
  <div className="d-flex flex-column align-items-start">
    {/*begin::User*/}
    <div className="d-flex align-items-center mb-2">
      {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle" style={{display : resLoading == true  ? "block" : "none"}}><img alt="Pic" src="/assets/media/avatars/300-25.jpg" /></div>{/*end::Avatar*/}
      {/*begin::Details*/}
      <div className="ms-3">
        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1" style={{display : resLoading == true  ? "block" : "none"}}>Infinity Bot</a>
      </div>
      {/*end::Details*/}
    </div>
    {/*end::User*/}
    {/*begin::Text*/}
    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text" style={{display : resLoading == true  ? "block" : "none"}}>
    {isLoading ? `${animationDots}` : null}
      </div>
    {/*end::Text*/}
  </div>
  {/*end::Wrapper*/}
</div>
{/*end::Message(in)*/}
     

        {/*begin::Message(template for out)*/}
        <div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column align-items-end">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
              {/*begin::Details*/}
              <div className="me-3">
                <span className="text-muted fs-7 mb-1">Just now</span>
                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>  
              </div>
              {/*end::Details*/}
              {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-1.jpg" /></div>{/*end::Avatar*/}                 
            </div>
            {/*end::User*/}
            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
            </div>
            {/*end::Text*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Message(template for out)*/}
        {/*begin::Message(template for in)*/}
        <div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column align-items-start">
            {/*begin::User*/}
            <div className="d-flex align-items-center mb-2">
              {/*begin::Avatar*/}<div className="symbol  symbol-35px symbol-circle "><img alt="Pic" src="/assets/media/avatars/300-25.jpg" /></div>{/*end::Avatar*/}
              {/*begin::Details*/}
              <div className="ms-3">
                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                <span className="text-muted fs-7 mb-1">Just now</span>
              </div>
              {/*end::Details*/}
            </div>
            {/*end::User*/}
            {/*begin::Text*/}
            <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
              Right before vacation season we have the next Big Deal for you.          </div>
            {/*end::Text*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Message(template for in)*/}
      </div>
      {/*end::Messages*/}
    </div>
    {/*end::Card body*/}
    {/*begin::Card footer*/}
    <div className="card-footer pt-4" id="kt_chat_messenger_footer">
      {/*begin::Input*/}
      <textarea className="form-control form-control-flush mb-3" rows={1} data-kt-element="input" placeholder="Type a prompt" onChange={(e)=> setInput(e.target.value)} value={input} />
      {/*end::Input*/}
      {/*begin:Toolbar*/}
      <div className="d-flex flex-stack">
        {/*begin::Actions*/}
 <div className="d-flex align-items-center me-2">
  <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" aria-label="Coming soon" data-bs-original-title="Coming soon" data-kt-initialized={1}>
    <i className="ki-outline ki-paper-clip fs-3" />              </button>
  <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" aria-label="Coming soon" data-bs-original-title="Coming soon" data-kt-initialized={1}>
    <i className="ki-outline ki-exit-up fs-3" />              </button>
</div>

        {/*end::Actions*/}
        {/*begin::Send*/}
        <button className="btn btn-primary" type="button" data-kt-element="send" onClick={sendMessage}>Send</button>
        {/*end::Send*/}
      </div>
      {/*end::Toolbar*/}
    </div>
    {/*end::Card footer*/}
  </div>
  {/*end::Messenger*/}  </div>

                  {/*end::Content*/}
                </div>
                {/*end::Layout*/}
                {/*begin::Modals*/}
                {/*begin::Modal - View Users*/}
                <div className="modal fade" id="kt_modal_view_users" tabIndex={-1} aria-hidden="true">
                  {/*begin::Modal dialog*/}
                  <div className="modal-dialog mw-650px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                      {/*begin::Modal header*/}
                      <div className="modal-header pb-0 border-0 justify-content-end">
                        {/*begin::Close*/}
                        <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                          <span className="svg-icon svg-icon-1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                              <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}              </div>
                        {/*end::Close*/}
                      </div>
                      {/*begin::Modal header*/}
                      {/*begin::Modal body*/}
                      <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                        {/*begin::Heading*/}
                        <div className="text-center mb-13">
                          {/*begin::Title*/}
                          <h1 className="mb-3">Browse Users</h1>
                          {/*end::Title*/}
                          {/*begin::Description*/}
                          <div className="text-muted fw-semibold fs-5">
                            If you need more info, please check out our 
                            <a href="#" className="link-primary fw-bold">Users Directory</a>.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Users*/}
                        <div className="mb-15">
                          {/*begin::List*/}
                          <div className="mh-375px scroll-y me-n7 pe-7">
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <img alt="Pic" src="/assets/media/avatars/300-6.jpg" />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Emma Smith   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Art Director                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$23,000</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                    M                                          </span>
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Melody Macy   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Marketing Analytic                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">melody@altbox.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$50,500</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <img alt="Pic" src="/assets/media/avatars/300-1.jpg" />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Max Smith   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Software Enginer                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">max@kt.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$75,900</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <img alt="Pic" src="/assets/media/avatars/300-5.jpg" />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Sean Bean   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Web Developer                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">sean@dellito.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$10,500</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <img alt="Pic" src="/assets/media/avatars/300-25.jpg" />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Brian Cox   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      UI/UX Designer                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">brian@exchange.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$20,000</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                    C                                          </span>
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Mikaela Collins   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Head Of Marketing                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">mik@pex.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$9,300</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <img alt="Pic" src="/assets/media/avatars/300-9.jpg" />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Francis Mitcham   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Software Arcitect                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$15,000</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                    O                                          </span>
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Olivia Wild   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      System Admin                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$23,000</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                    N                                          </span>
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Neil Owen   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Account Manager                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$45,800</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <img alt="Pic" src="/assets/media/avatars/300-23.jpg" />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Dan Wilson   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Web Desinger                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">dam@consilting.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$90,500</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                    E                                          </span>
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Emma Bold   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Corporate Finance                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">emma@intenso.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$5,000</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <img alt="Pic" src="/assets/media/avatars/300-12.jpg" />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Ana Crown   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Customer Relationship                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$70,000</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="d-flex flex-stack py-5 ">
                              {/*begin::Details*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle">
                                  <span className="symbol-label bg-light-info text-info fw-semibold">
                                    A                                          </span>
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  {/*begin::Name*/}
                                  <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">
                                    Robert Doe   
                                    <span className="badge badge-light fs-8 fw-semibold ms-2">
                                      Marketing Executive                                          </span>
                                  </a>
                                  {/*end::Name*/}
                                  {/*begin::Email*/}
                                  <div className="fw-semibold text-muted">robert@benko.com</div>
                                  {/*end::Email*/}
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*end::Details*/}
                              {/*begin::Stats*/}
                              <div className="d-flex">
                                {/*begin::Sales*/}
                                <div className="text-end">
                                  <div className="fs-5 fw-bold text-dark">$45,500</div>
                                  <div className="fs-7 text-muted">Sales</div>
                                </div>
                                {/*end::Sales*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::List*/}
                        </div>
                        {/*end::Users*/}
                        {/*begin::Notice*/}
                        <div className="d-flex justify-content-between">
                          {/*begin::Label*/}                        
                          <div className="fw-semibold">
                            <label className="fs-6">Adding Users by Team Members</label>
                            <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
                          </div>
                          {/*end::Label*/}   
                          {/*begin::Switch*/}
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" defaultValue defaultChecked="checked" />
                            <span className="form-check-label fw-semibold text-muted">
                              Allowed
                            </span>
                          </label>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Notice*/}
                      </div>
                      {/*end::Modal body*/}
                    </div>
                    {/*end::Modal content*/}
                  </div>
                  {/*end::Modal dialog*/}
                </div>
                {/*end::Modal - View Users*/}{/*begin::Modal - Users Search*/}
                <div className="modal fade" id="kt_modal_users_search" tabIndex={-1} aria-hidden="true">
                  {/*begin::Modal dialog*/}
                  <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                      {/*begin::Modal header*/}
                      <div className="modal-header pb-0 border-0 justify-content-end">
                        {/*begin::Close*/}
                        <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                          <span className="svg-icon svg-icon-1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                              <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}              </div>
                        {/*end::Close*/}
                      </div>
                      {/*begin::Modal header*/}
                      {/*begin::Modal body*/}
                      <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                        {/*begin::Content*/}
                        <div className="text-center mb-13">
                          <h1 className="mb-3">Search Users</h1>
                          <div className="text-muted fw-semibold fs-5">
                            Invite Collaborators To Your Project
                          </div>
                        </div>
                        {/*end::Content*/}
                        {/*begin::Search*/}
                        <div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length={2} data-kt-search-enter="enter" data-kt-search-layout="inline">
                          {/*begin::Form*/}
                          <form data-kt-search-element="form" className="w-100 position-relative mb-5" autoComplete="off">	
                            {/*begin::Hidden input(Added to disable form autocomplete)*/}
                            <input type="hidden" />
                            {/*end::Hidden input*/}
                            {/*begin::Icon*/}
                            {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}                        {/*end::Icon*/}
                            {/*begin::Input*/}
                            <input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" defaultValue placeholder="Search by username, full name or email..." data-kt-search-element="input" />
                            {/*end::Input*/}
                            {/*begin::Spinner*/}
                            <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                              <span className="spinner-border h-15px w-15px align-middle text-muted" />
                            </span>
                            {/*end::Spinner*/}
                            {/*begin::Reset*/}
                            <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                              <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                  <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}                      </span>
                            {/*end::Reset*/}
                          </form>
                          {/*end::Form*/}
                          {/*begin::Wrapper*/}
                          <div className="py-5">                            
                            {/*begin::Suggestions*/}
                            <div data-kt-search-element="suggestions">
                              {/*begin::Heading*/}
                              <h3 className="fw-semibold mb-5">Recently searched:</h3>
                              {/*end::Heading*/}
                              {/*begin::Users*/}
                              <div className="mh-375px scroll-y me-n7 pe-7">
                                {/*begin::User*/}
                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle me-5">
                                    <img alt="Pic" src="/assets/media/avatars/300-6.jpg" />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="fw-semibold">
                                    <span className="fs-6 text-gray-800 me-2">Emma Smith</span>
                                    <span className="badge badge-light">Art Director</span>
                                  </div>
                                  {/*end::Info*/}
                                </a>
                                {/*end::User*/}
                                {/*begin::User*/}
                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle me-5">
                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                      M                      </span>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="fw-semibold">
                                    <span className="fs-6 text-gray-800 me-2">Melody Macy</span>
                                    <span className="badge badge-light">Marketing Analytic</span>
                                  </div>
                                  {/*end::Info*/}
                                </a>
                                {/*end::User*/}
                                {/*begin::User*/}
                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle me-5">
                                    <img alt="Pic" src="/assets/media/avatars/300-1.jpg" />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="fw-semibold">
                                    <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                                    <span className="badge badge-light">Software Enginer</span>
                                  </div>
                                  {/*end::Info*/}
                                </a>
                                {/*end::User*/}
                                {/*begin::User*/}
                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle me-5">
                                    <img alt="Pic" src="/assets/media/avatars/300-5.jpg" />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="fw-semibold">
                                    <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                                    <span className="badge badge-light">Web Developer</span>
                                  </div>
                                  {/*end::Info*/}
                                </a>
                                {/*end::User*/}
                                {/*begin::User*/}
                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle me-5">
                                    <img alt="Pic" src="/assets/media/avatars/300-25.jpg" />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Info*/}
                                  <div className="fw-semibold">
                                    <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                                    <span className="badge badge-light">UI/UX Designer</span>
                                  </div>
                                  {/*end::Info*/}
                                </a>
                                {/*end::User*/}
                              </div>
                              {/*end::Users*/}
                            </div>
                            {/*end::Suggestions*/}
                            {/*begin::Results(add d-none to below element to hide the users list by default)*/}
                            <div data-kt-search-element="results" className="d-none">
                              {/*begin::Users*/}
                              <div className="mh-375px scroll-y me-n7 pe-7">
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={0}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" defaultValue={0} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <img alt="Pic" src="/assets/media/avatars/300-6.jpg" />
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                                      <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2} selected>Owner</option>
                                      <option value={3}>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={1}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" defaultValue={1} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                        M                          </span>
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                                      <div className="fw-semibold text-muted">melody@altbox.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1} selected>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3}>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={2}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" defaultValue={2} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <img alt="Pic" src="/assets/media/avatars/300-1.jpg" />
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                                      <div className="fw-semibold text-muted">max@kt.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3} selected>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={3}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" defaultValue={3} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <img alt="Pic" src="/assets/media/avatars/300-5.jpg" />
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                                      <div className="fw-semibold text-muted">sean@dellito.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2} selected>Owner</option>
                                      <option value={3}>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={4}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" defaultValue={4} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <img alt="Pic" src="/assets/media/avatars/300-25.jpg" />
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                      <div className="fw-semibold text-muted">brian@exchange.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3} selected>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={5}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" defaultValue={5} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                        C                          </span>
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                                      <div className="fw-semibold text-muted">mik@pex.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2} selected>Owner</option>
                                      <option value={3}>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={6}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" defaultValue={6} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <img alt="Pic" src="/assets/media/avatars/300-9.jpg" />
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                                      <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3} selected>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={7}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" defaultValue={7} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                        O                          </span>
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                                      <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2} selected>Owner</option>
                                      <option value={3}>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={8}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" defaultValue={8} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                        N                          </span>
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                                      <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1} selected>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3}>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={9}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" defaultValue={9} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <img alt="Pic" src="/assets/media/avatars/300-23.jpg" />
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                                      <div className="fw-semibold text-muted">dam@consilting.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3} selected>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={10}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" defaultValue={10} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                        E                          </span>
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                      <div className="fw-semibold text-muted">emma@intenso.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2} selected>Owner</option>
                                      <option value={3}>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={11}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" defaultValue={11} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <img alt="Pic" src="/assets/media/avatars/300-12.jpg" />
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                                      <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1} selected>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3}>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={12}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" defaultValue={12} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <span className="symbol-label bg-light-info text-info fw-semibold">
                                        A                          </span>
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                                      <div className="fw-semibold text-muted">robert@benko.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3} selected>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={13}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" defaultValue={13} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <img alt="Pic" src="/assets/media/avatars/300-13.jpg" />
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                                      <div className="fw-semibold text-muted">miller@mapple.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3} selected>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={14}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" defaultValue={14} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <span className="symbol-label bg-light-success text-success fw-semibold">
                                        L                          </span>
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                      <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2} selected>Owner</option>
                                      <option value={3}>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={15}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" defaultValue={15} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <img alt="Pic" src="/assets/media/avatars/300-21.jpg" />
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                                      <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1} selected>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3}>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Separator*/}
                                <div className="border-bottom border-gray-300 border-bottom-dashed" />
                                {/*end::Separator*/}
                                {/*begin::User*/}
                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id={16}>
                                  {/*begin::Details*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Checkbox*/}
                                    <label className="form-check form-check-custom form-check-solid me-5">
                                      <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" defaultValue={16} />
                                    </label>
                                    {/*end::Checkbox*/}
                                    {/*begin::Avatar*/}
                                    <div className="symbol symbol-35px symbol-circle">
                                      <span className="symbol-label bg-light-success text-success fw-semibold">
                                        L                          </span>
                                    </div>
                                    {/*end::Avatar*/}
                                    {/*begin::Details*/}
                                    <div className="ms-5">
                                      <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                      <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                    </div>
                                    {/*end::Details*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Access menu*/}
                                  <div className="ms-2 w-100px">
                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                      <option value={1}>Guest</option>
                                      <option value={2}>Owner</option>
                                      <option value={3} selected>Can Edit</option>
                                    </select>
                                  </div>
                                  {/*end::Access menu*/}
                                </div>
                                {/*end::User*/}
                              </div>
                              {/*end::Users*/}
                              {/*begin::Actions*/}
                              <div className="d-flex flex-center mt-15">
                                <button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">
                                  Cancel
                                </button>
                                <button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">
                                  Add Selected Users
                                </button>
                              </div>
                              {/*end::Actions*/}
                            </div>
                            {/*end::Results*/}
                            {/*begin::Empty*/}
                            <div data-kt-search-element="empty" className="text-center d-none">
                              {/*begin::Message*/}
                              <div className="fw-semibold py-10">
                                <div className="text-gray-600 fs-3 mb-2">No users found</div>
                                <div className="text-muted fs-6">Try to search by username, full name or email...</div>
                              </div>
                              {/*end::Message*/}
                              {/*begin::Illustration*/}
                              <div className="text-center px-5">
                                <img src="/assets/media/illustrations/sketchy-1/1.png" alt className="w-100 h-200px h-sm-325px" />        
                              </div>
                              {/*end::Illustration*/}
                            </div>
                            {/*end::Empty*/}                  </div>
                          {/*end::Wrapper*/}
                        </div>
                        {/*end::Search*/}
                      </div>
                      {/*end::Modal body*/}
                    </div>
                    {/*end::Modal content*/}
                  </div>
                  {/*end::Modal dialog*/}
                </div>
                {/*end::Modal - Users Search*/}{/*end::Modals*/}      </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}					
          </div>
          {/*end::Content wrapper*/}
          {/*begin::Footer*/}
<Footer />
          {/*end::Footer*/}                          </div>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    {/*end::Page*/}
  </div>
  {/*end::App*/}


</div>



    </>
  )
}

export default ContentWritingApi
