import { UsersAction } from './action'
import { User } from './types'
import { createReducer } from '../create'

export interface UsersState {
  users: User[]
  activeUser: User | null
}

const initState: UsersState = {
  users: [],
  activeUser: null,
}

const { handle, reducer } = createReducer<UsersAction, UsersState>(initState)

export { reducer }

handle('FETCH_USERS', state => {
  return { ...state }
})

handle('USERS_FETCHED', (state, action) => {
  return { ...state, users: action.users }
})
