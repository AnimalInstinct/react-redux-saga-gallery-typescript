import React, { useEffect } from 'react'
import PhotosList from './PhotosList'
import { RouteComponentProps, withRouter } from 'react-router'
import { withRootState } from '../../../store'

type MatchParams = {
  albumId: number
  userId: number
}

const UserAlbumsListContainer: React.FC<RouteComponentProps> = withRootState(
  ({ gallery }) => ({ gallery }),
  ({ dispatch, gallery, match }) => {
    const { albumId, userId } = match.params as MatchParams
    useEffect(() => {
      dispatch({ type: 'FETCH_ALBUM_PHOTOS', albumId })
      dispatch({ type: 'FETCH_USER', userId })
      dispatch({ type: 'FETCH_ALBUM', albumId })
    }, [])
    const photos = gallery.photos.filter(item => item.albumId == albumId)
    return (
      <PhotosList
        photos={photos}
        userId={userId}
        user={gallery.user}
        album={gallery.album}
      />
    )
  }
)

export default withRouter(UserAlbumsListContainer)
