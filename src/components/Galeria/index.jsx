import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

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

const Galeria = ({ fotos = [], aoFotoSelecionada , aoAlternarFavorito }) => {

  return(
    <>
      <Tags />
      <GaleriaContainer>
        <GaleriPrincipal>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map(foto => <Imagem 
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                key={foto.id} 
                foto={foto} />)
            }
          </ImagensContainer>
        </GaleriPrincipal>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria;