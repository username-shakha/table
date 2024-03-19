import { createStore, combineReducers } from 'redux'
import { userReducer } from './reduser'

const rootReducer = combineReducers({
  user: userReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
