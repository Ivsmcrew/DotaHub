import ErrorPage from "../pages/ErrorPage";
import Heroes from "../pages/Heroes";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Matches from "../pages/Matches";
import Teams from "../pages/Teams";

export const routes = [
  {path: '/heroes', element: Heroes},
  {path: '/', element: Homepage},
  {path: '/matches', element: Matches},
  {path: '/teams', element: Teams},
  {path: '/login', element: Login},
  {path: '*', element: ErrorPage},
]