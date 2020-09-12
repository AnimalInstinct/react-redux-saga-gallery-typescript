export type Album = {
  userId: number
  id: number
  title: string
  photos: Photo[]
  test: string
}

export type Photo = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
