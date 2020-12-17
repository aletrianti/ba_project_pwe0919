// import all reducers
import authReducer from './auth.reducers';

// import redux method
import { combineReducers } from '@reduxjs/toolkit';

// combine reducers
// set to 'any' as it can't be set to 'void'
const reducers: any = combineReducers({
    auth: authReducer,
    // ...
});

export default reducers;
