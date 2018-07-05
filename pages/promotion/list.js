import * as React from 'react';
import { compose, setStatic, pure } from 'recompose';
import Layout from '../../layouts';
import PromotionListContainer from '../../containers/promotion/PromotionListContainer';

import { GET_PROMOTION_LIST } from '../../constants';
import { END } from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import store from '../../store/configureStore';

const PromotionList = () => (
    <Layout title={'PUSH配信 | プロモーション一覧'}>
        <PromotionListContainer />
    </Layout>
);

export default withRedux(store)(
    compose(
        setStatic('getInitialProps', async ctx => {
            const { store, isServer } = ctx; // storeとisServerを取り出す
            store.dispatch({ type: GET_PROMOTION_LIST });
            store.dispatch(END); // クライアントとバックで処理違うのを怒られるか？タスク走ったら一旦終わりにして、次の処理タスクを走らせる
            await store.sagaTask.done;

            if (!isServer) {
                store.runSagaTask();
            }
        }),
        pure
    )(PromotionList)
);
