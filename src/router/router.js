import ErrorPage from "../pages/ErrorPage";
import Heroes from "../pages/Heroes";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Matches from "../pages/Matches";
import Teams from "../pages/Teams";

export const privateRoutes = [
  {path: '/', element: Homepage},
  {path: '/login', element: Login},
  {path: '/heroes', element: Heroes},
  {path: '/matches', element: Matches},
  {path: '/teams', element: Teams},
  {path: '*', element: ErrorPage},
]

export const publicRoutes = [
  {path: '/', element: Homepage},
  {path: '*', element: Login},
]