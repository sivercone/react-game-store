export const setSortBy = (name) => ({
   type: 'SET_SORT_BY',
   payload: name,
});

export const setGenre = (genreIndex) => ({
   type: 'SET_GENRE',
   payload: genreIndex,
});
