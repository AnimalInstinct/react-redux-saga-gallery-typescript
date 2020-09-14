import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Album, User } from '../../../store/gallery'
import UserAlbumsItem from './AlbumsItem'

type UserAlbumsProps = {
  albums: Album[]
  user: User | null
}
const AlbumsList: React.FC<UserAlbumsProps> = (props: UserAlbumsProps) => {
  const { albums, user } = props
  return (
    <Fragment>
      <div className="container">
        <NavLink to={`/`} className="button">
          &#8592; Back to users list
        </NavLink>
        <h1 className="header">{user && `${user.name}'s albums`}</h1>
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
