import axios from 'axios'
import { User } from '../store/users'

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const fetchUsers = async () => {
  const res = await fetch(`${baseUrl}/users`)
  const authors = (await res.json()) as User[]
  return authors
}

// export const fetchAlbum = async (albumId, setLoading, setAlbum) => {
//   setLoading && setLoading(true)

//   const resPictures = await fetch(`${baseUrl}/albums/${albumId}/photos`)
//   const resPicturesArr = (await resPictures.json()) as Photo[]

//   const resAlbum = await fetch(`${baseUrl}/albums/${albumId}`)
//   const resAlbumObj = (await resAlbum.json()) as Album

//   const result = await { pictures: resPicturesArr, ...resAlbumObj }

//   setAlbum && setAlbum(result)
//   setLoading && setLoading(false)

//   return result
// }

// export const fetchAuthor = async (
//   authorId,
//   setLoading,
//   setAuthor,
//   setAlbum
// ) => {
//   setLoading && setLoading(true)

//   const resAlbums = await fetch(`${baseUrl}/users/${authorId}/albums`)
//   let albums = (await resAlbums.json()) as Album[]

//   const resAuthor = await fetch(`${baseUrl}/users/${authorId}`)
//   const author = (await resAuthor.json()) as User

//   albums = await Promise.all(
//     albums.map(async album => await fetchAlbum(album.id, setLoading, setAlbum))
//   )

//   const authorResult = { albums: albums, authorName: author.name }

//   setAuthor && setAuthor(authorResult)
//   setLoading && setLoading(false)

//   return authorResult
// }
