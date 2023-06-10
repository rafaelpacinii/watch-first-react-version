import { useGenresList } from "../../hooks/useGenresList";
import { Container } from "./styles";

interface FiltersProps {
  show: boolean;
}

export function Filters({ show }: FiltersProps) {
  const { genresList, status } = useGenresList();
  console.log(genresList);
  if (status == "loaded") {
    return (
      <Container style={{ display: show ? "block" : "flex" }}>
        <legend>Gêneros</legend>
        {genresList.map((genres) => (
          <div key={genres.id}>
            <input key={genres.id} id={"" + genres.id} type="checkbox" />
            <label key={genres.name} htmlFor={"" + genres.id}>
              {genres.name}
            </label>
          </div>
        ))}
      </Container>
    );
  }
}
