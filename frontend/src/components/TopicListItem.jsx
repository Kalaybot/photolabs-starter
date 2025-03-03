import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic }) => {
  return (
    <div className="topic-list__item">
      <span>{topic.label}</span>
    </div>
  );
};

export default TopicListItem;
