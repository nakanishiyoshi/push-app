import { compose, withHandlers } from 'recompose';
import PromotionForm from './PromotionForm';

export default compose(
    withHandlers({
        cancelSubmit: props => actions => () => {
            actions.cancelPutPromotionUpdateData();
        },
        customSubmit: props => actions => values => {
            actions.putPromotionUpdateData(values);
        }
    })
)(PromotionForm);
