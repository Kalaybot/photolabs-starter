import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, favourites, toggleFavourites, onPhotoClick, getPhotosByTopics, searchPhotos }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favourites={favourites}
        getPhotosByTopics={getPhotosByTopics}
        searchPhotos={searchPhotos} // Added searchPhotos prop 
      />
      <PhotoList 
        photos={photos} 
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
