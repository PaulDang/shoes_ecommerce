import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import { Spinner } from "react-bootstrap";

const LayoutLazy = lazy(() => import("./pages/layout"));

function App() {
  const routes = [
    {
      element: (
        <Suspense
          fallback={
            <div className="w-full flex justify-center items-center bg-white h-screen">
              <Spinner animation="border" />
            </div>
          }
        >
          <LayoutLazy />
        </Suspense>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
      ],
    },
    { path: "*", element: <>Error</> },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
