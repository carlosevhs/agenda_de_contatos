import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraDePesquisa from '../../containers/BarraDePesquisa'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraDePesquisa mostrarFiltros />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
