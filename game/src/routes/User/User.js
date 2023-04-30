/*eslint-disable */
import React from 'react';

import Home from '../../components/pages/Home/Home';
import Profile from "../../components/pages/Profile/Profile"
import NotFoundError from "../../components/pages/NotFoundError/NotFoundError";
import SocialDetails from "../../components/pages/SocialDetails/SocialDetails"
import Users from '../../components/pages/Users/Users';
let useRoutes = [
  {
    path : "home",
    element: <Home/>
  },
  {
    path : "users",
    element: <Users/>
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
    path : "*",
    element: <NotFoundError />
  },

]
export default useRoutes;
