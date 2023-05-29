import {useEffect, useState} from 'react'
import {Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Movies() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

   


    const sortMovies = () => {
        const sortedMovies = [...movies].sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        setMovies(sortedMovies); 
    };

     const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };
    
     
      useEffect (() => {
        const fetchMovies = async () => {
            try {
            const movies = await axios.get('https://api.andrespecht.dev/movies');
            const moviesArray  = movies.data.response;
          
            setMovies(moviesArray);

            } catch (err) {
            console.error(err);
            }
        };

      fetchMovies();
      
    }, []);

    useEffect(() => {
        
        const handleMovieClick = (movies) => {
            setSelectedMovie(movies);
        };
      }, [selectedMovie]);
  return (
    <div >
    
    <Helmet>
        <title>Movies Hub</title>
    </Helmet>
     
     <div className='sortBtn'>
     <input type="button" value="Sort movies" onClick={sortMovies}/>
     </div>
     <p>Streaming Now...</p>
     <section className='movie-list'>
     {movies.map(movie => (
             <div key={movie._id} className="movieItem" onClick={() => handleMovieClick(movie)}>
                <Link to={{pathname: `/movie/${movie.slug}` }}>
                    <figure>
                        <img src={movie.poster} alt={movie.title} />
                    </figure>
                    <div className='mtitle'>
                        <p>{movie.title.length > 10 ? movie.title.substring(0, 19) + '...' : movie.title}</p>
                        <p>{movie.year}</p>
                    </div>
                </Link>
             </div>
        ))};
       </section>
</div>

  )
}

export default Movies