/**
 * Created by patrykmazurkiewicz on 30/05/2017.
 */
import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
    describe('save comment action', () => {
       it('has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
       });

       it('has the correct payload', () => {
            const action = saveComment('comment3');
            expect(action.payload).to.equal('comment3');
       });
    });
});