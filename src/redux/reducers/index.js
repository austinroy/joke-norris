import { combineReducers } from 'redux';
import categories from './categoryReducer';
import joke from './jokeReducer';

export default combineReducers({
  categories,
  joke
});
