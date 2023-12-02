import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Maria Eduarda',
      numero: '81981104763',
      email: 'dudasdl12@gmail.com',
      relacao: enums.Relacao.FAMILIA,
      status: enums.Status.FAVORITO
    },
    {
      id: 2,
      nome: 'Ana Maria',
      numero: '81987960542',
      email: 'Anavhsilva@gmail.com',
      relacao: enums.Relacao.FAMILIA,
      status: enums.Status.FAVORITO
    },
    {
      id: 3,
      nome: 'João Lacerda',
      numero: '81983452236',
      email: 'joao2@gmail.com',
      relacao: enums.Relacao.TRABALHO,
      status: enums.Status.COMUM
    },
    {
      id: 4,
      nome: 'Matheus Dorneles',
      numero: '81997721922',
      email: 'mdmaia@gmail.com',
      relacao: enums.Relacao.AMIGO,
      status: enums.Status.COMUM
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
      //      contatoParaEditar = action.payload
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
