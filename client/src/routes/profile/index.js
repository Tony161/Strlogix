import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import addImageAction from '../../../modules/images/actions/add';
import profileAction from '../../modules/profile/actions/profile';
import ProfileComponent from './components';
// import logoutUserAction from '../../../modules/auth/actions/logout';

class ProfileContainer extends React.Component {
  gotoAddWedding = () => this.props.history.push('/add_wedding');
  gotoLogin = () => this.props.history.push('/login');

  render() {
    return (
      <ProfileComponent
      gotoLogin={this.gotoLogin}
        // onWeddingWizardStep6={this.props.weddingWizardStep6}
        // weddingWizard={this.props.weddingWizard}
        // uuid={this.props.auth.payload.uuid}
        // authToken={this.props.auth.payload.auth_token}
        // addImage={this.props.addImage}
        // onAddWedding={this.gotoAddWedding}
        // logout={this.props.logout}
        // gotoLogin={this.gotoLogin}
        // images={this.props.images}
        // error={this.props.error}
      />
    );
  }
}

const select = (state, props) => ({
  profile: state.profile,
  auth: state.auth,
  // images: state.images,
  // error: state.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      profile: profileAction,

    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(ProfileContainer);
