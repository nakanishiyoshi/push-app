import { fork } from 'redux-saga/effects';
import {
    handleRequestGetPromotionList,
    handleRequestPostPromotionRegistData,
    handleCancelPostPromotionRegistData,
    handleRequestGetPromotion,
    handleRequestPutPromotionUpdateData,
    handleCancelPutPromotionUpdateData
} from './tasks/promotion';

export default function* rootSaga() {
    yield fork(handleRequestGetPromotionList);
    yield fork(handleRequestPostPromotionRegistData);
    yield fork(handleCancelPostPromotionRegistData);
    yield fork(handleRequestGetPromotion);
    yield fork(handleRequestPutPromotionUpdateData);
    yield fork(handleCancelPutPromotionUpdateData);
}
