import { useState } from 'react'
import * as S from './styles'
import { BsTrash3Fill, BsFillBrushFill } from 'react-icons/bs'
import { MdDoneOutline, MdCancel } from 'react-icons/md'

import * as enums from '../../utils/enums/Contato'

type Props = {
  nome: string
  relacao: enums.Relacao
  status: enums.Status
  numero: number
  email: string
}

const Contato = ({ nome, relacao, status, numero, email }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.BarraContato>
        <S.SuperiorDoCard>
          <S.Nome>{nome}</S.Nome>
          <div>
            <S.Tag parametro="status" status={status}>
              {status}
            </S.Tag>
            <S.Tag parametro="relacao" relacao={relacao}>
              {relacao}
            </S.Tag>
          </div>
        </S.SuperiorDoCard>
        <S.Numero value={numero} />
        <S.Email value={email} />
      </S.BarraContato>
      <S.BarraAcao>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>
              <MdDoneOutline />
              <S.TextoAuxiliar>Salvar</S.TextoAuxiliar>
            </S.BotaoSalvar>
            <S.BotaoCancelarExcluir onClick={() => setEstaEditando(false)}>
              <MdCancel />
              <S.TextoAuxiliar>Cancelar</S.TextoAuxiliar>
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>
              <BsFillBrushFill />
              <S.TextoAuxiliar>Editar</S.TextoAuxiliar>
            </S.Botao>
            <S.BotaoCancelarExcluir>
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
