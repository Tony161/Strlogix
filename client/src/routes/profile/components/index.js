import React from 'react';
import { withRouter } from 'react-router';
import image1 from '../../../images/image1.png';
import s from './style.module.css';
import logo from '../../../images/StreetLogix_Logo_1.png';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    isSubmitted: false,
  };

  getDataProfile = event => {
    var email;
    event.preventDefault();
    this.props.getData(email);
  };

  render() {
    return (
      <div>
        <div className={s.one}>
          <img src={logo} alt="logo" style={{height: '3em'}} />
        </div>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              height: '100vh',
              width: '5em',
              backgroundColor: 'lightblue',
            }}
          />
          <div style={{ display: 'flex', paddingLeft: '20px', paddingTop: '20px' }}>
            <div className="text-center">
              <div style={{ fontSize: '3em' }}>My Profile</div>
              <div style={{backgroundColor: "blue", width:"200px", height:"180px", borderRadius:"50%"}}>      
              <img src={image1} alt="photo" />
              </div>
              <div className="profile-card-name">Vasily</div>
              <button type="button" class="btn btn-rounded">
                Edit My Profile
              </button>
            </div>

            <div
              style={{fontSize: '1.5em',
                paddingLeft: '30px',
                marginTop: '3em',
              }}
            >
              <p><div>First Name</div></p>
              <p><div>Last Name</div></p>
              <p><div>Title</div></p>
              <p><div>Email</div></p>
              <p><div>Role</div></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileComponent);
