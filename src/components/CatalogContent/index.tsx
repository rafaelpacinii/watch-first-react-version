import { Padding } from "../../styles/global";
import { Container, Content } from "./styles";

import { useContext } from "react";
import { CustomSearch } from "../CustomSearch";
import { Movies } from "../Movies";
import { StatusContext } from "../../routes/Catalog";

import Spinner from "../../assets/Spinner.svg";

export function CatalogContent() {
  const { status } = useContext(StatusContext);
  
  return (
    <Padding>
      <Container>
        <img className={status} src={Spinner} alt="Loading spinner icon" />
        <h2>Catálogo</h2>
        <Content>
          <CustomSearch />
          <Movies />
        </Content>
      </Container>
    </Padding>
  );
}
