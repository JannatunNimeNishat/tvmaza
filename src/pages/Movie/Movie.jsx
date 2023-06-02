import { Link } from "react-router-dom";


const Movie = ({ item }) => {


    const { id,name, image } = item.show;
    console.log(id);
    return (
        <div className="card w-full bg-base-100 shadow-xl">

            <figure className=" h-[400px]">
                <img className=" w-full h-full" src={image.original} alt="Shoes" />
                </figure>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
              
                <div className="card-actions justify-center ">
                    <Link to={`/movieDetails/${id}`} className="btn btn-primary">View Description</Link>
                </div>
            </div>
        </div>

    );
};

export default Movie;