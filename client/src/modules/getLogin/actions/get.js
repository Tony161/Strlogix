import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default (email) => ({
  type: ActionTypes.LOGIN_GET.name,
  payload: axios.get(
    `http://localhost:3300/api/login/getLogin/${email}`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ),
});
