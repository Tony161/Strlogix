import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import getAllDataAction from '../../modules/userManagment/actions/getAll';
import updateDataAction from '../../modules/userManagment/actions/update';
import UserManagmentComponent from './components';


// import profileAction from '../../modules/profile/actions/profile';

class UserManagmentContainer extends React.Component {
  render() {
    return (
      <UserManagmentComponent
        updateData={this.props.updateData}
        // auth={this.props.auth}
        // profile={this.props.profile}
        getData={this.props.getData}
        userManagment={this.props.userManagment}
      />
    );
  }
}

const select = (state, props) => ({
  profile: state.profile,
  auth: state.auth,
  userManagment: state.userManagment
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData: getAllDataAction,
      updateData: updateDataAction,
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(UserManagmentContainer);
