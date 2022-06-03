import Hero from "./components/Hero";
import Aside from "./components/Aside";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Aside1 from "./Aside1";

export const routes = [
  {
    path: "/",
    link: "Home",
    Component: Hero,
    route: [],
  },
  {
    path: "/aside/*",
    link: "Aside",
    Component: Aside,
    route: [
      {
        path: "aside1",
        Component: Hero,
      },
      {
        path: "aside2",
        Component: Footer,
      },
      {
        path: "aside3",
        Component: Hero,
      },
    ],
  },
  {
    path: "/footer",
    link: "footer",
    Component: Footer,
  },
];
