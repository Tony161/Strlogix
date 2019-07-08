import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default (firstName, lastName, title, email, password) => ({
  type: ActionTypes.USER_CREATE.name,
  payload: axios
    .post(
      'http://localhost:3300/api/users/addUser',
      { firstName, lastName, title, email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    .then(response => response.data),

});
