import { useContext } from "react";
import {
  LoadMoviesContext,
  PageContext,
} from "../../routes/Catalog";
import { Container } from "./styles";
import { LoadMovies } from "./LoadMovies";

export function Movies() {
  const { loadMovies, setLoadMovies } = useContext(LoadMoviesContext);
  const { currentPage } = useContext(PageContext);
  
  return (
    <Container>
      <LoadMovies />
      <button
        onClick={() => {
          setLoadMovies({
            ordenation: loadMovies.ordenation,
            currentFilters: loadMovies.currentFilters,
            page: currentPage,
          });
        }}
      >
        Próximo
      </button>
    </Container>
  );
}
