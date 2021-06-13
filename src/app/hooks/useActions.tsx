import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../store/actionCreators';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
