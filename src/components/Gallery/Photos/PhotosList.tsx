import React, { Fragment, useState } from 'react'
import { Photo } from '../../../store/gallery'
import PhotosItem from './PhotosItem'
import Modal from '../../Modal'

type PhotosListProps = {
  photos: Photo[]
}
const AlbumsList: React.FC<PhotosListProps> = (props: PhotosListProps) => {
  const { photos } = props
  const [showModal, setShowModal] = useState<boolean>(false)
  const [currentPhoto, setCurrentPhoto] = useState<number>(0)

  const photoClickedHandler = (photo: Photo) => {
    setShowModal(!showModal)
    setCurrentPhoto(photo.id)
  }

  return (
    <Fragment>
      <div className="container">
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
