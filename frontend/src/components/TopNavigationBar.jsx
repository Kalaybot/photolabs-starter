import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import SearchBar from './SearchBar';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favourites, getPhotosByTopics, searchPhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <div className="top-nav-bar-search">
        <SearchBar searchPhotos={searchPhotos} />
      </div>

      <TopicList 
        topics={topics}
        getPhotosByTopics={getPhotosByTopics}
      />
      <div className="top-nav-bar__actions">
        <FavBadge isFavPhotoExist={favourites.length > 0}/>
      </div>
    </div>
  )
};

export default TopNavigation;
