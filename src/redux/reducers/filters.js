const initialState = {
   genre: 0,
   sortBy: {
      type: 'date',
      order: 'asc',
   },
};

const filters = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_SORT_BY':
         return {
            ...state,
            sortBy: action.payload,
         };

      case 'SET_GENRE':
         return {
            ...state,
            genre: action.payload,
         };

      default:
         return state;
   }
};

export default filters;
