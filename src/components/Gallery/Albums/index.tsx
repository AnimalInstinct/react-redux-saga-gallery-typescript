import React, { useEffect } from 'react'
import { User, Album } from '../../../store/gallery'
import AlbumsList from './AlbumsList'
import { RouteComponentProps, withRouter } from 'react-router'
import { withRootState } from '../../../store'

type MatchParams = {
  userId: number
}

const UserAlbumsListContainer: React.FC<RouteComponentProps> = withRootState(
  ({ gallery }) => ({ gallery }),
  ({ dispatch, gallery, match }) => {
    const { userId } = match.params as MatchParams
    useEffect(() => {
      dispatch({ type: 'FETCH_USER_ALBUMS', userId })
      dispatch({ type: 'FETCH_USER', userId })
    }, [])
    return <AlbumsList albums={gallery.albums} user={gallery.user} />
  }
)

export default withRouter(UserAlbumsListContainer)
