import { useState, useEffect } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: [],
    topics: [],
    favourites: [],
    selectedPhoto: null,
  });

  useEffect(() => {
    // Initialize state with mock data
    setState(prev => ({
      ...prev,
      photos,
      topics,
    }));
  }, []);

  const setSelectedPhoto = (photo) => {
    setState(prev => ({
      ...prev,
      selectedPhoto: photo,
    }));
  };

  const toggleFavourites = (photoId) => {
    setState(prev => {
      const favourites = prev.favourites.includes(photoId)
        ? prev.favourites.filter(id => id !== photoId)
        : [...prev.favourites, photoId];
      return { ...prev, favourites };
    });
  };

  const onCloseModal = () => {
    setState(prev => ({
      ...prev,
      selectedPhoto: null,
    }));
  };

  const getPhotosByTopics = (topicId) => {
    setState(prev => {
      const filteredPhotos = prev.photos.filter(photo => photo.topicId === topicId);
      return { ...prev, photos: filteredPhotos };
    });
  };

  return {
    state,
    setSelectedPhoto,
    toggleFavourites,
    onCloseModal,
    getPhotosByTopics,
  };
};

export default useApplicationData;