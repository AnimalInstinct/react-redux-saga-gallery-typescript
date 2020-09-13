import { User, Album, Photo } from './types'

export type FetchUsers = {
  type: 'FETCH_USERS'
}

export type UsersFetched = {
  type: 'USERS_FETCHED'
  users: User[]
}

export type FetchUser = {
  type: 'FETCH_USER'
  userId: number
}

export type UserFetched = {
  type: 'USER_FETCHED'
  users: User
}

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

export type GalleryAction =
  | FetchUsers
  | UsersFetched
  | FetchUserAlbums
  | UserAlbumsFetched
  | FetchAlbumPhotos
  | AlbumPhotosFetched
