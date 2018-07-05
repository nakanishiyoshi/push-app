import { promotionList } from '../../../temporary/data/promotion';

export function getPromotionList() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                data: promotionList.data
            });
        }, Math.random * 3000);
    });
}
