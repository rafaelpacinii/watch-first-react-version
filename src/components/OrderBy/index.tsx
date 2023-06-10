interface OrderByProps {
  show: boolean;
}

const listBy = [
  { id: "popular", name: "Popularidade" },
  { id: "top_rated", name: "Avaliações" },
  { id: "now_playing", name: "Disponíveis Agora" },
  { id: "upcoming", name: "Chegando em Breve" },
];

export function OrderBy({ show }: OrderByProps) {
  return (
    <select name="order" style={{ display: show ? "block" : "block" }}>
      {listBy.map((list) => (
        <option key={list.id} id={list.id}>
          {list.name}
        </option>
      ))}
    </select>
  );
}
