/*eslint-disable */
import React from 'react';

import Home from '../../components/pages/Home/Home';
import CreateDesign from '../../components/pages/CreateDesign/CreateDesign';
import CreateDesignReact from '../../components/pages/CreateDesignReact/CreateDesignReact';
import Faq from "../../components/pages/Faq/Faq"
import Error404 from '../../components/pages/Error404/Error404';
import Error500 from '../../components/pages/Error500/Error500';
import DrawCanvas from '../../components/pages/DrawCanvas/DrawCanvas';
import UserProfile from "../../components/pages/UserProfile/UserProfile"
let userRoutes = [
  {
    path: "home",
    element: <Home />
  },
  {
    path: "create/design",
    element: <CreateDesign />
  },
  {
    path: "create/design/react",
    element: <CreateDesignReact />
  },
  {
    path: "create/design/draw",
    element: <DrawCanvas />
  },
  {
    path: "faq",
    element: <Faq />
  },
  {
    path: "profile",
    element: <UserProfile />
  },
  {
    path: "error500",
    element: <Error500 />
  },
  {
    path: "*",
    element: <Error404 />
  },

]
export default userRoutes;
