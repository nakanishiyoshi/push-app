import * as React from 'react';
import { compose, setStatic } from 'recompose';
import Layout from '../../layouts';
import PromotionRegistContainer from '../../containers/promotion/PromotionRegistContainer';

import { END } from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import store from '../../store/configureStore';

const PromotionRegist = () => (
    <Layout title={'PUSH配信 | プロモーション新規登録'}>
        <PromotionRegistContainer />
    </Layout>
);

export default withRedux(store)(
    compose(
        setStatic('getInitialProps', async ctx => {
            const { store, isServer } = ctx;
            store.dispatch(END);
            await store.sagaTask.done;

            if (!isServer) {
                store.runSagaTask();
            }
        })
    )(PromotionRegist)
);
