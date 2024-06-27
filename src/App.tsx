import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "destination",
    children: [
      {
        path: "edusat",
        element: <Destination planet="Edusat" />,
      },
      { path: "mars", element: <Destination planet="Rocketry" /> },
      { path: "europa", element: <Destination planet="Robotics" /> },
      { path: "titan", element: <Destination planet="IOT" /> },
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
    children: [
      {
        path: "launch-vehicle",
        element: <Technology technology="Satcom" />,
      },
      {
        path: "Spaceport",
        element: <Technology technology="Spaceport" />,
      },
      {
        path: "space-capsule",
        element: <Technology technology="Earth Observation" />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
