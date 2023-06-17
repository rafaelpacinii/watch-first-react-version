import { useContext, useEffect } from "react";
import {
  LoadMoviesContext,
  MoviesListContext,
  PageContext,
  StatusContext,
} from "../../routes/Catalog";
import { getNonFilteredMoviesList } from "../../services/getNonFilteredMoviesList";
import { getFilteredMoviesList } from "../../services/getFilteredMoviesList";
import { Container } from "./styles";

export function Movies() {
  const { moviesList, setMoviesList } = useContext(MoviesListContext);
  const { loadMovies } = useContext(LoadMoviesContext);
  const { setCurrentPage } = useContext(PageContext);
  const { setStatus } = useContext(StatusContext);

  useEffect(() => {
    getMovies();
  }, [loadMovies]); // eslint-disable-line react-hooks/exhaustive-deps

  async function getMovies() {
    setStatus("loading");
    if (loadMovies.currentFilters.length == 0) {
      const { nonFilteredMoviesList, newPageNumber } =
        await getNonFilteredMoviesList(
          loadMovies.page.number,
          loadMovies.ordenation
        );

      setMoviesList(moviesList.concat(nonFilteredMoviesList));
      setCurrentPage({
        number: newPageNumber,
        apiListIndex: 0,
      });
    } else {
      const { filteredMoviesList, page } = await getFilteredMoviesList(
        loadMovies.page,
        loadMovies.ordenation,
        loadMovies.currentFilters
      );

      setMoviesList(moviesList.concat(filteredMoviesList));
      setCurrentPage(page);
    }
    setStatus("loaded");
  }

  return (
    <Container>
      {moviesList.map((movie, index) => (
        <div key={"poster-container" + index} className="poster-container">
          <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={"Poster de " + movie.title} />
          <h3 key={"title" + index}>{movie.title}</h3>
          <p key={"date" + index}>{movie.release_date.toString()}</p>
        </div>
      ))}
    </Container>
  );
}
