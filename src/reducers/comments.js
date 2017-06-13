/**
 * Created by patrykmazurkiewicz on 02/06/2017.
 */
import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case SAVE_COMMENT:
            return [ ...state, action.payload ];

        default:
            return state;
    }
}