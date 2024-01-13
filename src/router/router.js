import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Heroes from "../pages/Heroes/Heroes";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Matches from "../pages/Matches/Matches";
import Teams from "../pages/Teams/Teams";

export const privateRoutes = [
  {path: null, element: Homepage, index: true},
  {path: 'login', element: Login, index: false},
  {path: 'heroes', element: Heroes, index: false},
  {path: 'matches', element: Matches, index: false},
  {path: 'teams', element: Teams, index: false},
  {path: '*', element: ErrorPage, index: false},
]

export const publicRoutes = [
  {path: null, element: Homepage, index: true},
  {path: '*', element: Login, index: false},
]