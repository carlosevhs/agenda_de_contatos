import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Titulo, MainContainer, BotaoSalvar } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [relacao, setRelacao] = useState(enums.Relacao.AMIGO)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        relacao,
        status: enums.Status.COMUM,
        numero,
        email
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder=" Nome"
        />
        <Campo
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
          as="textarea"
          placeholder=" Número"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          as="textarea"
          placeholder=" Email"
        />
        <Opcoes>
          <p>Relação</p>

          {Object.values(enums.Relacao).map((relacao) => (
            <Opcao key={relacao}>
              <input
                value={relacao}
                name="relacao"
                type="radio"
                onChange={(evento) =>
                  setRelacao(evento.target.value as enums.Relacao)
                }
                id={relacao}
                defaultChecked={relacao === enums.Relacao.AMIGO}
              />
              <label htmlFor={relacao}>{relacao}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
