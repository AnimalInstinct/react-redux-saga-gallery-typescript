import React from 'react'
import { Photo } from '../../../store/gallery'

type PhotosItemProps = {
  photo: Photo
  clicked: (photo: Photo) => void
}

const AlbumsItem: React.FC<PhotosItemProps> = (props: PhotosItemProps) => {
  const { photo, clicked } = props
  return (
    <div className="photos__item card" onClick={() => clicked(photo)}>
      <div className="card__inner">
        <div className="photos__item__pic card__inner__image">
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
        <div className="photos__item__info card__inner__info">
          {photo.title}
        </div>
      </div>
    </div>
  )
}

export default AlbumsItem
