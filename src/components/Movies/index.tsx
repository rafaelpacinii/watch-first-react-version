import { useMoviesList } from "../../hooks/useMoviesList";
import { useMoviePoster } from "../../hooks/useMoviePoster";
import { useContext } from "react";
import { FiltersContext, PageContext } from "../../routes/Catalog";

import { Container } from "./styles";

export function Movies() {
  const { setCurrentFilters } = useContext(FiltersContext);
  const { moviesList, status } = useMoviesList();
 
  console.log(moviesList);
  console.log(status);

  return (
    <Container>
      <h2></h2>
    </Container>
  );
}
