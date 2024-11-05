import {createStore} from 'vuex';
import state from './modules/state';
import actions from './modules/actions';
import mutations from './modules/mutations';

export default createStore({
    state,
    actions,
    mutations
});