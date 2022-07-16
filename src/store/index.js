// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import rootReducer from './reducers';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: rootReducer
});

const { dispatch } = store;

export { store, dispatch };
