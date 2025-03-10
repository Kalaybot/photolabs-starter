import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, favourites, toggleFavourites, openModal }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites} />
      <PhotoList 
        photos={photos} 
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
