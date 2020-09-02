import { combineReducers } from 'redux';

import games from './games';
import filters from './filters';

const rootReducer = combineReducers({
   games,
   filters,
});

export default rootReducer;
