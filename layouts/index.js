import * as React from 'react';
import CostomHead from '../components/common/CustomHead';
import Header from '../components/common/Header';

import { compose, pure } from 'recompose';

const GlobalStyle = () => (
    <style global jsx>{`
        body {
            padding: 0;
            margin: 0;
            background-color: rgba(0, 0, 0, 0.03);
            min-width: 1200px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
            padding: 0;
            margin: 0;
        }
        ul {
            list-style: none;
        }
        a {
            text-decoration: none;
            color: #000;
        }
    `}</style>
);

export default compose(pure)(
    ({ children, title = 'DMM PUSH 通信 管理画面' }) => (
        <div>
            <CostomHead title={title} />
            <GlobalStyle />
            <Header title={title} />
            {children}
        </div>
    )
);
