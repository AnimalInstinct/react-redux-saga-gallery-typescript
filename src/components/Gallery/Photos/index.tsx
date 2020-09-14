import React, { useEffect } from 'react'
import PhotosList from './PhotosList'
import { RouteComponentProps, withRouter } from 'react-router'
import { withRootState } from '../../../store'

type MatchParams = {
  albumId: number
}

const UserAlbumsListContainer: React.FC<RouteComponentProps> = withRootState(
  ({ gallery }) => ({ gallery }),
  ({ dispatch, gallery, match }) => {
    const { albumId } = match.params as MatchParams
    useEffect(() => {
      dispatch({ type: 'FETCH_ALBUM_PHOTOS', albumId })
    }, [])
    const photos = gallery.photos.filter(item => item.albumId == albumId)
    return <PhotosList photos={photos} />
  }
)

export default withRouter(UserAlbumsListContainer)
