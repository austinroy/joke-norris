import reducer from './jokeReducer';

const initialState = {};

const fetchedJoke = {
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: '3BzfgjsqTXq9yJKzpxcySA',
  url: 'https://api.chucknorris.io/jokes/3BzfgjsqTXq9yJKzpxcySA',
  value:
    'there is no theory of evolution, just a list of species Chuck Norris allows to live'
};

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_JOKE_SUCCESS', () => {
    expect(
      reducer(Object.assign({}, initialState, { loading: false }), {
        type: 'FETCH_JOKE_SUCCESS',
        joke: fetchedJoke
      })
    ).toEqual(Object.assign({}, initialState, { data: fetchedJoke }));
  });
});
