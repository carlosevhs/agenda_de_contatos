import { Provider } from 'react-redux'
import BarraDePesquisa from './containers/BarraDePesquisa'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraDePesquisa />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
