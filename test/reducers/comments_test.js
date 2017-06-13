/**
 * Created by patrykmazurkiewicz on 02/06/2017.
 */
import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comment reducer', () => {
   it('handles action with unknown type', () => {
        expect(commentReducer(undefined, {})).to.be.instanceof(Array);
        expect(commentReducer(undefined, {})).to.eql([]);
   });

   it('handles action with SAVE_COMMENT type', () => {
        const action = { type: SAVE_COMMENT, payload: 'new comment' };
        expect(commentReducer([], action)).to.eql(['new comment']);
   });
});