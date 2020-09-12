import { RootMiddleware } from '..'
import { UsersAction } from './'
import * as api from '../../api'
import { User } from './'

export function* saga(): RootMiddleware {
  yield ({ dispatch }) => next => async (action: UsersAction) => {
    next(action)
    switch (action.type) {
      case 'FETCH_USERS': {
        const users: User[] = await api.fetchUsers()
        return dispatch({ type: 'USERS_FETCHED', users })
      }
    }
  }
}
