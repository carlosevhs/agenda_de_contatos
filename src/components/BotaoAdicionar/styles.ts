import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: ${variaveis.branco};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 40px;

  @media (max-width: 768px) {
    top: 145px;
    right: 20px;
    height: 34px;
    width: 34px;
    font-size: 20px;
  }
`
