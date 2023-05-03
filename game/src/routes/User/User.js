/*eslint-disable */
import React from 'react';

import Home from '../../components/pages/Home/Home';
import Profile from "../../components/pages/Profile/Profile"
import NotFoundError from "../../components/pages/NotFoundError/NotFoundError";
import SocialDetails from "../../components/pages/SocialDetails/SocialDetails"
import UserProfile from "../../components/pages/UserProfile/UserProfile"
import Users from '../../components/pages/Users/Users';
import Shop from '../../components/pages/Shop/Shop';
let useRoutes = [
  {
    path : "home",
    element: <Home/>
  },
  {
    path : "profile/:id",
    element: <Profile/>
  },
  {
    path : "profile/account/:id",
    element: <SocialDetails/>
  },
  {
    path : "profile/user/:id",
    element: <UserProfile/>
  },
  {
    path : "users",
    element: <Users/>
  },
  {
    path : "shop",
    element: <Shop/>
  },
  {
    path : "*",
    element: <NotFoundError />
  },

]
export default useRoutes;
