import React from 'react';
import { withRouter } from 'react-router';
import image1 from '../../../images/image1.png';
import s from './style.module.css';
import logo from '../../../images/StreetLogix_Logo_1.png';

class ProfileComponent extends React.Component {


  state = {

    isSubmitted: false,
  };


  // componentDidMount = () => {
  //   this.props.getData(this.props.auth.action.email )
  // }

  editProfile = (firstName,lastName,title) => {
    this.props.updateData(firstName,lastName,title);

  }

  render() {
    return (
      <div >
      <div className={s.one}><img src={logo} style={{height: "3em"}} alt='logo' /></div>
        <div style={{display: "flex"}}>
         <div style={{height: "100vh", width: "5em", backgroundColor: "lightblue"}}></div>
          <div style={{ display:"flex", paddingLeft: "20px", paddingTop: "20px"}}>

           <div className="text-center">
            <div style={{fontSize: "3em"}}>My profile</div>

             <img src={image1} alt="photoalt" />

							<div className="profile-card-name">Vasily</div>
							  <button type="button" className="btn btn-rounded">Edit My Profile</button>
							</div>

              
              
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



    );
  }
}

export default withRouter(ProfileComponent);
