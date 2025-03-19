import { useReducer, useEffect } from 'react';

// API Base URL
const apiUrl = 'http://localhost:8001';

// Defining initial state
const initialState = {
  favourites: [],
  selectedPhoto: null,
  photoData:[],
  topicData:[]
};


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
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
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

// Defining custom hook
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetching photos and topics data from API
  useEffect(() => {
    fetch(`${apiUrl}/api/photos`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched photo data:", data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => console.error("Error fetching photos:", error));

    fetch(`${apiUrl}/api/topics`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched topic data:", data);
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => console.error("Error fetching topics:", error));
  }, [apiUrl]);

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