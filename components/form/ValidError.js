import * as React from 'react';
import css from 'styled-jsx/css';

const validErrorStyle = css`
    .validError {
        color: #9b3257;
    }
`;

const ValidError = ({ error }) => (
    <div className="validError">
        {error}
        <style jsx>{validErrorStyle}</style>
    </div>
);

export default ValidError;
