import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import invitationUsersAction from '../../modules/invitationUsers/actions/invitation';
import InvitationUsersComponent from './components';

class InvitationUsersContainer extends React.Component {
  gotoProfile = () => this.props.history.push('/profile');
  render() {
    return (
      <InvitationUsersComponent
        invitationUser={this.props.invitationUsers}
        inviteUser={this.props.inviteUser}
      />
    );
  }
}

const select = (state, props) => ({
  inviteUser: state.inviteUser,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
     invitationUsers: invitationUsersAction,
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(InvitationUsersContainer);
