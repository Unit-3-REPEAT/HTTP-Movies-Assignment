import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";



function Movie(props) {
  console.log(`props inside Movie.js`, props);

  const history = useHistory();
  // console.log(history);
  const params = useParams();
  // console.log(params);
  
  const [movie, setMovie] = useState(null);

  
  

  const fetchMovie = (id) => { 
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };


  //Route to UpdatedForm
  // const RouteToUpdateMovieForm = () => {
  //   history.push(`/update-movie/${movie.id}`)
  // }

  const RouteToUpdateMovieForm = (id) => {
    history.push(`/update-movie/${id}`)
  }



  const saveMovie = () => {
    props.addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

//  Delete Movie
  const DeleteMovie = (e) => {
    e.preventDefault();
    axios
    .delete(`http://localhost:5000/api/movies/${params.id}`)
    .then(response => {
     console.log(`->`, response) 
     props.getMovieList(); // Tried to do this a different way but did not work 
         
     history.push('/')
    })
    .catch(error => console.log(`There was an error with delete request`, error))
  }

 

  return (
    <>
    <section className="save-wrapper">
      <MovieCard movie={movie} />


          <div className="save-button" onClick={saveMovie}>
            Save         
          </div>   
    
          <button onClick={() => RouteToUpdateMovieForm(movie.id)}>Update Movie</button> 
          {/* // When to use () => and when to not   */}
          <button onClick={DeleteMovie}>Delete Movie</button> 
    </section>
    </>
  );  
  
}

export default Movie;
