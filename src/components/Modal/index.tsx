import React, { useEffect, useState } from 'react'
import { Photo } from '../../store/gallery'

export interface ModalProps {
  show: boolean
  close: () => void
  photos: Photo[]
  currentPhoto: number
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { show, photos, currentPhoto, close } = props
  const [slideIndex, setSlideIndex] = useState<number>(0)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [currentSlide, setCurrenSlide] = useState<Photo>()

  useEffect(() => {
    setSlideIndex(currentPhoto)
    setShowModal(show)
  }, [show])

  useEffect(() => {
    setCurrenSlide(photos.find(photo => photo.id == slideIndex))
  }, [slideIndex])

  const nextHandler = () => {
    if (slideIndex == photos.length - 1) {
      setSlideIndex(0)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }
  const prevHandler = () => {
    if (slideIndex == 0) {
      setSlideIndex(photos.length - 1)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }

  return showModal && currentSlide ? (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <span
            className="modal__content__header__close"
            onClick={() => close()}
          >
            &times;
          </span>
        </div>
        <div className="modal__content__body">
          <div className="modal__content__body__image">
            <a
              className="modal__content__body__image__prev"
              onClick={() => prevHandler()}
            >
              &#10094;
            </a>
            <img src={currentSlide.thumbnailUrl} alt={currentSlide.title} />
            <a
              className="modal__content__body__image__next"
              onClick={() => nextHandler()}
            >
              &#10095;
            </a>
          </div>
        </div>
        <div className="modal__content__footer">
          <div className="modal__content__footer__fileinfo">
            <span>{currentSlide.title}</span>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
