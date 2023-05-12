/*eslint-disable */
import { useRoutes} from "react-router-dom";

import Layouts from "../Layouts/Layouts";
import userRoutes from "./User/User";
import Signin from "../components/pages/Signin/Signin";

const Router = () => {
const router = useRoutes([

    {
      path : "/",
      element: <Signin />
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