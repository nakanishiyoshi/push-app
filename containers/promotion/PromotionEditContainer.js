import { connect } from 'react-redux';
import PromotionEdit from '../../components/promotion/PromotionEdit';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/promotion';

const mapStateToProps = state => {
    return {
        initialValues: state.promotion.promotionItem, // 初期表示のためのもの、マウントしたい値を追加
        promotion: state.promotion.promotionItem
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

const PromotionEditFormContainer = reduxForm({
    // reduxFormが持っているpropsをマウントしてあげる必要があるから！！
    form: 'promotionEdit',
    enableReinitialize: true // 初期化表示を使う
})(PromotionEdit); //マウントしたいコンポーネント
export default connect(mapStateToProps, mapDispatchToProps)(
    PromotionEditFormContainer
);
