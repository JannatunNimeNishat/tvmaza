import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const MovieDetails = () => {
    const { id } = useParams()
    const [singleMovie, setSingleMovie] = useState()

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setSingleMovie(data))
    }, [])

    let selectedMovie = [];
    for (let item in singleMovie) {
        if (singleMovie[item]?.show?.id == id) {
            selectedMovie.push(singleMovie[item]?.show)
        }

    }
    console.log(selectedMovie[0]);

    const handleBookingMovie = (event) => {
        const form = event.target
        const movieName = form.movie_name.value
        const userName = form.user_name.value
        const userEmail = form.user_email.value
        const bookMovies = { movieName, userName, userEmail }
        localStorage.setItem('book-movies', JSON.stringify(bookMovies));
       
        

    }
    return (
        <div>


         
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={selectedMovie[0]?.image.original} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: selectedMovie[0]?.summary }} />

                        <button className="btn btn-primary mt-5" onClick={() => window.my_modal_4.showModal()}>Book the ticket</button>
                        
                    </div>
                </div>
            </div>


          
            <dialog id="my_modal_4" className="modal ">
                <form onSubmit={handleBookingMovie} method="dialog" className="modal-box w-11/12 max-w-5xl">
                   

                    <div className="w-full flex justify-center items-center  ">
                       

                        <div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Movie Name</span>

                                </label>
                                <input type="text" name="movie_name" value={selectedMovie[0]?.name} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Name</span>

                                </label>
                                <input type="text" name="user_name" placeholder="Enter Name" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Email</span>

                                </label>
                                <input type="email" name="user_email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
                            </div>

                           

                            <div className="modal-action">

                            
                                <input type="submit" className="btn btn-primary mt-4 w-full " value="Submit" />
                            </div>

                        </div>
                     
                    </div>


                    <div className="modal-action">

                        <button className="btn">Close</button>

                    </div>

                </form>
            </dialog>
        </div>


    );
};

export default MovieDetails;