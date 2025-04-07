import { useReducer, useEffect } from 'react';
import axios from 'axios';

// API Base URL
const apiUrl = 'http://localhost:8001';

// Defining initial state
const initialState = {
  favourites: [],
  selectedPhoto: null,
  photoData:[],
  topicData:[],
  error: null,
};


// Defining action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_BY_TOPIC: 'SET_PHOTO_BY_TOPIC',
  SET_ERROR: 'SET_ERROR',
};

// Defining reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favourites: [...state.favourites, action.payload] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favourites: state.favourites.filter(id => id !== action.payload) };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };

    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return { ...state, selectedPhoto: null, error: null, };

    case ACTIONS.SET_PHOTO_BY_TOPIC:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };

    default:
      throw new Error(`Attempted to reduce with unsupported action type: ${action.type}`);
  }
}

// Defining custom hook
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetching photos and topics data from API
  useEffect(() => {
    Promise.all([
      axios.get(`${apiUrl}/api/photos`),
      axios.get(`${apiUrl}/api/topics`)
    ])
      .then(([photoRes, topicRes]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoRes.data });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicRes.data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: 'Error fetching data' });
        console.error('API Error:', error);
      });
  }, []);

  // Fetching photos by topic
  const getPhotosByTopics = async (topicId) => {
    dispatch({ type: ACTIONS.SET_ERROR, payload: null }); // Clearing error

    axios.get(`${apiUrl}/api/topics/photos/${topicId}`)
      .then((response) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch(() => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: 'Error fetching photos by topic' });
      });
  };

  
  // Fetch similar photos
  const getSimilarPhotos = (photoId) => {
    if (!state.photoData) return [];
    return state.photoData.filter((p) => p.id !== photoId);
  };

  // Open selected photo modal
  const setSelectedPhoto = async (photo) => {
    const newPhoto = { ...photo, similar_photos: getSimilarPhotos(photo.id) };
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: newPhoto });
  };

  // Close modal
  const onCloseModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  // Toggle favourite photo
  const toggleFavourites = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  return {
    state,
    getPhotosByTopics,
    setSelectedPhoto,
    onCloseModal,
    toggleFavourites,
  };
};

export default useApplicationData;