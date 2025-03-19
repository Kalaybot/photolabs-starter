import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favourites, toggleFavourites, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          favourites={favourites}
          toggleFavourites={toggleFavourites}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
