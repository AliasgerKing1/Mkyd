/*eslint-disable */
import { useRoutes} from "react-router-dom";

import Layouts from "../Layouts/Layouts";
import userRoutes from "./User/User";
import Signin from "../components/pages/Signin/Signin";
import Signup from "../components/pages/Signup/Signup";
import Pricing from "../components/pages/Pricing/Pricing"

const Router = () => {
const router = useRoutes([

    {
      path : "/",
      element: <Signin />
    },
    {
      path : "/signup",
      element: <Signup />
    },
  {
    path: "/pricing",
    element: <Pricing />
  },
{
  path : "auth",
  element: <Layouts/>,
  children : userRoutes
}
  ])
  return (router);
}


export default Router;