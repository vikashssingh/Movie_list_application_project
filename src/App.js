import { useEffect, useState } from 'react';
import MovieCard from './component/MovieCard';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {

  const [movie, setMovie] = useState([]);

   useEffect(() => {
     fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.results);
      });
   },[]);

  return (
    <div className='movie'>
      <div className="movieHeader">
        <h1>Movie List Application in REACT</h1>
      </div>
        <div className='movieContainer'>
          {movie.length>0 && movie.map((movie) => 
           <MovieCard key={movie.id} {...movie}/>
          )}
      </div>
    </div>
  );
}

export default App;