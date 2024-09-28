import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Botao from "./components/Botao"
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";

import imagemBanner from "./assets/banner.png";

const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 212px 1fr;
`;

function App() {
  return (
    <FundoGradient>
      <EstilosGlobais></EstilosGlobais>
      <Cabecalho />
      <Container>
        <BarraLateral />
        <main>
          <Banner titulo={"A galeria mais completa de fotos do espaço!"} imagemFundo={imagemBanner} />
        </main>
      </Container>
    </FundoGradient>
  )
}

export default App
