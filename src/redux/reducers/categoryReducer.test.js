import reducer from './categoryReducer';

const initialState = {};

const fetchedCategories = [
  'explicit',
  'dev',
  'movie',
  'food',
  'celebrity',
  'science',
  'sport',
  'political',
  'religion',
  'animal',
  'history',
  'music',
  'travel',
  'career',
  'money',
  'fashion'
];

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_CATEGORIES_SUCCESS', () => {
    expect(
      reducer(Object.assign({}, initialState, { loading: false }), {
        type: 'FETCH_CATEGORIES_SUCCESS',
        categories: fetchedCategories
      })
    ).toEqual(Object.assign({}, initialState, { data: fetchedCategories }));
  });
});
