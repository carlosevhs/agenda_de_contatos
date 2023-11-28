import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraDePesquisa = () => (
  <S.Bpesquisa>
    <S.ElementosDaBarra>
      <S.Campo type="text" placeholder=" Buscar contato" />
      <S.Filtros>
        <FiltroCard legenda="Família" contador={8} />
        <FiltroCard legenda="Amigos" contador={2} />
        <FiltroCard legenda="Trabalho" contador={3} />
        <FiltroCard legenda="Favoritos" contador={2} />
        <FiltroCard ativo legenda="Todos" contador={13} />
      </S.Filtros>
    </S.ElementosDaBarra>
  </S.Bpesquisa>
)

export default BarraDePesquisa
