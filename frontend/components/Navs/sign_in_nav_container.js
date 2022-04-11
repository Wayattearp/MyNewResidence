import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import SignInNav from './sign_in_nav';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInNav);
