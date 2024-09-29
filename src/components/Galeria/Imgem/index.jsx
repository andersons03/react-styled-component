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

const Imagem = ({informacoes, expandida}) => {
  return (
    <FigureEstilziado $expandida={expandida}>
      <img src={informacoes.path} alt={informacoes.alt} />
      <figcaption>
        <h3>{informacoes.titulo}</h3>
        <footer>
          <h4>{informacoes.fonte}</h4>
          <BotaoIcone>
            <img src="/icones/favorito.png" alt="Icone botão favorito" />
          </BotaoIcone>
          {!expandida && <BotaoIcone aria-hidden={expandida}>
              <img src="/icones/expandir.png" alt="Icone de expandir" />
          </BotaoIcone>}
        </footer>
      </figcaption>
    </FigureEstilziado>
  )
}

export default Imagem