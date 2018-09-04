import {combineReducers} from 'redux';
import categories from './categoryReducer';
import joke from './jokesReducer';
import searchJokes from './searchReducer';

export default combineReducers({
  categories,
  joke,
  searchJokes
});
