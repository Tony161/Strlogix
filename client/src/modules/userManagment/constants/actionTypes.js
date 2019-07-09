import create from '../../../utils/createReduxPromiseActionType';

const actionTypes = {
  USER_MANAGMENT: create('USER_MANAGMENT'),
  ALL_GET: create('ALL_GET'),
  DATA_UPDATE: create('DATA_UPDATE'),
};

export default actionTypes;
