export const validate = () => {
    const errors = {};
    return errors;
};

const ErrorMessages = {
    required: '😡 必須項目です。',
    num: '半角数字(小数不可)で入力して下さい。',
    date: '2018-01-01 の形式で入力してください。',
    minNumber: '数値が少なすぎます。',
    maxNumber: '数値が多すぎます。'
};

const Regex = {
    num: /^[0-9]+$/,
    date: /(\d{4}).?(\d{2}).?(\d{2}).*/
};

export const required = value => (value ? undefined : ErrorMessages.required);

export const zero = text => value =>
    value !== '' ? undefined : `${text}しない場合は0を入力してください。`;

export const date = value =>
    value && !Regex.date.test(value) ? ErrorMessages.date : undefined;

export const num = value =>
    value && !Regex.num.test(value) ? ErrorMessages.num : undefined;

export const minNumber = min => value =>
    value && value < min ? `${min}以上で入力してください。` : undefined;

export const maxNumber = max => value =>
    value && value > max ? `${max}以下で入力してください。` : undefined;

export const minLength = min => value =>
    value && value.length < min
        ? `${min}文字以上で入力してください。`
        : undefined;

export const maxLength = max => value =>
    value && value.length > max
        ? `${max}文字以内で入力してください。`
        : undefined;

export const maxLength255 = maxLength(255);
