import styled from "styled-components";
import tags from "./tags.json";

const TagTitle = styled.h3`
  color: #D9D9D9;
  font-size: 24px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  margin-top: 56px;
`;


const ListaEstilizada = styled.div`
  list-style: none;
  display: flex;
  gap: 24px;
`;

const TagButton = styled.button`
  color: #FFF;
  font-size: 24px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  padding: 0;
  padding: 10px 8px;
  background-color: rgba(217, 217, 217, 0.3);
  border: 2px solid transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover{
    border-color: #C98CF1;
  }
`;

const Tags = () => {
  return (
    <TagContainer>
      <TagTitle>Busque por tags:</TagTitle>
      <ListaEstilizada>
        {tags.map((item) => {
          return(
            <TagButton key={item.id}>
              {item.titulo}
            </TagButton>
          )
        })}
      </ListaEstilizada>
    </TagContainer>
  )
}

export default Tags