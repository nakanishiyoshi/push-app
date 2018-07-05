/** promotion */
export const GET_PROMOTION = 'GET_PROMOTION';
export const SET_PROMOTION = 'SET_PROMOTION';
export const DELETE_PROMOTION = 'DELETE_PROMOTION';
export const GET_PROMOTION_LIST = 'GET_PROMOTION_LIST';
export const SET_PROMOTION_LIST = 'SET_PROMOTION_LIST';
export const POST_PROMOTION_DATA = 'POST_PROMOTION_DATA';
export const CANCEL_POST_PROMOTION_DATA = 'CANCEL_POST_PROMOTION_DATA';
export const PUT_PROMOTION_DATA = 'PUT_PROMOTION_DATA';
export const CANCEL_PUT_PROMOTION_DATA = 'CANCEL_PUT_PROMOTION_DATA';

/** api - promotion */
export const PROMOTIONS = 'v2/promotions';

/** environment */
export const API_FQDN =
    process.env.NODE_DEV !== 'production'
        ? 'http://localhost:32100'
        : 'https://notice-admin.dmm.com';
