const FETCH_PHOTO_STARTED = "photo/fetchStarted";
const FETCH_PHOTO_SUCCESS = "photo/fetchSuccess";
const FETCH_PHOTO_ERROR = "photo/fetchError";

const fetchPhotoStarted = () => ({
  type: FETCH_PHOTO_STARTED,
});

const fetchPhotoSuccess = (photo) => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: photo,
});

const fetchPhotoError = (error) => ({
  type: FETCH_PHOTO_ERROR,
  payload: error,
});
