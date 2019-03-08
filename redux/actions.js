export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAILURE = 'GET_PHOTOS_FAILURE';

export function getUsers() {
  const usersUrl =
    'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
  return dispatch => {
    dispatch({ type: GET_USERS_REQUEST });

    fetch(usersUrl)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load products');
        }

        return response.json();
      })
      .then(dataJson => {
        dispatch({
          type: GET_USERS_SUCCESS,
          users: dataJson,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_USERS_FAILURE,
          error: error.message,
        });
      });
  };
}
export function getPhotos(name) {
  const photosUrl = `https://api.unsplash.com/users/${name}/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`;
  return dispatch => {
    dispatch({ type: GET_PHOTOS_REQUEST });

    fetch(photosUrl)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load products');
        }

        return response.json();
      })
      .then(dataJson => {
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          photos: dataJson,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_PHOTOS_FAILURE,
          error: error.message,
        });
      });
  };
}
