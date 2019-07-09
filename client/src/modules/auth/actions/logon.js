import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default (email, password) => ({
  type: ActionTypes.LOGON.name,
  payload: axios
    .post(
      `http://localhost:3300/api/auth/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => response.data),
});
