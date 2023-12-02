import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sinzing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;

  }
`
export const Container = styled.div`
  display: block;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  max-width: 800px;
  margin: 0 auto;
`
export const Titulo = styled.h2`
  display: block;
  font-weight: bold;
  margin: 20px 0;
  font-size: 18px;
`

export const Campo = styled.input`
  border-radius: 8px;
  background-color: #FFF
  padding: 8px;
  color: #666666;
  font-weight: bold;
  border-color: #666666;
  height: 33px;
  width: 100%;
  @media (max-width: 768px) {
  }
`

export const Botao = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 12px;
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  display: block;
  margin: 8px 0 8px 16px;
  &:hover div {
    display: block;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
