import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  display: flex;
  align-items: center;
  gap: 18px;

  a{
    text-decoration: none;
  }
`;

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
  return(
    <ItemListaEstilizado>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="Icone" />
      <a href="">{children}</a>
    </ItemListaEstilizado>
  )
}

export default ItemNavegacao;