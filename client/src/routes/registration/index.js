import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import createUserAction from '../../modules/user/actions/userCreate';

import RegisterComponent from './components';

class RegisterContainer extends React.Component {
  render() {
    return <RegisterComponent
    onRegisterUser={this.props.createUser} />;
  }
}

const select = (state, props) => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createUser: createUserAction,
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(RegisterContainer);
