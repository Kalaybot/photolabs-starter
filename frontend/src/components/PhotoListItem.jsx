import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  return (
    <div className="photo-list__item" key={id}>
      <div className="photo-list__image-container">
        <PhotoFavButton />
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
