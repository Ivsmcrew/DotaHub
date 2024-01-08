import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Heroes from "../pages/Heroes/Heroes";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Matches from "../pages/Matches/Matches";
import Teams from "../pages/Teams/Teams";

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