import { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
import Modal from "./Modal";
import {
  getMovieDetailsById,
  getMoviesBySearchTerm,
} from "../utils/movie_utils";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import Paginator from "./Paginator";

function App() {
  const [searchTerm, setSearchTerm] = useState("Spider Man");
  const [searchType, setSearchType] = useState("movie");
  const [searchPage, setSearchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieCardClick = async (movieId) => {
    try {
      const movie = await getMovieDetailsById(movieId);
      setSelectedMovie(movie);
      setShowModal(true);
      setError(null);
    } catch (error) {
      setError(error);
      setShowModal(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setIsLoading(true);

    try {
      const movieData = await getMoviesBySearchTerm(
        searchTerm,
        searchType,
        searchPage
      );
      setMovies(movieData);
      setError(null);
    } catch (error) {
      setMovies([]);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, searchType, searchPage]);

  const onNewMovieSearched = (name, type) => {
    setSearchTerm(name);
    setSearchType(type);
  };

  const onPageChanged = (page) => {
    setSearchPage(page);
  };

  return (
    <>
      <SearchBar onMovieSearched={onNewMovieSearched} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <MovieList
            movies={movies}
            onMovieCardClicked={handleMovieCardClick}
          />
          <Paginator currentPage={searchPage} onPageChanged={onPageChanged} />
        </>
      )}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {selectedMovie && (
          <MovieDetails
            posterUrl={selectedMovie.Poster}
            title={selectedMovie.Title}
            rated={selectedMovie.Rated}
            runtime={selectedMovie.Runtime}
            genre={selectedMovie.Genre}
            plot={selectedMovie.Plot}
            actors={selectedMovie.Actors}
            rating={selectedMovie.imdbRating}
          />
        )}
      </Modal>
    </>
  );
}

export default App;
