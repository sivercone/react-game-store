import { combineReducers } from 'redux';

import games from './games';
import filters from './filters';
import cart from './cart';

const rootReducer = combineReducers({
   games,
   filters,
   cart,
});

export default rootReducer;
