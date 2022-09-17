import React, { useEffect } from 'react';
import movieApi from '../apis/movieApi';
import MovieListing from '../MovieListing/MovieListing';
import APIkey from '../apis/movieApiKey'

const Home = () =>{
const movieText ='Harry';
  useEffect(()=>{

    const fetchMovies = async ()=>{
      const response = await movieApi
      .get(`?apiKey=${APIkey}&s={movieText}&type=movie`)
      .catch(err =>{
        console.log(err);
      });

      console.log("the respone API", response);
    }
    fetchMovies();
  },[])
  return (
    <div>
      <MovieListing/>
    </div>
  )
}
export default Home;