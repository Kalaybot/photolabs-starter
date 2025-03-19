import { useCallback } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavourites, onPhotoClick, favourites}) => {
  const isFavorited = favourites.includes(photo.id);

  const handleToggleFav = useCallback(() => {
    toggleFavourites(photo.id);
  }, [toggleFavourites, photo.id]);

  return (
    <div className="photo-list__item" key={photo.id}>
      <div className="photo-list__image-container">
      <PhotoFavButton
        selected={isFavorited}
        toggleFavourites={handleToggleFav}
      />
      <img className="photo-list__image" src={photo.urls.regular} alt={`Photo by ${photo.user.name}`} onClick={() => onPhotoClick(photo)} />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt={`Profile of ${photo.user.name}`} />
        <div className="photo-list__user-info">
          <p className="photo-list__username">{photo.user.name}</p>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
