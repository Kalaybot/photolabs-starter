import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const { state, setSelectedPhoto, toggleFavourites, onCloseModal, getPhotosByTopics, searchPhotos } = useApplicationData();

  const { favourites, selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute 
        photos={state.searchResults.length ? state.searchResults : state.photoData} 
        topics={state.topicData}
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        onPhotoClick={setSelectedPhoto}
        getPhotosByTopics={getPhotosByTopics}
        searchPhotos={searchPhotos}
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
