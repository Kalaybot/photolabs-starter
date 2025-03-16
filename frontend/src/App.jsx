import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const { state, setSelectedPhoto, toggleFavourites, onCloseModal, getPhotosByTopics } = useApplicationData();

  const { photos, favourites, selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={state.topics}
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        setSelectedPhotoClick={setSelectedPhoto}
        getPhotosByTopics={getPhotosByTopics}
      />

      {selectedPhoto && (
        <PhotoDetailsModal 
          photo={selectedPhoto}
          closeModal={onCloseModal}
          favourites={favourites}
          toggleFavourites={toggleFavourites}
          setSelectedPhoto={setSelectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
