import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          username={photo.user.username}
          imageSource={photo.urls.regular}
          location={photo.location}
          profile={photo.user.profile}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
