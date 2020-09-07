import axios from 'axios';

export const setLoaded = (payload) => ({
   type: 'SET_LOADED',
   payload,
});

export const fetchGames = (genre, sortBy) => (dispatch) => {
   dispatch(setLoaded(false));

   axios.get(`/games?${genre !== 0 ? `genre=${genre}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      dispatch(setGames(data));
   });
};

export const setGames = (items) => ({
   type: 'SET_GAMES',
   payload: items,
});
