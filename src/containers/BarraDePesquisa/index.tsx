import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

const BarraDePesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Bpesquisa>
      <S.ElementosDaBarra>
        <S.Campo
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
    </S.Bpesquisa>
  )
}

export default BarraDePesquisa
