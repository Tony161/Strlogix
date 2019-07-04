import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import logonUserAction from '../../modules/auth/actions/logon';
// import getLoginAction from '../../modules/getLogin/actions/get';

import LoginComponent from './components';

class LoginContainer extends React.Component {
  gotoAddWedding = () => this.props.history.push('/add_wedding');

  render() {
    return (
      <LoginComponent
        onLogonUser={this.props.logonUser}
        auth={this.props.auth}
        // getLogin={this.props.getLogin}
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
