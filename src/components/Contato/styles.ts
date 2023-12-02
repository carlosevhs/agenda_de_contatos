import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import { Botao } from '../../styles'
import * as enums from '../../utils/enums/Contato'

type TagProps = {
  status?: enums.Status
  relacao?: enums.Relacao
  parametro: 'status' | 'relacao'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.FAVORITO) return variaveis.amarelo
  } else {
    if (props.relacao === enums.Relacao.FAMILIA) return variaveis.verde
    if (props.relacao === enums.Relacao.AMIGO) return variaveis.azul
    if (props.relacao === enums.Relacao.TRABALHO) return variaveis.amarelo2
  }
  return '#CCC'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;

  label {
    align-items: center;
  }
`

export const SuperiorDoCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BarraContato = styled.div`
  width: 100%;
`

export const Nome = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  color: #fff;
  font-weight: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin: 0 8px;
  display: inline-block;
  @media (max-width: 768px) {
    display: flex;
  }
`

export const BarraAcao = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Numero = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  margin: 4px 0;
  border: none;
  background-color: transparent;
  width: 100%;
`

export const Email = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  margin: 4px 0;
  border: none;
  background-color: transparent;
  width: 100%;
`

export const TextoAuxiliar = styled.div`
  display: none;
  position: fixed;
  font-size: 12px;
  background-color: #f9f9f9;
  color: #000;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  z-index: 999;
`
export const BotaoCancelarExcluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
