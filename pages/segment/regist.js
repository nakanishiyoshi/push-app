import * as React from 'react';
import { compose, setStatic } from 'recompose';
import Layout from '../../layouts';
import NavContainer from '../../containers/common/NavContainer';

import { END } from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import store from '../../store/configureStore';

const SegmentEdit = () => (
    <Layout title={'PUSH配信 | セグメント登録'}>
        <NavContainer />
        <div>セグメント登録</div>
    </Layout>
);

export default withRedux(store)(
    compose(
        setStatic('getInitialProps', async ctx => {
            const { query, store, isServer } = ctx;
            store.dispatch({
                type: 'GET_PROMOTION',
                promotionId: query.promotionId
            });
            store.dispatch(END);
            await store.sagaTask.done;

            if (!isServer) {
                store.runSagaTask();
            }
        })
    )(SegmentEdit)
);
