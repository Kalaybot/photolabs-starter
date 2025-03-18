import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import { useEffect } from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ photo, closeModal, favourites, toggleFavourites, setSelectedPhoto }) => {

  const handleOverlayClick = event => {
    if (event.target.classList.contains('photo-details-modal__overlay')) {
      closeModal();
    }
  };

  useEffect(() => {
    if (!photo) {
      closeModal()
    }
  }, [photo, closeModal]);

  //Error Handling
  if (!photo || !photo.id || !photo.urls || !photo.urls.full || !photo.user || !photo.user.name || !photo.user.profile || !photo.similar_photos) {
    return (
      <div className="photo-details-modal">
        <div className="photo-details-modal__overlay" onClick={handleOverlayClick}>
          <div className="photo-details-modal__content" onClick={(event) => event.stopPropagation()}>
            <button className="photo-details-modal__close-button" onClick={closeModal}>
              <img src={closeSymbol} alt="close symbol" />
            </button>
            <p className="photo-details-modal__error">Error: Photo details not found.</p>
          </div>
        </div>
      </div>
    );
  }

  const location = photo. location ? `${photo.location.city}, ${photo.location.country}` : 'Unknown location';

  const isFavorited = favourites.includes(photo.id);

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__overlay" onClick={handleOverlayClick}>
        <div className="photo-details-modal__content" onClick={(event) => event.stopPropagation()}>
          <button className="photo-details-modal__close-button" onClick={closeModal}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
          <div className="photo-details-modal__image-container">
            <div className="photo-details-modal__fav-icon">
              <PhotoFavButton
                photoId={photo.id}
                selected={isFavorited}
                toggleFavourites={() => toggleFavourites(photo.id)}
              />
            </div>
            <img className="photo-details-modal__image" src={photo.urls.full} alt={`Selected photo by ${photo.user.name}`} />
          </div>
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={photo.user.profile} alt={`Photo of ${photo.user.name}`} />
            <div className="photo-details-modal__photographer-info">
              <p className="photo-details-modal__photographer-name">{photo.user.name}</p>
              <p className="photo-details-modal__photographer-location">{location}</p>
            </div>
          </div>
          <hr></hr>
          <h3 className="photo-details-modal__header">Related Photos</h3>
          {Object.values(photo.similar_photos).length > 0 ? (
            <PhotoList
              photos={Object.values(photo.similar_photos)}
              favourites={favourites}
              toggleFavourites={toggleFavourites}
              setSelectedPhotoClick={setSelectedPhoto}
            />
          ) : (
            <p className="photo-details-modal__error">No similar photos found.</p>
          )}
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
