import { Container, Content } from "./styles";
import download from "../../assets/Download-icon.svg";
import devices from "../../assets/Devices.svg";
import { Padding } from "../../styles/global";

export function BenefitsSection() {
  return (
    <Padding style={{backgroundColor: "var(--white)"}}>
      <Container>
        <Content>
          <h2>Seus filmes favoritos, sempre que quiser</h2>
          <div className="benefits-container">
            <div className="benefits-content">
              <img src={devices} alt="Dispositivos" />
              <h3>Assista de qualquer lugar</h3>
              <p>
                Curta seu filme pelo navegador ou baixe o aplicativo disponível
                para celulares, tablets e Smart TVs.
              </p>
            </div>
            <div className="benefits-content">
              <img src={download} alt="Download" />
              <h3>Carregue para onde for</h3>
              <p>
                Baixe quantos filmes quiser e assista mesmo se não conseguir
                acessar a internet.
              </p>
            </div>
          </div>
        </Content>
      </Container>
    </Padding>
  );
}
