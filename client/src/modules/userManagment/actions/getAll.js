import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default () => ({
  type: ActionTypes.ALL_GET.name,
  payload: axios.get(
    `http://localhost:3300/api/usersManagment/getAll`,
    { },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then(response => response.data),
});
