import React from 'react';
import { withRouter } from 'react-router';
import image1 from '../../../images/image1.png';
import s from './style.module.css';
import logo from '../../../images/StreetLogix_Logo_1.png';

class ProfileComponent extends React.Component {
  state = { isSubmitted: false,
    isVisible: false,
    role: null };

 async componentDidMount() {
   await this.props.getData(this.props.auth.action.email);
   await this.setState({role: this.props.profile.role});
     if( this.state.role === 'admin'){
      this.setState({isVisible: true})
    }

  }

  // editProfile = (firstName, lastName, title) => {
  //   alert('soon');
  //   console.log(this.props.updateData(this.props.auth.action.email));
  // };

  render() {
    const { firstName, lastName, title, email, role } = this.props.profile;
    console.log('1111', this.state.isVisible)
    return (
      <div>
        <div className={s.one}>
          <div>
            <img src={logo} className={s.logo} alt="logo" />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className={s.two} />
          <div className="text-center">
            <div style={{ margin: '2em 0em 0em 2.5em' }}>
              <span className={s.title}>My Profile</span>
              <div className="profile-card">
                <div className={s.image}>
                  <img src={image1} alt="image" />
                </div>
                {!this.state.isVisible && (    <div style={{ marginTop: '30px' }}>
                  <button
                    type="button"
                    className="btn btn-rounded"
                    onClick={this.editProfile}
                  >
                    Edit My Profile
                  </button>
                </div>)}
              </div>
            </div>
          </div>

          <div
            style={{ fontSize: '1.5em', marginLeft: '60px', marginTop: '3em' }}
          >
            <div>First Name: {firstName}</div>
            <div>Last Name: {lastName} </div>
            <div>Title: {title} </div>
            <div>Email: {email} </div>
            <div>Role: {role} </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileComponent);
