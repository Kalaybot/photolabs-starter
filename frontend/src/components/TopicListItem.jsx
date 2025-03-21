import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, getPhotosByTopics }) => {
  return (
    <div className="topic-list__item" onClick={() => getPhotosByTopics(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
