import React, { Fragment, useEffect } from 'react'
import { withRootState } from '../../store'
import Gallery from './Gallery'

const UsersListContainer: React.FC = withRootState(
  ({ gallery }) => ({ users: gallery.users }),
  ({ dispatch, users }) => {
    useEffect(() => {
      dispatch({ type: 'FETCH_USERS' })
    }, [])
    return (
      <Fragment>
        <Gallery users={users} />
      </Fragment>
    )
  }
)

export default UsersListContainer
