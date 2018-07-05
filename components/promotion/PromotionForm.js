import * as React from 'react';
import css from 'styled-jsx/css';
import { Field } from 'redux-form';
import InputField from '../form/Input';
import SelectField from '../form/Select';

import * as validate from '../../util/validate';

const promotionRegistStyle = css`
    #promotionRegist {
        position: relative;
        width: 690px;
        height: 900px;
        margin: 30px auto;
        padding: 40px 70px 70px 70px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px,
            rgba(0, 0, 0, 0.12) 0px 1px 4px;
    }
    .promotionRegist_SubText {
        color: #a9a9a9;
    }
    .promotionRegist_Title {
        font-size: 20px;
        font-weight: bold;
        color: #ff528f;
    }
    .promotionRegist_TextField {
        width: 400px;
        height: 30px;
        margin-bottom: 30px;
        font-size: 14px;
    }
    .promotionRegist_Timezone {
        width: 220px;
        height: 30px;
        margin-bottom: 30px;
        font-size: 14px;
    }
    .segmentConfirm_attention {
        border-radius: 2px;
        background-color: #f0f0f0;
        width: 500px;
        height: 130px;
        margin-bottom: 60px;
        padding: 30px;
    }
    .segmentConfirm_attention small {
        color: #ff528f;
        font-weight: bold;
        font-size: 18px;
    }
    .promotionRegist_footer {
        width: 280px;
        height: 40px;
        margin: 40px auto 10px auto;
        padding-left: 0px;
        color: gray;
    }
    .promotionRegist_footer li {
        float: left;
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 3px;
    }
    .promotionRegist_footer li button {
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 3px;
    }
    .promotionRegist_footer .next {
        background-color: #00bcd4;
        color: #fff;
        margin-left: 40px;
    }
    .promotionRegist_footer .next:hover {
        opacity: 0.7;
        cursor: pointer;
        transition: 0.3s;
    }
    .promotionRegist_footer .next:disabled {
        background-color: #006977;
        color: #acacac;
        cursor: not-allowed;
    }
    .promotionRegist_footer .back:hover {
        background-color: #eaeaea;
        cursor: pointer;
        transition: 0.3s;
    }
`;

const PromotionForm = ({
    // すでにstateがpropsがすでに渡っている
    promotion,
    actions,
    cancelSubmit,
    handleSubmit,
    customSubmit,
    invalid,
    submitting,
    pristine,
    reset,
    error
}) => (
    <form onSubmit={handleSubmit(customSubmit(actions))}>
        <div id="promotionRegist">
            <div>
                <label htmlFor="name" className="promotionRegist_Title">
                    画像アイコン
                </label>
                <p className="promotionRegist_SubText">
                    まだ機能実装されていません。お待ち下さい。
                </p>
            </div>
            {promotion.promotion_id && (
                <div>プロモーションID: {promotion.promotion_id}</div>
            )}
            <Field
                name="name"
                type="text"
                component={InputField}
                label="プロモーション名"
                placeholder="プロモーション名を入力してください"
                validate={[validate.required, validate.maxLength255]}
            />
            <Field
                name="description"
                type="text"
                component={InputField}
                label="プロモーションの説明"
                placeholder="プロモーションの説明を入力してください"
                validate={[validate.required, validate.maxLength255]}
            />
            <SelectField label="タイムゾーン" component="select" />
            <div>
                <label htmlFor="name" className="promotionRegist_Title">
                    APNs Key
                </label>
                <p className="promotionRegist_SubText">
                    まだ機能実装されていません。お待ち下さい。
                </p>
            </div>
            <div>
                <label htmlFor="name" className="promotionRegist_Title">
                    FCM Key
                </label>
                <p className="promotionRegist_SubText">
                    まだ機能実装されていません。お待ち下さい。
                </p>
            </div>
            <div className="segmentConfirm_attention">
                <small>APNs Keyについて</small>
                <p>APNs Key説明が入ります。</p>
                <br />
                <small>FCM Keyについて</small>
                <p>FCM Keyの説明が入ります。</p>
            </div>
            <ul className="promotionRegist_footer">
                <li>
                    <button
                        className="back"
                        type="button"
                        disabled={submitting}
                        onClick={cancelSubmit(actions)}
                    >
                        キャンセル
                    </button>
                </li>
                <li>
                    <button
                        className="next"
                        type="submit"
                        disabled={invalid || submitting}
                    >
                        登録する
                    </button>
                </li>
            </ul>
            {error && (
                <div>
                    <strong>{error}</strong>
                </div>
            )}
            {submitting && (
                <div>
                    <strong>登録中</strong>
                </div>
            )}
            <style jsx>{promotionRegistStyle}</style>
        </div>
    </form>
);

export default PromotionForm;
