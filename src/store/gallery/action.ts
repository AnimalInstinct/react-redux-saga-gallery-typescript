import { Album, Photo } from './types'

export type FetchUserAlbums = {
  type: 'FETCH_USER_ALBUMS'
  userId: number
}

export type UserAlbumsFetched = {
  type: 'USER_ALBUMS_FETCHED'
  albums: Album[]
}

export type FetchAlbumPhotos = {
  type: 'FETCH_ALBUM_PHOTOS'
  albumId: number
}

export type AlbumPhotosFetched = {
  type: 'ALBUM_PHOTOS_FETCHED'
  photos: Photo[]
  albumId: number
}

export type AlbumsAction =
  | FetchUserAlbums
  | UserAlbumsFetched
  | FetchAlbumPhotos
  | AlbumPhotosFetched
