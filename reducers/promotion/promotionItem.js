import { SET_PROMOTION, DELETE_PROMOTION } from '../../constants';

export default (state = {}, action) => {
    // stateの初期化する
    switch (action.type) {
        case SET_PROMOTION:
            return Object.assign({}, state, action.promotionItem);
        case DELETE_PROMOTION:
            return action.promotionItem;
        default:
            return state;
    }
};
