import React, { Fragment, useEffect } from 'react'
import { withRootState } from '../../store'
import UsersList from './UsersList'

const UsersListContainer: React.FC = withRootState(
  ({ users }) => ({ users: users.users }),
  ({ dispatch, users }) => {
    useEffect(() => {
      dispatch({ type: 'FETCH_USERS' })
    }, [])
    return (
      <Fragment>
        <UsersList users={users} />
      </Fragment>
    )
  }
)

export default UsersListContainer
