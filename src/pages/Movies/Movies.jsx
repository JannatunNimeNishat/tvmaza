import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";



const Movies = () => {
   
    const [movies, setMovies] = useState()

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

  
    return (
        <div className="mt-4 w-11/12 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
                {
                    movies?.map(item => <Movie
                        key={item.show.id}
                        item={item}
                    ></Movie>)
                }
            </div>
        </div>
    );
};

export default Movies;