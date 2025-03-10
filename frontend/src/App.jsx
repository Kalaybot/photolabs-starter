import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [photoData] = useState(photos);
  const [topicData] = useState(topics);
  const [favourites, setFavourites] = useState([]);

  const toggleFavourites = (photoId) => {
    setFavourites((prevFavourites) => 
      prevFavourites.includes(photoId) 
        ? prevFavourites.filter((id) => id !== photoId) 
        : [...prevFavourites, photoId]
    );
  };

  return (
    <div className="App">
     <HomeRoute 
      photos={photoData} 
      topics={topicData}
      favourites={favourites}
      toggleFavourites={toggleFavourites} 
     />
    </div>
  );
};

export default App;
