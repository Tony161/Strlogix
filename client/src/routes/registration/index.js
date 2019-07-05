import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import createUserAction from '../../modules/user/actions/userCreate';
import RegisterComponent from './components';

class RegisterContainer extends React.Component {
  gotoProfile = () => this.props.history.push('/profile');
  render() {
    return <RegisterComponent
    onRegisterUser={this.props.createUser}
    gotoProfile={this.gotoProfile}
    userCreation={this.props.user.creation}/>;
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
