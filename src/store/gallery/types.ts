export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
  albums: Album[]
}

export type Album = {
  userId: number
  id: number
  title: string
  photos: Photo[]
}

export type Photo = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
