export const setSortBy = ({ type, order }) => ({
   type: 'SET_SORT_BY',
   payload: { type, order },
});

export const setGenre = (genreIndex) => ({
   type: 'SET_GENRE',
   payload: genreIndex,
});
