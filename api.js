import { apiKey } from './config.json';

const imageUrl = 'https://image.tmdb.org/t/p/w500'

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatMinutes = (initalMinutes) => {
  const hours = Math.floor(initalMinutes / 60);
  const minutes = initalMinutes % 60;
  return `${hours}h ${minutes}min`;
};

const transformMovie = movie => {
  const { poster_path, title, vote_average, release_date, id } = movie;
  return {
    posterPath: `${imageUrl}${poster_path}`,
    title,
    voteAverage: vote_average,
    releaseDate: release_date,
    id: `${id}`,
  }
};

const transformSingleMovie = movie => {
  const { 
    backdrop_path, budget, imdb_id, overview, 
    popularity, release_date, revenue, runtime, 
    tagline, vote_average, vote_count, title, 
  } = movie;
  return {
    imdbId: imdb_id,
    backdropPath: `${imageUrl}${backdrop_path}`,
    budget: `$${numberWithCommas(budget)}`,
    overview,
    popularity,
    releaseDate: release_date,
    revenue: `$${numberWithCommas(revenue)}`,
    runtime: formatMinutes(runtime),
    tagline,
    voteAverage: vote_average,
    voteCount: vote_count,
    title,
  }
}

export const fetchMovies = async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
  const { results } = await response.json();
  return results.map(transformMovie)
};

export const fetchMovieById = async (id) => {
  const response = await fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
  const results = await response.json();
  return transformSingleMovie(results);
};