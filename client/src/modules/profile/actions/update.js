import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default (email, firstName, lastName, title) => ({
  type: ActionTypes.PROFILE_UPDATE.name,
  payload: axios.put(
    `http://localhost:3300/api/profile/update/${email}`,
    { firstName, lastName, title },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ),
});
