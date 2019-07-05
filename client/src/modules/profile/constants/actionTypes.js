import create from '../../../utils/createReduxPromiseActionType';

const actionTypes = {
  PROFILE: create ('PROFILE'),
  DATA_GET: create ('DATA_GET'),
  DATA_UPDATE: create ('DATA_UPDATE')
};

export default actionTypes;
