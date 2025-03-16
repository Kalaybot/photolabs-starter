import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, favourites, toggleFavourites, setSelectedPhotoClick, getPhotosByTopics }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favourites={favourites}
        getPhotosByTopics={getPhotosByTopics}
      />
      <PhotoList 
        photos={photos} 
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        setSelectedPhotoClick={setSelectedPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
