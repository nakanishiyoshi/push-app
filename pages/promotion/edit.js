import * as React from 'react';
import { compose, setStatic } from 'recompose';
import Layout from '../../layouts';
import PromotionEditContainer from '../../containers/promotion/PromotionEditContainer';

import { END } from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import store from '../../store/configureStore';

const PromotionEdit = () => (
    <Layout title={'PUSH配信 | プロモーション編集'}>
        <PromotionEditContainer />
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
    )(PromotionEdit)
);
