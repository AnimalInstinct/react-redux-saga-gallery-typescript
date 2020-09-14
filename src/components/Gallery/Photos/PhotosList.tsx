import React, { Fragment, useState } from 'react'
import { Photo } from '../../../store/gallery'
import PhotosItem from './PhotosItem'
import Modal from '../../Modal'
import { NavLink } from 'react-router-dom'

type PhotosListProps = {
  photos: Photo[]
  userId: number
}
const AlbumsList: React.FC<PhotosListProps> = (props: PhotosListProps) => {
  const { photos, userId } = props
  const [showModal, setShowModal] = useState<boolean>(false)
  const [currentPhoto, setCurrentPhoto] = useState<number>(0)
  const photoClickedHandler = (photo: Photo) => {
    setShowModal(!showModal)
    setCurrentPhoto(photo.id)
  }

  return (
    <Fragment>
      <div className="container">
        <NavLink to={`/user/${userId}/albums`} className="button">
          {' '}
          &#8592; Back to albums list
        </NavLink>
        <h1 className="header">Photos</h1>
        <div className="albums">
          {photos.map(photo => (
            <PhotosItem
              key={photo.id}
              photo={photo}
              clicked={photo => photoClickedHandler(photo)}
            />
          ))}
        </div>
      </div>
      <Modal
        show={showModal}
        close={() => setShowModal(false)}
        photos={photos}
        currentPhoto={currentPhoto}
      />
    </Fragment>
  )
}

export default AlbumsList
