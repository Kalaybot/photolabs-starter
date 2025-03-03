import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ title }) => {
  return (
    <div className="topic-list__item">
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
