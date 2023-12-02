import styled from 'styled-components'

export const Bpesquisa = styled.main`
  padding: 16px;
  background-color: #eee;
  position: sticky;
  top: 0;
  margin-bottom: 16px;
`

export const Filtros = styled.div`
  display: flex;
  padding: 8px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export const ElementosDaBarra = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
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
