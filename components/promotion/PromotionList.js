import * as React from 'react';
// import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import PromotionItem from './PromotionItem';

const PromotionItemZero = () => (
    <li>まだプロモーションが登録されていません。登録をしてください。</li>
);
const PromotionList = ({ promotionList }) => (
    <ul className="promotion_list">
        {promotionList.data.length > 0 &&
            promotionList.data.map(promotion => (
                <PromotionItem
                    key={promotion.promotion_id}
                    promotion={promotion}
                />
            ))}
        {!promotionList.data.length && <PromotionItemZero />}
    </ul>
);

export default compose(pure)(PromotionList);
