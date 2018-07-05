import { SET_PROMOTION_LIST } from '../../constants';

export default (state = { data: [] }, action) => {
    // stateの初期化する
    switch (action.type) {
        case SET_PROMOTION_LIST:
            return Object.assign({}, state, {
                data: action.promotionList
            });
        default:
            return state;
    }
};
