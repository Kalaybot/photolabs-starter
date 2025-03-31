import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import SearchBar from './SearchBar';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favourites, getPhotosByTopics, searchPhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <div className="top-nav-bar__topics">
      <TopicList 
        topics={topics}
        getPhotosByTopics={getPhotosByTopics}
      />
      </div>

      <div className="top-nav-bar__actions">

      <div className="top-nav-bar__search">
        <SearchBar searchPhotos={searchPhotos} />
      </div>

      <div className="top-nav-bar__favourites">
      <FavBadge isFavPhotoExist={favourites.length > 0}/>
      </div>
      </div>
    </div>
  )
};

export default TopNavigation;
