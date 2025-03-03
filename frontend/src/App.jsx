import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import './App.scss';

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
      <TopicList />
    </div>
  );
};

export default App;
