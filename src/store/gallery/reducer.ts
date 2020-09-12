import { AlbumsAction } from './action'
import { Album } from './types'
import { createReducer } from '../create'

export interface AlbumsState {
  albums: Album[]
}

const initState: AlbumsState = {
  albums: [],
}

const { handle, reducer } = createReducer<AlbumsAction, AlbumsState>(initState)

export { reducer }

handle('FETCH_USER_ALBUMS', (state, action) => {
  return { ...state }
})

handle('USER_ALBUMS_FETCHED', (state, action) => {
  return { ...state, albums: action.albums }
})

handle('FETCH_ALBUM_PHOTOS', (state, action) => {})

handle('ALBUM_PHOTOS_FETCHED', (state, action) => {
  const { albums } = { ...state }
  const album = albums.find(album => album.id === action.albumId)
  if (album) {
    album.test = 'Hello'
    album.photos = action.photos
  }
  return { ...state, albums }
})
