import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const GaleriPrincipal = styled.section`
  flex: 1;
`;

const Galeria = () => {
  return(
    <>
      <Tags />
      <GaleriaContainer>
        <GaleriPrincipal>
          <Titulo>Navegue pela galeria</Titulo>
        </GaleriPrincipal>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria;