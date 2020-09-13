const baseUrl = 'https://jsonplaceholder.typicode.com'

export const fetchUsers = async () => {
  const res = await fetch(`${baseUrl}/users`)
  const users = await res.json()
  return users
}

export const fetchUserAlbums = async (userId: number) => {
  const res = await fetch(`${baseUrl}/albums?userId=${userId}`)
  const albums = await res.json()
  return albums
}

export const fetchAlbumPhotos = async (albumId: number) => {
  const res = await fetch(`${baseUrl}/photos?albumId=${albumId}`)
  const photos = await res.json()
  return photos
}
