import imagemBanner from "./assets/banner.png";
import fotos from "./fotos.json";

import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";


const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const AppContainer = styled.div`
  width: 96%;
  margin: 0 auto;
  max-width: 1440px;
`;

const ConteudoPagina = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  return (
    <FundoGradient>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoPagina>
            <Banner titulo={"A galeria mais completa de fotos do espaço!"} imagemFundo={imagemBanner} />
            <Galeria fotosGaleria={fotos} />
          </ConteudoPagina>
        </MainContainer>
      </AppContainer>
      <ModalZoom />
    </FundoGradient>
  )
}

export default App
