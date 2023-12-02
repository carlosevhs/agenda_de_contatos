import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

type Props = {
  mostrarFiltros: boolean
}

const BarraDePesquisa = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Bpesquisa>
      {mostrarFiltros ? (
        <S.ElementosDaBarra>
          <Campo
            type="text"
            placeholder=" Buscar"
            value={termo}
            onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
          />
          <S.Filtros>
            <FiltroCard criterio="todos" legenda="Todos" />
            <FiltroCard
              valor={enums.Relacao.FAMILIA}
              criterio="relacao"
              legenda="Família"
            />
            <FiltroCard
              valor={enums.Relacao.AMIGO}
              criterio="relacao"
              legenda="Amigos"
            />
            <FiltroCard
              valor={enums.Relacao.TRABALHO}
              criterio="relacao"
              legenda="Trabalho"
            />
            <FiltroCard
              valor={enums.Status.FAVORITO}
              criterio="status"
              legenda="Favoritos"
            />
          </S.Filtros>
        </S.ElementosDaBarra>
      ) : (
        <S.ElementosDaBarra>
          <Botao onClick={() => navigate('/')}>Voltar para agenda</Botao>
        </S.ElementosDaBarra>
      )}
    </S.Bpesquisa>
  )
}

export default BarraDePesquisa
