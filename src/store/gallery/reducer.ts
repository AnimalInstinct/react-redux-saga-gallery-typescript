import { GalleryAction } from './action'
import { User, Album, Photo } from './types'
import { createReducer } from '../create'

export interface GalleryState {
  users: User[]
  albums: Album[]
  photos: Photo[]
}

const initState: GalleryState = {
  users: [],
  albums: [],
  photos: [],
}

const { handle, reducer } = createReducer<GalleryAction, GalleryState>(
  initState
)

export { reducer }

handle('FETCH_USERS', state => {
  return { ...state }
})

handle('USERS_FETCHED', (state, action) => {
  return { ...state, users: action.users }
})

handle('FETCH_USER_ALBUMS', state => {
  return state
})

handle('USER_ALBUMS_FETCHED', (state, action) => {
  // const users = state.users.map(user => {
  //   if (user.id !== action.userId) {
  //     return user
  //   }
  //   user.albums = action.albums
  //   console.log(state)

  //   return {
  //     ...user,
  //     ...action,
  //   }
  // })
  return { ...state, albums: action.albums }
})

handle('FETCH_ALBUM_PHOTOS', state => {
  return state
})

handle('ALBUM_PHOTOS_FETCHED', (state, action) => {
  const albums = state.albums.map(album => {
    if (album.id !== action.albumId) {
      return album
    }
    album.photos = action.photos
    return {
      ...album,
      ...action,
    }
  })
  return { ...state, albums, photos: action.photos }
})
