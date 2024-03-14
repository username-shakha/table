import { createStore, combineReducers } from 'redux'

interface ICounterState {
  count: number
}

interface IUserState {
  name: string
}

interface IIncrementAction {
  type: 'INCREMENT'
}

interface IDecrementAction {
  type: 'DECREMENT'
}

interface ISetNameAction {
  type: 'SET_NAME'
  payload: string
}

type TAction = IIncrementAction | IDecrementAction | ISetNameAction

const initialICounterState: ICounterState = {
  count: 0,
}

const initialIUserState: IUserState = {
  name: '',
}

const counterReducer = (state = initialICounterState, action: TAction): ICounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

const userReducer = (state = initialIUserState, action: TAction): IUserState => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
