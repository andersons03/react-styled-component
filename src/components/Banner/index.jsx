import styled from "styled-components"

const BannerEstilizado = styled.figure`
  background-image: ${props => `url(${props.$imagemFundo})`};;
  background-size: cover;
  border-radius: 20px;
  min-height: 328px;

  display: flex;
  align-items: center;
  padding-left: 64px;
  margin: 0;

  .titulo{
    font-size: 40px;
    color: #FFF;
    font-family: 'GandhiSansRegular';
    font-weight: 400;
    max-width: 301px;
  }
`;

const Banner = ({titulo, imagemFundo}) => {
  return(
    <BannerEstilizado $imagemFundo={imagemFundo}>
      <h2 className="titulo">{titulo}</h2>
    </BannerEstilizado>
  )
}

export default Banner;