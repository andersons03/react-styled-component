import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imgem";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const GaleriPrincipal = styled.section`
  flex: 1;
`;

const ImagensContainer = styled.div`
  gap: 24px;
  display: flex;
  flex-wrap: wrap;

  figure{
    width: calc(50% - 12px);
  }
`;

const Galeria = ({fotosGaleria}) => {
  console.log(fotosGaleria);
  
  return(
    <>
      <Tags />
      <GaleriaContainer>
        <GaleriPrincipal>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotosGaleria.map((foto) => <Imagem informacoes={foto} key={foto.id} />)}
          </ImagensContainer>
        </GaleriPrincipal>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria;