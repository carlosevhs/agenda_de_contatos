import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sinzing: border-box;
    font-family: Roboto, sans-serif;

  }
`
export const Container = styled.div`
  display: block;
`

export default EstiloGlobal
