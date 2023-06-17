import { Padding } from "../../styles/global";
import { Container, Content } from "./styles";

import { useContext } from "react";
import { CustomSearch } from "../CustomSearch";
import { Movies } from "../Movies";
import { StatusContext } from "../../routes/Catalog";
import { LoadMoviesContext, PageContext } from "../../routes/Catalog";

import Spinner from "../../assets/Spinner.svg";

export function CatalogContent() {
  const { status } = useContext(StatusContext);
  const { loadMovies, setLoadMovies } = useContext(LoadMoviesContext);
  const { currentPage } = useContext(PageContext);

  return (
    <Padding>
      <Container>
        <img className={status + " default"} src={Spinner} alt="Loading spinner icon" />
        <h2>Catálogo</h2>
        <Content>
          <CustomSearch />
          <Movies />
          <button
            onClick={() => {
              setLoadMovies({
                ordenation: loadMovies.ordenation,
                currentFilters: loadMovies.currentFilters,
                page: currentPage,
              });
            }}
          >
            Mostrar mais filmes
          </button>
        </Content>
      </Container>
    </Padding>
  );
}
