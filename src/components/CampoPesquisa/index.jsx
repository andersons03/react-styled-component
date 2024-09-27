import icon from "./search.png";
import {styled} from "styled-components";

const FormEstilizado = styled.form`
  position: relative;
  display: inline-block;

  input{
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    display: block;

    &::placeholder{
      color: inherit;
      font-size: inherit;
    }
  }

  button{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
    background: none;
    border: none;

    img{
      width: 100%;
    }
  }
`;

const CampoPesquisa = () => {
  return(
    <FormEstilizado action="">
      <input type="text" placeholder="O que você procura?" />
      <button title="Pesquisar">
        <img src={icon} alt="icone de busca" />
      </button>
    </FormEstilizado>
  );
}

export default CampoPesquisa;