
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, getPhotosByTopics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          topic={topic} 
          getPhotosByTopics={getPhotosByTopics}
        />
      ))}
    </div>
  );
};

export default TopicList;
