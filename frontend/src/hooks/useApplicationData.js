import { useReducer, useEffect } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

// Defining action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

// Defining reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.photos };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.topics };
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favourites: [...state.favourites, action.photoId] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favourites: state.favourites.filter(id => id !== action.photoId) };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.photo };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, selectedPhoto: action.photo };

    default:
      throw new Error(`Attempted to reduce with unsupported action type: ${action.type}`);
  }
}

// Defining initial state
const initialState = {
  photos: [],
  topics: [],
  favourites: [],
  selectedPhoto: null,
};

// Defining custom hook
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos });
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics });
  }, []);

  const setSelectedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  const toggleFavourites = (photoId) => {
    const isFav = state.favourites.includes(photoId);
    dispatch({
      type: isFav ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED,
      photoId,
    });
  };

  const onCloseModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo: null });
  };

  const getPhotosByTopics = (topicId) => {
    const filteredPhotos = photos.filter(photo => photo.topicId === topicId);
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos: filteredPhotos });
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