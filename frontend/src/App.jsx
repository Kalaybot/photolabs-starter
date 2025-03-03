import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicListItem from './components/TopicListItem';
import './App.scss';

const sampleDataForTopicListItem = [
  {
    id: 1,
    label: "Nature",
  },
  {
    id: 2,
    label: "Travel",
  },
  {
    id: 3,
    label: "People",
  },
]

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      {/*photos.map((photo, index) => (
        <PhotoListItem
          key={index}
          username={photo.username}
          imageSource={photo.imageSource}
          id={photo.id}
          location={photo.location}
          profile={photo.profile}
        />  
      ))*/}
      {sampleDataForTopicListItem.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} />
        ))}
    </div>
  );
};

export default App;
