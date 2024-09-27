import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"

const FundoGradient = styled.div`
  background: red;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <FundoGradient>
      <EstilosGlobais></EstilosGlobais>
    </FundoGradient>
  )
}

export default App
