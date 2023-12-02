import { useState, useEffect, ChangeEvent } from 'react'
import * as S from './styles'
import { BsTrash3Fill, BsFillBrushFill } from 'react-icons/bs'
import { MdDoneOutline, MdCancel } from 'react-icons/md'

import { useDispatch } from 'react-redux/es/exports'

import { remover, editar, alteraStatus } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  relacao,
  status,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [numeroOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setNumero(numeroOriginal)
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(
      alteraStatus({
        id,
        ehFavorito: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <S.BarraContato>
        <S.SuperiorDoCard>
          <S.Nome>
            {estaEditando && <em>Editando: </em>}

            {nome}
          </S.Nome>
          <div>
            <label htmlFor="">
              <input
                checked={status === enums.Status.FAVORITO}
                onChange={alteraStatusContato}
                type="checkbox"
                id={nome}
              />
              <S.Tag parametro="status" status={status}>
                {status}
              </S.Tag>
            </label>
            <S.Tag parametro="relacao" relacao={relacao}>
              {relacao}
            </S.Tag>
          </div>
        </S.SuperiorDoCard>
        <S.Numero
          disabled={!estaEditando}
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
        />
        <S.Email
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </S.BarraContato>
      <S.BarraAcao>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    relacao,
                    status,
                    numero,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              <MdDoneOutline />
              <S.TextoAuxiliar>Salvar</S.TextoAuxiliar>
            </BotaoSalvar>
            <S.BotaoCancelarExcluir onClick={cancelarEdicao}>
              <MdCancel />
              <S.TextoAuxiliar>Cancelar</S.TextoAuxiliar>
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>
              <BsFillBrushFill />
              <S.TextoAuxiliar>Editar</S.TextoAuxiliar>
            </Botao>
            <S.BotaoCancelarExcluir onClick={() => dispatch(remover(id))}>
              <BsTrash3Fill />
              <S.TextoAuxiliar>Excluir</S.TextoAuxiliar>
            </S.BotaoCancelarExcluir>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}

export default Contato
