import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

// export default image => ({
//   type: ActionTypes.IMAGE,
//   payload:{ image },
// });

export default image => ({
  type: ActionTypes.IMAGE,
  payload: axios.post(
    `http://localhost:3300/api/images/imageAdd/`,
    { image },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ),
});
