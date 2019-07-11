import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ResetPasswordAction from '../../modules/user/actions/resetPassword';

import ResetPasswordComponent from './components';

class ResetPasswordContainer extends React.Component {
  gotoLogin = () => this.props.history.push('/login');
  render() {
    return <ResetPasswordComponent
    onResetPasswordUser={this.props.resetPasswordUser}
    gotoLogin={this.gotoLogin} />;
  }
}

const select = (state, props) => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      resetPasswordUser: ResetPasswordAction,
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(ResetPasswordContainer);
