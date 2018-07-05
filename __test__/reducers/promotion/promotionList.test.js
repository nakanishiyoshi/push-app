/* eslint-env jest */

import reducer from '../../../reducers/promotion/promotionList';
import * as actions from '../../../actions/promotion';
import { promotionList } from '../../../temporary/data/promotion';

const test = action => {
    const initialState = { data: [] };
    return reducer(initialState, action);
};

describe('promotionList reducer test', () => {
    it('Can add Promotion List', () => {
        const state = test(actions.setPromotionList(promotionList.data));
        expect(state.data).toEqual(promotionList.data);
    });
});
