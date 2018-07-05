import { compose, withHandlers } from 'recompose';
import PromotionForm from './PromotionForm';

export default compose(
    withHandlers({
        cancelSubmit: props => actions => () => {
            actions.cancelPostPromotionRegistData();
        },
        customSubmit: props => actions => values => {
            actions.postPromotionRegistData(values);
        }
    })
)(PromotionForm);

// 呼び出すactionが登録と編集で違うから、ファイルを分けているんだよ
// 高階関数だよ
