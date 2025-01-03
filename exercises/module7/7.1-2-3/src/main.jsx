import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import CinemaPage from "components/Pages/CinemaPage";
import HomePage from "components/Pages/HomePage";
import MovieListPage from "components/Pages/MovieListPage";
import AddMovieForm from "components/AddMovieForm/AddMovieForm";
import MoviePage from "components/Pages/MoviePage";

import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinema",
        element: <CinemaPage />,
      },
      {
        path: "movies",
        element: <MovieListPage />,
      },
      {
        path: "add-movie",
        element: <AddMovieForm />
        ,
      },
      {
        path: "/movies/:id",
        element: <MoviePage />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
    </StrictMode>,
)
