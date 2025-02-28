import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-list-item__details">
        <img src={profile} alt={`Profile of ${username}`} />
        <p>{username}</p>
        <p>{location.city}, {location.country}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
