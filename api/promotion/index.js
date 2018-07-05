import fetch from 'isomorphic-unfetch';
import { API_FQDN, PROMOTIONS } from '../../constants';

export const getPromotion = promotionId => {
    const URL = `${API_FQDN}/${PROMOTIONS}/${promotionId}`;

    return fetch(URL, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getPromotionList = () => {
    const URL = `${API_FQDN}/${PROMOTIONS}`;

    return fetch(URL, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const postPromotionData = params => {
    const URL = `${API_FQDN}/${PROMOTIONS}`;

    return fetch(URL, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
};

export const putPromotionData = (promotionId, params) => {
    const URL = `${API_FQDN}/${PROMOTIONS}/${promotionId}`;

    return fetch(URL, {
        mode: 'cors',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
};

export const deletePromotion = promotionId => {
    const URL = `${API_FQDN}/${PROMOTIONS}/${promotionId}`;

    return fetch(URL, {
        mode: 'cors',
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
