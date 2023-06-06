import { Container, Content } from "./styles";
import { useState, useEffect } from "react";

export function PosterCarousel() {
  const [currentPoster, setCurrentPoster] = useState(0);
  const [currentSource, setCurrentSource] = useState(
    `https://image.tmdb.org/t/p/w342/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg`
  );
  const [currentName, setCurrentName] = useState(
    `Guardiões da Galáxia - Vol. 3`
  );

  useEffect(() => {
    setTimeout(() => {
      postersRotation();
    }, 6 * 1000);
  });

  async function postersRotation() {
    const defaultPostersSource = [
      "https://image.tmdb.org/t/p/w342/dbd7DQCHZ57SF4tM2puHtwNxDQD.jpg",
      "https://image.tmdb.org/t/p/w342/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      "https://image.tmdb.org/t/p/w342/6a7NItazspSV8Fl7u46ccxwPKk4.jpg",
      "https://image.tmdb.org/t/p/w342/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      "https://image.tmdb.org/t/p/w342/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    ];
    const defaultPostersName = [
      "Panico VI",
      "John Wick: Capítulo 4",
      "Homem-Aranha: Através do Aranhaverso",
      "Super Mario Bros: O Filme",
      "Guardiões da Galáxia - Vol. 3",
    ];

    setCurrentPoster((currentPoster + 1) % 5);
    setCurrentSource(defaultPostersSource[currentPoster]);
    setCurrentName(defaultPostersName[currentPoster]);
  }

  return (
    <Container href="">
      <Content>
        <img src={currentSource} alt={currentName} />
        <h3>Clique e veja os novos lançamentos disponíveis para você!</h3>
      </Content>
    </Container>
  );
}
