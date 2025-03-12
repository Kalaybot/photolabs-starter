import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [photoData] = useState(photos);
  const [topicData] = useState(topics);
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourites = (photoId) => {
    setFavourites((prevFavourites) => 
      prevFavourites.includes(photoId) 
        ? prevFavourites.filter((id) => id !== photoId) 
        : [...prevFavourites, photoId]
    );
  };

  const openModal = (photoId) => {
    const photo = photoData.find((photo) => photo.id === photoId);
    const similarPhotos = photoData.filter((photo) => 
      photo.id !== photoId && photo.topic === photo.topic
    );

    setSelectedPhoto({ ...photo, similarPhotos});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  }

  return (
    <div className="App">
      <PhotoDetailsModal isOpen={isModalOpen} closeModal={closeModal} selectedPhoto={selectedPhoto} />
      <HomeRoute 
        photos={photoData} 
        topics={topicData}
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        openModal={openModal}
      />
    </div>
  );
};

export default App;
