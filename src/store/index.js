import {createStore} from 'redux'
import allReducers from 'reducers'
const appStore = createStore(allReducers);

export default appStore;
