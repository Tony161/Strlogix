import create from '../../../utils/createReduxPromiseActionType';

const actionTypes = {
  USER_CREATE: create('USER_CREATE'),
  RESET_PASSWORD: create('RESET_PASSWORD'),
};

export default actionTypes;
