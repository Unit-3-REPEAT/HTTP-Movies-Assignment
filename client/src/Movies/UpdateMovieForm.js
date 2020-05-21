import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'


const initialState = {    
    title: "",
    director: "",
    metascore:"",
    stars:[]
}



const UpdateMovieForm = (props) => {
    console.log(`props inside Update form`, props)
   
    const [movieValue, setMovieValue] = useState(initialState);

    const params = useParams();
    // console.log(`params`, params);

    const history = useHistory();
     console.log(`history`, history);

    //GET REQUEST
    //Here we make the get request to fill in already existing inputs so that user can see what they are updating
    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/movies/${params.id}`)
        .then(response => {
            console.log(`get request`, response)
            setMovieValue(response.data)            
        })
        .catch(error => {console.log(`There was an error fetching data`, error.response)})
    }, [params.id])

    
    //Put request on form Submit

    const handleSubmit = e => {
        e.preventDefault();

        axios
        .put(`http://localhost:5000/api/movies/${params.id}`, movieValue)
        .then (response => {
            // console.log(response);            
            // we call getMovieList() to rerender the page after the put request     
            props.getMovieList(); 
            //this routes user back to base URL
            history.push('/')
            
        })
        .catch(error => console.log(`There was an error on PUT request`, error.response))
    }

    //handle changes
    const handleChanges = e => {
       e.persist();
       setMovieValue({
           ...movieValue,
           [e.target.name] : e.target.value
       })
    } 

   

    return (
        <div>
            <h2>Update your movie here:</h2>
            <form onSubmit={handleSubmit}>        
                
                
                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={movieValue.title}
                    onChange={handleChanges}
                />
                <br/>

                <input 
                    type='text'
                    name='director'
                    placeholder='Director'
                    value={movieValue.director}
                    onChange={handleChanges}
                />
                <br/>                

                <input 
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    value={movieValue.metascore}
                    onChange={handleChanges}
                />
                <br/>

                <input 
                    type='text'
                    name='stars'
                    placeholder='Stars'
                    value={movieValue.stars}
                    onChange={handleChanges}
                />
                <br/>

                <button>Update</button>

               
                <br/>
            </form>  
        </div>  

    )
}

export default UpdateMovieForm;