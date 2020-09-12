import { User } from './types'

export type FetchUsers = {
  type: 'FETCH_USERS'
}

export type UsersFetched = {
  type: 'USERS_FETCHED'
  users: User[]
}

export type UsersAction = FetchUsers | UsersFetched
