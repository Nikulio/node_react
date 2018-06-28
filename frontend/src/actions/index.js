import * as consts from './consts';

export const initAction = (data) => {
  return {
    type: consts.INIT_ACTION,
    payload: data
  }
};
