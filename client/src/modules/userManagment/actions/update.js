import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default (id, role, active) => ({
  type: ActionTypes.DATA_UPDATE.name,
  payload: axios.put(
    `http://localhost:3300/api/usersManagment/update/${id}`,
    { role, active },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then(()=>({id, role, active})),
});
