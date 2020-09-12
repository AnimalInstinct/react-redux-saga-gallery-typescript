import React, { Fragment, useEffect } from 'react'
import { withRootState } from '../../store'
import UserAlbumsList from './UserAlbumsList'

const UserAlbumsListContainer: React.FC = withRootState(
  ({ albums, router }) => ({ albums: albums.albums, router: router }),
  ({ dispatch, albums, router }) => {
    const path = router.location.pathname
    const userId = parseInt(path.substring(path.lastIndexOf('/') + 1))
    useEffect(() => {
      dispatch({ type: 'FETCH_USER_ALBUMS', userId })
    }, [])
    useEffect(() => {
      albums.map(album => {
        dispatch({ type: 'FETCH_ALBUM_PHOTOS', albumId:album.id })
      })
    }, [albums])
    return (
      <Fragment>
        <UserAlbumsList albums={albums} />
      </Fragment>
    )
  }
)

export default UserAlbumsListContainer
