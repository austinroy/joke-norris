export const fetchJoke = category => dispatch =>
  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(res => {
      if (!res.ok) {
        Promise.reject.bind(Promise);
      } else {
        return res.json();
      }
    })
    .then(categories => {
      dispatch(fetchJokeSuccess(categories));
    })
    .catch(err => {
      dispatch(fetchJokeSuccess(err));
    });

export const fetchJokeSuccess = joke => {
  return {
    type: 'FETCH_JOKE_SUCCESS',
    joke,
    loading: false,
    error: false
  };
};

export const fetchJokeFailure = err => {
  return {
    type: 'FETCH_JOKE_FAILURE',
    loading: false,
    error: true,
    err
  };
};
