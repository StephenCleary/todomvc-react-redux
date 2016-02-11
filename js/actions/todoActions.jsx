import ActionTypes from '../actionTypes';
import { createAction } from 'redux-actions';

export default {
    add: createAction(ActionTypes.ADD_TODO)
};
