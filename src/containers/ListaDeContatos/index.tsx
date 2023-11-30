import Contato from '../../components/Contato'
import { Container } from './styles'

import * as enums from '../../utils/enums/Contato'

const contatos = [
  {
    nome: 'Ana Maria',
    relacao: enums.Relacao.FAMILIA,
    status: enums.Status.FAVORITO,
    numero: 81987960542,
    email: 'anavhsilva@gmail.com'
  },
  {
    nome: 'Maria Eduarda',
    relacao: enums.Relacao.FAMILIA,
    status: enums.Status.FAVORITO,
    numero: 81981104763,
    email: 'dudasdl12@gmail.com'
  },
  {
    nome: 'Matheus Dorneles',
    relacao: enums.Relacao.AMIGO,
    status: enums.Status.COMUM,
    numero: 81997721922,
    email: 'mdmaia@gmail.com'
  },
  {
    nome: 'João',
    relacao: enums.Relacao.TRABALHO,
    status: enums.Status.COMUM,
    numero: 81997721922,
    email: 'joao@gmail.com'
  }
]

const ListaDeContatos = () => (
  <Container>
    <ul>
      {contatos.map((c) => (
        <li key={c.nome}>
          <Contato
            nome={c.nome}
            relacao={c.relacao}
            status={c.status}
            numero={c.numero}
            email={c.email}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContatos
