import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import { Link } from '../../routes';

const headerStyle = css`
    #header {
        position: relative;
        width: 100%;
        height: 60px;
        line-height: 60px;

        background-color: #fff;
        box-shadow: rgb(170, 170, 170) 0px 1px 4px;
    }
    .promotion_registBtn {
        position: absolute;
        top: 12px;
        right: 315px;
        width: 160px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        background-color: #ff528f;
        border-radius: 2px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px,
            rgba(0, 0, 0, 0.12) 0px 1px 4px;
    }
    .promotion_registBtn small {
        color: #fff;
        font-size: 14px;
    }
    .promotion_registBtn:hover {
        opacity: 0.7;
        cursor: pointer;
        transition: 0.3s;
    }
    .promotion_logoutBtn {
        position: absolute;
        top: 12px;
        right: 130px;
        width: 160px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px,
            rgba(0, 0, 0, 0.12) 0px 1px 4px;
    }
    .promotion_logoutBtn small {
        color: #404040;
        font-size: 14px;
    }
    .promotion_logoutBtn:hover {
        background-color: lightgray;
        cursor: pointer;
        transition: 0.3s;
    }
`;

export default compose(pure)(({ title }) => (
    <header>
        <div id="header">
            <Link route="/promotion/regist">
                <a className="promotion_registBtn">
                    <small>プロモーション登録</small>
                </a>
            </Link>
            <Link route="/">
                <a className="promotion_logoutBtn">
                    <small>ログアウト</small>
                </a>
            </Link>
        </div>
        <style jsx>{headerStyle}</style>
    </header>
));
