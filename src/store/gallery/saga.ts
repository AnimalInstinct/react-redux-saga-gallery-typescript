import { RootMiddleware } from '..'
import { GalleryAction } from '.'
import * as api from '../../api'
import { User, Album, Photo } from '.'

export function* saga(): RootMiddleware {
  yield ({ dispatch }) => next => async (action: GalleryAction) => {
    next(action)
    switch (action.type) {
      case 'FETCH_USERS': {
        const users: User[] = await api.fetchUsers()
        return dispatch({ type: 'USERS_FETCHED', users })
      }

      case 'FETCH_USER': {
        const user: User = await api.fetchUser(action.userId)
        return dispatch({ type: 'USER_FETCHED', user })
      }

      case 'FETCH_ALBUM': {
        const album: Album = await api.fetchAlbumInfo(action.albumId)
        return dispatch({ type: 'ALBUM_FETCHED', album })
      }

      case 'FETCH_USER_ALBUMS': {
        const albums: Album[] = await api.fetchUserAlbums(action.userId)
        return dispatch({
          type: 'USER_ALBUMS_FETCHED',
          albums,
          userId: action.userId,
        })
      }

      case 'FETCH_ALBUM_PHOTOS': {
        const photos: Photo[] = await api.fetchAlbumPhotos(action.albumId)
        return dispatch({
          type: 'ALBUM_PHOTOS_FETCHED',
          photos,
          albumId: action.albumId,
        })
      }
    }
  }
}
