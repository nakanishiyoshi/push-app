import * as React from 'react';
import Head from 'next/head';

import { compose, pure } from 'recompose';

export default compose(pure)(({ title }) => (
    <Head>
        <title>{title}</title>
        <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
        />
    </Head>
));
