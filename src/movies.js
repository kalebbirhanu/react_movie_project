import {  useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

function Movies(){
    const [movies, setMovies] = useState([
        {title: "avatar", id: 1, rate: 3.5}, 
        {title: "terminator", id: 2, rate: 4}, 
        {title: "avengers", id: 3, rate: 3.5}, 
        {title: "shazam", id: 4, rate: 4.5}, 
    {title: "blackpanther", id: 5, rate: 5}]);

    

    const handleDelete = (movie) => {
    const movies = movies.filter(m => m.id !== movie.id);
       setMovies({movies});
       console.log({movies});
    }
//     handlesubmit = (e) => {
// e.preventdefault();
// const form = document.forms.movie_name;
// const movies = {title: form.title.value, rate: form.rate.value};
//     }

    
    return(
        <div className="table-responsive">
        <div>
            <table className="table text-info">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th></th>
                        <th></th>
                        </tr>
                </thead>
                <tbody>
                 {movies.map(movie => <tr key = {movie.id} >
                 <td>{movie.title} </td> 
                 <td><button className="btn btn-primary">Download</button></td>
                 <td><button className="btn btn-danger" onClick={() => handleDelete(movie)} >Delete</button></td>
                 </tr>)}
                </tbody>
            </table>
            <div>
                {/* <form name="movie_name" className="m-40px" onSubmit={() => handlesubmit()}>
                    <input type="text" placeholder="movies title"/>
                    <input type="number" placeholder="rate" max={10} min={1}/>
                    <input type="link" placeholder="movies link"/>
                 <button className="btn btn-primary">add</button>
                </form> */}
            </div>
        </div>

        </div>
    );
}
export default Movies;