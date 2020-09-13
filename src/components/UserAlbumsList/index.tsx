import React, { Fragment, useEffect } from 'react'
import { withRootState } from '../../store'
import UserAlbumsList from './UserAlbumsList'
import { RouteComponentProps, withRouter } from 'react-router'

type MatchParams = {
  userId: number
}

const UserAlbumsListContainer: React.FC<RouteComponentProps> = withRootState(
  ({ albums, router }) => ({ albums: albums.albums, router: router }),
  ({ dispatch, albums, match }) => {
    const { userId } = match.params as MatchParams
    useEffect(() => {
      dispatch({ type: 'FETCH_USER_ALBUMS', userId })
    }, [])
    return (
      <Fragment>
        <UserAlbumsList albums={albums} />
      </Fragment>
    )
  }
)

export default withRouter(UserAlbumsListContainer)
