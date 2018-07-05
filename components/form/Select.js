import * as React from 'react';
import css from 'styled-jsx/css';
import { Field } from 'redux-form';

const selectFieldStyle = css`
    .label_Title {
        font-size: 20px;
        font-weight: bold;
        color: #ff528f;
    }
    .select_Field {
        width: 220px;
        height: 30px;
        margin-bottom: 30px;
        font-size: 14px;
    }
`;

const SelectField = ({ label, component }) => (
    <div>
        <label className="label_Title">{label}</label>
        <div className="select_Field">
            <Field name="timezone" component={component}>
                <option select="true" value="+09:00">
                    (+09:00) Asia/Tokyo
                </option>
                <option value="+00:00">(+00:00) Etc/GMT</option>
                <option value="-05:00">(-05:00) America/New_York</option>
            </Field>
        </div>
        <style jsx>{selectFieldStyle}</style>
    </div>
);

export default SelectField;
