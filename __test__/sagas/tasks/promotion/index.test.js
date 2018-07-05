/* eslint-env jest */
import { expectSaga } from 'redux-saga-test-plan';
import {
    handleRequestGetPromotionList,
    runRequestGetPromotionList
} from '../../../../sagas/tasks/promotion';
import reducer from '../../../../reducers/promotion/promotionList';
import * as actions from '../../../../actions/promotion';
// import { promotionList } from '../../../../temporary/data/promotion';

describe('promotion list task', () => {
    it('run handleRequestGetPromotionList', () => {
        return expectSaga(handleRequestGetPromotionList)
            .dispatch(actions.getPromotionList)
            .silentRun();
    });

    it('run runRequestGetPromotionList', () => {
        return expectSaga(runRequestGetPromotionList)
            .withReducer(reducer)
            .run(false)
            .then(res => {
                expect(res.storeState.data[0]).toHaveProperty('promotion_id');
                expect(res.storeState.data[0]).toHaveProperty('name');
                expect(res.storeState.data[0]).toHaveProperty('description');
                expect(res.storeState.data[0]).toHaveProperty('status');
                expect(res.storeState.data[0]).toHaveProperty('created_at');
                expect(res.storeState.data[0]).toHaveProperty('updated_at');
            });
    });
});
