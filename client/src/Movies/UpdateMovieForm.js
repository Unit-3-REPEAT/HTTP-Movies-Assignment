import React, { useState, useEffect }from 'react';
import axios from 'axios';


const initialState = {    
    id: "",
    title: "",
    director: "",
    metascore:"",
    stars:[]
}



const UpdateMovieForm = () => {
   
    const {inputValue, setInputValue} = useState(initialState);

    // //handle changes
    // const handleChanges = e => {
    //     e.persist();
    //     let value = e.target.value;
    //     if (ev.target.name === id){
    //         value = parseInt(value,10);
    //     }
    // }

    // useEffect(() => {
    //     axios
    //     .get()


    // })


    return (
        <div>
            <h2>Update your movie here:</h2>
            <form>

            <input
                    type='text'
                    name='id'
                    placeholder='Id'
                    value={inputValue} 
                    // onChange={handleChanges}
                />
                <br/>

                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={inputValue} 
                    // onChange={handleChanges}
                />
                <br/>

                <input 
                    type='text'
                    name='director'
                    placeholder='Director'
                    value={inputValue}
                    // onChange={handleChanges}
                />
                <br/>                

                <input 
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    value={inputValue} 
                    // onChange={handleChanges}
                />
                <br/>

                <button>Update</button>

               
                <br/>
            </form>  
        </div>  

    )
}

export default UpdateMovieForm;