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
    children: [
      {
        path: "moon",
        element: <Destination planet="Moon" />,
      },
      { path: "mars", element: <Destination planet="Mars" /> },
      { path: "europa", element: <Destination planet="Europa" /> },
      { path: "titan", element: <Destination planet="Titan" /> },
    ],
  },
  {
    path: "crew",
    children: [
      {
        path: "commander",
        element: <Crew crew="Commander" />,
      },
      {
        path: "mission-specialist",
        element: <Crew crew="Mission Specialist" />,
      },
      { path: "pilot", element: <Crew crew="Pilot" /> },
      { path: "flight-engineer", element: <Crew crew="Flight Engineer" /> },
    ],
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
