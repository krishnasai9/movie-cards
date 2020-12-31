import movieList from '../movies.json';

export const getMovies = () => {
	return movieList ? movieList : [];
}