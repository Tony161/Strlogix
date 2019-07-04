import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import restoreUserAction from '../../modules/user/actions/userRestore';

import RestoreComponent from './components';

class RestoreContainer extends React.Component {
  render() {
    return <RestoreComponent onRestoreUser={this.props.restoreUser} />;
  }
}

const select = (state, props) => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      restoreUser: restoreUserAction,
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(RestoreContainer);
