import { RootMiddleware } from '..'
import { UsersAction } from './'
import * as api from '../../api'

export function* saga(): RootMiddleware {
  yield ({ dispatch }) => next => async (action: UsersAction) => {
    next(action)
    switch (action.type) {
      case 'FETCH_USERS': {
        const users = await api.fetchUsers()
        return dispatch({ type: 'USERS_FETCHED', users })
      }
    }
  }
}
