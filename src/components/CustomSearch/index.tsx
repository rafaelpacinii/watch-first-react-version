import { Container } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Filters } from "./Filters";
import { OrderBy } from "./OrderBy";

export function CustomSearch() {
  const [isOrderByVisible, setIsOrderByVisible] = useState(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function showContent(
    isVisible: boolean,
    setIsVisible: (isVisible: boolean) => void
  ) {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  return (
    <Container>
      <div className="custom-search-subtitle-flexbox">
        <h3>Ordenação</h3>
        <button
          type="button"
          onClick={() => {
            showContent(isOrderByVisible, setIsOrderByVisible);
          }}
        >
          <FontAwesomeIcon
            icon={isOrderByVisible ? faAngleDown : faAngleRight}
          />
        </button>
      </div>
      <OrderBy show={isOrderByVisible} />
      <div className="custom-search-subtitle-flexbox">
        <h3>Filtros</h3>
        <button
          type="button"
          onClick={() => {
            showContent(isFiltersVisible, setIsFiltersVisible);
          }}
        >
          <FontAwesomeIcon
            icon={isFiltersVisible ? faAngleDown : faAngleRight}
          />
        </button>
      </div>
      <Filters show={isFiltersVisible} />
      <button className="submit-button">Aplicar Mudanças</button>
    </Container>
  );
}
