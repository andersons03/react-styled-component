import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Botao from "./components/Botao"
import Cabecalho from "./components/Cabecalho";

const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <FundoGradient>
      <EstilosGlobais></EstilosGlobais>
      <Cabecalho></Cabecalho>
      <Botao>Teste de escolha</Botao>
    </FundoGradient>
  )
}

export default App
