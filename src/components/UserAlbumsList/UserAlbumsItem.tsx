import React, { useEffect } from 'react'
import { Album } from '../../store/gallery'
import { ReactComponent as GalleryPic } from './img/gallery.svg'
import { withRootState } from '../../store'

type UserItemProps = {
  album: Album
}

const UserItem: React.FC<UserItemProps> = withRootState(
  () => {},
  ({ dispatch, album }) => {
    useEffect(() => {
      dispatch({ type: 'FETCH_ALBUM_PHOTOS', albumId: album.id })
    }, [])
    return (
      <div className="albums__item card">
        <div className="card__inner">
          <div className="albums__item__pic card__inner__image">
            <GalleryPic />
          </div>
          <div className="albums__item__counter">
            {album.photos?.length} photos
          </div>
          <div className="albums__item__info card__inner__info">
            {album.title}
          </div>
        </div>
      </div>
    )
  }
)

export default UserItem
