import { UsersAction } from './action'
import { User } from './types'
import { createReducer } from '../create'

export type UsersState = {
  users: User[]
}

const initState: UsersState = {
  users: [],
}

const { handle, reducer } = createReducer<UsersAction, UsersState>(initState)

export { reducer }

handle('FETCH_USERS', state => {
  return { ...state }
})

handle('USERS_FETCHED', (state, action) => {
  return { ...state, users: action.users }
})
