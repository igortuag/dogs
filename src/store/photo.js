const FETCH_PHOTO_STARTED = "photo/fetchStarted";
const FETCH_PHOTO_SUCCESS = "photo/fetchSuccess";
const FETCH_PHOTO_ERROR = "photo/fetchError";

const fetchPhotoStarted = () => ({
  type: FETCH_PHOTO_STARTED,
});

const fetchPhotoSuccess = (data) => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: data,
});

const fetchPhotoError = (error) => ({
  type: FETCH_PHOTO_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  error: null,
  data: null,
};
