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

      case 'FETCH_USER_ALBUMS': {
        const albums: Album[] = await api.fetchUserAlbums(action.userId)
        return dispatch({ type: 'USER_ALBUMS_FETCHED', albums })
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
