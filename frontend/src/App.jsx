import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import "./global.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Shop from "./pages/shop";

const LayoutLazy = lazy(() => import("./pages/layout"));

function App() {
  const routes = [
    {
      element: (
        <Suspense
          fallback={
            <div className="w-full flex justify-center items-center bg-white h-screen">
              <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute" />
            </div>
          }
        >
          <LayoutLazy />
        </Suspense>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/shop", element: <Shop /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    { path: "*", element: <>Error</> },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
