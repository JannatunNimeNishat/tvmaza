import { createBrowserRouter } from "react-router-dom";
import Movies from "../pages/Movies/Movies";
import MovieLayout from "../layout/MovieLayout";
import MovieDetails from "../pages/MovieDetails/MovieDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MovieLayout></MovieLayout>,
        children:[
            {
                path:'/',
                element:<Movies></Movies>
            },
            {
                path:'/movieDetails/:id',
                element:<MovieDetails></MovieDetails>
            }
        ]
    }
])
export default router;