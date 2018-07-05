import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import { Link } from '../../routes';

const promotionItemStyle = css`
    .promotion_item {
        position: relative;
        width: 60%;
        height: 280px;
        margin: 30px auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px,
            rgba(0, 0, 0, 0.12) 0px 1px 4px;
    }
    .promotion_title {
        position: absolute;
        top: 20px;
        left: 180px;
        width: 500px;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        font-weight: bold;
        color: #404040;
    }
    .promotion_titleText {
        position: absolute;
        top: 90px;
        left: 180px;
        width: 500px;
        height: 80px;
        line-height: 80px;
        color: #808080;
    }
    .promotion_image {
        position: absolute;
        top: 15px;
        left: 40px;
        width: 100px;
        height: 100px;
        background-color: #fff;
        background-image: linear-gradient(
                45deg,
                #444 25%,
                transparent 25%,
                transparent 75%,
                #444 75%,
                #444
            ),
            linear-gradient(
                -45deg,
                #444 25%,
                transparent 25%,
                transparent 75%,
                #444 75%,
                #444
            );
        background-size: 25px 25px;
        border-radius: 50%;
    }
    .promotion_status {
        position: absolute;
        top: 135px;
        left: 40px;
        width: 100px;
        height: 10px;
        line-height: 10px;
        text-align: center;
        color: gray;
        font-size: 14px;
    }
    .promotion_statusText {
        position: absolute;
        top: 155px;
        left: 40px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #00bcd4;
        border-radius: 2px;
        text-align: center;
        color: #00bcd4;
    }
    .promotion_innerLine {
        width: 100%;
        height: 200px;
        border-bottom: 1px solid #e0e0e0;
    }
    .promotion_scheduleBtn {
        position: absolute;
        top: 200px;
        left: 20px;
        width: 180px;
        height: 40px;
        line-height: 40px;
        margin: 20px;
        background-color: #ff528f;
        border-radius: 2px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px,
            rgba(0, 0, 0, 0.12) 0px 1px 4px;
    }
    .promotion_scheduleBtn:hover {
        opacity: 0.7;
        transition: 0.3s;
        cursor: pointer;
    }
    .promotion_editBtn {
        position: absolute;
        top: 200px;
        right: 20px;
        width: 100px;
        height: 40px;
        line-height: 40px;
        margin: 20px;
        border-radius: 2px;
        text-align: center;
        color: #404040;
        font-size: 18px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px,
            rgba(0, 0, 0, 0.12) 0px 1px 4px;
    }
    .promotion_editBtn:hover {
        background-color: lightgray;
        transition: 0.3s;
        cursor: pointer;
    }
`;

// promotionのAPIを渡している

const PromotionItem = ({ promotion }) => (
    <li>
        <div className="promotion_item">
            <h3 className="promotion_title" data-test="title">
                {promotion.name}
            </h3>
            <p className="promotion_titleText" data-test="titleText">
                {promotion.description}
            </p>
            <div className="promotion_image" data-test="image" />
            <div className="promotion_status" data-test="status">
                {promotion.status}
            </div>
            <div className="promotion_statusText" data-test="statusText">
                {promotion.status === 'active' && '有効'}
                {promotion.status === 'inactive' && '無効'}
            </div>
            <div className="promotion_innerLine" />
            <Link route={`/schedule?promotionId=${promotion.promotion_id}`}>
                <a className="promotion_scheduleBtn" data-test="scheduleBtn">
                    配信設定
                </a>
            </Link>
            <Link
                route={`/promotion/edit?promotionId=${promotion.promotion_id}`}
            >
                <a className="promotion_editBtn" data-test="editBtn">
                    編集
                </a>
            </Link>
        </div>

        <style jsx>{promotionItemStyle}</style>
    </li>
);

export default compose(pure)(PromotionItem);
