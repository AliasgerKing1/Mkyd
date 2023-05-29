/*eslint-disable */
import React from 'react';

import Home from '../../components/pages/Home/Home';
import CreateDesign from '../../components/pages/CreateDesign/CreateDesign';
import Error404 from '../../components/pages/Error404/Error404';
import Error500 from '../../components/pages/Error500/Error500';
let userRoutes = [
  {
    path : "home",
    element: <Home/>
  },
  {
    path : "create/design",
    element: <CreateDesign/>
  },

  {
    path: "*",
    element: <Error404 />
  },
  {
    path: "error500",
    element: <Error500 />
  },

]
export default userRoutes;
