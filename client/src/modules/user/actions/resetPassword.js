import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default (email, new_password) => ({
  type: ActionTypes.RESET_PASSWORD.name,
  payload: axios
    .put(
      `http://localhost:3300/api/users/resetPassword/${email}`,
      { new_password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => response.data),
});
