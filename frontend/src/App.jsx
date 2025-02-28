import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: "/profile-1.jpg",
};

const App = () => {
  
  const { username, location, imageSource, id, profile} = sampleDataForPhotoListItem;

  return (
    <div className="App">
      <PhotoListItem
        username={username}
        imageSource={imageSource}
        id={id}
        location={location}
        profile={profile}
      />
    </div>
  );
};

export default App;
