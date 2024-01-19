import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import TemaDark from './Themes/dark'
import TemaLight from './Themes/light'

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false)

  const trocarTema = () => setTemaEscuro(!temaEscuro)

  return (
    <ThemeProvider theme={temaEscuro ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
