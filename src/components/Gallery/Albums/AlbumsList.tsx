import React, { Fragment } from 'react'
import { Album } from '../../../store/gallery'
import UserAlbumsItem from './AlbumsItem'

type UserAlbumsProps = {
  albums: Album[]
}
const AlbumsList: React.FC<UserAlbumsProps> = (props: UserAlbumsProps) => {
  const { albums } = props
  return (
    <Fragment>
      <div className="container">
        <h1 className="header">User Albums</h1>
        <div className="albums">
          {albums.map(album => (
            <UserAlbumsItem key={album.id} album={album} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default AlbumsList
