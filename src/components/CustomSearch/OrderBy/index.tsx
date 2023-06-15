import { useContext } from "react";
import { Container } from "./styles";
import { OrdenationContext } from "../../../routes/Catalog";

interface OrderByProps {
  show: boolean;
}

const listBy = [
  { id: "popular", name: "Popularidade" },
  { id: "top_rated", name: "Avaliações" },
  { id: "now_playing", name: "Disponíveis Agora" },
  { id: "upcoming", name: "Novidades  " },
];

export function OrderBy({ show }: OrderByProps) {
  const { setCurrentOrdenation } = useContext(OrdenationContext);

  return (
    <Container style={{ display: show ? "block" : "none" }}>
      <legend>Ordenar resultado por</legend>
      <select
        name="order"
        onChange={(e) => setCurrentOrdenation(e.currentTarget.value)}
      >
        {listBy.map((list) => (
          <option key={list.id} value={list.id}>
            {list.name}
          </option>
        ))}
      </select>
    </Container>
  );
}
