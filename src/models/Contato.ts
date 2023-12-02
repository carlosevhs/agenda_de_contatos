import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  relacao: enums.Relacao
  status: enums.Status
  numero: string
  email: string
  id: number

  constructor(
    nome: string,
    relacao: enums.Relacao,
    status: enums.Status,
    numero: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.relacao = relacao
    this.status = status
    this.numero = numero
    this.email = email
    this.id = id
  }
}

export default Contato
