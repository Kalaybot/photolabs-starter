// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = ({ isFavorited, toggleFavourites, photoId }) => {

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourites(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;
