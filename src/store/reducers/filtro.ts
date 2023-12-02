import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  termo?: string
  criterio: 'relacao' | 'status' | 'todos'
  valor?: enums.Relacao | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
