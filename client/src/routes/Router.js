import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "./../pages/home/Home";
//import Register from "./../pages/register/Register";
import Header from "../component/header/Header";
import Pagination from "../component/pagination/Pagination";
import Spin from "../component/spin/Spin";
import Profile from "../pages/profile/Profile";
import Theme from "../component/Theme/Theme";
import Message from "../component/message/Message";

import Filter from "../pages/home/filter/Filter";
import Table from "../pages/home/table/Table";
import Search from "../pages/home/Search/Search";
import Register from "./../pages/register/Register";
import Edit from "../pages/edit/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/Header",
        element: <Header />,
      },
      {
        path: "/Pagination",
        element: <Pagination />,
      },
      {
        path: "/Spin",
        element: <Spin />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Theme",
        element: <Theme />,
      },
      {
        path: "/message",
        element: <Message />,
      },

      {
        path: "/Filter",
        element: <Filter />,
      },
      {
        path: "/Table",
        element: <Table />,
      },
      {
        path: "/Search",
        element: <Search />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Edit",
        element: <Edit />,
      },
    ],
  },
]);
export default router;
