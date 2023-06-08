/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import SignInReducer from "./Redux/SignInReducer"
import CreateDesignReducer from './Redux/CreateHtml/CreateDesignReducer';
import Step2CreateReducer from "./Redux/CreateHtml/Step2CreateReducer"
import Step3CreateReducer from "./Redux/CreateHtml/Step3CreateReducer"
import Step4CreateReducer from "./Redux/CreateHtml/Step4CreateReducer"
import CreateDesignReactReducer from './Redux/CreateReact/CreateDesignReactReducer';
import Step2CreateReactReducer from "./Redux/CreateReact/Step2CreateReactReducer"
import Step3CreateReactReducer from "./Redux/CreateReact/Step3CreateReactReducer"
import Step4CreateReactReducer from "./Redux/CreateReact/Step4CreateReactReducer"
import SidebarReducer from "./Redux/SidebarReducer"
import PlanSelectedReducer from "./Redux/PlanSelectedReducer"
import PostReducer from './Redux/PostReducer';
import HomeChangeLinkReducer from './Redux/HomeChangeLinkReducer';
import OtpReducer from './Redux/OtpReducer';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let rootReducer = combineReducers({
  SignInReducer,
  CreateDesignReducer,
  Step2CreateReducer,
  Step3CreateReducer,
  Step4CreateReducer,
  CreateDesignReactReducer,
  Step2CreateReactReducer,
  Step3CreateReactReducer,
  Step4CreateReactReducer,
  SidebarReducer,
  PlanSelectedReducer,
  PostReducer,
  HomeChangeLinkReducer,
  OtpReducer
})
let store = configureStore({
  reducer: rootReducer
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
