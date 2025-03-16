// import FavIcon from './FavIcon';
import { useCallback } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = ({ selected, isFavorited, toggleFavourites }) => {

  const handleClick = useCallback(() => {
    if (toggleFavourites) {
      toggleFavourites();
    }
  }, [toggleFavourites]);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
        <div className="photo-list__fav-icon-svg">
          <FavIcon isFavorited={isFavorited} selected={selected} />
        </div>
    </div>
  );
};

export default PhotoFavButton;
