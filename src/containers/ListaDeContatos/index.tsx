import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              relacao={c.relacao}
              status={c.status}
              numero={c.numero}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
