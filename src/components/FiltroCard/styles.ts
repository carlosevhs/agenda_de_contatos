import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  border-radius: 8px;
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  margin: 0 4px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-right: 4px;
`

export const Label = styled.span`
  font-size: 14px;
`
