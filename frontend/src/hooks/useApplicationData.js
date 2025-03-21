import { useReducer, useEffect } from 'react';
import axios from 'axios';

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
        console.error("Error fetching data:", error);
      });
  }, []);

  // Fetching photos by topic
  const getPhotosByTopics = (topicId) => {
    axios.get(`${apiUrl}/api/topics/photos/${topicId}`)
      .then((response) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching photos by topic:", error);
      });
  };

  return {
    state,
    setSelectedPhoto: (photo) => dispatch({ type: ACTIONS.SELECT_PHOTO, photo}),
    toggleFavourites: (photoId) => {
      const isFav = state.favourites.includes(photoId);
      dispatch({
        type: isFav ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED,
        photoId
      });
    },
    onCloseModal: () => dispatch({ type: ACTIONS.SELECT_PHOTO, photo: null }),
    getPhotosByTopics,
  };
};

export default useApplicationData;