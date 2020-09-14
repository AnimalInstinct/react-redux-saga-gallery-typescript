import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
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
        <NavLink to={`/`} className="button">
          {' '}
          &#8592; Back to users list
        </NavLink>
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
