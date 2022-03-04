import React from 'react'
import FormInput from './FormInput'

const MovieList = (props) => {
  return (
    <div>
        <FormInput />
        <h2 style={{paddingLeft:'10px'}}>Our movies</h2>
        {props.movies.map((movies, i) => <div style={{paddingLeft:'10px',width: '150px',display: "grid",display: "inline-grid",gridTemplatecolumns: "auto auto auto auto auto auto auto auto"}}>
            <img src={movies.imgSrc} style={{height: '200px', width: '150px'}}></img>
            <h4>Movie name : {movies.title}</h4>
            <h4>Movie year :{movies.year}</h4>
            <h4>Movie rating :{movies.rating}</h4>
        </div>)}
        
    </div>
  )
}

export default MovieList
