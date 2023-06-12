import { useGenresList } from "../../../hooks/useGenresList";
import { Container } from "./styles";

interface FiltersProps {
  show: boolean;
}

export function Filters({ show }: FiltersProps) {
  const { genresList, status } = useGenresList();

  if (status == "loaded") {
    return (
      <Container style={{ display: show ? "flex" : "none" }}>
        <legend>Gêneros</legend>
        {genresList.map((genres, index) => (
          <div key={index+100}>
            <input key={index} id={"" + genres.id} type="checkbox" />
            <label key={index+1000} htmlFor={"" + genres.id}>
              {genres.name}
            </label>
          </div>
        ))}
      </Container>
    );
  }
}
