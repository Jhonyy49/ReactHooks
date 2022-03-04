import React, {useState} from 'react'
import MovieList from './components/MovieList'
import './App.css';

function App() {

  const [movies, setMovies] = useState ([
    {
      title : "The Guilty",
      year : "2021",
      rating : "6.3",
      imgSrc : "https://m.media-amazon.com/images/M/MV5BZWI3NmEyYzAtNWY4OC00YWY4LTk2MjgtM2Y1NDdlZWE4ODgzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    },
    {
      title : "The Unforgivable",
      year : "2021",
      rating : "7.2",
      imgSrc : "https://cps-static.rovicorp.com/2/Open/Netflix/Program/46491116/_derived_jpg_q90_310x470_m0/34_27_1640349144127_2.jpg",
    },
    {
      title : "The Tomorrow War",
      year : "2021",
      rating : "6.6",
      imgSrc : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhotZZ36j8rndD5i2OG1scehoqeH_m7uLmohqF-yDDfR8X7kFk",
    },
    
  ]);
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
