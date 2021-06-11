import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../store/actionCreators';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(userActions, dispatch);
};
