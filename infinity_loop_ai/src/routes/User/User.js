/*eslint-disable */
import React from 'react';

import Home from '../../components/pages/Home/Home';
import CreateDesign from '../../components/pages/CreateDesign/CreateDesign';
let userRoutes = [
  {
    path : "home",
    element: <Home/>
  },
  {
    path : "create/design",
    element: <CreateDesign/>
  },

  // {
  //   path : "*",
  //   element: <NotFoundError />
  // },

]
export default userRoutes;
