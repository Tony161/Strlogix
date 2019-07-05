import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import logonUserAction from '../../modules/auth/actions/logon';
// import getLoginAction from '../../modules/getLogin/actions/get';

import LoginComponent from './components';

class LoginContainer extends React.Component {
  gotoProfile = () => this.props.history.push('/profile');

  render() {
    return (
      <LoginComponent
        onLogonUser={this.props.logonUser}
        auth={this.props.auth}
        gotoProfile={this.gotoProfile}
      />
    );
  }
}

const select = (state, props) => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logonUser: logonUserAction,
      // getLogin: getLoginAction
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(LoginContainer);
