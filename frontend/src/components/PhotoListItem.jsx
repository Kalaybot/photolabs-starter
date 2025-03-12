import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ username, imageSource, id, location, profile, favourites, toggleFavourites, openModal }) => {
  const isFavorited = favourites.includes(id);

  const handleClick = () => {
    openModal({
      id,
      username,
      imageSource,
      location,
      profile
    });
  };

  return (
    <div className="photo-list__item" key={id}>
      <div className="photo-list__image-container" onClick={handleClick}>
        <PhotoFavButton 
          isFavorited={isFavorited}
          toggleFavourites={toggleFavourites}
          photoId={id}
        />
        <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
        <div className="photo-list__user-info">
          <p className="photo-list__username">{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
