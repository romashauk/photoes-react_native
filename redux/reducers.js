import initialState from './initialState';
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE,
} from './actions';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        usersLoading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        usersLoading: false,
      };

    case GET_USERS_FAILURE:
      return {
        ...state,
        usersLoading: false,
        usersError: action.error,
      };
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        usersLoading: true,
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        usersLoading: false,
      };
    case GET_PHOTOS_FAILURE:
      return {
        ...state,
        usersError: action.error,
      };
    default:
      return state;
  }
};
export default reducers;
