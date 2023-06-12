import { Padding } from "../../styles/global";
import { Container, Content } from "./styles";

import { CustomSearch } from "../CustomSearch";
import { Movies } from "../Movies";

export function CatalogContent() {
  return (
    <Padding>
      <Container>
        <h2>Catálogo</h2>
        <Content>
          <CustomSearch />
          <Movies />
        </Content>
      </Container>
    </Padding>
  );
}
