import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default (email, password) => ({
  type: ActionTypes.LOGON.name,
  payload: axios
    .post(
      `http://localhost:3300/api/login/addLogin`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
          // 'Target-URL': 'https://api.hitchhero.com/user/login',
        },
      },
    )
    .then(response => response.data),
});
