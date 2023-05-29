import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';


function Info() {

    const { selectedMovie } = useParams();
    const [movies, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
  
   useEffect (() => {
      const fetchMovie = async () => {
          try {
          const movieArray = await axios.get(`https://api.andrespecht.dev/movie/${selectedMovie}`);
          const movieInfo  = movieArray.data.response;
          let genres = movieInfo.genre;
          setGenres(genres);
          setMovie(movieInfo);
  
          } catch (error) {
          console.error(error);
          }
      };
  
    fetchMovie();  
  }, []);
  
  return (
    <section className='movie'>
    <Helmet>
        <title className='title'>{movies.title}</title>
    </Helmet>
    <div className='container'>
      <section className='movie-info'>
      <div className='image'>
      <img src={movies.poster} alt={movies.title} />
      </div>
      <div className='image-info'>
       
        <h2>{movies.title}</h2>
        <div className='title-info'>
        <p>{movies.year}</p>
        <p>|</p>
       <p>{movies.runningTime}</p>
       </div>
       <p className='description'>{movies.description}</p>
         <div className='genre'>
              {genres.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </div>
          <input type="button" value="Watch now" className='watch-now'/>
      </div>
      </section>
       
        
           
    </div>
  </section>
  )
}

export default Info