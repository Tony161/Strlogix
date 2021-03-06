import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default email => ({
  type: ActionTypes.DATA_GET.name,
  payload: axios.get(
    `http://localhost:3300/api/profile/get/${email}`,
    { email },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ),
});
