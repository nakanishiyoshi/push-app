import { connect } from 'react-redux';
import PromotionList from '../../components/promotion/PromotionList';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/promotion';

const mapStateToProps = state => ({
    promotionList: state.promotion.promotionList
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

const PromotionListContainer = connect(mapStateToProps, mapDispatchToProps)(
    PromotionList
);
export default PromotionListContainer;
