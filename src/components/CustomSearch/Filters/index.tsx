import { useGenresList } from "../../../hooks/useGenresList";
import { useContext } from "react";
import { FiltersContext } from "../../../routes/Catalog";
import { Container } from "./styles";

interface FiltersProps {
  show: boolean;
}

export function Filters({ show }: FiltersProps) {
  const { genresList, status } = useGenresList();
  const { currentFilters, setCurrentFilters } = useContext(FiltersContext);

  if (status == "loaded") {
    return (
      <Container style={{ display: show ? "flex" : "none" }}>
        <legend>Gêneros</legend>
        {genresList.map((genres, index) => (
          <div key={index + 100}>
            <input
              key={index}
              id={"" + genres.id}
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setCurrentFilters([...currentFilters, parseInt(e.target.id)]);
                } else {
                  let newFilters = currentFilters; // eslint-disable-line prefer-const
                  newFilters.splice(
                    newFilters.indexOf(parseInt(e.target.id)),
                    1
                  );
                  setCurrentFilters(newFilters);
                }
              }}
            />
            <label key={index + 1000} htmlFor={"" + genres.id}>
              {genres.name}
            </label>
          </div>
        ))}
      </Container>
    );
  }
}
