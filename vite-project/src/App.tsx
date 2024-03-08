import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import ErrorPage from "./pages/error-page";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Moon from "./pages/Destination/Moon";
import Mars from "./pages/Destination/Mars";
import Europa from "./pages/Destination/Europa";
import Titan from "./pages/Destination/Titan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "destination",
    element: <Destination />,
    children: [
      {
        path: "moon",
        element: <Destination />,
      },
      { path: "mars", element: <Mars /> },
      { path: "europa", element: <Europa /> },
      { path: "titan", element: <Titan /> },
    ],
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
