import { connect } from 'react-redux';
import PromotionRegist from '../../components/promotion/PromotionRegist';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/promotion';

const mapStateToProps = state => {
    return {
        promotion: state.promotion.promotionItem
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

const PromotionRegistFormContainer = reduxForm({
    form: 'promotionRegist'
})(PromotionRegist);

export default connect(mapStateToProps, mapDispatchToProps)(
    PromotionRegistFormContainer
);
