import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const FigureEstilziado = styled.figure`
  width: ${(props) => (props.$expandida ? '90%' : '460px')};
  margin: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 4px 4px 4px 0 rgb(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  h3,h4{
    margin: 0;
    font-size: 16px;
  }

  > img{
    width: 100%;
  }

  figcaption{
    background-color: #001634;
    color: #FFF;
    padding: 16px 16px 16px 21px;

    h3{
      font-family: 'GandhiSansBold';
    }

    h4{
      flex-grow: 1;
      font-family: 'GandhiSansRegular';
      font-weight: 300;
    }
  }

  footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Imagem = ({foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito}) => {

  const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png';

  return (
    <FigureEstilziado $expandida={expandida}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <footer>
          <h4>{foto.fonte}</h4>
          <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
            <img src={iconeFavorito} alt="Icone botão favorito" />
          </BotaoIcone>
          {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
              <img src="/icones/expandir.png" alt="Icone de expandir" />
          </BotaoIcone>}
        </footer>
      </figcaption>
    </FigureEstilziado>
  )
}

export default Imagem