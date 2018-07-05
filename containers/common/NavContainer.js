import { connect } from 'react-redux';
import Nav from '../../components/common/Nav';

const mapStateToProps = state => ({
    promotion: state.promotion.promotionItem
});

const NavContainer = connect(mapStateToProps, null)(Nav);
export default NavContainer;
