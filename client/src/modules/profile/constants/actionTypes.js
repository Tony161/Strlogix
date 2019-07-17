import create from '../../../utils/createReduxPromiseActionType';

const actionTypes = {
  PROFILE: create('PROFILE'),
  DATA_GET: create('DATA_GET'),
  PROFILE_UPDATE: create('PROFILE_UPDATE'),
  IMAGE: create('IMAGE'),
};

export default actionTypes;
