import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
  color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
  font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
  /* font-weight: ${ props => props.$ativo ? 'bold' : 'regular'}; */
  display: flex;
  align-items: center;
  gap: 22px;

  &:hover{
    font-weight: bold;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
  return(
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="Icone" />
      <a href="">{children}</a>
    </ItemListaEstilizado>
  )
}

export default ItemNavegacao;