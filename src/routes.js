import Home from "./component/home";
import About from "./component/about";
import Event from "./component/event";
import Committee from "./component/committee";
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
    name: "Our Committee",
    component: <Committee />,
    path: "/committee",
  },
  {
    id: 4,
    name: "Events",
    component: <Event />,
    path: "/event",
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
