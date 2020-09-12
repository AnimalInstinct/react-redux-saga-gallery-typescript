import React, { useEffect } from 'react'
import { Album } from '../../store/gallery'
import { ReactComponent as GalleryPic } from './img/gallery.svg'
import { withRootState } from '../../store'
import { Photo } from '../../store/gallery'

type UserItemProps = {
  album: Album
}

const UserItem: React.FC<UserItemProps> = withRootState(
  () => {},
  ({ dispatch, album }) => {
    console.log(album)
    return (
      <div className="albums__item card">
        <div className="card__inner">
          <div className="albums__item__pic card__inner__image">
            <GalleryPic />
          </div>
          <div className="albums__item__info card__inner__info">
            {album.title}
            <div>{album.photos?.length}</div>
            <div>{album.test}</div>
          </div>
        </div>
      </div>
    )
  }
)

export default UserItem
