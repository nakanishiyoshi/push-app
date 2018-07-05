import {
    GET_PROMOTION,
    SET_PROMOTION,
    GET_PROMOTION_LIST,
    SET_PROMOTION_LIST,
    DELETE_PROMOTION,
    POST_PROMOTION_DATA,
    CANCEL_POST_PROMOTION_DATA,
    PUT_PROMOTION_DATA,
    CANCEL_PUT_PROMOTION_DATA
} from '../../constants';

export const getPromotion = () => {
    return {
        type: GET_PROMOTION
    };
};

export const setPromotion = promotion => {
    return {
        type: SET_PROMOTION,
        promotionItem: promotion
    };
};

export const deletePromotion = promotion => {
    return {
        type: DELETE_PROMOTION,
        promotionItem: promotion
    };
};

export const getPromotionList = () => {
    return {
        type: GET_PROMOTION_LIST
    };
};

export const setPromotionList = promotionList => {
    return {
        type: SET_PROMOTION_LIST,
        promotionList: promotionList
    };
};

export const postPromotionRegistData = params => {
    return {
        type: POST_PROMOTION_DATA,
        params: params
    };
};

export const cancelPostPromotionRegistData = () => {
    return {
        type: CANCEL_POST_PROMOTION_DATA
    };
};

export const putPromotionUpdateData = params => {
    return {
        type: PUT_PROMOTION_DATA,
        params: params
    };
};

export const cancelPutPromotionUpdateData = () => {
    return {
        type: CANCEL_PUT_PROMOTION_DATA
    };
};
