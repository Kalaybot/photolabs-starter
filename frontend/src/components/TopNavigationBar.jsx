import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favourites, getPhotosByTopics }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
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
