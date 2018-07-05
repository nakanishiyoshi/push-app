import * as React from 'react';
import ValidError from './ValidError';
import css from 'styled-jsx/css';

const inputFieldStyle = css`
    .label_Title {
        font-size: 20px;
        font-weight: bold;
        color: #ff528f;
    }
    .input_TextFieldBox {
        width: 400px;
        margin-bottom: 30px;
    }
    .input_TextField {
        width: 100%;
        height: 30px;
        font-size: 14px;
    }
`;

const InputField = ({
    input,
    label,
    placeholder,
    type,
    meta: { touched, error }
    // redux-formの仕様、meta propsってのがある
    // touchのtrueはフィールドがタッチされたとき、デフォルトはフィールドがblur(フォーカス外れた)したときに設定
}) => (
    <div>
        <label className="label_Title">{label}</label>
        <div className="input_TextFieldBox">
            <input
                {...input}
                // Fieldコンポーネントの持っている入力の管理値
                // Input Propsがredux-formにある！これはinputタグじゃないよ！
                // const {input, ...} = props
                // props = {input, ... }　使いたいものだけを選ぶかんじよ！
                placeholder={placeholder} // データの受け渡しのpropだよ、変数も入れられるよ、{}で囲む
                type={type}
                className="input_TextField"
            />
            {touched && error && <ValidError error={error} />}
        </div>
        <style jsx>{inputFieldStyle}</style>
    </div>
);

export default InputField;
