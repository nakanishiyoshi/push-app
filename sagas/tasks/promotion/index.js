import { call, put, take, takeEvery } from 'redux-saga/effects';
import * as actions from '../../../actions/promotion';
import { startSubmit, stopSubmit, reset } from 'redux-form';

import * as API from '../../../api/promotion';
import { Router } from '../../../routes';

export function* runRequestGetPromotionList() {
    try {
        const response = yield call(API.getPromotionList);
        if (response.status === 200) {
            const json = yield response.json();
            yield put(actions.setPromotionList(json));
        } else if (response.status === 204) {
            yield put(actions.setPromotionList([]));
        }
    } catch (err) {
        yield console.log(err);
    }
}

export function* handleRequestGetPromotionList() {
    yield takeEvery('GET_PROMOTION_LIST', runRequestGetPromotionList);
}

export function* handleRequestPostPromotionRegistData() {
    while (true) {
        const { params } = yield take('POST_PROMOTION_DATA');
        yield put(startSubmit('promotionRegist'));

        try {
            const response = yield call(API.postPromotionData, params);
            if (response.status === 201) {
                yield put(stopSubmit('promotionRegist'));
                yield put(reset('promotionRegist'));
                Router.pushRoute('/promotion/list');
            }
        } catch (err) {
            yield console.log(err);
            yield put(stopSubmit('promotionRegist'));
            yield put(reset('promotionRegist'));
        }
    }
}

export function* handleCancelPostPromotionRegistData() {
    while (true) {
        yield take('CANCEL_POST_PROMOTION_DATA');
        yield put(reset('promotionRegist'));
        Router.pushRoute('/promotion/list');
    }
}

export function* handleRequestGetPromotion() {
    while (true) {
        const { promotionId } = yield take('GET_PROMOTION');
        try {
            const response = yield call(API.getPromotion, promotionId);
            if (response.status === 200) {
                const json = yield response.json();
                yield put(actions.setPromotion(json));
            } else if (response.status === 204) {
                /** WIP */
            }
        } catch (err) {
            yield console.log(err);
        }
    }
}

export function* handleRequestPutPromotionUpdateData() {
    while (true) {
        const { params } = yield take('PUT_PROMOTION_DATA');
        yield put(startSubmit('promotionEdit'));

        try {
            const response = yield call(
                API.putPromotionData,
                params.promotion_id,
                params
            );
            if (response.status === 200) {
                yield put(stopSubmit('promotionEdit'));
                yield put(reset('promotionEdit'));
                yield put(actions.deletePromotion({}));
                Router.pushRoute('/promotion/list');
            }
        } catch (err) {
            yield console.log(err);
            yield put(stopSubmit('promotionEdit'));
            yield put(reset('promotionEdit'));
        }
    }
}

export function* handleCancelPutPromotionUpdateData() {
    while (true) {
        yield take('CANCEL_PUT_PROMOTION_DATA');
        yield put(reset('promotionEdit'));
        yield put(actions.deletePromotion({}));
        Router.pushRoute('/promotion/list');
    }
}
