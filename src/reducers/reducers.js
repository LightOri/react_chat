import { combineReducers } from 'redux';

// Это редюсер - чистая функция в формате(state, action) => state.
const panelReducer = function (state = {}, action) {
    console.log('panelReducer was called with state', state, 'and action', action)

    switch (action.type) {
        case 'COLLAPSE':
            return action.panel; //'false'
        case 'EXPAND':
            return action.panel; //'true'
        default:
            return state;
    }
};


export const reducers = combineReducers({
    panel: panelReducer
});
