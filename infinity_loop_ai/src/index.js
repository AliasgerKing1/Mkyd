/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {configureStore, combineReducers} from "@reduxjs/toolkit"

import SignInReducer from "./Redux/SignInReducer"
import TokenReducer from "./Redux/TokenReducer"
import CreateDesignReducer from './Redux/CreateDesignReducer';
import Step2CreateReducer from "./Redux/Step2CreateReducer"
import Step3CreateReducer from "./Redux/Step3CreateReducer"
import Step4CreateReducer from "./Redux/Step4CreateReducer"
import SidebarReducer from "./Redux/SidebarReducer"
import PlanSelectedReducer from "./Redux/PlanSelectedReducer"
import PostReducer from './Redux/PostReducer';
import HomeChangeLinkReducer from './Redux/HomeChangeLinkReducer';
import OtpReducer from './Redux/OtpReducer';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let rootReducer = combineReducers({
  TokenReducer,
  SignInReducer,
  CreateDesignReducer,
  Step2CreateReducer,
  Step3CreateReducer,
  Step4CreateReducer,
  SidebarReducer,
  PlanSelectedReducer,
  PostReducer,
  HomeChangeLinkReducer,
  OtpReducer
})
let store = configureStore ({
  reducer : rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
   </Provider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
