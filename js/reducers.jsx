import { handleActions } from 'redux-actions';
import ActionTypes from './actionTypes';

export default handleActions({
	[ActionTypes.ADD_TODO]: (state, action) => [...state, { completed: false, text: action.payload }]
}, []);
