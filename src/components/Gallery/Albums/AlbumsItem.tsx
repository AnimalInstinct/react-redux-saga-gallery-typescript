import React, { useEffect } from 'react'
import { Album } from '../../../store/gallery'
import { ReactComponent as GalleryPic } from './img/gallery.svg'
import { withRootState } from '../../../store'
import { NavLink } from 'react-router-dom'

type AlbumsItemProps = {
  album: Album
}

const AlbumsItem: React.FC<AlbumsItemProps> = withRootState(
  () => {},
  ({ dispatch, album }) => {
    useEffect(() => {
      dispatch({ type: 'FETCH_ALBUM_PHOTOS', albumId: album.id })
    }, [])
    return (
      <div className="albums__item card">
        <NavLink to={`/user/${album.userId}/album/${album.id}`}>
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
        </NavLink>
      </div>
    )
  }
)

export default AlbumsItem
