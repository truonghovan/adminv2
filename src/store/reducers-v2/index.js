// third-party
import { combineReducers } from 'redux';

// project import
import menu from '../reducers/menu';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu });

export default reducers;
