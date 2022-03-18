import Home from "./component/home";
import About from "./component/about";
import Event from "./component/event";
import Archive from "./component/archive";
import FAQ from "./component/faq";
import NotFound from "./component/404";

const routes = [
  {
    id: 1,
    name: "Home",
    component: <Home />,
    path: "/",
  },
  {
    id: 2,
    name: "About Us",
    component: <About />,
    path: "/about",
  },
  {
    id: 3,
    name: "Events",
    component: <Event />,
    path: "/event",
  },
  {
    id: 4,
    name: "Archives",
    component: <Archive />,
    path: "/archive",
  },
  {
    id: 5,
    name: "FAQ",
    component: <FAQ />,
    path: "/faq",
  },
  {
    id: 6,
    name: "404",
    component: <NotFound />,
    path: "*",
  },
];

export default routes;
