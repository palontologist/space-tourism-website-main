import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import ErrorPage from "./pages/error-page";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "destination",
    element: <Destination />,
  },
  {
    path: "crew",
    element: <Crew />,
  },
  {
    path: "technology",
    element: <Technology />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
