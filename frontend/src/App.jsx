import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { username, location, imageSource, id, profile} = sampleDataForPhotoList;
  // const photos = new Array(3).fill(sampleDataForPhotoListItem);

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
      <PhotoList />
    </div>
  );
};

export default App;
