/*eslint-disable */
import React from 'react';

import Home from '../../components/pages/Home/Home';
import Profile from "../../components/pages/Profile/Profile"
import NotFoundError from "../../components/pages/NotFoundError/NotFoundError";
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
    path : "*",
    element: <NotFoundError />
  },

]
export default useRoutes;
