import {
  combineReducers,
} from 'redux';

import tag from './tag/reducer';
import question from './question/reducer';

export default combineReducers({
  tag,
  question,
});
