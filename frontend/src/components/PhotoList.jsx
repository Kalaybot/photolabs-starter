import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favourites, toggleFavourites, openModal }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id} onClick={() => openModal(photo.id)}>
          <PhotoListItem
            key={photo.id}
            id={photo.id}
            username={photo.user.username}
            imageSource={photo.urls.regular}
            location={photo.location}
            profile={photo.user.profile}
            favourites={favourites}
            toggleFavourites={toggleFavourites}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
