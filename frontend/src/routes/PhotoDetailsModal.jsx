import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isOpen, closeModal, selectedPhoto }) => {
  if (!isOpen) return null;

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__overlay" onClick={closeModal}></div>
      <div className="photo-details-modal__content">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
