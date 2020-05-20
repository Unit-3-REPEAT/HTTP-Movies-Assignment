import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import {useHistory} from 'react-router-dom';

function Movie({ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const {push} = useHistory();
  // console.log(push);
  const params = useParams();
  

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };


  //Route to UpdatedForm
  const RouteToUpdateMovieForm = (id) => {
    push(`/update-movie/${id}`)
  }



  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <>
    <section className="save-wrapper">
      <MovieCard movie={movie} />


          <div className="save-button" onClick={saveMovie}>
            Save         
          </div>   
    
          <button onClick={() => RouteToUpdateMovieForm(movie.id)}>Update Movie</button>   
    </section>
    </>
  );  
  
}

export default Movie;
