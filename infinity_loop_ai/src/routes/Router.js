/*eslint-disable */
import { useRoutes} from "react-router-dom";

import Layouts from "../Layouts/Layouts";
import userRoutes from "./User/User";
import Signin from "../components/pages/Signin/Signin";
import Signup from "../components/pages/Signup/Signup";
import Pricing from "../components/pages/Pricing/Pricing"
import VerifyOtp from "../components/pages/VerifyOtp/VerifyOtp"

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
      path : "/verify/otp",
      element: <VerifyOtp />
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