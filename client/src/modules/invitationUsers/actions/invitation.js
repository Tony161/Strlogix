import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default (firstName, lastName, title, email) => ({
  type: ActionTypes.USER_INVITE.name,
  payload: axios
    .post(
      'http://localhost:3300/api/invitationUsers/invite',
      { firstName, lastName, title, email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => response.data),
});
