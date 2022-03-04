import React, {useState} from 'react'
import data from '../mock-data.json'
const FormInput = () => {
    const [movies, setMovies] = useState(data)
    const [addFormData, setAddFormData] = useState({
        moviename: '',
        movieyear: '',
        movierating: '',
        moviephoto: '',
    })

    const handleAddFormChange = (event) => {
        event.preventDefault()

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value

        const newFormData = {...addFormData}
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData)
    } 

    const handleAddFormSubmit = (event) => {
        event.preventDefault()

        const addedMovies ={
            moviename : addFormData.moviename,
            movieyear : addFormData.movieyear,
            movierating : addFormData.movierating,
            moviephoto : addFormData.moviephoto
        }
        const newMmovies = [...movies, addedMovies]
        setMovies(newMmovies)
        
    }
  return (
    <div>
      
      <div className="app-container"></div>
        <h2 style={{paddingLeft:'10px'}}>You can add your own Movie</h2>

        <form onSubmit={handleAddFormSubmit} style={{paddingLeft:'10px'}}>
        <input 
        type="text" 
        name="moviename" 
        required="required"
        placeholder="Enter a name..."
        onChange={handleAddFormChange}
        />
        <input 
        type="text" 
        name="movieyear"  
        required="required"
        placeholder="Enter the year..."
        onChange={handleAddFormChange}
        />
        <input 
        type="text" 
        name="movierating" 
        required="required"
        placeholder="Enter the rating..."
        onChange={handleAddFormChange}
        />
        <input 
        type="text" 
        name="moviephoto" 
        required="required"
        placeholder="Enter the photo Url..."
        onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
        </form>
        <br /> <br />
        {movies.map((movie) => 
            <div style={{paddingLeft:'10px',width: '150px',height: '450px',display: "grid",display: "inline-grid",gridTemplatecolumns: "auto auto auto auto"}}> 
            <img src={movie.moviephoto} style={{height: '200px', width: '150px'}}></img>             
            <h4>Movie name : {movie.moviename}</h4>
            <h4>Movie year :{movie.movieyear}</h4>
            <h4>Movie rating :{movie.movierating}</h4>

            </div>
        )}
    </div>
  )
}

export default FormInput
