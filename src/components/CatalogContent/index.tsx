import { Padding } from "../../styles/global";
import { GridContainer, CustomSearch } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Filters } from "../Filters";
import { OrderBy } from "../OrderBy";

export function CatalogContent() {
  const [isOrderByVisible, setIsOrderByVisible] = useState(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  return (
    <Padding>
      <GridContainer>
        <h2>Catálogo</h2>
        <CustomSearch>
          <div>
            <h3>Ordernar por</h3>
            <button type="button" className="show-content">
              <FontAwesomeIcon
                icon={isOrderByVisible ? faAngleRight : faAngleDown}
              />
            </button>
          </div>
          <OrderBy show={isOrderByVisible} />
          <div>
            <h3>Filtros</h3>
            <button type="button" className="show-content">
              <FontAwesomeIcon
                icon={isFiltersVisible ? faAngleRight : faAngleDown}
              />
            </button>
          </div>
          <Filters show={isFiltersVisible} />
          <button type="button">Aplicar Mudanças</button>
        </CustomSearch>
      </GridContainer>
    </Padding>
  );
}
